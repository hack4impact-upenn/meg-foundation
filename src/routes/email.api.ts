/* eslint-disable @typescript-eslint/no-var-requires */
import { Console } from 'console';
import express from 'express';
import errorHandler from './error';

require('dotenv').config();

const nodemailer = require('nodemailer');

const router = express.Router();

router.post('/', async (req, res) => {
  const { targetEmail } = req.body;
  sendMail(targetEmail)
    .then(() => res.sendStatus(200))
    .catch((e) => errorHandler(res, e.message));
});

async function sendMail(targetEmail: string) {
  console.log('Sending Mail');
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: targetEmail,
    subject: 'Meg Foundation - PDF',
    text: 'This is a placeholder for the PDF. Just squint really hard.',
  };

  return transporter.sendMail(mailOptions);
}

export default router;
