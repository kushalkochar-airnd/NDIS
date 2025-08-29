import express from 'express';

import { Router, Request, Response } from 'express';
import { ClientFacadeService } from './services/clientFacade.service';
import { RosterFacadeService } from './services/rosterFacade.service';

const clientFacade = new ClientFacadeService();
const rosterFacade = new RosterFacadeService();

const clientRouter = Router();
clientRouter.post('/', async (req: Request, res: Response) => {
  const client = await clientFacade.createClient(req.body);
  res.status(201).json(client);
});
clientRouter.get('/', async (_req: Request, res: Response) => {
  const clients = await clientFacade.getAllClients();
  res.json(clients);
});
clientRouter.get('/:id', async (req: Request, res: Response) => {
  const client = await clientFacade.getClientById(req.params.id);
  if (!client) return res.status(404).json({ error: 'Not found' });
  res.json(client);
});
clientRouter.put('/:id', async (req: Request, res: Response) => {
  const client = await clientFacade.updateClient(req.params.id, req.body);
  res.json(client);
});
clientRouter.delete('/:id', async (req: Request, res: Response) => {
  await clientFacade.deleteClient(req.params.id);
  res.status(204).send();
});

const rosterRouter = Router();
rosterRouter.post('/', async (req: Request, res: Response) => {
  const roster = await rosterFacade.createRoster(req.body);
  res.status(201).json(roster);
});
rosterRouter.get('/', async (_req: Request, res: Response) => {
  const rosters = await rosterFacade.getAllRosters();
  res.json(rosters);
});
rosterRouter.get('/:id', async (req: Request, res: Response) => {
  const roster = await rosterFacade.getRosterById(req.params.id);
  if (!roster) return res.status(404).json({ error: 'Not found' });
  res.json(roster);
});
rosterRouter.put('/:id', async (req: Request, res: Response) => {
  const roster = await rosterFacade.updateRoster(req.params.id, req.body);
  res.json(roster);
});
rosterRouter.delete('/:id', async (req: Request, res: Response) => {
  await rosterFacade.deleteRoster(req.params.id);
  res.status(204).send();
});


const app = express();
app.use(express.json());
app.use('/api/clients', clientRouter);
app.use('/api/rosters', rosterRouter);

app.get('/', (_req, res) => {
  res.send('Facade API is running');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Facade server running on port ${PORT}`);
});
