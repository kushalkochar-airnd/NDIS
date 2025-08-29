"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDto = void 0;
const joi_1 = __importDefault(require("joi"));
exports.userDto = joi_1.default.object({
    name: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    role: joi_1.default.string().required(),
    contact: joi_1.default.object({
        phone: joi_1.default.string().optional(),
        address: joi_1.default.string().optional()
    }).optional(),
    active: joi_1.default.boolean().optional(),
    skills: joi_1.default.array().items(joi_1.default.string()).optional(),
    availability: joi_1.default.array().items(joi_1.default.object({
        day: joi_1.default.string().required(),
        startTime: joi_1.default.string().required(),
        endTime: joi_1.default.string().required()
    })).optional()
});
