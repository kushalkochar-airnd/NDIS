"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLocation = exports.updateLocation = exports.getLocationById = exports.getAllLocations = exports.createLocation = void 0;
const services_1 = require("@roster-management/services");
const locationService = new services_1.LocationService();
const createLocation = async (req, res) => {
    const result = await locationService.create(req.body);
    res.json(result);
};
exports.createLocation = createLocation;
const getAllLocations = async (req, res) => {
    const result = await locationService.getAll();
    res.json(result);
};
exports.getAllLocations = getAllLocations;
const getLocationById = async (req, res) => {
    const result = await locationService.getById(req.params.id);
    res.json(result);
};
exports.getLocationById = getLocationById;
const updateLocation = async (req, res) => {
    const result = await locationService.update(req.params.id, req.body);
    res.json(result);
};
exports.updateLocation = updateLocation;
const deleteLocation = async (req, res) => {
    const result = await locationService.delete(req.params.id);
    res.json(result);
};
exports.deleteLocation = deleteLocation;
