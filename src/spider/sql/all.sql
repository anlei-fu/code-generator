-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: new_system
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
-- Table structure for table `bind_record`
--

DROP TABLE IF EXISTS `bind_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bind_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `crawl_task_id` int(11) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `bind_msg` varchar(100) DEFAULT NULL,
  `bind_result` smallint(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cookie`
--

DROP TABLE IF EXISTS `cookie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cookie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `site_account_id` int(11) NOT NULL,
  `cookie` text NOT NULL,
  `login_ip` varchar(45) DEFAULT NULL,
  `current_block_count` int(11) DEFAULT '0',
  `current_use_count` int(11) NOT NULL DEFAULT '0',
  `delay_timeout_time` timestamp NULL DEFAULT NULL,
  `expire_time` timestamp NULL DEFAULT NULL,
  `enabel_status` smallint(6) NOT NULL DEFAULT '1',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cookie_block_record`
--

DROP TABLE IF EXISTS `cookie_block_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cookie_block_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `current_use_count` int(11) DEFAULT NULL,
  `cookie_id` varchar(45) DEFAULT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `crawl_task`
--

DROP TABLE IF EXISTS `crawl_task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crawl_task` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` int(11) NOT NULL,
  `down_system_site_id` int(11) NOT NULL COMMENT 'the site task belong to',
  `task_timeout_time` timestamp NULL DEFAULT NULL,
  `task_status` smallint(6) DEFAULT '0',
  `data_sync_status` smallint(6) DEFAULT '0',
  `task_execute_result_type` smallint(6) DEFAULT '0' COMMENT 'task execute result',
  `bind_timeout_time` timestamp NULL DEFAULT NULL,
  `bind_last_result` smallint(6) NOT NULL DEFAULT '0',
  `bind_last_msg` varchar(45) DEFAULT NULL,
  `bind_last_time` timestamp NULL DEFAULT NULL,
  `bind_count` int(11) NOT NULL DEFAULT '0',
  `dispatch_last_result` smallint(6) DEFAULT '0' COMMENT 'task status',
  `dispatch_last_time` timestamp NULL DEFAULT NULL,
  `dispatch_last_msg` varchar(45) DEFAULT NULL,
  `dispatch_count` int(11) DEFAULT '0',
  `cookie_id` int(11) NOT NULL DEFAULT '-1',
  `proxy_id` int(11) DEFAULT '-1' COMMENT 'the proxy the task used',
  `crawler_id` int(11) NOT NULL DEFAULT '-1' COMMENT 'the crawler which run the task',
  `task_start_time` timestamp NULL DEFAULT NULL COMMENT 'the time task start to excute',
  `task_finish_time` timestamp NULL DEFAULT NULL COMMENT 'the time that task finished',
  `url_sync_status` smallint(6) DEFAULT '0',
  `success_url_count` int(11) DEFAULT '-1' COMMENT 'the url count that crawl successfully',
  `url_failed_count` int(11) DEFAULT '-1' COMMENT 'the url count that crawl failed',
  `url_new_count` int(11) DEFAULT '-1' COMMENT 'the url count that newly detected',
  `url_bad_count` int(11) DEFAULT '-1' COMMENT 'the bad url count',
  `average_speed_of_all` int(11) DEFAULT '-1' COMMENT 'the average speed of all url',
  `average_speed_of_success` int(11) DEFAULT '-1' COMMENT 'the average speed ofsuccess url',
  `mean_speed_of_success` int(11) DEFAULT '-1' COMMENT 'the mean speed of all url',
  `max_speed_of_success` int(11) DEFAULT '-1' COMMENT 'the max speed of all success url',
  `enable_status` smallint(6) NOT NULL DEFAULT '1' COMMENT 'enable status',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'the time that task created',
  PRIMARY KEY (`id`),
  KEY `down_system_site_id_key` (`down_system_site_id`) /*!80000 INVISIBLE */,
  KEY `site_key` (`site_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='task info';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `crawler`
--

DROP TABLE IF EXISTS `crawler`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crawler` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'the identifier of crawler',
  `client_version` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL COMMENT 'the name of crawler',
  `ip` varchar(45) NOT NULL COMMENT 'the ip of crawler',
  `local_ip` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL COMMENT 'the description of crawler',
  `crawler_type` smallint(6) DEFAULT NULL,
  `key` varchar(45) DEFAULT NULL COMMENT 'the secrete key of crawler',
  `unique_id` varchar(45) NOT NULL COMMENT 'the unique id of crawler',
  `port` int(11) NOT NULL COMMENT 'the port of crawler',
  `max_concurrency` int(11) DEFAULT '200' COMMENT 'the max concurrency the crawler allowed',
  `current_concurrency` int(11) DEFAULT '0' COMMENT 'the current concurrency',
  `heartbeat_status` smallint(6) DEFAULT '0',
  `heartbeat_last_time` timestamp NULL DEFAULT NULL COMMENT 'last heartbeat time',
  `heartbeat_lost_count` int(11) DEFAULT '0',
  `enable_status` smallint(6) DEFAULT '0' COMMENT 'enable status',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'create time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='crawler info';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `dictionary`
--

DROP TABLE IF EXISTS `dictionary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dictionary` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'identifier pk ',
  `type` varchar(45) NOT NULL COMMENT 'type of enum,not null',
  `value` smallint(8) NOT NULL COMMENT 'value of enum ,not null',
  `label` varchar(45) NOT NULL COMMENT 'label of enum',
  `create_user` varchar(45) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_user` varchar(45) DEFAULT NULL,
  `last_update_time` timestamp NULL DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=245 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='enum value- name map';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `dispatch_record`
--

DROP TABLE IF EXISTS `dispatch_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dispatch_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `crawl_task_id` int(11) DEFAULT NULL,
  `dispatch_result` smallint(6) DEFAULT NULL,
  `dispatch_msg` varchar(45) DEFAULT NULL,
  `create_time` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `down_system`
--

DROP TABLE IF EXISTS `down_system`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `down_system` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `priority` int(11) NOT NULL DEFAULT '1',
  `description` varchar(200) DEFAULT NULL,
  `app_key` varchar(45) DEFAULT NULL,
  `app_secret` varchar(45) DEFAULT NULL,
  `data_url` varchar(100) DEFAULT NULL,
  `data_queue` varchar(45) DEFAULT NULL,
  `task_max_running_count` int(11) NOT NULL DEFAULT '10',
  `task_current_running_count` int(11) NOT NULL DEFAULT '0',
  `url_total_count` int(11) DEFAULT '0',
  `url_finished_count` int(11) DEFAULT '0',
  `url_bad_count` int(11) DEFAULT '0',
  `enable_status` smallint(6) DEFAULT '1',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `down_system_crawl_job`
--

DROP TABLE IF EXISTS `down_system_crawl_job`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `down_system_crawl_job` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `down_system_id` int(11) NOT NULL,
  `job_date_type` smallint(6) NOT NULL DEFAULT '1',
  `date_value` smallint(6) NOT NULL,
  `enable_Status` smallint(6) DEFAULT '1',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `down_system_site`
--

DROP TABLE IF EXISTS `down_system_site`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `down_system_site` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` int(11) NOT NULL,
  `script_id` int(11) DEFAULT NULL,
  `down_system_id` int(11) DEFAULT NULL,
  `priority` int(11) DEFAULT '1',
  `account_type` smallint(6) DEFAULT NULL,
  `account_need_validated` smallint(6) DEFAULT NULL,
  `crawler_page_encoding` varchar(45) DEFAULT 'utf8',
  `crawler_page_headers` varchar(200) DEFAULT NULL,
  `crawler_page_timeout` int(11) DEFAULT '20',
  `crawler_crawl_type` smallint(6) DEFAULT '1',
  `crawler_auto_download_page` smallint(6) DEFAULT '1',
  `url_total_count` int(11) DEFAULT '0',
  `url_max_cache_count` int(11) DEFAULT '3000',
  `url_finished_count` int(11) DEFAULT '0',
  `url_bad_count` int(11) DEFAULT '0',
  `url_encodes` varchar(500) DEFAULT NULL,
  `url_max_crawl_count` smallint(6) DEFAULT '3',
  `url_match_patterns` varchar(500) DEFAULT NULL,
  `url_max_depth` int(11) DEFAULT '10',
  `bloom_expected_url_size` int(11) DEFAULT '1000000',
  `bloom_fpp` float DEFAULT '0.35',
  `bloom` longtext,
  `bloom_initialized` smallint(6) DEFAULT NULL,
  `bloom_loading_status` smallint(6) DEFAULT '0',
  `bloom_last_dump_time` timestamp NULL DEFAULT NULL,
  `task_url_batch_count` int(11) DEFAULT '300',
  `task_max_wait_to_bind_count` int(11) DEFAULT '10',
  `task_bind_timeout` int(11) DEFAULT '5',
  `task_current_bind_count` int(11) DEFAULT '0',
  `task_max_running_count` int(11) DEFAULT '10',
  `task_current_running_count` int(11) DEFAULT '0',
  `task_timeout` int(11) DEFAULT '120',
  `enable_status` smallint(6) DEFAULT '1',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `down_system_site_crawl_job`
--

DROP TABLE IF EXISTS `down_system_site_crawl_job`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `down_system_site_crawl_job` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `down_system_site_id` int(11) NOT NULL,
  `job_date_type` smallint(6) NOT NULL DEFAULT '1',
  `enable_status` smallint(6) NOT NULL DEFAULT '1',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`,`job_date_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `proxy`
--

DROP TABLE IF EXISTS `proxy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proxy` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'identifier',
  `ip` varchar(45) NOT NULL COMMENT 'the host:port of proxy server',
  `port` int(11) NOT NULL,
  `account` varchar(45) DEFAULT NULL COMMENT 'the account of the proxy',
  `password` varchar(45) DEFAULT NULL COMMENT 'the password of the proxy',
  `protocol` varchar(45) DEFAULT NULL COMMENT 'the protocol that proxy used',
  `proxy_type` smallint(6) DEFAULT '1' COMMENT 'the type of proxy',
  `max_use_count` int(11) DEFAULT '10' COMMENT 'the max use count of proxy',
  `current_use_count` int(11) DEFAULT '0' COMMENT 'the current use count of proxy',
  `block_max_count` int(11) DEFAULT '10',
  `block_current_count` int(11) DEFAULT '0',
  `block_timeout` int(11) DEFAULT '30',
  `block_timeout_time` timestamp NULL DEFAULT NULL,
  `enable_status` smallint(6) DEFAULT '1' COMMENT 'enable status',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'create time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='proxy info';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `script`
--

DROP TABLE IF EXISTS `script`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `script` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id: identifier key',
  `path` varchar(200) NOT NULL COMMENT 'script path',
  `down_system_site_id` int(11) NOT NULL COMMENT 'site the script belong to',
  `script_type` smallint(6) DEFAULT NULL COMMENT 'type of script',
  `description` varchar(200) DEFAULT NULL COMMENT 'script usage',
  `enable_status` smallint(6) DEFAULT '1' COMMENT 'enable status',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'create time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='script info';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `site`
--

DROP TABLE IF EXISTS `site`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `site` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL COMMENT 'the name of site',
  `domain` varchar(45) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL COMMENT 'the description of site',
  `home_page_url` varchar(100) DEFAULT NULL COMMENT 'the home page url of site',
  `parent_site_id` int(11) DEFAULT '-1' COMMENT 'the parent site of the site',
  `crawl_need_use_cookie` smallint(6) DEFAULT '0' COMMENT 'need use cookie',
  `login_script_id` int(11) DEFAULT '1' COMMENT 'the login script of the site',
  `login_need_vcode` smallint(6) DEFAULT '0' COMMENT 'login need vcode',
  `login_capta_type` smallint(6) DEFAULT '-1' COMMENT 'the captaa type of the site',
  `need_use_proxy` smallint(6) DEFAULT '0' COMMENT 'need proxy',
  `ip_delay_timeout` int(11) DEFAULT '180' COMMENT 'ip delay timeout when crawl success',
  `ip_block_timeout` int(11) DEFAULT '120' COMMENT 'ip block timeout when task be blocked',
  `ip_minute_speed_limit` int(11) DEFAULT '100',
  `ip_hour_speed_limit` int(11) DEFAULT '2000',
  `ip_day_speed_limit` int(11) DEFAULT '20000',
  `account_allow_cross_ip` smallint(6) DEFAULT '1',
  `account_allow_multiple` smallint(6) DEFAULT '1' COMMENT 'allow use an account multiple times',
  `account_minute_speed_limit` int(11) DEFAULT '40',
  `account_hour_speed_limit` int(11) DEFAULT '500',
  `account_day_speed_limit` int(11) DEFAULT '5000',
  `account_max_use_count` int(11) DEFAULT '10',
  `account_max_block_count` int(11) DEFAULT '6',
  `account_block_timeout` int(11) DEFAULT '10',
  `account_max_cookie_count` int(11) DEFAULT '5',
  `account_delay_timeout` int(11) DEFAULT '3',
  `cookie_max_use_count` int(11) DEFAULT '3',
  `cookie_max_block_count` int(11) DEFAULT '5',
  `cookie_expire_timeout` int(11) DEFAULT '30' COMMENT 'the timeout ookie expire',
  `cookie_delay_timeout` int(11) DEFAULT '5',
  `enable_status` smallint(6) DEFAULT '1',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'create time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='site info';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `site_account`
--

DROP TABLE IF EXISTS `site_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `site_account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(45) NOT NULL,
  `login_type` smallint(6) DEFAULT '1',
  `account_type` smallint(6) DEFAULT '-1',
  `validated` smallint(6) DEFAULT '0',
  `nick_name` varchar(45) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL COMMENT 'description  of account',
  `site_id` int(11) NOT NULL COMMENT 'the site that account belong',
  `phone` varchar(11) DEFAULT NULL COMMENT 'the phone of account',
  `email` varchar(45) DEFAULT NULL COMMENT 'the email of account',
  `password` varchar(45) DEFAULT NULL COMMENT 'the password of account',
  `last_login_time` timestamp NULL DEFAULT NULL COMMENT 'the time that account last login',
  `last_login_ip` varchar(45) DEFAULT NULL COMMENT 'the ip that the account last login',
  `current_use_count` int(11) DEFAULT '0' COMMENT 'the current use count of the account ',
  `block_current_count` int(11) DEFAULT '0',
  `block_timeout_time` timestamp NULL DEFAULT NULL,
  `delay_timeout_time` timestamp NULL DEFAULT NULL,
  `enable_status` smallint(6) DEFAULT '1' COMMENT 'enable status',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'create time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='site account info';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `site_account_block_record`
--

DROP TABLE IF EXISTS `site_account_block_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `site_account_block_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `current_use_count` int(11) DEFAULT NULL,
  `current_cookie_count` int(11) DEFAULT NULL,
  `site_Account_id` int(11) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `site_ip_block_map`
--

DROP TABLE IF EXISTS `site_ip_block_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `site_ip_block_map` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` int(11) NOT NULL,
  `ip` varchar(45) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `block_timeout_time` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `site_ip_delay_map`
--

DROP TABLE IF EXISTS `site_ip_delay_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `site_ip_delay_map` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` varchar(45) NOT NULL,
  `delay_timeout_time` timestamp NOT NULL,
  `ip` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `system_alarm`
--

DROP TABLE IF EXISTS `system_alarm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `system_alarm` (
  `id` int(11) NOT NULL,
  `site_id` varchar(45) NOT NULL,
  `msg` varchar(45) NOT NULL,
  `is_readed` smallint(6) DEFAULT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `url`
--

DROP TABLE IF EXISTS `url`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `url` (
  `url` varchar(200) NOT NULL,
  `depth` smallint(6) NOT NULL,
  `down_system_site_id` int(11) DEFAULT NULL COMMENT 'the site that the url belong',
  `url_type` smallint(6) NOT NULL,
  `refer_url` varchar(45) DEFAULT NULL COMMENT 'the related url',
  `crawl_count` int(11) DEFAULT NULL COMMENT 'current retry count of url',
  `url_status` smallint(6) DEFAULT NULL COMMENT 'crawl status',
  `last_crawl_time` varchar(45) DEFAULT NULL COMMENT 'last crawl  time',
  `query_string` varchar(300) DEFAULT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `down_system_site_key` (`down_system_site_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='url info';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `vcode`
--

DROP TABLE IF EXISTS `vcode`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vcode` (
  `id` int(11) NOT NULL,
  `account_id` int(11) NOT NULL,
  `vcode_type` smallint(6) NOT NULL DEFAULT '0',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `content` varchar(300) NOT NULL,
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

-- Dump completed on 2020-08-12 15:21:01
