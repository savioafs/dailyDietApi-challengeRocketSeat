/*
  Warnings:

  - You are about to drop the column `id_diet` on the `meals` table. All the data in the column will be lost.
  - You are about to drop the column `meal` on the `meals` table. All the data in the column will be lost.
  - Added the required column `name` to the `meals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "meals" DROP COLUMN "id_diet",
DROP COLUMN "meal",
ADD COLUMN     "is_diet" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "name" TEXT NOT NULL;
