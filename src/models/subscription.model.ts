import mongoose, { Schema } from "mongoose";
import type { ISubscripition } from "../types/models/ISubscription";

const subscriptionSchema = new Schema<ISubscripition>(
  {
    subscriber: {
      // user who subscribes to another user
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    channel: {
      // user being subscribed to
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Subscription = mongoose.model<ISubscripition>(
  "Subscription",
  subscriptionSchema
);
