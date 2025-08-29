import { Address, EmergencyContact, FundingCategory, ClientDocument } from '../models/Client';
export interface UpdateClientDto {
    firstName?: string;
    lastName?: string;
    dateOfBirth?: Date;
    gender?: string;
    ndisNumber?: string;
    email?: string;
    phone?: string;
    address?: Address;
    emergencyContact?: EmergencyContact;
    supportCoordinator?: string;
    planStartDate?: Date;
    planEndDate?: Date;
    fundingCategories?: FundingCategory[];
    notes?: string;
    documents?: ClientDocument[];
    status?: 'active' | 'inactive' | 'suspended';
}
