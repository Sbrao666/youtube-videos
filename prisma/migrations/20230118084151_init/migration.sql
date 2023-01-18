-- CreateTable
CREATE TABLE `Video` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `publishedAt` DATETIME(3) NOT NULL,
    `defaultThumbnail` VARCHAR(191) NOT NULL,
    `mediumThumbnail` VARCHAR(191) NOT NULL,
    `highThumbnail` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
