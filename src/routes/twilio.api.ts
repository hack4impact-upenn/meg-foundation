import express from 'express';
import errorHandler from './error';
// import auth from '../middleware/auth';
// import { Message, IMessage } from '../models/message.model';

const router = express.Router();
import twilio from 'twilio';

router.post('/sendMessage', async (req, res) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = twilio(accountSid, authToken);

  const { content, recipient } = req.body;

  client.messages
    .create({
      body: content,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: recipient,
    })
    .then((outgoingMessage: any) => {
      res.status(200).send({
        success: true,
        msg: outgoingMessage,
      });
    })
    .catch((err: any) => errorHandler(res, err.message));
});

export default router;
