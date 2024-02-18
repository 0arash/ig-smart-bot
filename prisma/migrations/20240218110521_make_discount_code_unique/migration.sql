/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `PlanDiscount` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PlanDiscount_code_key" ON "PlanDiscount"("code");
