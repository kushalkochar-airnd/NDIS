import { ILocation } from '../models/Location';
export declare class LocationRepository {
    create(data: Partial<ILocation>): Promise<import("mongoose").Document<unknown, {}, ILocation> & ILocation & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, ILocation> & ILocation & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findById(id: string): Promise<(import("mongoose").Document<unknown, {}, ILocation> & ILocation & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    update(id: string, data: Partial<ILocation>): Promise<(import("mongoose").Document<unknown, {}, ILocation> & ILocation & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    delete(id: string): Promise<import("mongoose").ModifyResult<import("mongoose").Document<unknown, {}, ILocation> & ILocation & {
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
