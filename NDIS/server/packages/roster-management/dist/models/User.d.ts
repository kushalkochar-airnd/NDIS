import mongoose, { Document } from 'mongoose';
export interface IUser extends Document {
    userId: string;
    name: string;
    email: string;
    role: string;
    contact?: {
        phone?: string;
        address?: string;
    };
    active?: boolean;
    skills?: string[];
    availability?: Array<{
        day: string;
        startTime: string;
        endTime: string;
    }>;
}
declare const _default: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser> & IUser & {
    _id: mongoose.Types.ObjectId;
}, any>;
export default _default;
