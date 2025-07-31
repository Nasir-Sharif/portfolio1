// server/emailTemplate.js
function generateThankYouTemplate(name) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>...</head>
    <body>
      <div class="email-wrapper">
        <div class="header">
          <h1>Thank You for Reaching Out!</h1>
        </div>
        <div class="content">
          <p>Hi ${name},</p>
          <p>Thank you for contacting me...</p>
          <p>Warm regards,<br><strong>Nasir Sharif</strong></p>
        </div>
        <div class="footer">© 2025 Nasir Sharif</div>
      </div>
    </body>
    </html>
  `;
}

module.exports = generateThankYouTemplate;
