"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftService = void 0;
const shift_repository_1 = require("../repositories/shift.repository");
const shift_dto_1 = require("../dto/shift.dto");
class ShiftService {
    constructor() {
        this.repo = new shift_repository_1.ShiftRepository();
    }
    async create(data) {
        const value = await shift_dto_1.shiftDto.validateAsync(data);
        return this.repo.create(value);
    }
    async getAll() {
        return this.repo.findAll();
    }
    async getById(id) {
        return this.repo.findById(id);
    }
    async update(id, data) {
        const value = await shift_dto_1.shiftDto.validateAsync(data);
        return this.repo.update(id, value);
    }
    async delete(id) {
        return this.repo.delete(id);
    }
}
exports.ShiftService = ShiftService;
