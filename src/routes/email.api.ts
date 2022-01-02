/* eslint-disable @typescript-eslint/no-var-requires */

import { sendDynamicEmail } from '../utils/email';

import express from 'express';
import errorHandler from './error';

const router = express.Router();

router.post('/', async (req, res) => {
  const { to, url } = req.body;
  const msg = {
    to: to,
    from: 'dbarra@seas.upenn.edu',
    templateId: 'd-58af86acaaa34420b914a074c56e9c23',
    dynamic_template_data: {
      url: `<a href='${url}'>${url}</a>`,
    },
  };
  sendDynamicEmail(msg)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      errorHandler(res, err.message);
    });
});

export default router;
