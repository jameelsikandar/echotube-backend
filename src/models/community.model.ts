import mongoose, { Schema } from "mongoose";
import type { ICommunity } from "../types/models/ICommunity";

const communitySchema = new Schema<ICommunity>(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Community = mongoose.model<ICommunity>(
  "Community",
  communitySchema
);
