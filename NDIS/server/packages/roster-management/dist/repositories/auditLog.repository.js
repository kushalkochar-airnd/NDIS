"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogRepository = void 0;
const AuditLog_1 = __importDefault(require("../models/AuditLog"));
class AuditLogRepository {
    async create(data) {
        return AuditLog_1.default.create(data);
    }
    async findAll() {
        return AuditLog_1.default.find();
    }
    async findById(id) {
        return AuditLog_1.default.findOne({ auditLogId: id });
    }
    async update(id, data) {
        return AuditLog_1.default.findOneAndUpdate({ auditLogId: id }, data, { new: true });
    }
    async delete(id) {
        return AuditLog_1.default.findOneAndDelete({ auditLogId: id });
    }
}
exports.AuditLogRepository = AuditLogRepository;
