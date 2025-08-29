import LeaveRequest, { ILeaveRequest } from '../models/LeaveRequest';

export class LeaveRequestRepository {
  async create(data: Partial<ILeaveRequest>) {
    return LeaveRequest.create(data);
  }
  async findAll() {
    return LeaveRequest.find();
  }
  async findById(id: string) {
  return LeaveRequest.findOne({ leaveRequestId: id });
  }
  async update(id: string, data: Partial<ILeaveRequest>) {
  return LeaveRequest.findOneAndUpdate({ leaveRequestId: id }, data, { new: true });
  }
  async delete(id: string) {
  return LeaveRequest.findOneAndDelete({ leaveRequestId: id });
  }
}
