import { Request, Response } from 'express';
import { RoleService } from '@roster-management/services';

const roleService = new RoleService();

export const createRole = async (req: Request, res: Response) => {
  const result = await roleService.create(req.body);
  res.json(result);
};
export const getAllRoles = async (req: Request, res: Response) => {
  const result = await roleService.getAll();
  res.json(result);
};
export const getRoleById = async (req: Request, res: Response) => {
  const result = await roleService.getById(req.params.id);
  res.json(result);
};
export const updateRole = async (req: Request, res: Response) => {
  const result = await roleService.update(req.params.id, req.body);
  res.json(result);
};
export const deleteRole = async (req: Request, res: Response) => {
  const result = await roleService.delete(req.params.id);
  res.json(result);
};
