import mongoose, { Schema, Document } from 'mongoose';
import { uuidv4 } from '../utils/guid';

export interface IAuditLog extends Document {
  auditLogId: string;
  action: string;
  userId: mongoose.Types.ObjectId;
  timestamp: string;
  details?: any;
}

const AuditLogSchema: Schema = new Schema({
  auditLogId: { type: String, default: uuidv4, unique: true },
  action: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  timestamp: { type: String, required: true },
  details: Schema.Types.Mixed
}, { timestamps: true });

export default mongoose.model<IAuditLog>('AuditLog', AuditLogSchema);
