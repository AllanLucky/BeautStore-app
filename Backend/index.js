import app from "./app.js";
import dotenv from "dotenv";
import dbConnection from "./config/dbConfig.js";
dotenv.config();


// SERVER 
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  dbConnection();
})