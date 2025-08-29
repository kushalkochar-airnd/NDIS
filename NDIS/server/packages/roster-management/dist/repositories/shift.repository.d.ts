import { IShift } from '../models/Shift';
export declare class ShiftRepository {
    create(data: Partial<IShift>): Promise<import("mongoose").Document<unknown, {}, IShift> & IShift & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, IShift> & IShift & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findById(id: string): Promise<(import("mongoose").Document<unknown, {}, IShift> & IShift & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    update(id: string, data: Partial<IShift>): Promise<(import("mongoose").Document<unknown, {}, IShift> & IShift & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    delete(id: string): Promise<import("mongoose").ModifyResult<import("mongoose").Document<unknown, {}, IShift> & IShift & {
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
