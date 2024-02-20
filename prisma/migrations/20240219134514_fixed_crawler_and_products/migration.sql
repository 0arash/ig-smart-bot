/*
  Warnings:

  - You are about to drop the `ScrapedProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ScrapedProduct" DROP CONSTRAINT "ScrapedProduct_UserPlanId_fkey";

-- DropForeignKey
ALTER TABLE "ScrapedProduct" DROP CONSTRAINT "ScrapedProduct_userId_fkey";

-- DropTable
DROP TABLE "ScrapedProduct";
