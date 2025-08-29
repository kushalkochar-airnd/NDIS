import { ILeaveRequest } from '../models/LeaveRequest';
export declare class LeaveRequestRepository {
    create(data: Partial<ILeaveRequest>): Promise<import("mongoose").Document<unknown, {}, ILeaveRequest> & ILeaveRequest & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, ILeaveRequest> & ILeaveRequest & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findById(id: string): Promise<(import("mongoose").Document<unknown, {}, ILeaveRequest> & ILeaveRequest & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    update(id: string, data: Partial<ILeaveRequest>): Promise<(import("mongoose").Document<unknown, {}, ILeaveRequest> & ILeaveRequest & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    delete(id: string): Promise<import("mongoose").ModifyResult<import("mongoose").Document<unknown, {}, ILeaveRequest> & ILeaveRequest & {
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
