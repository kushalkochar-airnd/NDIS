import Roster, { IRoster } from '../models/Roster';

export class RosterRepository {
  async create(data: Partial<IRoster>) {
    return Roster.create(data);
  }
  async findAll() {
    return Roster.find();
  }
  async findById(id: string) {
  return Roster.findOne({ rosterId: id });
  }
  async update(id: string, data: Partial<IRoster>) {
  return Roster.findOneAndUpdate({ rosterId: id }, data, { new: true });
  }
  async delete(id: string) {
  return Roster.findOneAndDelete({ rosterId: id });
  }
}
