import "dotenv/config";
import express from "express";

import foodsRouter from "./routes/foods";
import entriesRouter from "./routes/entries";

const app = express();
app.use(express.json());  // Allows JSON parsing
app.use("/api/foods", foodsRouter);
app.use("/api/entries", entriesRouter);

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
