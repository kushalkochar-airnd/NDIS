"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ...existing code...
const shiftService = new shift_service_1.ShiftService();
void shiftService;
const express_1 = require("express");
const shift_service_1 = require("../services/shift.service");
const service = new shift_service_1.ShiftService();
const router = (0, express_1.Router)();
router.post('/', async (req, res) => {
    try {
        const shift = await service.create(req.body);
        res.status(201).json(shift);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.get('/', async (req, res) => {
    const shifts = await service.getAll();
    res.json(shifts);
});
router.get('/:id', async (req, res) => {
    const shift = await service.getById(req.params.id);
    if (!shift)
        return res.status(404).json({ error: 'Not found' });
    res.json(shift);
});
router.put('/:id', async (req, res) => {
    try {
        const shift = await service.update(req.params.id, req.body);
        res.json(shift);
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
