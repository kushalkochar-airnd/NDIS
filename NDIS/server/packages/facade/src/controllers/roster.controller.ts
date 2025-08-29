import { Request, Response } from 'express';
import { RosterService } from '@roster-management/services';

const rosterService = new RosterService();

export const createRoster = async (req: Request, res: Response) => {
  const result = await rosterService.create(req.body);
  res.json(result);
};
export const getAllRosters = async (req: Request, res: Response) => {
  const result = await rosterService.getAll();
  res.json(result);
};
export const getRosterById = async (req: Request, res: Response) => {
  const result = await rosterService.getById(req.params.id);
  res.json(result);
};
export const updateRoster = async (req: Request, res: Response) => {
  const result = await rosterService.update(req.params.id, req.body);
  res.json(result);
};
export const deleteRoster = async (req: Request, res: Response) => {
  const result = await rosterService.delete(req.params.id);
  res.json(result);
};
