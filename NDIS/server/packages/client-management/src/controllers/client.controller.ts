import { Router, Request, Response } from 'express';
import { ClientService } from '../services/client.service';

const service = new ClientService();
const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const client = await service.create(req.body);
    res.status(201).json(client);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req: Request, res: Response) => {
  const clients = await service.getAll();
  res.json(clients);
});

router.get('/:id', async (req: Request, res: Response) => {
  const client = await service.getById(req.params.id);
  if (!client) return res.status(404).json({ error: 'Not found' });
  res.json(client);
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const client = await service.update(req.params.id, req.body);
    res.json(client);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  await service.delete(req.params.id);
  res.status(204).send();
});

export default router;
