import { Request, Response } from 'express';
import { ShiftService } from '@roster-management/services';

const shiftService = new ShiftService();

export const createShift = async (req: Request, res: Response) => {
  const result = await shiftService.create(req.body);
  res.json(result);
};
export const getAllShifts = async (req: Request, res: Response) => {
  const result = await shiftService.getAll();
  res.json(result);
};
export const getShiftById = async (req: Request, res: Response) => {
  const result = await shiftService.getById(req.params.id);
  res.json(result);
};
export const updateShift = async (req: Request, res: Response) => {
  const result = await shiftService.update(req.params.id, req.body);
  res.json(result);
};
export const deleteShift = async (req: Request, res: Response) => {
  const result = await shiftService.delete(req.params.id);
  res.json(result);
};
