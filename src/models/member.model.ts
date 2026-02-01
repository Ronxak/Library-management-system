import mongoose, { Schema, Document } from "mongoose";

export interface IMember extends Document {
  name: string;
  email: string;
}

const memberSchema = new Schema<IMember>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default mongoose.model<IMember>("Member", memberSchema);
