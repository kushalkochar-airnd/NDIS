"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
const uuid_1 = require("uuid");
const clients = [];
class ClientService {
    async create(data) {
        const client = {
            ...data,
            clientId: (0, uuid_1.v4)(),
        };
        clients.push(client);
        return client;
    }
    async getAll() {
        return clients;
    }
    async getById(clientId) {
        return clients.find(c => c.clientId === clientId);
    }
    async update(clientId, data) {
        const idx = clients.findIndex(c => c.clientId === clientId);
        if (idx === -1)
            return undefined;
        clients[idx] = { ...clients[idx], ...data };
        return clients[idx];
    }
    async delete(clientId) {
        const idx = clients.findIndex(c => c.clientId === clientId);
        if (idx !== -1)
            clients.splice(idx, 1);
    }
}
exports.ClientService = ClientService;
