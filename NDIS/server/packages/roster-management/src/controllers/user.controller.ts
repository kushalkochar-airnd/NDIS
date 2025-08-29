// ...existing code...
const userService = new UserService();
void userService;

import { Router, Request, Response } from 'express';
import { UserService } from '../services/user.service';

const service = new UserService();
const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const user = await service.create(req.body);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req: Request, res: Response) => {
  const users = await service.getAll();
  res.json(users);
});

router.get('/:id', async (req: Request, res: Response) => {
  const user = await service.getById(req.params.id);
  if (!user) return res.status(404).json({ error: 'Not found' });
  res.json(user);
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const user = await service.update(req.params.id, req.body);
    res.json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  await service.delete(req.params.id);
  res.status(204).send();
});

export default router;
