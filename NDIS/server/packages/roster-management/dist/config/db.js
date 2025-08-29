"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = connectDB;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/roster';
let connection = null;
async function connectDB() {
    if (connection)
        return connection;
    connection = await mongoose_1.default.connect(MONGO_URI, {
        maxPoolSize: 10 // Connection pooling
    });
    return connection;
}
