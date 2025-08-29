"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogService = void 0;
const auditLog_repository_1 = require("../repositories/auditLog.repository");
const auditLog_dto_1 = require("../dto/auditLog.dto");
class AuditLogService {
    constructor() {
        this.repo = new auditLog_repository_1.AuditLogRepository();
    }
    async create(data) {
        const value = await auditLog_dto_1.auditLogDto.validateAsync(data);
        return this.repo.create(value);
    }
    async getAll() {
        return this.repo.findAll();
    }
    async getById(id) {
        return this.repo.findById(id);
    }
    async update(id, data) {
        const value = await auditLog_dto_1.auditLogDto.validateAsync(data);
        return this.repo.update(id, value);
    }
    async delete(id) {
        return this.repo.delete(id);
    }
}
exports.AuditLogService = AuditLogService;
