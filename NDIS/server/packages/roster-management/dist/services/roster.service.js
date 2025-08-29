"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosterService = void 0;
const roster_repository_1 = require("../repositories/roster.repository");
const roster_dto_1 = require("../dto/roster.dto");
class RosterService {
    constructor() {
        this.repo = new roster_repository_1.RosterRepository();
    }
    async create(data) {
        const value = await roster_dto_1.rosterDto.validateAsync(data);
        return this.repo.create(value);
    }
    async getAll() {
        return this.repo.findAll();
    }
    async getById(id) {
        return this.repo.findById(id);
    }
    async update(id, data) {
        const value = await roster_dto_1.rosterDto.validateAsync(data);
        return this.repo.update(id, value);
    }
    async delete(id) {
        return this.repo.delete(id);
    }
}
exports.RosterService = RosterService;
