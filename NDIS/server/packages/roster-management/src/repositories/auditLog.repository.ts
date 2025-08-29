import AuditLog, { IAuditLog } from '../models/AuditLog';

export class AuditLogRepository {
  async create(data: Partial<IAuditLog>) {
    return AuditLog.create(data);
  }
  async findAll() {
    return AuditLog.find();
  }
  async findById(id: string) {
  return AuditLog.findOne({ auditLogId: id });
  }
  async update(id: string, data: Partial<IAuditLog>) {
  return AuditLog.findOneAndUpdate({ auditLogId: id }, data, { new: true });
  }
  async delete(id: string) {
  return AuditLog.findOneAndDelete({ auditLogId: id });
  }
}
