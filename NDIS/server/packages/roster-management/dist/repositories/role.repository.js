"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleRepository = void 0;
const Role_1 = __importDefault(require("../models/Role"));
class RoleRepository {
    async create(data) {
        return Role_1.default.create(data);
    }
    async findAll() {
        return Role_1.default.find();
    }
    async findById(id) {
        return Role_1.default.findOne({ roleId: id });
    }
    async update(id, data) {
        return Role_1.default.findOneAndUpdate({ roleId: id }, data, { new: true });
    }
    async delete(id) {
        return Role_1.default.findOneAndDelete({ roleId: id });
    }
}
exports.RoleRepository = RoleRepository;
