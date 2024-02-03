-- CreateEnum
CREATE TYPE "Action" AS ENUM ('AdminRequired', 'ProductRequest');

-- AlterTable
ALTER TABLE "ChatMessage" ADD COLUMN     "action_req" "Action";

-- AlterTable
ALTER TABLE "UserPlan" ADD COLUMN     "business_caption" TEXT,
ADD COLUMN     "business_title" TEXT;
