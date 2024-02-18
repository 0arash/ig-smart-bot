-- AlterTable
ALTER TABLE "UserPlan" ADD COLUMN     "planDiscountId" INTEGER;

-- CreateTable
CREATE TABLE "PlanDiscount" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "discount" INTEGER NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "PlanDiscount_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PlanDiscount" ADD CONSTRAINT "PlanDiscount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPlan" ADD CONSTRAINT "UserPlan_planDiscountId_fkey" FOREIGN KEY ("planDiscountId") REFERENCES "PlanDiscount"("id") ON DELETE SET NULL ON UPDATE CASCADE;
