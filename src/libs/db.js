import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
const cached = {};
async function connectMongoDB() {
  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
  }
  if (cached.connection) {
    return cached.connection;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts);
  }
  try {
    cached.connection = await cached.promise;
    console.log("MongoDB connected")
  } catch (e) {
    cached.promise = undefined;
    console.error("MongoDB connection failed!!!")
    throw e;
  }
  return cached.connection;
}
export default connectMongoDB;