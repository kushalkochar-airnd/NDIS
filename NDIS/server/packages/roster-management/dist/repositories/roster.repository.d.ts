import { IRoster } from '../models/Roster';
export declare class RosterRepository {
    create(data: Partial<IRoster>): Promise<import("mongoose").Document<unknown, {}, IRoster> & IRoster & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, IRoster> & IRoster & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findById(id: string): Promise<(import("mongoose").Document<unknown, {}, IRoster> & IRoster & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    update(id: string, data: Partial<IRoster>): Promise<(import("mongoose").Document<unknown, {}, IRoster> & IRoster & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    delete(id: string): Promise<import("mongoose").ModifyResult<import("mongoose").Document<unknown, {}, IRoster> & IRoster & {
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
