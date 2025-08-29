// ...existing code...
const leaveRequestService = new LeaveRequestService();
void leaveRequestService;
import { Router, Request, Response } from 'express';
import { LeaveRequestService } from '../services/leaveRequest.service';

const service = new LeaveRequestService();
const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const leaveRequest = await service.create(req.body);
    res.status(201).json(leaveRequest);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req: Request, res: Response) => {
  const leaveRequests = await service.getAll();
  res.json(leaveRequests);
});

router.get('/:id', async (req: Request, res: Response) => {
  const leaveRequest = await service.getById(req.params.id);
  if (!leaveRequest) return res.status(404).json({ error: 'Not found' });
  res.json(leaveRequest);
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const leaveRequest = await service.update(req.params.id, req.body);
    res.json(leaveRequest);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  await service.delete(req.params.id);
  res.status(204).send();
});

export default router;
