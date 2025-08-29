import mongoose, { Schema, Document } from 'mongoose';

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

export interface IClient extends mongoose.Document, Client {}

const ClientSchema: Schema = new Schema({
  clientId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  ndisNumber: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: {
    street: String,
    city: String,
    state: String,
    postcode: String
  },
  emergencyContact: {
    name: String,
    relationship: String,
    phone: String
  },
  supportCoordinator: { type: String },
  planStartDate: { type: Date },
  planEndDate: { type: Date },
  fundingCategories: [{
    category: String,
    budget: Number,
    spent: Number
  }],
  notes: String,
  documents: [{
    name: String,
    url: String,
    uploadedAt: Date
  }],
  status: { type: String, enum: ['active', 'inactive', 'suspended'], default: 'active' }
});

export const ClientModel = mongoose.model<IClient>('Client', ClientSchema);
