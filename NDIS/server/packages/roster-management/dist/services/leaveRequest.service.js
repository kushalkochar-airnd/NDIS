"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveRequestService = void 0;
const leaveRequest_repository_1 = require("../repositories/leaveRequest.repository");
const leaveRequest_dto_1 = require("../dto/leaveRequest.dto");
class LeaveRequestService {
    constructor() {
        this.repo = new leaveRequest_repository_1.LeaveRequestRepository();
    }
    async create(data) {
        const value = await leaveRequest_dto_1.leaveRequestDto.validateAsync(data);
        return this.repo.create(value);
    }
    async getAll() {
        return this.repo.findAll();
    }
    async getById(id) {
        return this.repo.findById(id);
    }
    async update(id, data) {
        const value = await leaveRequest_dto_1.leaveRequestDto.validateAsync(data);
        return this.repo.update(id, value);
    }
    async delete(id) {
        return this.repo.delete(id);
    }
}
exports.LeaveRequestService = LeaveRequestService;
