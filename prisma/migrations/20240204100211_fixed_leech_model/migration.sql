-- DropForeignKey
ALTER TABLE "LeechedProducts" DROP CONSTRAINT "LeechedProducts_UserPlanId_fkey";

-- AlterTable
ALTER TABLE "LeechedProducts" ALTER COLUMN "UserPlanId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "LeechedProducts" ADD CONSTRAINT "LeechedProducts_UserPlanId_fkey" FOREIGN KEY ("UserPlanId") REFERENCES "UserPlan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
