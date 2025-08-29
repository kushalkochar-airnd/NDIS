"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shiftDto = void 0;
const joi_1 = __importDefault(require("joi"));
exports.shiftDto = joi_1.default.object({
    date: joi_1.default.string().required(),
    startTime: joi_1.default.string().required(),
    endTime: joi_1.default.string().required(),
    location: joi_1.default.string().required(),
    assignedTo: joi_1.default.string().optional(),
    status: joi_1.default.string().optional(),
    shiftType: joi_1.default.string().optional(),
    requiredSkills: joi_1.default.array().items(joi_1.default.string()).optional(),
    notes: joi_1.default.string().optional()
});
