export interface Address {
    street: string;
    city: string;
    state: string;
    postcode: string;
}
export interface EmergencyContact {
    name: string;
    relationship: string;
    phone: string;
}
export interface FundingCategory {
    category: string;
    budget: number;
    spent: number;
}
export interface ClientDocument {
    name: string;
    url: string;
    uploadedAt: Date;
}
export interface Client {
    clientId: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    gender: string;
    ndisNumber: string;
    email: string;
    phone: string;
    address: Address;
    emergencyContact: EmergencyContact;
    supportCoordinator: string;
    planStartDate: Date;
    planEndDate: Date;
    fundingCategories: FundingCategory[];
    notes?: string;
    documents?: ClientDocument[];
    status: 'active' | 'inactive' | 'suspended';
}
