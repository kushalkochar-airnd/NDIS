"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationDto = void 0;
const joi_1 = __importDefault(require("joi"));
exports.locationDto = joi_1.default.object({
    name: joi_1.default.string().required(),
    address: joi_1.default.string().required(),
    capacity: joi_1.default.number().optional()
});
