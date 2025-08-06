import { Document, Types } from "mongoose";

export interface IUser extends Document {
  username: string;
  fullName: string;
  email: string;
  avatar: string;
  coverImage: string;
  watchHistory: Types.ObjectId[];
  password: string;
  refreshToken: string | null;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  comparePassword(candidatePassword: string): Promise<boolean>;
}
