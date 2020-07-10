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

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `account` char(20) NOT NULL DEFAULT '',
  `real1` char(20) CHARACTER SET gbk COLLATE gbk_chinese_ci DEFAULT NULL,
  `address` varchar(100) CHARACTER SET gbk COLLATE gbk_chinese_ci DEFAULT NULL,
  `postcode` int(10) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `Email` char(20) DEFAULT NULL,
  `tel` int(20) DEFAULT NULL,
  `qq` char(15) DEFAULT NULL,
  `password` char(20) NOT NULL,
  `status` int(1) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `consignee` varchar(20) DEFAULT NULL,
  `region` varchar(20) DEFAULT NULL,
  `acquiescent` int(1) DEFAULT '0',
  PRIMARY KEY (`account`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=gbk;

/*Data for the table `user` */

insert  into `user`(`account`,`real1`,`address`,`postcode`,`phone`,`Email`,`tel`,`qq`,`password`,`status`,`id`,`consignee`,`region`,`acquiescent`) values ('asd123123',NULL,NULL,NULL,NULL,'123132@120.com',NULL,NULL,'123123',NULL,38,NULL,NULL,0),('ertt','www',NULL,40000,'13984563212','ccc@.qqcom',NULL,'1452365120','789412035',NULL,2,NULL,NULL,0),('fl962464','张游12','安徽拌豆腐就开始',42135,'1235456','123132@120.com',NULL,'576691054','123123',NULL,36,'','内蒙古自治区',1),('www','这是','长沙',400102,'45612345','qwe@qq.com',NULL,'123456789','456789123',NULL,8,NULL,NULL,0),('XDDDB','张三',NULL,NULL,NULL,'123@qq.com',NULL,'1234567891','123456789',NULL,6,NULL,NULL,0),('zhh',NULL,NULL,NULL,'18975643124','165@zbd.com',NULL,NULL,'456789123',NULL,7,NULL,NULL,0),('zy123123',NULL,NULL,NULL,NULL,'123132@120.com',NULL,NULL,'123456',NULL,37,NULL,NULL,0),('zy962464','张游','重庆铜梁',402560,'15023750787',NULL,NULL,'279746735','123456789',NULL,9,NULL,NULL,0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
