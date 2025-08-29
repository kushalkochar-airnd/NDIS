import { Request, Response } from 'express';
import { UserService } from '@roster-management/services';

const userService = new UserService();

export const createUser = async (req: Request, res: Response) => {
  const result = await userService.create(req.body);
  res.json(result);
};
export const getAllUsers = async (req: Request, res: Response) => {
  const result = await userService.getAll();
  res.json(result);
};
export const getUserById = async (req: Request, res: Response) => {
  const result = await userService.getById(req.params.id);
  res.json(result);
};
export const updateUser = async (req: Request, res: Response) => {
  const result = await userService.update(req.params.id, req.body);
  res.json(result);
};
export const deleteUser = async (req: Request, res: Response) => {
  const result = await userService.delete(req.params.id);
  res.json(result);
};
