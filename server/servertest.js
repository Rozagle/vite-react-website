const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "hellooooo server" });
});

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.error("Error configuring email service:", error);
  } else {
    console.log("Email service ready to send messages");
  }
});

app.post("/api/contact", (req, res) => {
  const { firstName, comName, email, message } = req.body;

  if (!firstName || !comName || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const mail = {
    from: `"${firstName}" <${email}>`,
    to: process.env.EMAIL_USER,
    bcc: "roza.allafi@siyeso.com",
    subject: `İş İletişimi: ${comName} - İletişim Talebi`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
              body {
                  font-family: Arial, sans-serif;
                  color: #333;
                  margin: 0;
                  padding: 0;
                  background-color: #f9f9f9;
              }
              .container {
                  width: 80%;
                  margin: auto;
                  background: #ffffff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0,0,0,0.1);
              }
              h2 {
                  color: #007bff;
              }
              p {
                  font-size: 16px;
                  line-height: 1.5;
                  margin: 0 0 10px;
              }
              .footer {
                  font-size: 14px;
                  color: #777;
                  text-align: left;
                  margin-top: 20px;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <h2>İletişim Formu Gönderimi</h2>
              <p><strong>İsim: </strong> ${firstName}</p>
              <p><strong>Email: </strong> ${email}</p>
              <p><strong>Mesaj:</strong>  ${message}</p>
              <p><strong>Şirket Adı: </strong> ${comName}</p>
              <div class="footer">
                  <p>siyeso yazılım</p>
              </div>
          </div>
      </body>
      </html>
    `,
  };

  const mailToUser = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Thank you for contacting us, ${firstName}!`,
    html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    font-family: Arial, sans-serif;
                    color: #333;
                    margin: 0;
                    padding: 0;
                    background-color: #f9f9f9;
                }
                .container {
                    width: 80%;
                    margin: auto;
                    background: #ffffff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                }
                h2 {
                    color: #007bff;
                }
                p {
                    font-size: 16px;
                    line-height: 1.5;
                    margin: 0 0 10px;
                }
                .footer {
                    font-size: 14px;
                    color: #777;
                    text-align: left;
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Thank You for Contacting Us!</h2>
                <p>Dear ${firstName},</p>
                <p>Thank you for reaching out to us. We have received your message and will get back to you within 24 hours.</p>
                <p>Best regards,</p>
                <p>siyeso yazılım</p>
                <div class="footer">
                    <p>This is an automated response. Please do not reply to this email.</p>
                </div>
            </div>
        </body>
        </html>
      `,
  };

  contactEmail.sendMail(mail, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: error.message });
    } else {
      console.log("Email sent successfully:", info.response);
      return res
        .status(200)
        .json({ status: "Message sent", info: info.response });
    }
  });

  contactEmail.sendMail(mailToUser, (error, info) => {
    if (error) {
      console.error("Error sending confirmation email to user:", error);
      return res.status(500).json({ error: error.message });
    } else {
      console.log("Confirmation email sent successfully:", info.response);
      return res
        .status(200)
        .json({ status: "Messages sent", info: info.response });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
