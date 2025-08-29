import { AuditLogRepository } from '../repositories/auditLog.repository';
import { auditLogDto } from '../dto/auditLog.dto';

export class AuditLogService {
  private repo = new AuditLogRepository();

  async create(data: any) {
    const value = await auditLogDto.validateAsync(data);
    return this.repo.create(value);
  }
  async getAll() {
    return this.repo.findAll();
  }
  async getById(id: string) {
    return this.repo.findById(id);
  }
  async update(id: string, data: any) {
    const value = await auditLogDto.validateAsync(data);
    return this.repo.update(id, value);
  }
  async delete(id: string) {
    return this.repo.delete(id);
  }
}
