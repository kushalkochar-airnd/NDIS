import mongoose, { Schema, Document } from 'mongoose';
import { uuidv4 } from '../utils/guid';

export interface ILocation extends Document {
  locationId: string;
  name: string;
  address: string;
  capacity?: number;
}

const LocationSchema: Schema = new Schema({
  locationId: { type: String, default: uuidv4, unique: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  capacity: Number
}, { timestamps: true });

export default mongoose.model<ILocation>('Location', LocationSchema);
