// ...existing code...
const auditLogService = new AuditLogService();
void auditLogService;
import { Router, Request, Response } from 'express';
import { AuditLogService } from '../services/auditLog.service';

const service = new AuditLogService();
const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const auditLog = await service.create(req.body);
    res.status(201).json(auditLog);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req: Request, res: Response) => {
  const auditLogs = await service.getAll();
  res.json(auditLogs);
});

router.get('/:id', async (req: Request, res: Response) => {
  const auditLog = await service.getById(req.params.id);
  if (!auditLog) return res.status(404).json({ error: 'Not found' });
  res.json(auditLog);
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const auditLog = await service.update(req.params.id, req.body);
    res.json(auditLog);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  await service.delete(req.params.id);
  res.status(204).send();
});

export default router;
