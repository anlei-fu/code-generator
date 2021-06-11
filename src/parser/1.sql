-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: contract_sign
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `contract_main`
--

DROP TABLE IF EXISTS `contract_main`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contract_main` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '合同编号',
  `user_id` int(11) DEFAULT NULL COMMENT '合同发起人',
  `contract_type` int(11) DEFAULT NULL COMMENT '合同类型',
  `contract_title` varchar(128) DEFAULT NULL COMMENT '合同标题',
  `raw_contract_file` varchar(128) DEFAULT NULL COMMENT '原始合同文件',
  `raw_contract_hash` varchar(128) DEFAULT NULL COMMENT '原始合同Hash',
  `sign_expire_time` datetime DEFAULT NULL COMMENT '签约截止日期',
  `contract_state` int(11) DEFAULT '20' COMMENT '合同状态',
  `sign_contract_file` varchar(128) DEFAULT NULL COMMENT '签约合同文件',
  `sign_contract_hash` varchar(128) DEFAULT NULL COMMENT '签约合同Hash',
  `effect_time` datetime DEFAULT NULL COMMENT '合同生效时间',
  `expire_time` datetime DEFAULT NULL COMMENT '合同失效时间',
  `valid_period` int(11) DEFAULT NULL COMMENT '合同有效期',
  `contract_price` int(11) DEFAULT NULL COMMENT '合同价格',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `contract_notary_record`
--

DROP TABLE IF EXISTS `contract_notary_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contract_notary_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `contract_id` int(11) DEFAULT NULL COMMENT '合同编号',
  `proposer` int(11) DEFAULT NULL COMMENT '公证申请人',
  `notary_channel` int(11) DEFAULT NULL COMMENT '公证渠道',
  `notary_status` int(11) DEFAULT NULL COMMENT '公证状态',
  `notary_start_time` datetime DEFAULT NULL COMMENT '公证发起时间',
  `notary_end_time` datetime DEFAULT NULL COMMENT '公证完成时间',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `contract_sign`
--

DROP TABLE IF EXISTS `contract_sign`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contract_sign` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '签约编号',
  `user_id` int(11) DEFAULT NULL COMMENT '用户编号',
  `sign_subject` varchar(64) DEFAULT NULL COMMENT '签署主体',
  `subject_type` int(11) DEFAULT NULL COMMENT '主体类型',
  `sign_person` varchar(64) DEFAULT NULL COMMENT '签署人',
  `sign_status` int(11) DEFAULT NULL COMMENT '签署状态',
  `sign_sort` int(11) DEFAULT NULL COMMENT '签署顺序',
  `need_pay` int(11) DEFAULT NULL COMMENT '需要付费',
  `notify_phone` varchar(64) DEFAULT NULL COMMENT '通知号码',
  `notify_email` varchar(64) DEFAULT NULL COMMENT '通知邮箱',
  `notify_count` int(11) DEFAULT NULL COMMENT '通知次数',
  `short_msg` varchar(256) DEFAULT NULL COMMENT '私信内容',
  `sign_url` varchar(128) DEFAULT NULL COMMENT '签署URL',
  `sign_time` datetime DEFAULT NULL COMMENT '签署时间',
  `sign_ip` varchar(16) DEFAULT NULL COMMENT '签署IP',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `contract_sign_record`
--

DROP TABLE IF EXISTS `contract_sign_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contract_sign_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `contract_id` int(11) DEFAULT NULL COMMENT '合同编号',
  `sign_id` int(11) DEFAULT NULL COMMENT '签约编号',
  `sign_person` varchar(32) DEFAULT NULL COMMENT '签署人',
  `sign_before_file` varchar(128) DEFAULT NULL COMMENT '签署前合同',
  `sign_before_hash` varchar(128) DEFAULT NULL COMMENT '签署前Hash',
  `sign_after_file` varchar(128) DEFAULT NULL COMMENT '签署后合同',
  `sign_after_hash` varchar(128) DEFAULT NULL COMMENT '签署后Hash',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `meal_config`
--

DROP TABLE IF EXISTS `meal_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meal_config` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '套餐编号',
  `meal_name` varchar(64) DEFAULT NULL COMMENT '套餐名称',
  `meal_type` int(11) DEFAULT NULL COMMENT '套餐类型',
  `remark` varchar(128) DEFAULT NULL COMMENT '套餐备注',
  `price` float DEFAULT NULL COMMENT '套餐价格',
  `discount` float DEFAULT NULL COMMENT '套餐折扣',
  `contracts` int(11) DEFAULT NULL COMMENT '合同份数',
  `status` int(11) DEFAULT NULL COMMENT '套餐状态',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `notary_channel`
--

DROP TABLE IF EXISTS `notary_channel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notary_channel` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '渠道编号',
  `channel_name` varchar(64) DEFAULT NULL COMMENT '渠道名称',
  `remark` varchar(128) DEFAULT NULL COMMENT '渠道备注',
  `api_url` varchar(128) DEFAULT NULL COMMENT '接口地址',
  `api_key` varchar(128) DEFAULT NULL COMMENT '接口key',
  `status` int(11) DEFAULT NULL COMMENT '状态',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `receipt_account`
--

DROP TABLE IF EXISTS `receipt_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `receipt_account` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `account_type` int(11) DEFAULT NULL COMMENT '账号类型',
  `account_name` varchar(32) DEFAULT NULL COMMENT '账号名称',
  `plat_app_id` varchar(32) DEFAULT NULL COMMENT '支付平台ID',
  `plat_app_secret` varchar(64) DEFAULT NULL COMMENT '支付平台Secret',
  `merchant_no` varchar(32) DEFAULT NULL COMMENT '商户编号',
  `sign_key` varchar(32) DEFAULT NULL COMMENT '签名KEY',
  `cert_path` varchar(128) DEFAULT NULL COMMENT '证书路径',
  `cert_pwd` varchar(32) DEFAULT NULL COMMENT '证书密码',
  `public_key` varchar(64) DEFAULT NULL COMMENT '加密公钥',
  `private_key` varchar(64) DEFAULT NULL COMMENT '解密验签私钥',
  `balance` float DEFAULT NULL COMMENT '账户余额',
  `auth_redirect_url` varchar(128) DEFAULT NULL COMMENT 'API授权跳转URL',
  `pay_redirect_url` varchar(128) DEFAULT NULL COMMENT '支付完跳转URL',
  `pay_callback_url` varchar(128) DEFAULT NULL COMMENT '支付结果回调URL',
  `refund_callback_url` varchar(128) DEFAULT NULL COMMENT '退款结果回调URL',
  `status` int(11) DEFAULT NULL COMMENT '状态',
  `remark` varchar(128) DEFAULT NULL COMMENT '备注',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `system_contract_template`
--

DROP TABLE IF EXISTS `system_contract_template`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `system_contract_template` (
  `id` int(11) DEFAULT NULL COMMENT '编号',
  `contract_type` int(11) DEFAULT NULL COMMENT '合同分类',
  `contract_name` varchar(64) DEFAULT NULL COMMENT '合同名称',
  `contract_file` varchar(128) DEFAULT NULL COMMENT '合同内容',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `system_dictionary`
--

DROP TABLE IF EXISTS `system_dictionary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `system_dictionary` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `type` varchar(32) DEFAULT NULL COMMENT '字典类型',
  `value` varchar(32) DEFAULT NULL COMMENT '字典值',
  `sort_num` int(11) DEFAULT NULL COMMENT '字典排序',
  `remark` varchar(128) DEFAULT NULL COMMENT '字典备注',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `system_log`
--

DROP TABLE IF EXISTS `system_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `system_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `module` varchar(64) DEFAULT NULL COMMENT '模块名称',
  `summary` varchar(128) DEFAULT NULL COMMENT '日志摘要',
  `content` varchar(256) DEFAULT NULL COMMENT '日志内容',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_account_info`
--

DROP TABLE IF EXISTS `user_account_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_account_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户编号',
  `account_type` int(11) DEFAULT NULL COMMENT '账号类型: 1-手机 2-邮箱 3-支付宝小程序',
  `user_name` varchar(32) DEFAULT NULL COMMENT '登录账号',
  `login_pwd` varchar(32) DEFAULT NULL COMMENT '登录密码',
  `verify_state` int(11) DEFAULT '20' COMMENT '实名状态',
  `alipay_mpid` varchar(32) DEFAULT NULL COMMENT '支付宝小程序UID',
  `last_login_ip` varchar(16) DEFAULT NULL COMMENT '上次登录IP',
  `last_login_time` datetime DEFAULT NULL COMMENT '上次登录时间',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_company_info`
--

DROP TABLE IF EXISTS `user_company_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_company_info` (
  `id` int(11) NOT NULL COMMENT '企业编号',
  `user_id` int(11) DEFAULT NULL COMMENT '用户编号',
  `company_name` varchar(128) DEFAULT NULL COMMENT '企业名称',
  `contact_address` varchar(128) DEFAULT NULL COMMENT '企业地址',
  `license_no` varchar(64) DEFAULT NULL COMMENT '营业执照号',
  `legal_person` varchar(64) DEFAULT NULL COMMENT '企业法人',
  `contact_phone` varchar(24) DEFAULT NULL COMMENT '法人联系电话',
  `id_card_no` varchar(32) DEFAULT NULL COMMENT '法人身份证号',
  `id_card_pic_front` varchar(128) DEFAULT NULL COMMENT '法人身份证国徽照',
  `id_card_pic_back` varchar(128) DEFAULT NULL COMMENT '法人身份证人像照',
  `license_pic_front` varchar(128) DEFAULT NULL COMMENT '企业营业执照',
  `verify_state` int(11) DEFAULT NULL COMMENT '认证状态',
  `verify_start_time` datetime DEFAULT NULL COMMENT '认证开始时间',
  `verify_end_time` datetime DEFAULT NULL COMMENT '认证完成时间',
  `authorizer` varchar(32) DEFAULT NULL COMMENT '授权签署人',
  `auth_id_no` varchar(32) DEFAULT NULL COMMENT '授权人身份证号',
  `auth_file` varchar(128) DEFAULT NULL COMMENT '授权文件',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_consume_record`
--

DROP TABLE IF EXISTS `user_consume_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_consume_record` (
  `id` int(11) NOT NULL COMMENT '编号',
  `account_id` int(11) DEFAULT NULL COMMENT '账户编号',
  `contract_id` int(11) DEFAULT NULL COMMENT '合同编号',
  `consume_type` int(11) DEFAULT NULL COMMENT '消费类型',
  `consume_amount` int(11) DEFAULT NULL COMMENT '消费份数',
  `consume_before` int(11) DEFAULT NULL COMMENT '消费前剩余',
  `consume_after` int(11) DEFAULT NULL COMMENT '消费后剩余',
  `remark` varchar(128) DEFAULT NULL COMMENT '备注',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_contact_info`
--

DROP TABLE IF EXISTS `user_contact_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_contact_info` (
  `id` int(11) NOT NULL COMMENT '编号',
  `user_id` int(11) DEFAULT NULL COMMENT '用户编号',
  `contract_name` varchar(64) DEFAULT NULL COMMENT '联系人',
  `contract_phone` varchar(24) DEFAULT NULL COMMENT '联系电话',
  `contract_email` varchar(32) DEFAULT NULL COMMENT '联系邮箱',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_contract_template`
--

DROP TABLE IF EXISTS `user_contract_template`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_contract_template` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `user_id` int(11) DEFAULT NULL COMMENT '创建人编号',
  `belong_type` int(11) DEFAULT NULL COMMENT '模板归属类型',
  `belong_id` int(11) DEFAULT NULL COMMENT '模板归属编号',
  `contract_name` varchar(64) DEFAULT NULL COMMENT '合同名称',
  `contract_file` varchar(128) DEFAULT NULL COMMENT '合同文件',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1044 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_purchase_record`
--

DROP TABLE IF EXISTS `user_purchase_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_purchase_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `user_id` int(11) DEFAULT NULL COMMENT '用户编号',
  `contract_type` int(11) DEFAULT NULL COMMENT '合同类型',
  `meal_id` int(11) DEFAULT NULL COMMENT '套餐编号',
  `meal_price` float DEFAULT NULL COMMENT '套餐价格',
  `contract_count` int(11) DEFAULT NULL COMMENT '套餐合同份数',
  `purchase_before` int(11) DEFAULT NULL COMMENT '合同份数(购买前)',
  `purchase_after` int(11) DEFAULT NULL COMMENT '合同份数(购买后)',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_real_info`
--

DROP TABLE IF EXISTS `user_real_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_real_info` (
  `user_id` int(11) NOT NULL COMMENT '用户编号',
  `real_name` varchar(32) DEFAULT NULL COMMENT '用户姓名',
  `id_card_no` varchar(24) DEFAULT NULL COMMENT '身份证号',
  `id_card_pic_front` varchar(128) DEFAULT NULL COMMENT '身份证国徽照',
  `id_card_pic_back` varchar(128) DEFAULT NULL COMMENT '身份证人像照',
  `id_card_pic_hand` varchar(128) DEFAULT NULL COMMENT '身份证手持照',
  `verify_start_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '认证开始时间',
  `verify_end_time` datetime DEFAULT NULL COMMENT '认证完成时间',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_sign_seal`
--

DROP TABLE IF EXISTS `user_sign_seal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_sign_seal` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `user_id` int(11) DEFAULT NULL COMMENT '创建人编号',
  `belong_type` int(11) DEFAULT NULL COMMENT '签章归属类型',
  `belong_id` int(11) DEFAULT NULL COMMENT '签章归属编号',
  `sign_name` varchar(64) DEFAULT NULL COMMENT '签章名称',
  `sign_pic` varchar(128) DEFAULT NULL COMMENT '签章图片',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_wallet`
--

DROP TABLE IF EXISTS `user_wallet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_wallet` (
  `id` int(11) NOT NULL COMMENT '编号',
  `user_id` int(11) DEFAULT NULL COMMENT '用户编号',
  `person_balance` int(11) DEFAULT NULL COMMENT '个人余额(份数)',
  `company_balance` int(11) DEFAULT NULL COMMENT '企业余额(份数)',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-11 10:56:25
