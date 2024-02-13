/*
  Warnings:

  - You are about to drop the `ScrapedProducts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ScrapedProducts" DROP CONSTRAINT "ScrapedProducts_UserPlanId_fkey";

-- DropForeignKey
ALTER TABLE "ScrapedProducts" DROP CONSTRAINT "ScrapedProducts_userId_fkey";

-- DropTable
DROP TABLE "ScrapedProducts";

-- CreateTable
CREATE TABLE "ScrapedProduct" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "UserPlanId" INTEGER,
    "userId" INTEGER,

    CONSTRAINT "ScrapedProduct_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ScrapedProduct" ADD CONSTRAINT "ScrapedProduct_UserPlanId_fkey" FOREIGN KEY ("UserPlanId") REFERENCES "UserPlan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScrapedProduct" ADD CONSTRAINT "ScrapedProduct_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
