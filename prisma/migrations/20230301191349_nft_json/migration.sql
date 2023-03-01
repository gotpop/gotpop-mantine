/*
  Warnings:

  - You are about to drop the `Nft` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Nft" DROP CONSTRAINT "Nft_missionId_fkey";

-- AlterTable
ALTER TABLE "Mission" ADD COLUMN     "nft" JSONB;

-- DropTable
DROP TABLE "Nft";
