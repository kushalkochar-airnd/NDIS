"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getAllUsers = exports.createUser = void 0;
const services_1 = require("@roster-management/services");
const userService = new services_1.UserService();
const createUser = async (req, res) => {
    const result = await userService.create(req.body);
    res.json(result);
};
exports.createUser = createUser;
const getAllUsers = async (req, res) => {
    const result = await userService.getAll();
    res.json(result);
};
exports.getAllUsers = getAllUsers;
const getUserById = async (req, res) => {
    const result = await userService.getById(req.params.id);
    res.json(result);
};
exports.getUserById = getUserById;
const updateUser = async (req, res) => {
    const result = await userService.update(req.params.id, req.body);
    res.json(result);
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    const result = await userService.delete(req.params.id);
    res.json(result);
};
exports.deleteUser = deleteUser;
