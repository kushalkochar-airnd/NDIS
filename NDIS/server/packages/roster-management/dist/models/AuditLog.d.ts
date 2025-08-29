import mongoose, { Document } from 'mongoose';
export interface IAuditLog extends Document {
    auditLogId: string;
    action: string;
    userId: mongoose.Types.ObjectId;
    timestamp: string;
    details?: any;
}
declare const _default: mongoose.Model<IAuditLog, {}, {}, {}, mongoose.Document<unknown, {}, IAuditLog> & IAuditLog & {
    _id: mongoose.Types.ObjectId;
}, any>;
export default _default;
