import mongoose, { Schema, Document } from 'mongoose';
import { uuidv4 } from '../utils/guid';

export interface IRole extends Document {
  roleId: string;
  name: string;
  permissions: string[];
}

const RoleSchema: Schema = new Schema({
  roleId: { type: String, default: uuidv4, unique: true },
  name: { type: String, required: true },
  permissions: [{ type: String, required: true }]
}, { timestamps: true });

export default mongoose.model<IRole>('Role', RoleSchema);
