// server/server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const generateThankYouTemplate = require('./emailTemplate');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send', async (req, res) => {
  const { form_name, from_email, message } = req.body;

  // Configure mail transporter
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'nasirsharifqasoori786@gmail.com',        // 🔐 your Gmail
      pass: 'llrnqpeedbejqfuh',     // 📌 Gmail App Password
    },
  });

  try {
    // 1. Send email to **yourself**
    await transporter.sendMail({
      from: from_email,
      to: 'nasirsharifqasoori786@gmail.com',
      subject: `New message from ${form_name}`,
      text: message,
    });

    // 2. Send **thank you email** to the **user**
    await transporter.sendMail({
      from: 'nasirsharifqasoori786@gmail.com',
      to: from_email,
      subject: 'Thank you for contacting Nasir Sharif!',
      html: generateThankYouTemplate(form_name),
    });

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send emails' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
