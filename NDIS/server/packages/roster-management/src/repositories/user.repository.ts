import User, { IUser } from '../models/User';

export class UserRepository {
  async create(data: Partial<IUser>) {
    return User.create(data);
  }
  async findAll() {
    return User.find();
  }
  async findById(id: string) {
  return User.findOne({ userId: id });
  }
  async update(id: string, data: Partial<IUser>) {
  return User.findOneAndUpdate({ userId: id }, data, { new: true });
  }
  async delete(id: string) {
  return User.findOneAndDelete({ userId: id });
  }
}
