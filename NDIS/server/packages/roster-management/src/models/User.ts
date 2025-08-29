import mongoose, { Schema, Document } from 'mongoose';
import { uuidv4 } from '../utils/guid';

export interface IUser extends Document {
  userId: string;
  name: string;
  email: string;
  role: string;
  contact?: {
    phone?: string;
    address?: string;
  };
  active?: boolean;
  skills?: string[];
  availability?: Array<{
    day: string;
    startTime: string;
    endTime: string;
  }>;
}

const UserSchema: Schema = new Schema({
  userId: { type: String, default: uuidv4, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  contact: {
    phone: String,
    address: String
  },
  active: Boolean,
  skills: [String],
  availability: [
    {
      day: String,
      startTime: String,
      endTime: String
    }
  ]
}, { timestamps: true });

export default mongoose.model<IUser>('User', UserSchema);
