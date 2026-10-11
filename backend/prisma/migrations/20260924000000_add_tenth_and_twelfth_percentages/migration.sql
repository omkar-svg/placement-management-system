-- AlterTable
ALTER TABLE `Student`
    ADD COLUMN `tenthPercentage` DOUBLE NULL,
    ADD COLUMN `twelfthPercentage` DOUBLE NULL;

-- AlterTable
ALTER TABLE `EligibilityCriteria`
    ADD COLUMN `minTenthPercentage` DOUBLE NULL,
    ADD COLUMN `minTwelfthPercentage` DOUBLE NULL;