import { RoleRepository } from '../repositories/role.repository';
import { roleDto } from '../dto/role.dto';

export class RoleService {
  private repo = new RoleRepository();

  async create(data: any) {
    const value = await roleDto.validateAsync(data);
    return this.repo.create(value);
  }
  async getAll() {
    return this.repo.findAll();
  }
  async getById(id: string) {
    return this.repo.findById(id);
  }
  async update(id: string, data: any) {
    const value = await roleDto.validateAsync(data);
    return this.repo.update(id, value);
  }
  async delete(id: string) {
    return this.repo.delete(id);
  }
}
