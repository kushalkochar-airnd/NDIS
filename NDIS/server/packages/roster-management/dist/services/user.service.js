"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_repository_1 = require("../repositories/user.repository");
const user_dto_1 = require("../dto/user.dto");
class UserService {
    constructor() {
        this.repo = new user_repository_1.UserRepository();
    }
    async create(data) {
        const value = await user_dto_1.userDto.validateAsync(data);
        return this.repo.create(value);
    }
    async getAll() {
        return this.repo.findAll();
    }
    async getById(id) {
        return this.repo.findById(id);
    }
    async update(id, data) {
        const value = await user_dto_1.userDto.validateAsync(data);
        return this.repo.update(id, value);
    }
    async delete(id) {
        return this.repo.delete(id);
    }
}
exports.UserService = UserService;
