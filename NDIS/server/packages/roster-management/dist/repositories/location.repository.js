"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationRepository = void 0;
const Location_1 = __importDefault(require("../models/Location"));
class LocationRepository {
    async create(data) {
        return Location_1.default.create(data);
    }
    async findAll() {
        return Location_1.default.find();
    }
    async findById(id) {
        return Location_1.default.findOne({ locationId: id });
    }
    async update(id, data) {
        return Location_1.default.findOneAndUpdate({ locationId: id }, data, { new: true });
    }
    async delete(id) {
        return Location_1.default.findOneAndDelete({ locationId: id });
    }
}
exports.LocationRepository = LocationRepository;
