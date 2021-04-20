-- CreateEnum
CREATE TYPE "Map" AS ENUM ('BIND', 'SPLIT', 'HAVEN', 'ASCENT', 'ICEBOX');

-- AlterTable
ALTER TABLE "Match" ADD COLUMN     "map" "Map";
