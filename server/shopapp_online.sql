-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.4.3 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for shopapp_online
CREATE DATABASE IF NOT EXISTS `shopapp_online` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `shopapp_online`;

-- Dumping structure for table shopapp_online.banners
CREATE TABLE IF NOT EXISTS `banners` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `image` text,
  `status` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table shopapp_online.banners: ~0 rows (approximately)

-- Dumping structure for table shopapp_online.banner_details
CREATE TABLE IF NOT EXISTS `banner_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `banner_id` int NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `banner_id` (`banner_id`),
  CONSTRAINT `banner_details_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `banner_details_ibfk_2` FOREIGN KEY (`banner_id`) REFERENCES `banners` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table shopapp_online.banner_details: ~0 rows (approximately)

-- Dumping structure for table shopapp_online.brands
CREATE TABLE IF NOT EXISTS `brands` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table shopapp_online.brands: ~17 rows (approximately)
INSERT INTO `brands` (`id`, `name`, `image`, `created_at`, `updated_at`) VALUES
	(1, 'Samsung', NULL, '2025-02-04 13:52:52', '2025-02-04 13:52:52'),
	(3, 'Xiaomi', NULL, '2025-02-04 13:54:45', '2025-02-04 13:54:45'),
	(4, 'Apple', NULL, '2025-02-04 13:54:58', '2025-02-04 13:54:58'),
	(5, 'LG', NULL, '2025-02-04 13:55:08', '2025-02-04 13:55:08'),
	(6, 'Sony', NULL, '2025-02-05 05:56:21', '2025-02-05 05:56:21'),
	(7, 'Nokia', NULL, '2025-02-05 05:56:43', '2025-02-05 05:56:43'),
	(8, 'Google', NULL, '2025-02-05 05:58:18', '2025-02-05 05:58:18'),
	(9, 'OnePlus', NULL, '2025-02-05 05:58:57', '2025-02-05 05:58:57'),
	(10, 'Vivo', NULL, '2025-02-05 06:02:59', '2025-02-05 06:02:59'),
	(11, 'Realme', NULL, '2025-02-05 06:05:48', '2025-02-05 06:05:48'),
	(12, 'Huawei', NULL, '2025-02-05 06:06:03', '2025-02-05 06:06:03'),
	(13, 'ROG', NULL, '2025-02-05 06:06:45', '2025-02-05 06:06:45'),
	(14, 'Motorola', NULL, '2025-02-05 06:07:17', '2025-02-05 06:07:17'),
	(15, 'Honor', NULL, '2025-02-05 06:07:57', '2025-02-05 06:07:57'),
	(16, 'ZTE', NULL, '2025-02-05 06:09:11', '2025-02-05 06:09:11'),
	(17, 'TCL', NULL, '2025-02-05 06:09:49', '2025-02-05 06:09:49'),
	(18, 'Alcatel', NULL, '2025-02-05 06:10:26', '2025-02-05 06:10:26');

-- Dumping structure for table shopapp_online.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table shopapp_online.categories: ~4 rows (approximately)
INSERT INTO `categories` (`id`, `name`, `image`, `created_at`, `updated_at`) VALUES
	(1, 'Đồ gia dụng', NULL, '2025-02-04 13:59:13', '2025-02-04 13:59:13'),
	(2, 'Thời trang', NULL, '2025-02-04 13:59:40', '2025-02-04 13:59:40'),
	(3, 'Điện thoại thông minh', NULL, '2025-02-04 13:59:56', '2025-02-04 13:59:56'),
	(4, 'Máy tính bảng', NULL, '2025-02-04 14:00:20', '2025-02-04 14:00:20');

-- Dumping structure for table shopapp_online.feedbacks
CREATE TABLE IF NOT EXISTS `feedbacks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `user_id` int NOT NULL,
  `star` int DEFAULT NULL,
  `content` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `feedbacks_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `feedbacks_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table shopapp_online.feedbacks: ~0 rows (approximately)

-- Dumping structure for table shopapp_online.news
CREATE TABLE IF NOT EXISTS `news` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `image` text,
  `content` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table shopapp_online.news: ~0 rows (approximately)

-- Dumping structure for table shopapp_online.news_details
CREATE TABLE IF NOT EXISTS `news_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `news_id` int NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `news_id` (`news_id`),
  CONSTRAINT `news_details_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `news_details_ibfk_2` FOREIGN KEY (`news_id`) REFERENCES `news` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table shopapp_online.news_details: ~0 rows (approximately)

-- Dumping structure for table shopapp_online.orders
CREATE TABLE IF NOT EXISTS `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `status` int DEFAULT NULL,
  `note` text,
  `total` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table shopapp_online.orders: ~0 rows (approximately)

-- Dumping structure for table shopapp_online.order_details
CREATE TABLE IF NOT EXISTS `order_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `price` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `order_details_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `order_details_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table shopapp_online.order_details: ~0 rows (approximately)

-- Dumping structure for table shopapp_online.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `image` text,
  `price` int DEFAULT '0',
  `oldprice` int DEFAULT '0',
  `description` text,
  `specification` text,
  `buyturn` int DEFAULT '0',
  `quantity` int DEFAULT '0',
  `brand_id` int NOT NULL,
  `category_id` int NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_name` (`name`),
  KEY `brand_id` (`brand_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `check_buyturn_non_negative` CHECK ((`buyturn` >= 0)),
  CONSTRAINT `check_oldprice_non_negative` CHECK ((`oldprice` >= 0)),
  CONSTRAINT `check_price_non_negative` CHECK ((`price` >= 0)),
  CONSTRAINT `check_quantity_non_negative` CHECK ((`quantity` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table shopapp_online.products: ~18 rows (approximately)
INSERT INTO `products` (`id`, `name`, `image`, `price`, `oldprice`, `description`, `specification`, `buyturn`, `quantity`, `brand_id`, `category_id`, `created_at`, `updated_at`) VALUES
	(4, 'Galaxy S22 Ultra', '', 24990000, 27990000, 'Galaxy S22 Ultra với bút S Pen tích hợp, hiệu năng đột phá và khả năng chụp ảnh chuyên nghiệp, là sự kết hợp hoàn hảo giữa điện thoại và máy tính bảng trong một thiết kế sang trọng.', 'Màn hình Dynamic AMOLED 2x 6.8 inch, độ phân giải 3200x1440; Chipset Exynos 2200; RAM 12GB; Bộ nhớ trong 256GB; Camera sau: chính 108P, ultra-wide 12MP, telophoto 10MP và periscope 10MP, Camera trước: 40MP; Pin 5000 mAh với sạc siêu nhanh.', 320, 85, 1, 3, '2025-02-04 15:02:37', '2025-02-04 15:02:37'),
	(20, 'iPhone 13 Pro', '', 29990000, 32990000, 'iPhone 13 Pro với camera chất lượng cao và hiệu suất vượt trội, mang đến trải nghiệm người dùng tuyệt vời.', 'Màn hình Super Retina XDR 6.1 inch; Chipset A15 Bionic; RAM 6GB; Bộ nhớ trong 128GB; Camera sau: 12MP; Camera trước: 12MP; Pin 3095 mAh.', 300, 50, 4, 3, '2025-02-05 06:48:14', '2025-02-05 06:48:14'),
	(21, 'Samsung Galaxy Z Fold 3', '', 49990000, 52990000, 'Galaxy Z Fold 3 là điện thoại gập đầu tiên hỗ trợ S Pen, với màn hình lớn và trải nghiệm đa nhiệm tuyệt vời.', 'Màn hình chính 7.6 inch AMOLED; Chipset Snapdragon 888; RAM 12GB; Bộ nhớ trong 256GB; Camera sau: 12MP. Pin 4400 mAh.', 150, 30, 1, 3, '2025-02-05 06:48:35', '2025-02-05 06:48:35'),
	(22, 'Google Pixel 6', '', 19990000, 22990000, 'Google Pixel 6 mang đến trải nghiệm Android thuần khiết với camera xuất sắc và hiệu suất mượt mà.', 'Màn hình OLED 6.4 inch; Chipset Google Tensor; RAM 8GB; Bộ nhớ trong 128GB; Camera sau: 50MP. Pin 4614 mAh.', 200, 40, 8, 3, '2025-02-05 06:48:51', '2025-02-05 06:48:51'),
	(23, 'OnePlus 9', '', 17990000, 19990000, 'OnePlus 9 với tốc độ sạc nhanh và camera Hasselblad chất lượng cao, là lựa chọn tuyệt vời cho người yêu công nghệ.', 'Màn hình Fluid AMOLED 6.55 inch; Chipset Snapdragon 888; RAM 8GB; Bộ nhớ trong 128GB; Camera sau: 48MP. Pin 4500 mAh.', 250, 70, 9, 3, '2025-02-05 06:49:03', '2025-02-05 06:49:03'),
	(24, 'Xiaomi Mi 11', '', 15990000, 17990000, 'Xiaomi Mi 11 với hiệu suất mạnh mẽ và camera 108MP, mang đến trải nghiệm hình ảnh ấn tượng.', 'Màn hình AMOLED 6.81 inch; Chipset Snapdragon 888; RAM 8GB; Bộ nhớ trong 256GB; Camera sau: 108MP. Pin 4600 mAh.', 400, 100, 3, 3, '2025-02-05 06:49:18', '2025-02-05 06:49:18'),
	(25, 'Sony Xperia 1 III', '', 32990000, 34990000, 'Sony Xperia 1 III với màn hình 4K và khả năng chụp ảnh chuyên nghiệp, là lựa chọn cho những người yêu thích nhiếp ảnh.', 'Màn hình OLED 6.5 inch 4K; Chipset Snapdragon 888; RAM 12GB; Bộ nhớ trong 256GB; Camera sau: 12MP. Pin 4500 mAh.', 180, 20, 6, 3, '2025-02-05 06:49:31', '2025-02-05 06:49:31'),
	(26, 'Oppo Find X3 Pro', '', 29990000, 31990000, 'Oppo Find X3 Pro với thiết kế sang trọng và camera nổi bật, mang đến trải nghiệm cao cấp.', 'Màn hình AMOLED 6.7 inch; Chipset Snapdragon 888; RAM 12GB; Bộ nhớ trong 256GB; Camera sau: 50MP. Pin 4500 mAh.', 220, 60, 5, 3, '2025-02-05 06:49:50', '2025-02-05 06:49:50'),
	(27, 'Vivo X60 Pro', '', 23990000, 25990000, 'Vivo X60 Pro với camera Zeiss và hiệu suất mạnh mẽ, là lựa chọn hàng đầu cho nhiếp ảnh di động.', 'Màn hình AMOLED 6.56 inch; Chipset Exynos 1080; RAM 12GB; Bộ nhớ trong 256GB; Camera sau: 48MP. Pin 4200 mAh.', 210, 45, 10, 3, '2025-02-05 06:50:03', '2025-02-05 06:50:03'),
	(28, 'Realme GT', '', 16990000, 18990000, 'Realme GT với hiệu suất cao và thiết kế trẻ trung, là lựa chọn tuyệt vời cho giới trẻ.', 'Màn hình Super AMOLED 6.43 inch; Chipset Snapdragon 888; RAM 8GB; Bộ nhớ trong 128GB; Camera sau: 64MP. Pin 4500 mAh.', 260, 80, 11, 3, '2025-02-05 06:50:13', '2025-02-05 06:50:13'),
	(29, 'Huawei P40 Pro', '', 28990000, 30990000, 'Huawei P40 Pro với camera Leica và khả năng chụp ảnh xuất sắc, mang đến trải nghiệm nhiếp ảnh tuyệt vời.', 'Màn hình OLED 6.58 inch; Chipset Kirin 990; RAM 8GB; Bộ nhớ trong 256GB; Camera sau: 50MP. Pin 4200 mAh.', 190, 35, 12, 3, '2025-02-05 06:50:22', '2025-02-05 06:50:22'),
	(30, 'Asus ROG Phone 5', '', 24990000, 26990000, 'Asus ROG Phone 5 với hiệu suất gaming mạnh mẽ và thiết kế độc đáo, là lựa chọn hàng đầu cho game thủ.', 'Màn hình AMOLED 6.78 inch; Chipset Snapdragon 888; RAM 16GB; Bộ nhớ trong 512GB; Camera sau: 64MP. Pin 6000 mAh.', 230, 55, 13, 3, '2025-02-05 06:50:35', '2025-02-05 06:50:35'),
	(31, 'Nokia 8.3 5G', '', 17990000, 19990000, 'Nokia 8.3 5G với khả năng kết nối 5G và camera chất lượng, là lựa chọn cho những người yêu thích công nghệ mới.', 'Màn hình IPS LCD 6.81 inch; Chipset Snapdragon 765G; RAM 8GB; Bộ nhớ trong 128GB; Camera sau: 64MP. Pin 4500 mAh.', 150, 40, 7, 3, '2025-02-05 06:50:46', '2025-02-05 06:50:46'),
	(32, 'Motorola Edge 20', '', 13990000, 15990000, 'Motorola Edge 20 với thiết kế mỏng nhẹ và camera 108MP, mang đến trải nghiệm chụp ảnh ấn tượng.', 'Màn hình OLED 6.7 inch; Chipset Snapdragon 778G; RAM 8GB; Bộ nhớ trong 128GB; Camera sau: 108MP. Pin 4000 mAh.', 180, 25, 14, 3, '2025-02-05 06:50:58', '2025-02-05 06:50:58'),
	(33, 'Honor 50', '', 15990000, 17990000, 'Honor 50 với camera selfie 32MP và hiệu suất tốt, là lựa chọn cho giới trẻ yêu thích chụp ảnh.', 'Màn hình OLED 6.57 inch; Chipset Snapdragon 778G; RAM 8GB; Bộ nhớ trong 256GB; Camera sau: 108MP. Pin 4300 mAh.', 200, 50, 15, 3, '2025-02-05 06:51:11', '2025-02-05 06:51:11'),
	(34, 'ZTE Axon 20', '', 12990000, 14990000, 'ZTE Axon 20 với thiết kế màn hình vô cực và camera 32MP ẩn dưới màn hình.', 'Màn hình AMOLED 6.92 inch; Chipset Snapdragon 765G; RAM 8GB; Bộ nhớ trong 128GB; Camera sau: 64MP. Pin 4220 mAh.', 170, 60, 16, 3, '2025-02-05 06:51:20', '2025-02-05 06:51:20'),
	(35, 'LG Wing', '', 29990000, 31990000, 'LG Wing với thiết kế độc đáo và màn hình xoay, là lựa chọn cho những người tìm kiếm sự mới mẻ.', 'Màn hình chính P-OLED 6.8 inch; Chipset Snapdragon 765G; RAM 8GB; Bộ nhớ trong 128GB; Camera sau: 64MP. Pin 4000 mAh.', 160, 20, 5, 3, '2025-02-05 06:51:30', '2025-02-05 06:51:30'),
	(36, 'TCL 20 Pro 5G', '', 18990000, 20990000, 'TCL 20 Pro 5G với khả năng kết nối 5G và màn hình AMOLED sắc nét.', 'Màn hình AMOLED 6.67 inch; Chipset Snapdragon 750G; RAM 6GB; Bộ nhớ trong 256GB; Camera sau: 48MP. Pin 4500 mAh.', 190, 50, 17, 3, '2025-02-05 06:51:44', '2025-02-05 06:51:44'),
	(37, 'Alcatel 3X', '', 6990000, 9990000, 'Alcatel 3X với thiết kế đẹp và hiệu suất đủ dùng cho nhu cầu cơ bản.', 'Màn hình IPS LCD 6.52 inch; Chipset MediaTek Helio P22; RAM 4GB; Bộ nhớ trong 128GB; Camera sau: 16MP. Pin 5000 mAh.', 300, 100, 18, 3, '2025-02-05 06:51:55', '2025-02-05 06:51:55'),
	(38, 'Nokia G20', '', 8990000, 10990000, 'Nokia G20 với pin trâu và camera đa năng, là lựa chọn tốt cho người dùng bình dân.', 'Màn hình IPS LCD 6.52 inch; Chipset MediaTek Helio G35; RAM 4GB; Bộ nhớ trong 128GB; Camera sau: 48MP. Pin 5050 mAh.', 400, 150, 7, 3, '2025-02-05 06:52:11', '2025-02-05 06:52:11');

-- Dumping structure for table shopapp_online.sequelizemeta
CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- Dumping data for table shopapp_online.sequelizemeta: ~9 rows (approximately)
INSERT INTO `sequelizemeta` (`name`) VALUES
	('20250131105547-create-user.js'),
	('20250131123316-create-category.js'),
	('20250131124344-create-brand.js'),
	('20250131124636-create-news.js'),
	('20250131124733-create-banner.js'),
	('20250131130357-create-order.js'),
	('20250131135807-create-product.js'),
	('20250201132437-create-order-detail.js'),
	('20250201134006-create-banner-detail.js'),
	('20250201135419-create-feedback.js'),
	('20250201140632-create-news-detail.js');

-- Dumping structure for table shopapp_online.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `role` int DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `phone` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table shopapp_online.users: ~0 rows (approximately)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
