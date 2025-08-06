import mongoose, { Schema } from "mongoose";
import type { IPlaylist } from "../types/models/IPlaylist";

const playlistSchema = new Schema<IPlaylist>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    videos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Playlist = mongoose.model<IPlaylist>("Playlist", playlistSchema);
