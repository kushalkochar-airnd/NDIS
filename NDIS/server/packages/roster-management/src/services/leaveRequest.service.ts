import { LeaveRequestRepository } from '../repositories/leaveRequest.repository';
import { leaveRequestDto } from '../dto/leaveRequest.dto';

export class LeaveRequestService {
  private repo = new LeaveRequestRepository();

  async create(data: any) {
    const value = await leaveRequestDto.validateAsync(data);
    return this.repo.create(value);
  }
  async getAll() {
    return this.repo.findAll();
  }
  async getById(id: string) {
    return this.repo.findById(id);
  }
  async update(id: string, data: any) {
    const value = await leaveRequestDto.validateAsync(data);
    return this.repo.update(id, value);
  }
  async delete(id: string) {
    return this.repo.delete(id);
  }
}
