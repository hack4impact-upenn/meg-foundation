const express = require('express');
const { Message, IMessage } = require('../models/message.model.ts');

const twilio = require('twilio');
const router = express.Router();

const accountSid = 'AC378e250f292f5825ca224d55a9fb0bf9';
const authToken = '7adedf4fbe26085309b26f19709595cc';
const client = new twilio(accountSid, authToken);

router.post('/sendMessage', function (req, res) {
  const content = req.body.content;
  const sender = req.body.sender;
  const recipient = req.body.recipient;

  twilio.messages.create({
    body: content,
    from: sender,
    to: recipient,
  });

  const outgoingMessage = new Message({
    body: content,
    from: sender,
    to: recipient,
  });

  outgoingMessage.save().then(() => {
    res.status(200).send({
      success: true,
      msg: outgoingMessage,
    });
  });
});

/**
 * client.messages
  .create(
    new Message({
      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
      from: '+17404869699',
      to: '+14086637543',
    })
  )
  .then((message) => console.log(message));
 */
