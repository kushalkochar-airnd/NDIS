import { Request, Response } from 'express';
import { LeaveRequestService } from '@roster-management/services';

const leaveRequestService = new LeaveRequestService();

export const createLeaveRequest = async (req: Request, res: Response) => {
  const result = await leaveRequestService.create(req.body);
  res.json(result);
};
export const getAllLeaveRequests = async (req: Request, res: Response) => {
  const result = await leaveRequestService.getAll();
  res.json(result);
};
export const getLeaveRequestById = async (req: Request, res: Response) => {
  const result = await leaveRequestService.getById(req.params.id);
  res.json(result);
};
export const updateLeaveRequest = async (req: Request, res: Response) => {
  const result = await leaveRequestService.update(req.params.id, req.body);
  res.json(result);
};
export const deleteLeaveRequest = async (req: Request, res: Response) => {
  const result = await leaveRequestService.delete(req.params.id);
  res.json(result);
};
