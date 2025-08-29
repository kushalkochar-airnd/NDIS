import { LocationRepository } from '../repositories/location.repository';
import { locationDto } from '../dto/location.dto';

export class LocationService {
  private repo = new LocationRepository();

  async create(data: any) {
    const value = await locationDto.validateAsync(data);
    return this.repo.create(value);
  }
  async getAll() {
    return this.repo.findAll();
  }
  async getById(id: string) {
    return this.repo.findById(id);
  }
  async update(id: string, data: any) {
    const value = await locationDto.validateAsync(data);
    return this.repo.update(id, value);
  }
  async delete(id: string) {
    return this.repo.delete(id);
  }
}
