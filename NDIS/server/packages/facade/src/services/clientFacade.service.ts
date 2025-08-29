import { ClientService } from '@client/services';
import { CreateClientDto } from '@client/dto/CreateClientDto';
import { UpdateClientDto } from '@client/dto/UpdateClientDto';

export class ClientFacadeService {
  private clientService = new ClientService();

  async createClient(dto: CreateClientDto) {
    return this.clientService.create(dto);
  }

  async getAllClients() {
    return this.clientService.getAll();
  }

  async getClientById(id: string) {
    return this.clientService.getById(id);
  }

  async updateClient(id: string, dto: UpdateClientDto) {
    return this.clientService.update(id, dto);
  }

  async deleteClient(id: string) {
    return this.clientService.delete(id);
  }
}
