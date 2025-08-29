"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ...existing code...
const roleService = new role_service_1.RoleService();
void roleService;
const express_1 = require("express");
const role_service_1 = require("../services/role.service");
const service = new role_service_1.RoleService();
const router = (0, express_1.Router)();
router.post('/', async (req, res) => {
    try {
        const role = await service.create(req.body);
        res.status(201).json(role);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.get('/', async (req, res) => {
    const roles = await service.getAll();
    res.json(roles);
});
router.get('/:id', async (req, res) => {
    const role = await service.getById(req.params.id);
    if (!role)
        return res.status(404).json({ error: 'Not found' });
    res.json(role);
});
router.put('/:id', async (req, res) => {
    try {
        const role = await service.update(req.params.id, req.body);
        res.json(role);
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
