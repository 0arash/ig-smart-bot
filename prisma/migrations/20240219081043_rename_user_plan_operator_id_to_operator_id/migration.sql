/*
  Warnings:

  - You are about to drop the column `userPlanOperatorId` on the `ChatMessage` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ChatMessage" DROP CONSTRAINT "ChatMessage_userPlanOperatorId_fkey";

-- AlterTable
ALTER TABLE "ChatMessage" DROP COLUMN "userPlanOperatorId",
ADD COLUMN     "operator_id" INTEGER;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_operator_id_fkey" FOREIGN KEY ("operator_id") REFERENCES "UserPlanOperator"("id") ON DELETE SET NULL ON UPDATE CASCADE;
