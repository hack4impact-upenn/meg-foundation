import express from 'express';
import { Card, ICard } from '../models/card.model';
import errorHandler from './error';

const router = express.Router();

/* create a new card*/
router.post('/create', async (req, res) => {
  const { title, cardContent, planContent, imageLink } = req.body;

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
router.get('/:title', (req, res) => {
  const { title } = req.params;
  Card.findOne({ title })
    .then((card) => {
      if (!card) return errorHandler(res, 'Card does not exist.');
      res.status(200).json({ success: true, data: card });
    })
    .catch((err) => errorHandler(res, err.message));
});

/* update an individual card */
router.put('/:title', async (req, res) => {
  const { title } = req.params;
  interface updatesObject {
    [key: string]: string;
  }
  const updates: updatesObject = {};

  if (Object.prototype.hasOwnProperty.call(req.body, 'title')) {
    const { newTitle } = req.body;
    updates.title = newTitle;
  }

  if (Object.prototype.hasOwnProperty.call(req.body, 'cardContent')) {
    const { cardContent } = req.body;
    updates.cardContent = cardContent;
  }
  if (Object.prototype.hasOwnProperty.call(req.body, 'planContent')) {
    const { planContent } = req.body;
    updates.planContent = planContent;
  }
  if (Object.prototype.hasOwnProperty.call(req.body, 'imageLink')) {
    const { imageLink } = req.body;
    updates.imageLink = imageLink;
  }

  return Card.findOneAndUpdate({ title }, updates)
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

export default router;
