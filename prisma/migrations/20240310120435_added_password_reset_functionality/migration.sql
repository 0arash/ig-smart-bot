-- AlterTable
ALTER TABLE "User" ADD COLUMN     "is_reseting" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "reset_url" TEXT;
