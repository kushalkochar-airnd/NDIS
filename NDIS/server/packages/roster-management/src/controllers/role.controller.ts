// ...existing code...
const roleService = new RoleService();
void roleService;
import { Router, Request, Response } from 'express';
import { RoleService } from '../services/role.service';

const service = new RoleService();
const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const role = await service.create(req.body);
    res.status(201).json(role);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req: Request, res: Response) => {
  const roles = await service.getAll();
  res.json(roles);
});

router.get('/:id', async (req: Request, res: Response) => {
  const role = await service.getById(req.params.id);
  if (!role) return res.status(404).json({ error: 'Not found' });
  res.json(role);
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const role = await service.update(req.params.id, req.body);
    res.json(role);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  await service.delete(req.params.id);
  res.status(204).send();
});

export default router;
