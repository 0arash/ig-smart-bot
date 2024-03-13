/*
  Warnings:

  - Made the column `api_key` on table `UserPlan` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "UserPlan" ALTER COLUMN "api_key" SET NOT NULL;
