import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

import foodsRouter from "./routes/foods";
import entriesRouter from "./routes/entries";
import microsRouter from "./routes/micros";
import weightRouter from "./routes/weight";
import goalsRouter from "./routes/goals";
import { error } from "node:console";

const app = express();
app.use(cors()); // Allows frontend to call the backend
app.use(express.json()); // Allows JSON parsing
app.use(adminGuard); // Makes sure an admin password is needed for non-GET requests
app.use("/api/foods", foodsRouter);
app.use("/api/entries", entriesRouter);
app.use("/api/micros", microsRouter);
app.use("/api/weight{s}", weightRouter);
app.use("/api/goals", goalsRouter);

// Note: Make sure to use Express's Request type
function adminGuard(req: Request, res: Response, next: NextFunction) {
  if (req.method === "GET") return next(); // GET is always allowed

  const provided = req.headers["x-admin-password"];
  if (provided !== process.env.ADMIN_PASSWORD) {
    console.error("Admin access required for this action.");
    return res
      .status(403)
      .json({ error: "Admin access required for this action." });
  }
  next();
}

const PORT = process.env.PORT ?? 3001;

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/", (req, res) => res.send("Hello, World!"));

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Listening on port ${PORT}`);
});
