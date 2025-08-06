import { Document, Types } from "mongoose";

export interface IVideo extends Document {
  title: string;
  description: string;
  thumbnail: string;
  duration?: number;
  views: number;
  videoFile: string;
  isPublished: boolean;
  owner: Types.ObjectId;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
