import { Router } from "express";
import prisma from "../lib/prisma";

const router = Router();

router
  .route("/")
  .get(async (req, res) => {
    try {
      const foods = await prisma.food.findMany({
        include: {
          nutrients: {
            select: {
              microId: true,
              amount: true,
              micro: {
                select: { id: true, name: true, unit: true, goal: true },
              },
            },
          },
        },
      });
      res.json(foods);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch foods" });
    }
  })
  .post(async (req, res) => {
    try {
      const {
        name,
        category,
        serving,
        unit,
        calories,
        protein,
        carbs,
        fat,
        fiber,
        benefits,
        warnings,
        stocked,
        nutrients, // expected shape: [{ microId, amount }, ...]
      } = req.body;

      const food = await prisma.food.create({
        data: {
          name,
          category,
          serving,
          unit,
          calories,
          protein,
          carbs,
          fat,
          fiber,
          benefits,
          warnings,
          stocked,
          nutrients: {
            create: nutrients,
          },
        },
        include: { nutrients: { include: { micro: true } } },
      });

      res.status(201).json(food);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create food" });
    }
  });

router.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    // Check if food id is valid
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: "Invalid food ID" });
    }

    // Check if food to delete actually exists
    const food = await prisma.food.findUnique({ where: { id } });
    if (!food) {
      return res.status(404).json({ error: "Food not found" });
    }

    await prisma.food.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete food" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const {
      name,
      category,
      serving,
      unit,
      calories,
      protein,
      carbs,
      fat,
      fiber,
      benefits,
      warnings,
      stocked,
      nutrients,
    } = req.body;

    // Using a transaction here as this is a 2-step process and I want ensure prisma rollbacks any changes if anything fails
    const food = await prisma.$transaction(async (tx) => {
      // First delete all old nutrients associated with the food
      await tx.foodNutrient.deleteMany({ where: { foodId: id } });

      // 2nd update the food with the new info and create new nutrients
      return tx.food.update({
        where: { id },
        data: {
          name,
          category,
          serving,
          unit,
          calories,
          protein,
          carbs,
          fat,
          fiber,
          benefits,
          warnings,
          stocked,
          nutrients: { create: nutrients },
        },
        include: { nutrients: { include: { micro: true } } },
      });
    });

    res.json(food);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update food" });
  }
});

export default router;
