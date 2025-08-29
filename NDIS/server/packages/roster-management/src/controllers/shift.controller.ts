// ...existing code...
const shiftService = new ShiftService();
void shiftService;
import { Router, Request, Response } from 'express';
import { ShiftService } from '../services/shift.service';

const service = new ShiftService();
const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const shift = await service.create(req.body);
    res.status(201).json(shift);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req: Request, res: Response) => {
  const shifts = await service.getAll();
  res.json(shifts);
});

router.get('/:id', async (req: Request, res: Response) => {
  const shift = await service.getById(req.params.id);
  if (!shift) return res.status(404).json({ error: 'Not found' });
  res.json(shift);
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const shift = await service.update(req.params.id, req.body);
    res.json(shift);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  await service.delete(req.params.id);
  res.status(204).send();
});

export default router;
