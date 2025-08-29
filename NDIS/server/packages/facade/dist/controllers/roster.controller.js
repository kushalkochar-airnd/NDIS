"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoster = exports.updateRoster = exports.getRosterById = exports.getAllRosters = exports.createRoster = void 0;
const services_1 = require("@roster-management/services");
const rosterService = new services_1.RosterService();
const createRoster = async (req, res) => {
    const result = await rosterService.create(req.body);
    res.json(result);
};
exports.createRoster = createRoster;
const getAllRosters = async (req, res) => {
    const result = await rosterService.getAll();
    res.json(result);
};
exports.getAllRosters = getAllRosters;
const getRosterById = async (req, res) => {
    const result = await rosterService.getById(req.params.id);
    res.json(result);
};
exports.getRosterById = getRosterById;
const updateRoster = async (req, res) => {
    const result = await rosterService.update(req.params.id, req.body);
    res.json(result);
};
exports.updateRoster = updateRoster;
const deleteRoster = async (req, res) => {
    const result = await rosterService.delete(req.params.id);
    res.json(result);
};
exports.deleteRoster = deleteRoster;
