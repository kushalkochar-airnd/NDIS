import mongoose, { Document } from 'mongoose';
export interface ILocation extends Document {
    locationId: string;
    name: string;
    address: string;
    capacity?: number;
}
declare const _default: mongoose.Model<ILocation, {}, {}, {}, mongoose.Document<unknown, {}, ILocation> & ILocation & {
    _id: mongoose.Types.ObjectId;
}, any>;
export default _default;
