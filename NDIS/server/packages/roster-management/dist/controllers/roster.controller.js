"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ...existing code...
const rosterService = new roster_service_1.RosterService();
// Example usage to ensure emit
void rosterService;
const express_1 = require("express");
const roster_service_1 = require("../services/roster.service");
const service = new roster_service_1.RosterService();
const router = (0, express_1.Router)();
router.post('/', async (req, res) => {
    try {
        const roster = await service.create(req.body);
        res.status(201).json(roster);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.get('/', async (req, res) => {
    const rosters = await service.getAll();
    res.json(rosters);
});
router.get('/:id', async (req, res) => {
    const roster = await service.getById(req.params.id);
    if (!roster)
        return res.status(404).json({ error: 'Not found' });
    res.json(roster);
});
router.put('/:id', async (req, res) => {
    try {
        const roster = await service.update(req.params.id, req.body);
        res.json(roster);
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
