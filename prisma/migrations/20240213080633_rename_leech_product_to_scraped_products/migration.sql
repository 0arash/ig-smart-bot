/*
  Warnings:

  - You are about to drop the `LeechedProducts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LeechedProducts" DROP CONSTRAINT "LeechedProducts_UserPlanId_fkey";

-- DropForeignKey
ALTER TABLE "LeechedProducts" DROP CONSTRAINT "LeechedProducts_userId_fkey";

-- DropTable
DROP TABLE "LeechedProducts";

-- CreateTable
CREATE TABLE "ScrapedProducts" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "UserPlanId" INTEGER,
    "userId" INTEGER,

    CONSTRAINT "ScrapedProducts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ScrapedProducts" ADD CONSTRAINT "ScrapedProducts_UserPlanId_fkey" FOREIGN KEY ("UserPlanId") REFERENCES "UserPlan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScrapedProducts" ADD CONSTRAINT "ScrapedProducts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
