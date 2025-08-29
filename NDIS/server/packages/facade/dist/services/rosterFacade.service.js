"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosterFacadeService = void 0;
const services_1 = require("@roster-management/services");
class RosterFacadeService {
    constructor() {
        this.rosterService = new services_1.RosterService();
    }
    async createRoster(data) {
        return this.rosterService.create(data);
    }
    async getAllRosters() {
        return this.rosterService.getAll();
    }
    async getRosterById(id) {
        return this.rosterService.getById(id);
    }
    async updateRoster(id, data) {
        return this.rosterService.update(id, data);
    }
    async deleteRoster(id) {
        return this.rosterService.delete(id);
    }
}
exports.RosterFacadeService = RosterFacadeService;
