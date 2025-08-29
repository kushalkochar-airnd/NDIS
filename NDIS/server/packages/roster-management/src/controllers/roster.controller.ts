// ...existing code...
const rosterService = new RosterService();
// Example usage to ensure emit
void rosterService;
import { Router, Request, Response } from 'express';
import { RosterService } from '../services/roster.service';

const service = new RosterService();
const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const roster = await service.create(req.body);
    res.status(201).json(roster);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req: Request, res: Response) => {
  const rosters = await service.getAll();
  res.json(rosters);
});

router.get('/:id', async (req: Request, res: Response) => {
  const roster = await service.getById(req.params.id);
  if (!roster) return res.status(404).json({ error: 'Not found' });
  res.json(roster);
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const roster = await service.update(req.params.id, req.body);
    res.json(roster);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  await service.delete(req.params.id);
  res.status(204).send();
});

export default router;
