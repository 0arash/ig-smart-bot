-- AlterTable
ALTER TABLE "Plan" ADD COLUMN     "chat_count" INTEGER NOT NULL DEFAULT 100,
ADD COLUMN     "file_size_limit" INTEGER NOT NULL DEFAULT 5,
ADD COLUMN     "operator_count" INTEGER NOT NULL DEFAULT 2;

-- AlterTable
ALTER TABLE "UserPlan" ADD COLUMN     "chats_used" INTEGER NOT NULL DEFAULT 0;
