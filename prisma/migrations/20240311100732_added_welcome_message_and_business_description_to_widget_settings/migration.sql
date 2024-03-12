-- AlterTable
ALTER TABLE "WidgetSettings" ADD COLUMN     "description" TEXT NOT NULL DEFAULT 'Business description',
ADD COLUMN     "welcome" TEXT NOT NULL DEFAULT 'Business welcome message';
