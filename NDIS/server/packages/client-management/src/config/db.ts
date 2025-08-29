import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string;
if (!MONGO_URI) {
  throw new Error('MONGO_URI environment variable is required');
}

let connection: typeof mongoose | null = null;

export async function connectDB() {
  if (connection) return connection;
  connection = await mongoose.connect(MONGO_URI, {
    maxPoolSize: 10 // Connection pooling
  });
  return connection;
}
