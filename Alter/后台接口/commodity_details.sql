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

/*Table structure for table `commodity_details` */

DROP TABLE IF EXISTS `commodity_details`;

CREATE TABLE `commodity_details` (
  `name` varchar(50) NOT NULL,
  `price` double NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brand` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `derive` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `date` date DEFAULT NULL,
  `prototype` varchar(50) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `ratio` varchar(50) DEFAULT NULL,
  `age` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `goodsImg` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `limitation` int(5) DEFAULT NULL,
  `attr` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `heat` int(11) NOT NULL DEFAULT '0',
  `status` int(1) NOT NULL COMMENT '1 表示已上线 0 表示下线状态',
  `createTime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `commodity_details` */

insert  into `commodity_details`(`name`,`price`,`id`,`brand`,`type`,`derive`,`date`,`prototype`,`category`,`ratio`,`age`,`goodsImg`,`limitation`,`attr`,`heat`,`status`,`createTime`) values ('天之濑冬马',740,10,'ALTAiR','AL20610','偶像大师 SideM','2020-04-30','ソガ氏（モワノー）','PVC涂装完成品','１／８（全高：约２３０ｍｍ）','15','goodsImg_1587651147731.jpg,goodsImg_1587651147875.jpg,goodsImg_1587651147952.jpg,goodsImg_1587651147954.jpg,goodsImg_1587651147955.jpg,goodsImg_1587651147993.jpg,goodsImg_1587651147994.jpg,goodsImg_1587651147995.jpg',3,'attr_1587114849704.jpg',7,1,'2020-04-23 22:12:27'),('园田海未 白色情人节篇',945,14,'ALTAiR','AL20602','《Love Live! 学园偶像祭》','2020-04-20','飞田崇文','PVC涂装完成品','１／７（全高：约150mm）','15','goodsImg_1587363316441.jpg,goodsImg_1587363316475.jpg,goodsImg_1587363316477.jpg,goodsImg_1587363316480.jpg,goodsImg_1587363316482.jpg,goodsImg_1587363316497.jpg,goodsImg_1587363316540.jpg,goodsImg_1587363316542.jpg,goodsImg_1587363316560.jpg',1,'attr_1587363316413.jpg',0,1,'2020-04-20 14:15:16'),('时崎狂三',990,15,'ALTAiR','AL20486','剧场版 约会大作战 万由里裁决','2020-04-20','明田川昇','PVC涂装完成品','１／８（全高：约220mm）','15','goodsImg_1587370564888.jpg,goodsImg_1587370564894.jpg,goodsImg_1587370564896.jpg,goodsImg_1587370565236.jpg,goodsImg_1587370565371.jpg,goodsImg_1587370565372.jpg,goodsImg_1587370565373.jpg,goodsImg_1587370565374.jpg',1,'attr_1587370564881.jpg',0,1,'2020-04-20 16:16:04'),('吸血鬼',863,16,'ALTER','AL20495','《碧蓝航线》','2020-04-21','いまい＋けんぞー（モワノー）','PVC涂装完成品','1/7 全高：约220mm','15','goodsImg_1587458082977.jpg,goodsImg_1587458082983.jpg,goodsImg_1587458082987.jpg,goodsImg_1587458082990.jpg,goodsImg_1587458082997.jpg,goodsImg_1587458083105.jpg,goodsImg_1587458083106.jpg,goodsImg_1587458083108.jpg',1,'attr_1587458082973.jpg',0,1,'2020-04-21 16:34:42'),('二宫飞鸟 《偶像》的碎片Ver.',1200,18,'ALTAiR','AL20603','偶像大师灰姑娘女孩','2020-04-23','本宫あまと','PVC涂装完成品','１／７（全高：约320mm   头顶高：约220mm）','15','goodsImg_1587651420799.jpg,goodsImg_1587651420800.jpg,goodsImg_1587651420802.jpg,goodsImg_1587651421148.jpg,goodsImg_1587651421150.jpg,goodsImg_1587651421151.jpg,goodsImg_1587651421153.jpg,goodsImg_1587651421155.jpg',1,'attr_1587651420798.jpg',2,1,'2020-04-23 22:17:00'),('南小鸟 白色情人节篇',863,19,'ALTAiR','AL20601','《Love Live! 学园偶像祭》','2020-04-23','稻垣洋+飞田崇文','PVC涂装完成品','１／７（全高：约150mm）','15','goodsImg_1587651648688.jpg,goodsImg_1587651648689.jpg,goodsImg_1587651648690.jpg,goodsImg_1587651649019.jpg,goodsImg_1587651649020.jpg,goodsImg_1587651649021.jpg,goodsImg_1587651649022.jpg,goodsImg_1587651649024.jpg,goodsImg_1587651649025.jpg',3,'attr_1587651648687.jpg',0,1,'2020-04-23 22:20:48'),('塞巴 和风礼服Ver',945,20,'ALTER','AL20488','Fate/Stay Night','2020-04-23','sai','PVC涂装完成品','１／７（全高：约２５０ｍｍ）※包含底座','15','goodsImg_1587651896444.jpg,goodsImg_1587651896445.jpg,goodsImg_1587651896447.jpg,goodsImg_1587651896448.jpg,goodsImg_1587651896449.jpg,goodsImg_1587651896452.jpg,goodsImg_1587651896453.jpg,goodsImg_1587651896454.jpg',5,'attr_1587651896340.jpg',0,1,'2020-04-23 22:24:56'),('绚濑绘里',956,21,'ALTAiR','AL20449','《Love Live! 学园偶像祭》','2020-04-23','飞田崇文','PVC涂装完成品','１／７（全高：约240mm ）','15','goodsImg_1587652107957.jpg,goodsImg_1587652107961.jpg,goodsImg_1587652107963.jpg,goodsImg_1587652107964.jpg,goodsImg_1587652108060.jpg,goodsImg_1587652108062.jpg,goodsImg_1587652108063.jpg,goodsImg_1587652108064.jpg,goodsImg_1587652108065.jpg',0,'attr_1587652107951.jpg',0,1,'2020-04-23 22:28:27'),('桐须真冬 竞技泳装Ver.',740,22,'ALTAiR','AL20628','我们无法一起学习','2020-12-01','爪塚 ヒロユキ','PVC涂装完成品','１／７  全高：约230mm','15','goodsImg_1587797180120.jpg,goodsImg_1587797180145.jpg,goodsImg_1587797180147.jpg,goodsImg_1587797180148.jpg,goodsImg_1587797180152.jpg,goodsImg_1587797180153.jpg,goodsImg_1587797180155.jpg,goodsImg_1587797180156.jpg',3,'attr_1587797180015.jpg',1,1,'2020-04-25 14:46:19'),('爱丽丝',1225,23,'ALTAiR','AL20623','爱丽丝','2020-12-02','稻垣洋','PVC涂装完成品','１／８  全高：约190mm（含底座）','15','goodsImg_1587797386251.jpg,goodsImg_1587797386256.jpg,goodsImg_1587797386259.jpg,goodsImg_1587797386357.jpg,goodsImg_1587797386359.jpg,goodsImg_1587797386360.jpg,goodsImg_1587797386362.jpg,goodsImg_1587797386363.jpg',1,'attr_1587797386245.jpg',0,1,'2020-04-25 14:49:46'),('籾冈里纱',800,24,'ALTAiR','AL20621','出包王女Darkness','2020-06-27','てるゆき＋DUTCH','PVC涂装完成品','１／７  全高：约140mm（含底座）','15','goodsImg_1587797570470.jpg,goodsImg_1587797570472.jpg,goodsImg_1587797570948.jpg,goodsImg_1587797570949.jpg,goodsImg_1587797570958.jpg,goodsImg_1587797570961.jpg,goodsImg_1587797570963.jpg,goodsImg_1587797570965.jpg',1,'attr_1587797570469.jpg',0,1,'2020-04-25 14:52:50'),('古手川 唯【再版】',740,25,'ALTAiR','AL20627','出包王女Darkness','2020-06-28','てるゆき 原型協力：ALTER','PVC涂装完成品','１／７  全高：约230mm','15','goodsImg_1587797777376.jpg,goodsImg_1587797777377.jpg,goodsImg_1587797777713.jpg,goodsImg_1587797777753.jpg,goodsImg_1587797777754.jpg,goodsImg_1587797777755.jpg,goodsImg_1587797777756.jpg,goodsImg_1587797777756.jpg',3,'attr_1587797777374.jpg',0,1,'2020-04-25 14:56:17'),('南 小鸟【再版】',740,26,'ALTAiR','AL20389','《Love Live! 学园偶像祭》','2020-04-24','taka（小抹香）','PVC涂装完成品','１／７（全高：约230mm）','15','goodsImg_1587798038278.jpg,goodsImg_1587798038622.jpg,goodsImg_1587798038623.jpg,goodsImg_1587798038624.jpg,goodsImg_1587798038625.jpg,goodsImg_1587798038626.jpg,goodsImg_1587798038636.jpg,goodsImg_1587798038637.jpg,goodsImg_1587798038638.jpg',5,'attr_1587798038275.jpg',4,1,'2020-04-25 15:00:38'),('高坂穗乃果',738,27,'ALTAiR','AL20450','《Love Live! 学园偶像祭》','2020-04-01','てるゆき＋DUTCH','PVC涂装完成品','１／７（全高：约240mm *含底座）','15','goodsImg_1587798215741.jpg,goodsImg_1587798215743.jpg,goodsImg_1587798215745.jpg,goodsImg_1587798216080.jpg,goodsImg_1587798216081.jpg,goodsImg_1587798216081.jpg,goodsImg_1587798216083.jpg,goodsImg_1587798216086.jpg,goodsImg_1587798216088.jpg',1,'attr_1587798215738.jpg',0,1,'2020-04-25 15:03:35'),('园田海未',822,28,'ALTAiR','AL20437','《Love Live! 学园偶像祭》','2020-04-02','sai','PVC涂装完成品','１／７（全高：约２００ｍｍ）','15','goodsImg_1587798382550.jpg,goodsImg_1587798382554.jpg,goodsImg_1587798382891.jpg,goodsImg_1587798382892.jpg,goodsImg_1587798382893.jpg,goodsImg_1587798382894.jpg,goodsImg_1587798382895.jpg',1,'attr_1587798382545.jpg',0,1,'2020-04-27 10:06:59');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
