"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ...existing code...
const leaveRequestService = new leaveRequest_service_1.LeaveRequestService();
void leaveRequestService;
const express_1 = require("express");
const leaveRequest_service_1 = require("../services/leaveRequest.service");
const service = new leaveRequest_service_1.LeaveRequestService();
const router = (0, express_1.Router)();
router.post('/', async (req, res) => {
    try {
        const leaveRequest = await service.create(req.body);
        res.status(201).json(leaveRequest);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.get('/', async (req, res) => {
    const leaveRequests = await service.getAll();
    res.json(leaveRequests);
});
router.get('/:id', async (req, res) => {
    const leaveRequest = await service.getById(req.params.id);
    if (!leaveRequest)
        return res.status(404).json({ error: 'Not found' });
    res.json(leaveRequest);
});
router.put('/:id', async (req, res) => {
    try {
        const leaveRequest = await service.update(req.params.id, req.body);
        res.json(leaveRequest);
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
