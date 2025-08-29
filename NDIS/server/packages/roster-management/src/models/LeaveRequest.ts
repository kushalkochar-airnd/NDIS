import mongoose, { Schema, Document } from 'mongoose';
import { uuidv4 } from '../utils/guid';

export interface ILeaveRequest extends Document {
  leaveRequestId: string;
  startDate: string;
  endDate: string;
  type: string;
  status?: string;
  reason?: string;
}

const LeaveRequestSchema: Schema = new Schema({
  leaveRequestId: { type: String, default: uuidv4, unique: true },
  userId: { type: String, default: uuidv4, unique: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  type: { type: String, required: true },
  status: String,
  reason: String
}, { timestamps: true });

export default mongoose.model<ILeaveRequest>('LeaveRequest', LeaveRequestSchema);
