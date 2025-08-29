"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftRepository = void 0;
const Shift_1 = __importDefault(require("../models/Shift"));
class ShiftRepository {
    async create(data) {
        return Shift_1.default.create(data);
    }
    async findAll() {
        return Shift_1.default.find();
    }
    async findById(id) {
        return Shift_1.default.findOne({ shiftId: id });
    }
    async update(id, data) {
        return Shift_1.default.findOneAndUpdate({ shiftId: id }, data, { new: true });
    }
    async delete(id) {
        return Shift_1.default.findOneAndDelete({ shiftId: id });
    }
}
exports.ShiftRepository = ShiftRepository;
