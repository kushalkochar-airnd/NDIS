"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ...existing code...
const userService = new user_service_1.UserService();
void userService;
const express_1 = require("express");
const user_service_1 = require("../services/user.service");
const service = new user_service_1.UserService();
const router = (0, express_1.Router)();
router.post('/', async (req, res) => {
    try {
        const user = await service.create(req.body);
        res.status(201).json(user);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.get('/', async (req, res) => {
    const users = await service.getAll();
    res.json(users);
});
router.get('/:id', async (req, res) => {
    const user = await service.getById(req.params.id);
    if (!user)
        return res.status(404).json({ error: 'Not found' });
    res.json(user);
});
router.put('/:id', async (req, res) => {
    try {
        const user = await service.update(req.params.id, req.body);
        res.json(user);
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
