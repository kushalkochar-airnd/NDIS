import { Client } from '../models/Client';
export declare class ClientService {
    create(data: any): Promise<Client>;
    getAll(): Promise<Client[]>;
    getById(clientId: string): Promise<Client | undefined>;
    update(clientId: string, data: any): Promise<Client | undefined>;
    delete(clientId: string): Promise<void>;
}
