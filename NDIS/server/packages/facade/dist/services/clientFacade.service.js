"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientFacadeService = void 0;
const services_1 = require("@client/services");
class ClientFacadeService {
    constructor() {
        this.clientService = new services_1.ClientService();
    }
    async createClient(dto) {
        return this.clientService.create(dto);
    }
    async getAllClients() {
        return this.clientService.getAll();
    }
    async getClientById(id) {
        return this.clientService.getById(id);
    }
    async updateClient(id, dto) {
        return this.clientService.update(id, dto);
    }
    async deleteClient(id) {
        return this.clientService.delete(id);
    }
}
exports.ClientFacadeService = ClientFacadeService;
