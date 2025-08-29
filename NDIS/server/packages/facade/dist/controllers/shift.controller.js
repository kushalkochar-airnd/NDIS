"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteShift = exports.updateShift = exports.getShiftById = exports.getAllShifts = exports.createShift = void 0;
const services_1 = require("@roster-management/services");
const shiftService = new services_1.ShiftService();
const createShift = async (req, res) => {
    const result = await shiftService.create(req.body);
    res.json(result);
};
exports.createShift = createShift;
const getAllShifts = async (req, res) => {
    const result = await shiftService.getAll();
    res.json(result);
};
exports.getAllShifts = getAllShifts;
const getShiftById = async (req, res) => {
    const result = await shiftService.getById(req.params.id);
    res.json(result);
};
exports.getShiftById = getShiftById;
const updateShift = async (req, res) => {
    const result = await shiftService.update(req.params.id, req.body);
    res.json(result);
};
exports.updateShift = updateShift;
const deleteShift = async (req, res) => {
    const result = await shiftService.delete(req.params.id);
    res.json(result);
};
exports.deleteShift = deleteShift;
