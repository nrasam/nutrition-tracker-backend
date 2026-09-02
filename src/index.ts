import "dotenv/config";
import express from "express";

const app = express();

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
