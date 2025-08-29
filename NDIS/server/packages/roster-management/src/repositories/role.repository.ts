import Role, { IRole } from '../models/Role';

export class RoleRepository {
  async create(data: Partial<IRole>) {
    return Role.create(data);
  }
  async findAll() {
    return Role.find();
  }
  async findById(id: string) {
  return Role.findOne({ roleId: id });
  }
  async update(id: string, data: Partial<IRole>) {
  return Role.findOneAndUpdate({ roleId: id }, data, { new: true });
  }
  async delete(id: string) {
  return Role.findOneAndDelete({ roleId: id });
  }
}
