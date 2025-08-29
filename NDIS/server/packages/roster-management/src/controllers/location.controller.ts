// ...existing code...
const locationService = new LocationService();
void locationService;
import { Router, Request, Response } from 'express';
import { LocationService } from '../services/location.service';

const service = new LocationService();
const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const location = await service.create(req.body);
    res.status(201).json(location);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req: Request, res: Response) => {
  const locations = await service.getAll();
  res.json(locations);
});

router.get('/:id', async (req: Request, res: Response) => {
  const location = await service.getById(req.params.id);
  if (!location) return res.status(404).json({ error: 'Not found' });
  res.json(location);
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const location = await service.update(req.params.id, req.body);
    res.json(location);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  await service.delete(req.params.id);
  res.status(204).send();
});

export default router;
