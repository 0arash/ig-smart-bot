/*
  Warnings:

  - You are about to drop the column `userPlanId` on the `LeechedProducts` table. All the data in the column will be lost.
  - You are about to drop the column `user_plan_id` on the `LeechedProducts` table. All the data in the column will be lost.
  - Added the required column `UserPlanId` to the `LeechedProducts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "LeechedProducts" DROP CONSTRAINT "LeechedProducts_userPlanId_fkey";

-- AlterTable
ALTER TABLE "LeechedProducts" DROP COLUMN "userPlanId",
DROP COLUMN "user_plan_id",
ADD COLUMN     "UserPlanId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "LeechedProducts" ADD CONSTRAINT "LeechedProducts_UserPlanId_fkey" FOREIGN KEY ("UserPlanId") REFERENCES "UserPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
