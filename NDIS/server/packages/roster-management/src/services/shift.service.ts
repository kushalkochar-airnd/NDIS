import { ShiftRepository } from '../repositories/shift.repository';
import { shiftDto } from '../dto/shift.dto';

export class ShiftService {
  private repo = new ShiftRepository();

  async create(data: any) {
    const value = await shiftDto.validateAsync(data);
    return this.repo.create(value);
  }
  async getAll() {
    return this.repo.findAll();
  }
  async getById(id: string) {
    return this.repo.findById(id);
  }
  async update(id: string, data: any) {
    const value = await shiftDto.validateAsync(data);
    return this.repo.update(id, value);
  }
  async delete(id: string) {
    return this.repo.delete(id);
  }
}
