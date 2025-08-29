import mongoose, { Document } from 'mongoose';
export interface ILeaveRequest extends Document {
    leaveRequestId: string;
    startDate: string;
    endDate: string;
    type: string;
    status?: string;
    reason?: string;
}
declare const _default: mongoose.Model<ILeaveRequest, {}, {}, {}, mongoose.Document<unknown, {}, ILeaveRequest> & ILeaveRequest & {
    _id: mongoose.Types.ObjectId;
}, any>;
export default _default;
