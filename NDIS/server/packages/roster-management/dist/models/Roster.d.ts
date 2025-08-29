import mongoose, { Document } from 'mongoose';
export interface IRoster extends Document {
    rosterId: string;
    weekStart: string;
    weekEnd: string;
    shifts?: mongoose.Types.ObjectId[];
    createdBy?: mongoose.Types.ObjectId;
    published?: boolean;
}
declare const _default: mongoose.Model<IRoster, {}, {}, {}, mongoose.Document<unknown, {}, IRoster> & IRoster & {
    _id: mongoose.Types.ObjectId;
}, any>;
export default _default;
