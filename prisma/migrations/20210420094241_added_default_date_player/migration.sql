/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[userId]` on the table `Players`. If there are existing duplicate values, the migration will fail.

*/
-- AlterTable
ALTER TABLE "Match" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "PlayerH" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Team" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "Players.userId_unique" ON "Players"("userId");
