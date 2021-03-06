import express from 'express';
import path from 'path';
import cors from 'cors';
import userRouter from '../routes/user.api';
import cardRouter from '../routes/card.api';
import twilioRouter from '../routes/twilio.api';
import emailRouter from '../routes/email.api';

const createServer = (): express.Express => {
  const app = express();
  app.set('port', process.env.PORT || 5000);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  // API Routes
  app.use('/api/users', userRouter);
  app.use('/api/card', cardRouter);
  app.use('/api/twilio', twilioRouter);
  app.use('/api/email', emailRouter);

  // Serving static files
  if (process.env.NODE_ENV === 'production') {
    const root = path.join(__dirname, '..', 'client', 'build');

    app.use(express.static(root));
    app.get('*', (_, res) => {
      res.sendFile('index.html', { root });
    });
  }

  return app;
};

export default createServer;
