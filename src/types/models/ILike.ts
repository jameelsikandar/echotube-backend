import { Document, Types } from "mongoose";

export interface ILike extends Document {
  targetType: "Comment" | "Video" | "Community";
  targetId: Types.ObjectId;
  likedBy: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
