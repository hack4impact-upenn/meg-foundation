const { Schema } = mongoose;

interface IMessage extends mongoose.Document {
  to: string;
  from: string;
  body: string;
}

const MessageSchema = new Schema({
  to: { type: String, required: true },
  from: { type: String, required: true },
  body: { type: String, required: true },
});

const Message = mongoose.model<IMessage>('Card', MessageSchema);

export { Message, IMessage };
