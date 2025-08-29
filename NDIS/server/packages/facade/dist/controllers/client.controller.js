"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClient = exports.updateClient = exports.getClientById = exports.getAllClients = exports.createClient = void 0;
const services_1 = require("@client/services");
const clientService = new services_1.ClientService();
const createClient = async (req, res) => {
    const result = await clientService.create(req.body);
    res.json(result);
};
exports.createClient = createClient;
const getAllClients = async (req, res) => {
    const result = await clientService.getAll();
    res.json(result);
};
exports.getAllClients = getAllClients;
const getClientById = async (req, res) => {
    const result = await clientService.getById(req.params.id);
    res.json(result);
};
exports.getClientById = getClientById;
const updateClient = async (req, res) => {
    const result = await clientService.update(req.params.id, req.body);
    res.json(result);
};
exports.updateClient = updateClient;
const deleteClient = async (req, res) => {
    const result = await clientService.delete(req.params.id);
    res.json(result);
};
exports.deleteClient = deleteClient;
