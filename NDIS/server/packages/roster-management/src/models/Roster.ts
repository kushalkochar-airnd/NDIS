import mongoose, { Schema, Document } from 'mongoose';
import { uuidv4 } from '../utils/guid';

export interface IRoster extends Document {
  rosterId: string;
  weekStart: string;
  weekEnd: string;
  shifts?: mongoose.Types.ObjectId[];
  createdBy?: mongoose.Types.ObjectId;
  published?: boolean;
}

const RosterSchema: Schema = new Schema({
  rosterId: { type: String, default: uuidv4, unique: true },
  weekStart: { type: String, required: true },
  weekEnd: { type: String, required: true },
  shifts: [{ type: Schema.Types.ObjectId, ref: 'Shift' }],
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  published: Boolean
}, { timestamps: true });

export default mongoose.model<IRoster>('Roster', RosterSchema);
