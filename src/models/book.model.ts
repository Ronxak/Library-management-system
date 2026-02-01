import mongoose, { Schema, Document } from "mongoose";

export interface IBook extends Document {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  availableCopies: number;
}

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    isbn: { type: String, required: true, unique: true },
    availableCopies: { type: Number, default: 1, min: 0 },
  },
  { timestamps: true }
);

export default mongoose.model<IBook>("Book", bookSchema);
