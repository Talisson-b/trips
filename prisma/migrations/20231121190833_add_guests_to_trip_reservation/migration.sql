/*
  Warnings:

  - You are about to drop the column `isAdmin` on the `Session` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Session" DROP COLUMN "isAdmin";

-- AlterTable
ALTER TABLE "TripReservation" ADD COLUMN     "guests" INTEGER NOT NULL DEFAULT 5;
