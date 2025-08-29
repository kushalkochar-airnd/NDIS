"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rosterDto = void 0;
const joi_1 = __importDefault(require("joi"));
exports.rosterDto = joi_1.default.object({
    weekStart: joi_1.default.string().required(),
    weekEnd: joi_1.default.string().required(),
    shifts: joi_1.default.array().items(joi_1.default.string()).optional(),
    createdBy: joi_1.default.string().optional(),
    published: joi_1.default.boolean().optional()
});
