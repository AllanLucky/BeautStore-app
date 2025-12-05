import express from "express";
import cors from "cors";
const app = express();

// json body middleware
app.use(express.json());

// cors middleware

app.use(cors());


export default app