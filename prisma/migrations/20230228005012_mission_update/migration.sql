/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Mission` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Mission" DROP CONSTRAINT "Mission_userId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "Mission_userId_key" ON "Mission"("userId");

-- AddForeignKey
ALTER TABLE "Mission" ADD CONSTRAINT "Mission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
