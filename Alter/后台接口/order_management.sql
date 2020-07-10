/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 8.0.16 : Database - xiangmu
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`xiangmu` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `xiangmu`;

/*Table structure for table `order_management` */

DROP TABLE IF EXISTS `order_management`;

CREATE TABLE `order_management` (
  `account` varchar(20) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(5) NOT NULL,
  `time` timestamp NOT NULL,
  `status1` int(2) NOT NULL,
  `order_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `consignee` varchar(20) NOT NULL,
  `region` varchar(20) NOT NULL,
  `address` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `phone` varchar(11) NOT NULL,
  `tel` varchar(20) DEFAULT NULL,
  `leave_word` varchar(100) DEFAULT NULL,
  `freight` int(3) DEFAULT NULL,
  `postcode` int(10) DEFAULT NULL,
  PRIMARY KEY (`account`,`id`,`order_id`),
  KEY `order_id` (`order_id`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `order_management` */

insert  into `order_management`(`account`,`id`,`quantity`,`time`,`status1`,`order_id`,`consignee`,`region`,`address`,`phone`,`tel`,`leave_word`,`freight`,`postcode`) values ('fl962464',15,2,'2020-04-21 00:00:00',1,'123456789123','张三','长沙','雨花区','13456789111','123456','留言',0,410002),('fl962464',21,1,'2020-04-23 19:44:13',1,'455154525458','张三','长沙','雨花区','15642012545','84563214','亮度和放醋',0,412545),('fl962464',26,1,'2020-04-26 21:15:56',1,'fl9624642142261','zzh','内蒙古自治区','安徽拌豆腐就开始','1235456',NULL,NULL,0,42135),('weijun',16,1,'2020-04-25 20:56:44',0,'weijun2169161','zzh','内蒙古自治区','安徽拌豆腐就开始','1235456',NULL,NULL,0,42135),('weijun',18,1,'2020-04-27 09:25:17',1,'weijun2102181','韦军123','内蒙古自治区','云南楚雄','15632025478',NULL,NULL,0,425410),('weijun',18,1,'2020-04-27 09:23:22',0,'weijun2105181','韦军','内蒙古自治区','云南楚雄','15632025478',NULL,NULL,0,425410),('weijun',22,1,'2020-04-26 20:56:37',0,'weijun2163221','zzh','内蒙古自治区','安徽拌豆腐就开始','1235456',NULL,NULL,0,42135);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
