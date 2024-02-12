/*
  Warnings:

  - You are about to drop the column `userPlanId` on the `ChatMessage` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ChatMessage" DROP CONSTRAINT "ChatMessage_userPlanId_fkey";

-- AlterTable
ALTER TABLE "ChatMessage" DROP COLUMN "userPlanId";
