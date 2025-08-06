import { Document, Types } from "mongoose";

export interface ICommunity extends Document {
  owner: Types.ObjectId;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
