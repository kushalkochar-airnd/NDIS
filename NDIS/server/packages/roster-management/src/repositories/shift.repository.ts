import Shift, { IShift } from '../models/Shift';

export class ShiftRepository {
  async create(data: Partial<IShift>) {
    return Shift.create(data);
  }
  async findAll() {
    return Shift.find();
  }
  async findById(id: string) {
  return Shift.findOne({ shiftId: id });
  }
  async update(id: string, data: Partial<IShift>) {
  return Shift.findOneAndUpdate({ shiftId: id }, data, { new: true });
  }
  async delete(id: string) {
  return Shift.findOneAndDelete({ shiftId: id });
  }
}
