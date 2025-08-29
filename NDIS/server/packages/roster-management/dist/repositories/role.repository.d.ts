import { IRole } from '../models/Role';
export declare class RoleRepository {
    create(data: Partial<IRole>): Promise<import("mongoose").Document<unknown, {}, IRole> & IRole & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, IRole> & IRole & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findById(id: string): Promise<(import("mongoose").Document<unknown, {}, IRole> & IRole & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    update(id: string, data: Partial<IRole>): Promise<(import("mongoose").Document<unknown, {}, IRole> & IRole & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    delete(id: string): Promise<import("mongoose").ModifyResult<import("mongoose").Document<unknown, {}, IRole> & IRole & {
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
