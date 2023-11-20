/*
  Warnings:

  - Added the required column `isAdmin` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL;
