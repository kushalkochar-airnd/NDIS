"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_controller_1 = __importDefault(require("./controllers/client.controller"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/clients', client_controller_1.default);
app.get('/', (_req, res) => {
    res.send('Client Management API is running');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
