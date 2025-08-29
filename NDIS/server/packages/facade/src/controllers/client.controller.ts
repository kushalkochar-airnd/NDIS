import { Request, Response } from 'express';
import { ClientService } from '@client/services';

const clientService = new ClientService();

export const createClient = async (req: Request, res: Response) => {
  const result = await clientService.create(req.body);
  res.json(result);
};
export const getAllClients = async (req: Request, res: Response) => {
  const result = await clientService.getAll();
  res.json(result);
};
export const getClientById = async (req: Request, res: Response) => {
  const result = await clientService.getById(req.params.id);
  res.json(result);
};
export const updateClient = async (req: Request, res: Response) => {
  const result = await clientService.update(req.params.id, req.body);
  res.json(result);
};
export const deleteClient = async (req: Request, res: Response) => {
  const result = await clientService.delete(req.params.id);
  res.json(result);
};
