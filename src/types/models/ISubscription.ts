import { Document, Types } from "mongoose";

export interface ISubscripition extends Document {
  subscriber: Types.ObjectId;
  channel: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
