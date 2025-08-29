import { Request, Response } from 'express';
import { AuditLogService } from '@roster-management/services';

const auditLogService = new AuditLogService();

export const createAuditLog = async (req: Request, res: Response) => {
  const result = await auditLogService.create(req.body);
  res.json(result);
};
export const getAllAuditLogs = async (req: Request, res: Response) => {
  const result = await auditLogService.getAll();
  res.json(result);
};
export const getAuditLogById = async (req: Request, res: Response) => {
  const result = await auditLogService.getById(req.params.id);
  res.json(result);
};
export const updateAuditLog = async (req: Request, res: Response) => {
  const result = await auditLogService.update(req.params.id, req.body);
  res.json(result);
};
export const deleteAuditLog = async (req: Request, res: Response) => {
  const result = await auditLogService.delete(req.params.id);
  res.json(result);
};
