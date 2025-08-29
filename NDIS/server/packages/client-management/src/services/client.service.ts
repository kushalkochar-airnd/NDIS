import { Client } from '../models/Client';
import { v4 as uuidv4 } from 'uuid';

const clients: Client[] = [];

export class ClientService {

  async create(data: any): Promise<Client> {
    const client: Client = {
      ...data,
      clientId: uuidv4(),
    };
    clients.push(client);
    return client;
  }

  async getAll(): Promise<Client[]> {
    return clients;
  }

  async getById(clientId: string): Promise<Client | undefined> {
    return clients.find(c => c.clientId === clientId);
  }

  async update(clientId: string, data: any): Promise<Client | undefined> {
    const idx = clients.findIndex(c => c.clientId === clientId);
    if (idx === -1) return undefined;
    clients[idx] = { ...clients[idx], ...data };
    return clients[idx];
  }

  async delete(clientId: string): Promise<void> {
    const idx = clients.findIndex(c => c.clientId === clientId);
    if (idx !== -1) clients.splice(idx, 1);
  }
}
