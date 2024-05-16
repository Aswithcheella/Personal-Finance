import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import financialRecordRouter from "./routes/financial-records";
const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI: string =
  "mongodb+srv://aswithkumarcheella:S8zOsVy0Fo103lz3@cluster0.oghb05h.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log("CONNECTED TO MONGODB"))
  .catch((err) => console.error("Failed to connect"));

app.use("/financial-records", financialRecordRouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
