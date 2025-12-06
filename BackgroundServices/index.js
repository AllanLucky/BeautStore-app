import express from "express";
import dotenv from "dotenv"
import dbConnection from "./config/dbConfig.js";
import cron from "node-cron";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8001;

//SCHEDULE SERVICES

const services = () => {
  cron.schedule('* * * * * *', () => { });
  // CHECK OUT ON HOW TO CONFIG crontab guru
}

services()



//Connect to the database first
dbConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err.message);
  });
