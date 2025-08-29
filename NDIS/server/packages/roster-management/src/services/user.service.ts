import { UserRepository } from '../repositories/user.repository';
import { userDto } from '../dto/user.dto';

export class UserService {
  private repo = new UserRepository();

  async create(data: any) {
    const value = await userDto.validateAsync(data);
    return this.repo.create(value);
  }
  async getAll() {
    return this.repo.findAll();
  }
  async getById(id: string) {
    return this.repo.findById(id);
  }
  async update(id: string, data: any) {
    const value = await userDto.validateAsync(data);
    return this.repo.update(id, value);
  }
  async delete(id: string) {
    return this.repo.delete(id);
  }
}
