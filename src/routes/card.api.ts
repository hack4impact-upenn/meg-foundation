import express from 'express';
import { hash, compare } from 'bcrypt';
import { Card, ICard } from '../models/card.model';
import auth from '../middleware/auth';
import errorHandler from './error';
import {
  generateAccessToken,
  generateRefreshToken,
  validateRefreshToken,
} from './user.util';

const router = express.Router();

/* create a new card*/
router.post('/create', async (req, res) => {
  const { title } = req.body;
  const { cardContent } = req.body;
  const { planContent } = req.body;
  const { imageLink } = req.body;

  if (await Card.findOne({ title })) {
    return errorHandler(res, 'Card already exists.');
  }

  const newCard = new Card({
    title: title,
    cardContent: cardContent,
    planContent: planContent,
    imageLink: imageLink,
  });

  return newCard
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch((e) => errorHandler(res, e.message));
});

/* fetch card info */
router.get('/:title', async (req, res) => {
  const { title } = req.params;
  try {
    const org = await Card.findOne({ title });
    res.status(200).json({ success: true, data: org });
  } catch {
    res.status(400).json({ success: false, message: 'unknown error' });
  }
});

/* update an individual card */
router.put('/:title', async (req, res) => {
  const { title } = req.params;
  const card = await Card.findOne({ title });

  if (!card) return errorHandler(res, 'Card does not exist.');

  if (req.hasOwnProperty('title')) {
    const { title } = req.body;
    card.title = title;
  }
  if (req.hasOwnProperty('cardContent')) {
    const { cardContent } = req.body;
    card.cardContent = cardContent;
  }
  if (req.hasOwnProperty('planContent')) {
    const { planContent } = req.body;
    card.planContent = planContent;
  }
  if (req.hasOwnProperty('imageLink')) {
    const { imageLink } = req.body;
    card.imageLink = imageLink;
  }

  return card
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch((e) => errorHandler(res, e.message));
});

/* delete individual card */
router.delete('/:title', (req, res) => {
  const { title } = req.params;

  return Card.deleteOne({ title })
    .then((card) => {
      if (!card) return errorHandler(res, 'Card does not exist.');

      return res.status(200).json({ success: true });
    })
    .catch((err) => errorHandler(res, err.message));
});

/* fetch all cards in database */
router.get('/', (_, res) => {
  Card.find({})
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((e) => errorHandler(res, e));
});

/* delete all cards in database */
router.delete('/', (_, res) => {
  Card.deleteMany({})
    .then(() => res.status(200).json({ success: true }))
    .catch((e) => errorHandler(res, e));
});

/* 
 //protected: get my info 
router.get('/me', auth, (req, res) => {
    const { userId } = req;
  
    return User.findById(userId)
      .select('firstName lastName email _id')
      .then((user) => {
        if (!user) return errorHandler(res, 'User does not exist.');
  
        return res.status(200).json({ success: true, data: user });
      })
      .catch((err) => errorHandler(res, err.message));
  });
  
  // TESTING ENDPOINTS BELOW (DELETE IN PRODUCTION) 
  // fetch all users in database 
  router.get('/', (_, res) => {
    Card.find({})
      .then((result) => res.status(200).json({ success: true, result }))
      .catch((e) => errorHandler(res, e));
  });
  
  // delete all users in database 
  router.delete('/', (_, res) => {
    User.deleteMany({})
      .then(() => res.status(200).json({ success: true }))
      .catch((e) => errorHandler(res, e));
  });

*/

export default router;
