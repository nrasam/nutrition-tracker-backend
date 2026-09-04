import { Router } from "express";
import prisma from "../lib/prisma";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const micros = await prisma.micro.findMany({
      include: {
        foodNutrients: true,
      },
    });

    res.json(micros);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch micros" });
  }
});

export default router;
