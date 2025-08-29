import mongoose, { Document } from 'mongoose';
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
declare const _default: mongoose.Model<IShift, {}, {}, {}, mongoose.Document<unknown, {}, IShift> & IShift & {
    _id: mongoose.Types.ObjectId;
}, any>;
export default _default;
