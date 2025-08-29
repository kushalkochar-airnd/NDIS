import mongoose, { Document } from 'mongoose';
export interface IRole extends Document {
    roleId: string;
    name: string;
    permissions: string[];
}
declare const _default: mongoose.Model<IRole, {}, {}, {}, mongoose.Document<unknown, {}, IRole> & IRole & {
    _id: mongoose.Types.ObjectId;
}, any>;
export default _default;
