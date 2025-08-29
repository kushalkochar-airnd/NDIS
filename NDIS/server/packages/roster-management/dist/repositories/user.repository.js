"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const User_1 = __importDefault(require("../models/User"));
class UserRepository {
    async create(data) {
        return User_1.default.create(data);
    }
    async findAll() {
        return User_1.default.find();
    }
    async findById(id) {
        return User_1.default.findOne({ userId: id });
    }
    async update(id, data) {
        return User_1.default.findOneAndUpdate({ userId: id }, data, { new: true });
    }
    async delete(id) {
        return User_1.default.findOneAndDelete({ userId: id });
    }
}
exports.UserRepository = UserRepository;
