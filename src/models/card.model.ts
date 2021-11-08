import mongoose from 'mongoose';

const { Schema } = mongoose;

interface ICard extends mongoose.Document {
  _id: string;
  title: string;
  cardContent: string;
  planContent: string;
  imageLink: string;
}

const CardSchema = new Schema({
  title: { type: String, required: true },
  cardContent: { type: String, required: true },
  planContent: { type: String, required: true },
  imageLink: { type: String, required: true },
});

const Card = mongoose.model<ICard>('Card', CardSchema);

export { Card, ICard };
