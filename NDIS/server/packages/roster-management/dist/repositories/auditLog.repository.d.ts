import { IAuditLog } from '../models/AuditLog';
export declare class AuditLogRepository {
    create(data: Partial<IAuditLog>): Promise<import("mongoose").Document<unknown, {}, IAuditLog> & IAuditLog & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, IAuditLog> & IAuditLog & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findById(id: string): Promise<(import("mongoose").Document<unknown, {}, IAuditLog> & IAuditLog & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    update(id: string, data: Partial<IAuditLog>): Promise<(import("mongoose").Document<unknown, {}, IAuditLog> & IAuditLog & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    delete(id: string): Promise<import("mongoose").ModifyResult<import("mongoose").Document<unknown, {}, IAuditLog> & IAuditLog & {
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
