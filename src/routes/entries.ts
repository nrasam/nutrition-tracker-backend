import { Router } from "express";
import prisma from "../lib/prisma";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const entries = await prisma.foodEntry.findMany({
      include: {
        foodEntryNutrients: {
          include: {
            micro: { select: { id: true, name: true, unit: true, goal: true } },
          },
        },
      },
    });

    res.json(entries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch food entries" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { foodId, servings } = req.body;

    // Input validation
    if (
      !Number.isInteger(foodId) ||
      foodId < 1 ||
      typeof servings !== "number" ||
      !Number.isFinite(servings) ||
      servings <= 0
    ) {
      return res.status(400).json({ error: "Invalid food ID or servings" });
    }

    // Check if food exists
    const food = await prisma.food.findUnique({
      where: { id: foodId },
      include: { nutrients: true },
    });

    if (!food) {
      return res.status(404).json({ error: "Food not found" });
    }

    const entry = await prisma.foodEntry.create({
      data: {
        foodId: food.id,
        servings,
        calories: food.calories * servings,
        protein: food.protein * servings,
        carbs: food.carbs * servings,
        fat: food.fat * servings,
        fiber: food.fiber * servings,
        foodEntryNutrients: {
          create: food.nutrients.map((n) => ({
            microId: n.microId,
            amount: n.amount * servings,
          })),
        },
      },
      include: { foodEntryNutrients: { include: { micro: true } } },
    });

    res.status(201).json(entry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create food entry" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: "Invalid entry ID" });
    }

    const entry = await prisma.foodEntry.findUnique({ where: { id } });
    if (!entry) {
      return res.status(404).json({ error: "Food entry not found" });
    }

    await prisma.foodEntry.delete({
      where: { id },
    });

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete food entry" });
  }
});

export default router;
