import { setServers } from "node:dns/promises";
setServers(["1.1.1.1", "8.8.8.8"]);
import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("MongoDB Connected");
};
