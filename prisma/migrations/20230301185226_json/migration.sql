/*
  Warnings:

  - You are about to drop the `Contact` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_missionId_fkey";

-- AlterTable
ALTER TABLE "Mission" ADD COLUMN     "contacts" JSONB;

-- DropTable
DROP TABLE "Contact";
