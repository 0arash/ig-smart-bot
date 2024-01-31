/*
  Warnings:

  - You are about to drop the column `is_user_message` on the `ChatMessage` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ChatMessage" DROP COLUMN "is_user_message";
