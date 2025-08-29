import { ClientModel, IClient } from '../models/Client';
import { v4 as uuidv4 } from 'uuid';
import { connectDB } from '../config/db';

export class ClientService {
  async create(data: any): Promise<IClient> {
    await connectDB();
    const client = new ClientModel({
      ...data,
      clientId: uuidv4(),
    });
    await client.save();
    return client;
  }

  async getAll(): Promise<IClient[]> {
    await connectDB();
    return ClientModel.find();
  }

  async getById(clientId: string): Promise<IClient | null> {
    await connectDB();
    return ClientModel.findOne({ clientId });
  }

  async update(clientId: string, data: any): Promise<IClient | null> {
    await connectDB();
    return ClientModel.findOneAndUpdate({ clientId }, data, { new: true });
  }

  async delete(clientId: string): Promise<void> {
    await connectDB();
    await ClientModel.deleteOne({ clientId });
  }
}
