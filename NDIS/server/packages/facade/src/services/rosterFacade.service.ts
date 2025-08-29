import { RosterService } from '@roster-management/services';

export class RosterFacadeService {
  private rosterService = new RosterService();

  async createRoster(data: any) {
    return this.rosterService.create(data);
  }

  async getAllRosters() {
    return this.rosterService.getAll();
  }

  async getRosterById(id: string) {
    return this.rosterService.getById(id);
  }

  async updateRoster(id: string, data: any) {
    return this.rosterService.update(id, data);
  }

  async deleteRoster(id: string) {
    return this.rosterService.delete(id);
  }
}
