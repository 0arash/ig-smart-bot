-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'CHAT_OPERATOR';

-- AlterTable
ALTER TABLE "ChatMessage" ADD COLUMN     "userPlanOperatorId" INTEGER;

-- CreateTable
CREATE TABLE "UserPlanOperator" (
    "id" SERIAL NOT NULL,
    "userPlanId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "UserPlanOperator_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_userPlanOperatorId_fkey" FOREIGN KEY ("userPlanOperatorId") REFERENCES "UserPlanOperator"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPlanOperator" ADD CONSTRAINT "UserPlanOperator_userPlanId_fkey" FOREIGN KEY ("userPlanId") REFERENCES "UserPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
