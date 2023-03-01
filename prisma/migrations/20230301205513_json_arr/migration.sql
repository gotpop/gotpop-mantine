/*
  Warnings:

  - The `contacts` column on the `Mission` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `nft` column on the `Mission` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Mission" DROP COLUMN "contacts",
ADD COLUMN     "contacts" JSONB[],
DROP COLUMN "nft",
ADD COLUMN     "nft" JSONB[];
