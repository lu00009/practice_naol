import express from "express";
import cors from "cors";
import type { Request, Response } from "express";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running with TypeScript 🚀");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
