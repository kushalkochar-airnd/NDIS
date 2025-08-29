import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/roster';

let connection: typeof mongoose | null = null;

export async function connectDB() {
  if (connection) return connection;
  connection = await mongoose.connect(MONGO_URI, {
    maxPoolSize: 10 // Connection pooling
  });
  return connection;
}
