/*
  Warnings:

  - You are about to drop the column `email` on the `Mission` table. All the data in the column will be lost.
  - You are about to drop the column `github` on the `Mission` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Mission` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Mission` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Mission` table. All the data in the column will be lost.
  - You are about to drop the column `website` on the `Mission` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Mission" DROP COLUMN "email",
DROP COLUMN "github",
DROP COLUMN "name",
DROP COLUMN "password",
DROP COLUMN "username",
DROP COLUMN "website",
ADD COLUMN     "finalWish" TEXT;

-- CreateTable
CREATE TABLE "Nft" (
    "id" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "tagline" TEXT NOT NULL,
    "background" TEXT NOT NULL,
    "missionId" TEXT NOT NULL,

    CONSTRAINT "Nft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "active" TEXT NOT NULL,
    "missionId" TEXT,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Nft_missionId_key" ON "Nft"("missionId");

-- AddForeignKey
ALTER TABLE "Nft" ADD CONSTRAINT "Nft_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "Mission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "Mission"("id") ON DELETE SET NULL ON UPDATE CASCADE;
