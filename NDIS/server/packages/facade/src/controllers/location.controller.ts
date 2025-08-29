import { Request, Response } from 'express';
import { LocationService } from '@roster-management/services';

const locationService = new LocationService();

export const createLocation = async (req: Request, res: Response) => {
  const result = await locationService.create(req.body);
  res.json(result);
};
export const getAllLocations = async (req: Request, res: Response) => {
  const result = await locationService.getAll();
  res.json(result);
};
export const getLocationById = async (req: Request, res: Response) => {
  const result = await locationService.getById(req.params.id);
  res.json(result);
};
export const updateLocation = async (req: Request, res: Response) => {
  const result = await locationService.update(req.params.id, req.body);
  res.json(result);
};
export const deleteLocation = async (req: Request, res: Response) => {
  const result = await locationService.delete(req.params.id);
  res.json(result);
};
