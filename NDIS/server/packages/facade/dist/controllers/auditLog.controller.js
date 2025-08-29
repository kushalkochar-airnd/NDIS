"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAuditLog = exports.updateAuditLog = exports.getAuditLogById = exports.getAllAuditLogs = exports.createAuditLog = void 0;
const services_1 = require("@roster-management/services");
const auditLogService = new services_1.AuditLogService();
const createAuditLog = async (req, res) => {
    const result = await auditLogService.create(req.body);
    res.json(result);
};
exports.createAuditLog = createAuditLog;
const getAllAuditLogs = async (req, res) => {
    const result = await auditLogService.getAll();
    res.json(result);
};
exports.getAllAuditLogs = getAllAuditLogs;
const getAuditLogById = async (req, res) => {
    const result = await auditLogService.getById(req.params.id);
    res.json(result);
};
exports.getAuditLogById = getAuditLogById;
const updateAuditLog = async (req, res) => {
    const result = await auditLogService.update(req.params.id, req.body);
    res.json(result);
};
exports.updateAuditLog = updateAuditLog;
const deleteAuditLog = async (req, res) => {
    const result = await auditLogService.delete(req.params.id);
    res.json(result);
};
exports.deleteAuditLog = deleteAuditLog;
