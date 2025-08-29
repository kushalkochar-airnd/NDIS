import mongoose, { Schema, Document } from 'mongoose';
import { uuidv4 } from '../utils/guid';

export interface IShift extends Document {
  shiftId: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  assignedTo?: mongoose.Types.ObjectId;
  status?: string;
  shiftType?: string;
  requiredSkills?: string[];
  notes?: string;
}

const ShiftSchema: Schema = new Schema({
  shiftId: { type: String, default: uuidv4, unique: true },
  date: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  location: { type: String, required: true },
  assignedTo: { type: Schema.Types.ObjectId, ref: 'User' },
  status: String,
  shiftType: String,
  requiredSkills: [String],
  notes: String
}, { timestamps: true });

export default mongoose.model<IShift>('Shift', ShiftSchema);
