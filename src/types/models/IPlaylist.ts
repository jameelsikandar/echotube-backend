import { Document, Types } from "mongoose";

export interface IPlaylist extends Document {
  name: string;
  description?: string;
  videos: Types.ObjectId[];
  owner: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
