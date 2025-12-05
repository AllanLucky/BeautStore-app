import mongoose, { set } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// DATABASE CONNECTION
const dbConnection = async () => {
  const DB = process.env.DB;
  try {
    await mongoose.connect(DB).then(() => {
      console.log("Database connected successfully");
    })

  } catch (error) {
    console.log("Database connection error:", error);
    setTimeout(dbConnection, 5000);
  }

}

export default dbConnection;