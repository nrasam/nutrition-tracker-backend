import { Router } from "express";
import prisma from "../lib/prisma";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const weightHistory = await prisma.weightEntry.findMany({});

    res.json(weightHistory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch weight history" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { weight } = req.body;

    if (weight < 0) {
      return res
        .status(400)
        .json({ error: "Weight should be a positive number" });
    }

    const newWeight = await prisma.weightEntry.create({
      data: {
        weight,
      },
    });

    res.json(newWeight);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create new weight entry" });
  }
});

export default router;
