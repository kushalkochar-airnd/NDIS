"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_service_1 = require("../services/client.service");
const service = new client_service_1.ClientService();
const router = (0, express_1.Router)();
router.post('/', async (req, res) => {
    try {
        const client = await service.create(req.body);
        res.status(201).json(client);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.get('/', async (req, res) => {
    const clients = await service.getAll();
    res.json(clients);
});
router.get('/:id', async (req, res) => {
    const client = await service.getById(req.params.id);
    if (!client)
        return res.status(404).json({ error: 'Not found' });
    res.json(client);
});
router.put('/:id', async (req, res) => {
    try {
        const client = await service.update(req.params.id, req.body);
        res.json(client);
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
