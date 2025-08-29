"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRole = exports.updateRole = exports.getRoleById = exports.getAllRoles = exports.createRole = void 0;
const services_1 = require("@roster-management/services");
const roleService = new services_1.RoleService();
const createRole = async (req, res) => {
    const result = await roleService.create(req.body);
    res.json(result);
};
exports.createRole = createRole;
const getAllRoles = async (req, res) => {
    const result = await roleService.getAll();
    res.json(result);
};
exports.getAllRoles = getAllRoles;
const getRoleById = async (req, res) => {
    const result = await roleService.getById(req.params.id);
    res.json(result);
};
exports.getRoleById = getRoleById;
const updateRole = async (req, res) => {
    const result = await roleService.update(req.params.id, req.body);
    res.json(result);
};
exports.updateRole = updateRole;
const deleteRole = async (req, res) => {
    const result = await roleService.delete(req.params.id);
    res.json(result);
};
exports.deleteRole = deleteRole;
