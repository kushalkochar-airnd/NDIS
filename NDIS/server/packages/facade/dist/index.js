"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_2 = require("express");
const clientFacade_service_1 = require("./services/clientFacade.service");
const rosterFacade_service_1 = require("./services/rosterFacade.service");
const clientFacade = new clientFacade_service_1.ClientFacadeService();
const rosterFacade = new rosterFacade_service_1.RosterFacadeService();
const clientRouter = (0, express_2.Router)();
clientRouter.post('/', async (req, res) => {
    const client = await clientFacade.createClient(req.body);
    res.status(201).json(client);
});
clientRouter.get('/', async (_req, res) => {
    const clients = await clientFacade.getAllClients();
    res.json(clients);
});
clientRouter.get('/:id', async (req, res) => {
    const client = await clientFacade.getClientById(req.params.id);
    if (!client)
        return res.status(404).json({ error: 'Not found' });
    res.json(client);
});
clientRouter.put('/:id', async (req, res) => {
    const client = await clientFacade.updateClient(req.params.id, req.body);
    res.json(client);
});
clientRouter.delete('/:id', async (req, res) => {
    await clientFacade.deleteClient(req.params.id);
    res.status(204).send();
});
const rosterRouter = (0, express_2.Router)();
rosterRouter.post('/', async (req, res) => {
    const roster = await rosterFacade.createRoster(req.body);
    res.status(201).json(roster);
});
rosterRouter.get('/', async (_req, res) => {
    const rosters = await rosterFacade.getAllRosters();
    res.json(rosters);
});
rosterRouter.get('/:id', async (req, res) => {
    const roster = await rosterFacade.getRosterById(req.params.id);
    if (!roster)
        return res.status(404).json({ error: 'Not found' });
    res.json(roster);
});
rosterRouter.put('/:id', async (req, res) => {
    const roster = await rosterFacade.updateRoster(req.params.id, req.body);
    res.json(roster);
});
rosterRouter.delete('/:id', async (req, res) => {
    await rosterFacade.deleteRoster(req.params.id);
    res.status(204).send();
});
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: 'http://localhost:4200' })); // Enable CORS for all origins
app.use(express_1.default.json());
app.use('/api/clients', clientRouter);
app.use('/api/rosters', rosterRouter);
app.get('/', (_req, res) => {
    res.send('Facade API is running');
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Facade server running on port ${PORT}`);
});
