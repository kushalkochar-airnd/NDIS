import { RosterRepository } from '../repositories/roster.repository';
import { rosterDto } from '../dto/roster.dto';

export class RosterService {
  private repo = new RosterRepository();

  async create(data: any) {
    const value = await rosterDto.validateAsync(data);
    return this.repo.create(value);
  }
  async getAll() {
    return this.repo.findAll();
  }
  async getById(id: string) {
    return this.repo.findById(id);
  }
  async update(id: string, data: any) {
    const value = await rosterDto.validateAsync(data);
    return this.repo.update(id, value);
  }
  async delete(id: string) {
    return this.repo.delete(id);
  }
}
