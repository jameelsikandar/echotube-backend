import mongoose, { Schema } from "mongoose";
import type { ILike } from "../types/models/ILike";

const likeSchema = new Schema<ILike>(
  {
    targetType: {
      type: String,
      enum: ["Video", "Community", "Comment"],
      required: true,
    },
    targetId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    likedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Like = mongoose.model<ILike>("Like", likeSchema);
