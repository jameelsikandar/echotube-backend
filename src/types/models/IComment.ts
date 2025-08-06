import { Document, Types } from "mongoose";

export interface IComment extends Document {
  content: string;
  createdAt: Date;
  updatedAt: Date;
  targetType: "Video" | "Community";
  targetId: Types.ObjectId;
  owner: Types.ObjectId;
}
