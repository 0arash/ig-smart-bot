/*
  Warnings:

  - You are about to drop the column `reset_url` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "reset_url",
ADD COLUMN     "verify_code" INTEGER;
