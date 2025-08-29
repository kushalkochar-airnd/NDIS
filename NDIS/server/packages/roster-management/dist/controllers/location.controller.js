"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ...existing code...
const locationService = new location_service_1.LocationService();
void locationService;
const express_1 = require("express");
const location_service_1 = require("../services/location.service");
const service = new location_service_1.LocationService();
const router = (0, express_1.Router)();
router.post('/', async (req, res) => {
    try {
        const location = await service.create(req.body);
        res.status(201).json(location);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.get('/', async (req, res) => {
    const locations = await service.getAll();
    res.json(locations);
});
router.get('/:id', async (req, res) => {
    const location = await service.getById(req.params.id);
    if (!location)
        return res.status(404).json({ error: 'Not found' });
    res.json(location);
});
router.put('/:id', async (req, res) => {
    try {
        const location = await service.update(req.params.id, req.body);
        res.json(location);
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
