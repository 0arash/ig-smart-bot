/*
  Warnings:

  - You are about to drop the column `userPlanId` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `userPlanId` on the `Product` table. All the data in the column will be lost.
  - Added the required column `user_plan_id` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_plan_id` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_userPlanId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_userPlanId_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "userPlanId",
ADD COLUMN     "user_plan_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "userPlanId",
ADD COLUMN     "user_plan_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_user_plan_id_fkey" FOREIGN KEY ("user_plan_id") REFERENCES "UserPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_user_plan_id_fkey" FOREIGN KEY ("user_plan_id") REFERENCES "UserPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
