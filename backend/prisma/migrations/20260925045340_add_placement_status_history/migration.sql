-- CreateTable
CREATE TABLE `PlacementStatusHistory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `placementId` INTEGER NOT NULL,
    `status` ENUM('ELIGIBLE', 'SHORTLISTED', 'INTERVIEW_SCHEDULED', 'SELECTED', 'REJECTED', 'OFFER_ACCEPTED') NOT NULL,
    `remarks` VARCHAR(191) NULL,
    `changedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `changedByUserId` INTEGER NOT NULL,

    INDEX `PlacementStatusHistory_placementId_idx`(`placementId`),
    INDEX `PlacementStatusHistory_changedByUserId_idx`(`changedByUserId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PlacementStatusHistory` ADD CONSTRAINT `PlacementStatusHistory_placementId_fkey` FOREIGN KEY (`placementId`) REFERENCES `PlacementStatus`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlacementStatusHistory` ADD CONSTRAINT `PlacementStatusHistory_changedByUserId_fkey` FOREIGN KEY (`changedByUserId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
