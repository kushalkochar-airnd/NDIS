"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleService = void 0;
const role_repository_1 = require("../repositories/role.repository");
const role_dto_1 = require("../dto/role.dto");
class RoleService {
    constructor() {
        this.repo = new role_repository_1.RoleRepository();
    }
    async create(data) {
        const value = await role_dto_1.roleDto.validateAsync(data);
        return this.repo.create(value);
    }
    async getAll() {
        return this.repo.findAll();
    }
    async getById(id) {
        return this.repo.findById(id);
    }
    async update(id, data) {
        const value = await role_dto_1.roleDto.validateAsync(data);
        return this.repo.update(id, value);
    }
    async delete(id) {
        return this.repo.delete(id);
    }
}
exports.RoleService = RoleService;
