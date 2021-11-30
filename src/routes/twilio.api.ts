import express from 'express';
import auth from '../middleware/auth';
import errorHandler from './error';
import { Message, IMessage } from '../models/message.model';

const twilio = require('twilio');

const accountSid = 'AC378e250f292f5825ca224d55a9fb0bf9';
const authToken = '7adedf4fbe26085309b26f19709595cc';
const client = new twilio(accountSid, authToken);

client.messages
  .create(
    new Message({
      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
      from: '+17404869699',
      to: '+14086637543',
    })
  )
  .then((message) => console.log(message));
