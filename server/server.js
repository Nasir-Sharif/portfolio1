// server/server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const generateThankYouTemplate = require('./emailTemplate');

dotenv.config(); // Load env vars from .env

const app = express();

// Middlewares
app.use(cors({
  origin: ['https://your-portfolio-url.vercel.app'], // ✅ Set to your deployed frontend domain
  methods: ['POST'],
  credentials: true,
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API route
app.post('/send', async (req, res) => {
  const { form_name, from_email, message } = req.body;

  // ✅ Input Validation
  if (!form_name || !from_email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USERNAME, // from .env
        pass: process.env.EMAIL_APP_PASSWORD, // from .env (App Password)
      },
    });

    // Send email to yourself
    await transporter.sendMail({
      from: from_email,
      to: process.env.EMAIL_USERNAME,
      subject: `New message from ${form_name}`,
      text: message,
    });

    // Auto-reply to user
    await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: from_email,
      subject: 'Thank you for contacting Nasir Sharif!',
      html: generateThankYouTemplate(form_name),
    });

    res.status(200).json({ message: 'Emails sent successfully' });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`📡 Server running on port ${PORT}`));
