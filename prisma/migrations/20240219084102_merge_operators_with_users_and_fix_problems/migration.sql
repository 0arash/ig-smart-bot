/*
  Warnings:

  - You are about to drop the `UserPlanOperator` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ChatMessage" DROP CONSTRAINT "ChatMessage_operator_id_fkey";

-- DropForeignKey
ALTER TABLE "UserPlanOperator" DROP CONSTRAINT "UserPlanOperator_userPlanId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "operator_user_plan_id" INTEGER;

-- DropTable
DROP TABLE "UserPlanOperator";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_operator_user_plan_id_fkey" FOREIGN KEY ("operator_user_plan_id") REFERENCES "UserPlan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_operator_id_fkey" FOREIGN KEY ("operator_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
