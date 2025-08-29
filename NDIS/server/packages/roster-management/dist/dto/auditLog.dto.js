"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditLogDto = void 0;
const joi_1 = __importDefault(require("joi"));
exports.auditLogDto = joi_1.default.object({
    action: joi_1.default.string().required(),
    userId: joi_1.default.string().required(),
    timestamp: joi_1.default.string().required(),
    details: joi_1.default.object().optional()
});
