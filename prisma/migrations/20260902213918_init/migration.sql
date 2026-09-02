-- CreateEnum
CREATE TYPE "MicroCategory" AS ENUM ('VITAMINS', 'MINERALS', 'FATS');

-- CreateEnum
CREATE TYPE "FoodCategory" AS ENUM ('DAIRY', 'EGGS', 'Fish & Seafood', 'FRUITS', 'GRAINS', 'LEGUMES', 'NUTS_SEEDS', 'POULTRY', 'RED_MEAT', 'VEGETABLES');

-- CreateTable
CREATE TABLE "Micro" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "limit" INTEGER,
    "goal" INTEGER NOT NULL,
    "benefits" TEXT[],
    "warnings" TEXT[],
    "category" "MicroCategory" NOT NULL,

    CONSTRAINT "Micro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Food" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" "FoodCategory" NOT NULL,
    "serving" INTEGER NOT NULL,
    "unit" TEXT NOT NULL,
    "calories" INTEGER NOT NULL,
    "protein" INTEGER NOT NULL,
    "carbs" INTEGER NOT NULL,
    "fat" INTEGER NOT NULL,
    "fiber" INTEGER NOT NULL,
    "benefits" TEXT[],
    "warnings" TEXT[],
    "stocked" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodNutrient" (
    "id" SERIAL NOT NULL,
    "foodId" INTEGER NOT NULL,
    "microId" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "FoodNutrient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodEntry" (
    "id" SERIAL NOT NULL,
    "foodId" INTEGER,
    "servings" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "loggedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "calories" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "carbs" DOUBLE PRECISION NOT NULL,
    "fat" DOUBLE PRECISION NOT NULL,
    "fiber" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "FoodEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodEntryNutrient" (
    "id" SERIAL NOT NULL,
    "foodEntryId" INTEGER NOT NULL,
    "microId" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "FoodEntryNutrient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeightEntry" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "weight" DOUBLE PRECISION NOT NULL,
    "unit" TEXT NOT NULL DEFAULT 'lbs',

    CONSTRAINT "WeightEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MacroGoals" (
    "id" SERIAL NOT NULL,
    "singleton" BOOLEAN NOT NULL DEFAULT true,
    "weightGoal" DOUBLE PRECISION NOT NULL,
    "calorieGoal" INTEGER NOT NULL,
    "proteinGoal" INTEGER NOT NULL,
    "carbGoal" INTEGER NOT NULL,
    "fatGoal" INTEGER NOT NULL,
    "fiberGoal" INTEGER NOT NULL,

    CONSTRAINT "MacroGoals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Micro_name_key" ON "Micro"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Food_name_key" ON "Food"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FoodNutrient_foodId_microId_key" ON "FoodNutrient"("foodId", "microId");

-- CreateIndex
CREATE UNIQUE INDEX "FoodEntryNutrient_foodEntryId_microId_key" ON "FoodEntryNutrient"("foodEntryId", "microId");

-- CreateIndex
CREATE UNIQUE INDEX "MacroGoals_singleton_key" ON "MacroGoals"("singleton");

-- AddForeignKey
ALTER TABLE "FoodNutrient" ADD CONSTRAINT "FoodNutrient_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodNutrient" ADD CONSTRAINT "FoodNutrient_microId_fkey" FOREIGN KEY ("microId") REFERENCES "Micro"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodEntry" ADD CONSTRAINT "FoodEntry_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodEntryNutrient" ADD CONSTRAINT "FoodEntryNutrient_foodEntryId_fkey" FOREIGN KEY ("foodEntryId") REFERENCES "FoodEntry"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodEntryNutrient" ADD CONSTRAINT "FoodEntryNutrient_microId_fkey" FOREIGN KEY ("microId") REFERENCES "Micro"("id") ON DELETE CASCADE ON UPDATE CASCADE;
