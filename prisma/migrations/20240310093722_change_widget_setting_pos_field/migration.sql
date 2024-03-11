/*
  Warnings:

  - You are about to drop the column `pos_left` on the `WidgetSettings` table. All the data in the column will be lost.
  - You are about to drop the column `pos_right` on the `WidgetSettings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "WidgetSettings" DROP COLUMN "pos_left",
DROP COLUMN "pos_right",
ADD COLUMN     "pos" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "color" SET DEFAULT '#000',
ALTER COLUMN "title" SET DEFAULT 'Business title',
ALTER COLUMN "caption" SET DEFAULT 'Business caption';
