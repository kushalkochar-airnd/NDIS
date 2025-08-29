"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.leaveRequestDto = void 0;
const joi_1 = __importDefault(require("joi"));
exports.leaveRequestDto = joi_1.default.object({
    userId: joi_1.default.string().required(),
    startDate: joi_1.default.string().required(),
    endDate: joi_1.default.string().required(),
    type: joi_1.default.string().required(),
    status: joi_1.default.string().optional(),
    reason: joi_1.default.string().optional()
});
