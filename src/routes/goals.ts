import { Router } from "express";
import prisma from "../lib/prisma";

const router = Router();

router.get("/", async (req, res) => {
  try {
    // Create one if none exists
    const goals = await prisma.macroGoals.upsert({
      where: { singleton: true },
      update: {}, // if it exists, change nothing — just return it
      create: {
        singleton: true,
        weightGoal: 140,
        calorieGoal: 2150,
        proteinGoal: 145,
        carbGoal: 250,
        fatGoal: 70,
        fiberGoal: 35,
      },
    });

    res.json(goals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch goals" });
  }
});

router.patch("/", async (req, res) => {
  try {
    const {
      weightGoal,
      calorieGoal,
      proteinGoal,
      carbGoal,
      fatGoal,
      fiberGoal,
    } = req.body;

    const goals = await prisma.macroGoals.upsert({
      where: { singleton: true },
      update: {
        weightGoal,
        calorieGoal,
        proteinGoal,
        carbGoal,
        fatGoal,
        fiberGoal,
      },
      create: {
        singleton: true,
        weightGoal,
        calorieGoal,
        proteinGoal,
        carbGoal,
        fatGoal,
        fiberGoal,
      },
    });

    res.json(goals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update goals" });
  }
});

export default router;
