import mongoose, { Schema } from "mongoose";
import type { IComment } from "../types/models/IComment";

const commentSchema = new Schema<IComment>(
  {
    content: {
      type: String,
      required: true,
    },
    targetType: {
      type: String,
      enum: ["Video", "Community"],
      required: true,
    },
    targetId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Comment = mongoose.model<IComment>("Comment", commentSchema);
