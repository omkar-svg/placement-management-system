/*
  Warnings:

  - You are about to drop the column `year` on the `Student` table. All the data in the column will be lost.
  - Made the column `graduationYear` on table `Student` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Student` DROP COLUMN `year`,
    MODIFY `linkedin` VARCHAR(255) NULL,
    MODIFY `github` VARCHAR(255) NULL,
    MODIFY `portfolio` VARCHAR(255) NULL,
    MODIFY `graduationYear` INTEGER NOT NULL;
