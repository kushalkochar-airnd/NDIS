"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationService = void 0;
const location_repository_1 = require("../repositories/location.repository");
const location_dto_1 = require("../dto/location.dto");
class LocationService {
    constructor() {
        this.repo = new location_repository_1.LocationRepository();
    }
    async create(data) {
        const value = await location_dto_1.locationDto.validateAsync(data);
        return this.repo.create(value);
    }
    async getAll() {
        return this.repo.findAll();
    }
    async getById(id) {
        return this.repo.findById(id);
    }
    async update(id, data) {
        const value = await location_dto_1.locationDto.validateAsync(data);
        return this.repo.update(id, value);
    }
    async delete(id) {
        return this.repo.delete(id);
    }
}
exports.LocationService = LocationService;
