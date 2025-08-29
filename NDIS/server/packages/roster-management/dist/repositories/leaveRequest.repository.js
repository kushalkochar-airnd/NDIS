"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveRequestRepository = void 0;
const LeaveRequest_1 = __importDefault(require("../models/LeaveRequest"));
class LeaveRequestRepository {
    async create(data) {
        return LeaveRequest_1.default.create(data);
    }
    async findAll() {
        return LeaveRequest_1.default.find();
    }
    async findById(id) {
        return LeaveRequest_1.default.findOne({ leaveRequestId: id });
    }
    async update(id, data) {
        return LeaveRequest_1.default.findOneAndUpdate({ leaveRequestId: id }, data, { new: true });
    }
    async delete(id) {
        return LeaveRequest_1.default.findOneAndDelete({ leaveRequestId: id });
    }
}
exports.LeaveRequestRepository = LeaveRequestRepository;
