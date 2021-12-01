import express from 'express';
import errorHandler from './error';

require('dotenv').config()

const nodemailer = require('nodemailer');

const router = express.Router();

router.get('/email', (req, res) => {
  console.log("Posting");
  sendMail();
});

function sendMail() {
  console.log("Sending Mail");
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });

  let mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: process.env.MAIL_USERNAME2,
    subject: 'ProjectChecker - Website Is Down',
    text: 'This is a test returned with a status of blank yet again'
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      
    }
  });

}

export default router;