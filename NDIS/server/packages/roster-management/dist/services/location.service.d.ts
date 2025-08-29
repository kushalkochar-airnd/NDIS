export declare class LocationService {
    private repo;
    create(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/Location").ILocation> & import("../models/Location").ILocation & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAll(): Promise<(import("mongoose").Document<unknown, {}, import("../models/Location").ILocation> & import("../models/Location").ILocation & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getById(id: string): Promise<(import("mongoose").Document<unknown, {}, import("../models/Location").ILocation> & import("../models/Location").ILocation & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    update(id: string, data: any): Promise<(import("mongoose").Document<unknown, {}, import("../models/Location").ILocation> & import("../models/Location").ILocation & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    delete(id: string): Promise<import("mongoose").ModifyResult<import("mongoose").Document<unknown, {}, import("../models/Location").ILocation> & import("../models/Location").ILocation & {
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
