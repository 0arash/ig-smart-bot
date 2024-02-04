/*
  Warnings:

  - Added the required column `userPlanId` to the `LeechedProducts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_plan_id` to the `LeechedProducts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LeechedProducts" ADD COLUMN     "userId" INTEGER,
ADD COLUMN     "userPlanId" INTEGER NOT NULL,
ADD COLUMN     "user_plan_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "LeechedProducts" ADD CONSTRAINT "LeechedProducts_userPlanId_fkey" FOREIGN KEY ("userPlanId") REFERENCES "UserPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeechedProducts" ADD CONSTRAINT "LeechedProducts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
