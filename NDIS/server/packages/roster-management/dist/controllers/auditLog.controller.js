"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ...existing code...
const auditLogService = new auditLog_service_1.AuditLogService();
void auditLogService;
const express_1 = require("express");
const auditLog_service_1 = require("../services/auditLog.service");
const service = new auditLog_service_1.AuditLogService();
const router = (0, express_1.Router)();
router.post('/', async (req, res) => {
    try {
        const auditLog = await service.create(req.body);
        res.status(201).json(auditLog);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.get('/', async (req, res) => {
    const auditLogs = await service.getAll();
    res.json(auditLogs);
});
router.get('/:id', async (req, res) => {
    const auditLog = await service.getById(req.params.id);
    if (!auditLog)
        return res.status(404).json({ error: 'Not found' });
    res.json(auditLog);
});
router.put('/:id', async (req, res) => {
    try {
        const auditLog = await service.update(req.params.id, req.body);
        res.json(auditLog);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.delete('/:id', async (req, res) => {
    await service.delete(req.params.id);
    res.status(204).send();
});
exports.default = router;
