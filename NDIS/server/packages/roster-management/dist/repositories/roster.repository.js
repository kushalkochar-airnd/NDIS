"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosterRepository = void 0;
const Roster_1 = __importDefault(require("../models/Roster"));
class RosterRepository {
    async create(data) {
        return Roster_1.default.create(data);
    }
    async findAll() {
        return Roster_1.default.find();
    }
    async findById(id) {
        return Roster_1.default.findOne({ rosterId: id });
    }
    async update(id, data) {
        return Roster_1.default.findOneAndUpdate({ rosterId: id }, data, { new: true });
    }
    async delete(id) {
        return Roster_1.default.findOneAndDelete({ rosterId: id });
    }
}
exports.RosterRepository = RosterRepository;
