import Location, { ILocation } from '../models/Location';

export class LocationRepository {
  async create(data: Partial<ILocation>) {
    return Location.create(data);
  }
  async findAll() {
    return Location.find();
  }
  async findById(id: string) {
  return Location.findOne({ locationId: id });
  }
  async update(id: string, data: Partial<ILocation>) {
  return Location.findOneAndUpdate({ locationId: id }, data, { new: true });
  }
  async delete(id: string) {
  return Location.findOneAndDelete({ locationId: id });
  }
}
