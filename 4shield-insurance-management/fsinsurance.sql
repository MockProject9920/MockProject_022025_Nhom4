-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: fsinsurance
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `appraisal_reports`
--
CREATE DATABASE fsinsurance;
USE fsinsurance;
DROP TABLE IF EXISTS `appraisal_reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appraisal_reports` (
  `id` int NOT NULL,
  `policy_contract_id` bigint unsigned DEFAULT NULL,
  `claim_id` bigint unsigned DEFAULT NULL,
  `appraiser_request_id` bigint unsigned DEFAULT NULL,
  `appraisal_date` varchar(45) DEFAULT NULL,
  `replacement_cost` varchar(45) DEFAULT NULL,
  `market_value` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `comparison_sales` varchar(45) DEFAULT NULL,
  `risk_level` varchar(45) DEFAULT NULL,
  `appraised_value` varchar(45) DEFAULT NULL,
  `appraisal_method` varchar(45) DEFAULT NULL,
  `appraisal_factors` varchar(1000) DEFAULT NULL,
  `attachment` varchar(45) DEFAULT NULL,
  `purpose` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `appraisal_reports_frk1_idx` (`policy_contract_id`),
  KEY `appraisal_reports_frk2_idx` (`claim_id`),
  KEY `appraisal_reports_frk3_idx` (`appraiser_request_id`),
  CONSTRAINT `appraisal_reports_frk1` FOREIGN KEY (`policy_contract_id`) REFERENCES `policy_contracts` (`id`),
  CONSTRAINT `appraisal_reports_frk2` FOREIGN KEY (`claim_id`) REFERENCES `claims` (`id`),
  CONSTRAINT `appraisal_reports_frk3` FOREIGN KEY (`appraiser_request_id`) REFERENCES `appraiser_requests` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appraisal_reports`
--

LOCK TABLES `appraisal_reports` WRITE;
/*!40000 ALTER TABLE `appraisal_reports` DISABLE KEYS */;
INSERT INTO `appraisal_reports` VALUES (1,NULL,5,10,'2024-02-01','250000','270000','Approved','265000','Low','268000','Sales_Comparison','Location: Near shopping center and schools','Yes','Claim Assessment'),(2,7,NULL,3,'2024-02-05','320000','330000','Pending','325000','Medium','328000','Cost_Approach','Size and Structure: 3-story house, reinforced concrete structure','No','Renewal'),(3,12,NULL,5,'2024-02-10','150000','145000','Approved','148000','High','149000','Income_Approach','Condition: Minor cracks in walls, plumbing needs maintenance','Yes','Valuation'),(4,5,NULL,4,'2024-02-12','275000','280000','Completed','278000','Medium','279000','Sales_Comparison','Real Estate Market: Property values increasing due to new subway station nearby','No','New Policy'),(5,15,NULL,15,'2024-02-15','200000','195000','Rejected','198000','Low','197500','Cost_Approach','Location: In a flood-prone area with high insurance costs','No','Valuation'),(6,10,8,6,'2024-02-18','350000','340000','In Review','345000','Medium','343000','Sales_Comparison','Size and Structure: Large backyard, detached garage','Yes','Claim Assessment'),(7,NULL,1,17,'2024-02-20','180000','175000','Approved','176000','High','177500','Income_Approach','Condition: Recently renovated kitchen and bathrooms','Yes','Claim Assessment'),(8,13,NULL,20,'2024-02-22','400000','410000','Completed','405000','Low','407000','Cost_Approach','Real Estate Market: Prices declining due to high mortgage rates','No','Valuation'),(9,NULL,6,17,'2024-02-25','290000','295000','Pending','293000','Medium','294000','Sales_Comparison','Location: Located in a gated community with security','Yes','Claim Assessment'),(10,4,NULL,18,'2024-02-28','150000','140000','Approved','145000','High','142000','Income_Approach','Condition: Roof damage due to storm, needs repair','No','Valuation'),(11,17,NULL,14,'2024-03-02','500000','480000','Completed','490000','Low','485000','Cost_Approach','Real Estate Market: High demand due to new tech industry hub','Yes','Renewal'),(12,NULL,14,12,'2024-03-05','325000','315000','In Review','320000','Medium','318000','Sales_Comparison','Size and Structure: Open floor plan with modern design','No','Claim Assessment'),(13,2,NULL,9,'2024-03-08','275000','270000','Approved','272500','Low','271000','Cost_Approach','Location: Near major highway, but noise pollution is a concern','Yes','New Policy'),(14,NULL,4,16,'2024-03-10','220000','215000','Completed','218000','High','217500','Income_Approach','Condition: Foundation cracks, requires immediate repair','No','Claim Assessment'),(15,NULL,12,5,'2024-03-12','330000','325000','Pending','327500','Medium','326000','Sales_Comparison','Real Estate Market: Stable prices in suburban area','Yes','Claim Assessment'),(16,NULL,9,16,'2024-03-15','190000','185000','Approved','187500','Low','186500','Cost_Approach','Size and Structure: Small lot, but well-maintained interior','No','Claim Assessment'),(17,14,NULL,14,'2024-03-18','450000','440000','Completed','445000','Medium','443000','Sales_Comparison','Location: Beachfront property with high seasonal demand','Yes','Renewal'),(18,NULL,13,13,'2024-03-20','275000','280000','In Review','278000','Low','279000','Cost_Approach','Condition: Old wiring, high fire risk, needs upgrade','No','Claim Assessment'),(19,19,NULL,19,'2024-03-22','325000','330000','Approved','328000','Medium','329500','Income_Approach','Real Estate Market: Increasing demand due to local job growth','Yes','Valuation'),(20,NULL,7,7,'2024-03-25','210000','205000','Completed','208000','High','207500','Sales_Comparison','Size and Structure: Duplex with rental income potential','No','Claim Assessment');
/*!40000 ALTER TABLE `appraisal_reports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `appraiser_requests`
--

DROP TABLE IF EXISTS `appraiser_requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appraiser_requests` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `appraiser_id` bigint unsigned NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `property_id` bigint unsigned NOT NULL,
  `customer_id` bigint unsigned DEFAULT NULL,
  `request_type` varchar(200) DEFAULT NULL,
  `number` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `assigned_to` varchar(100) DEFAULT NULL,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `appraiser_id` (`appraiser_id`),
  KEY `appraiser_requests_ibfk_1_idx` (`customer_id`),
  CONSTRAINT `appraiser_requests_ibfk_1` FOREIGN KEY (`appraiser_id`) REFERENCES `appraisers` (`id`) ON DELETE CASCADE,
  CONSTRAINT `appraiser_requests_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appraiser_requests`
--

LOCK TABLES `appraiser_requests` WRITE;
/*!40000 ALTER TABLE `appraiser_requests` DISABLE KEYS */;
INSERT INTO `appraiser_requests` VALUES (1,3001,2001,1,1001,'Valuation',0,'2025-03-01 00:00:00','205','Requested'),(2,3002,2002,2,1002,'Claim Assessment',0,'2025-03-02 00:00:00','206','Assigned'),(3,3003,2003,3,1003,'Renewal',0,'2025-03-03 00:00:00','207','Assessed'),(4,3004,2004,4,1004,'New Policy',0,'2025-03-04 00:00:00','208','Declined'),(5,3005,2005,5,1005,'Claim Assessment',0,'2025-03-05 00:00:00','209','Requested'),(6,3006,2006,6,1006,'Valuation',0,'2025-03-06 00:00:00','210','Assigned'),(7,3007,2007,7,1007,'Claim Assessment',0,'2025-03-07 00:00:00','211','Assessed'),(8,3008,2008,8,1008,'Renewal',0,'2025-03-08 00:00:00','212','Declined'),(9,3009,2009,9,1009,'New Policy',0,'2025-03-09 00:00:00','213','Requested'),(10,3010,2010,10,1010,'Claim Assessment',0,'2025-03-10 00:00:00','214','Assigned'),(11,3011,2011,11,1011,'Claim Assessment',0,'2025-03-11 00:00:00','215','Assessed'),(12,3012,2012,12,1012,'Valuation',0,'2025-03-12 00:00:00','216','Declined'),(13,3013,2013,13,1013,'Claim Assessment',0,'2025-03-13 00:00:00','217','Requested'),(14,3014,2014,14,1014,'Renewal',0,'2025-03-14 00:00:00','218','Assigned'),(15,3015,2015,15,1015,'New Policy',0,'2025-03-15 00:00:00','219','Assessed'),(16,3016,2016,16,1016,'Claim Assessment',0,'2025-03-16 00:00:00','220','Declined'),(17,3017,2017,17,1017,'Claim Assessment',0,'2025-03-17 00:00:00','221','Requested'),(18,3018,2018,18,1018,'Valuation',0,'2025-03-18 00:00:00','222','Assigned'),(19,3019,2019,19,1019,'Claim Assessment',0,'2025-03-19 00:00:00','223','Assessed'),(20,3020,2020,20,1020,'Renewal',0,'2025-03-20 00:00:00','224','Declined');
/*!40000 ALTER TABLE `appraiser_requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `appraisers`
--

DROP TABLE IF EXISTS `appraisers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appraisers` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `status` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  `company_name` varchar(100) DEFAULT NULL,
  `tax_number` varchar(50) DEFAULT NULL,
  `experience` int NOT NULL,
  `address` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `appraiser_id` (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3021 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appraisers`
--

LOCK TABLES `appraisers` WRITE;
/*!40000 ALTER TABLE `appraisers` DISABLE KEYS */;
INSERT INTO `appraisers` VALUES (3001,'John Carter','john.c@email.com','123-456-7890','Active','Independent','Carter Appraisal LLC','TX123456',10,'100 Main St, TX'),(3002,'Alice Brown','alice.b@email.com','234-567-8901','Active','Company','Brown Valuations','IL234567',8,'200 Oak St, IL'),(3003,'Mike Johnson','mike.j@email.com','345-678-9012','Inactive','Independent','Johnson & Co','CA345678',12,'300 Pine St, CA'),(3004,'Emily Davis','emily.d@email.com','456-789-0123','Active','Company','Davis Assessments','NY456789',7,'400 Elm St, NY'),(3005,'Robert Green','robert.g@email.com','567-890-1234','Active','Independent','Green Home Appraise','FL567890',15,'500 Sunset Blvd, FL'),(3006,'Olivia White','olivia.w@email.com','678-901-2345','Active','Company','White Valuations','WA678901',6,'600 Ocean Dr, WA'),(3007,'David King','david.k@email.com','789-012-3456','Active','Independent','King Property Appraisal','CO789012',9,'700 Hill St, CO'),(3008,'Sophia Hall','sophia.h@email.com','890-123-4567','Active','Company','Hall Real Estate','MA890123',11,'800 Park Ave, MA'),(3009,'William Scott','william.s@email.com','901-234-5678','Inactive','Independent','Scott Home Review','AZ901234',5,'900 Maple St, AZ'),(3010,'Ava Adams','ava.a@email.com','012-345-6789','Active','Company','Adams Property Group','TX012345',10,'1000 Broadway, TX'),(3011,'Lucas Allen','lucas.a@email.com','123-456-7891','Active','Independent','Allen Home Experts','GA123456',8,'1100 Lakeview Dr, GA'),(3012,'Mia Carter','mia.c@email.com','234-567-8902','Active','Company','Carter Assessments','CA234567',6,'1200 River Rd, CA'),(3013,'James Baker','james.b@email.com','345-678-9013','Inactive','Independent','Baker Realty Review','OR345678',13,'1300 Vine St, OR'),(3014,'Charlotte Lee','charlotte.l@email.com','456-789-0124','Active','Company','Lee Home Solutions','NV456789',9,'1400 Pine St, NV'),(3015,'Daniel Hill','daniel.h@email.com','567-890-1235','Active','Independent','Hill Property Value','FL567890',12,'1500 Ocean Blvd, FL'),(3016,'Ella Adams','ella.a@email.com','678-901-2346','Active','Company','Adams Appraisal LLC','TX678901',7,'1600 Creek Rd, TX'),(3017,'Henry Young','henry.y@email.com','789-012-3457','Active','Independent','Young Assessments','AZ789012',10,'1700 Palm St, AZ'),(3018,'Grace Turner','grace.t@email.com','890-123-4568','Inactive','Company','Turner Valuations','CO890123',8,'1800 Cedar St, CO'),(3019,'Samuel Perez','samuel.p@email.com','901-234-5679','Active','Independent','Perez Home Appraisal','CA901234',11,'1900 Redwood Ave, CA'),(3020,'Lily Torres','lily.t@email.com','012-345-6790','Active','Company','Torres Property Review','TX012345',9,'2000 Grove St, TX');
/*!40000 ALTER TABLE `appraisers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `claims`
--

DROP TABLE IF EXISTS `claims`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `claims` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `policy_contract_id` bigint unsigned NOT NULL,
  `claim_date` date NOT NULL,
  `incident_date` date NOT NULL,
  `claim_type` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `incident_description` text NOT NULL,
  `incident_type` varchar(100) NOT NULL,
  `claim_amount` decimal(15,2) NOT NULL,
  `attachment` text,
  `settlement_date` date DEFAULT NULL,
  `settlement_amount` decimal(15,2) DEFAULT NULL,
  `investigation_details` text,
  `manager_comment` varchar(450) DEFAULT NULL,
  `customer_id` bigint unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `policy_contract_id` (`policy_contract_id`),
  KEY `claims_ibfk_2_idx` (`customer_id`),
  CONSTRAINT `claims_ibfk_1` FOREIGN KEY (`policy_contract_id`) REFERENCES `policy_contracts` (`id`) ON DELETE CASCADE,
  CONSTRAINT `claims_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=100000 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `claims`
--

LOCK TABLES `claims` WRITE;
/*!40000 ALTER TABLE `claims` DISABLE KEYS */;
INSERT INTO `claims` VALUES (1,1,'2024-10-01','2024-05-01','Property','Requested','Fire damaged kitchen','Property damage',25000.00,'Fire_Report_1.pdf',NULL,NULL,'Awaiting fire department report',NULL,1001),(2,1,'2024-01-15','2024-05-01','Property','Approved','Fire damaged kitchen','Property damage',25000.00,'Fire_Report_1.pdf','2024-01-20',22000.00,'Damage assessment completed',NULL,1001),(3,2,'2024-02-15','2024-10-02','Liability','In Review','Guest slipped on wet floor','Personal accidents',50000.00,'Slip_Incident_3.pdf',NULL,NULL,'Reviewing CCTV footage',NULL,1002),(4,3,'2024-05-03','2024-02-25','Property','Approved','Water leak damaged basement','Property damage',15000.00,'Leak_Report_4.pdf','2024-03-10',12000.00,'Contractor estimate completed',NULL,1003),(5,4,'2024-01-04','2024-03-28','Liability','Requested','Neighbor claims tree damage','Environmental damage',5000.00,'Tree_Damage_5.pdf',NULL,NULL,'Assessing property lines',NULL,1004),(6,5,'2024-12-05','2024-07-05','Property','Approved','Storm shattered windows','Property damage',8000.00,'Storm_Report_6.pdf','2024-01-20',7000.00,'Wind speed reports confirmed',NULL,1005),(7,6,'2024-06-20','2024-06-15','Property','In Review','Burst pipe flooded living room','Property damage',30000.00,'Flood_7.pdf',NULL,NULL,'Plumbing inspection ongoing',NULL,1006),(8,7,'2024-04-07','2024-06-30','Liability','Approved','Delivery person tripped','Personal accidents',20000.00,'Trip_Incident_8.pdf','2024-03-10',18500.00,'Eyewitness statements collected',NULL,1007),(9,8,'2024-08-15','2024-10-08','Property','Approved','Car crashed into garage','Property damage',40000.00,'Crash_Report_9.pdf','2024-05-18',38000.00,'Police report verified',NULL,1008),(10,9,'2024-10-09','2024-05-09','Property','In Review','Vandalism damaged fence','Property damage',6000.00,'Vandalism_10.pdf',NULL,NULL,'Reviewing security footage',NULL,1009),(11,10,'2024-01-10','2024-09-27','Liability','Requested','Tenant injured on stairs','Personal accidents',45000.00,'Injury_Report_11.pdf',NULL,NULL,'Evaluating medical records',NULL,1010),(12,11,'2024-12-11','2024-08-11','Property','Approved','Wildfire damage','Property damage',150000.00,'Wildfire_12.pdf','2024-07-10',140000.00,'Fire damage assessment completed',NULL,1011),(13,12,'2024-05-12','2024-01-12','Property','In Review','Hailstorm damaged roof','Property damage',35000.00,'Hailstorm_13.pdf',NULL,NULL,'Roofing contractor evaluating',NULL,1012),(14,13,'2025-01-14','2025-10-01','Liability','Approved','Oil leak on driveway','Environmental damage',3500.00,'Oil_Leak_14.pdf','2024-08-20',3000.00,'Cleanup team confirmed',NULL,1013),(15,14,'2025-02-20','2025-02-15','Property','In Review','Earthquake foundation cracks','Property damage',60000.00,'Earthquake_15.pdf',NULL,NULL,'Structural engineer assessing',NULL,1014),(16,15,'2025-05-03','2025-02-28','Property','Approved','Flooded basement','Property damage',20000.00,'Flood_16.pdf','2024-11-18',18000.00,'FEMA assistance reviewed',NULL,1015),(17,16,'2025-10-04','2025-05-04','Liability','Requested','Contractor fell off ladder','Personal accidents',75000.00,'Ladder_17.pdf',NULL,NULL,'OSHA safety compliance checked',NULL,1016),(18,17,'2025-05-18','2025-12-05','Property','Approved','Electrical fire in garage','Property damage',55000.00,'Fire_Garage_18.pdf','2025-01-20',52000.00,'Electrical inspection confirmed',NULL,1017),(19,18,'2025-06-25','2025-06-20','Liability','In Review','Water contamination claim','Environmental damage',10000.00,'Water_Contam_19.pdf',NULL,NULL,'EPA investigation ongoing',NULL,1018),(20,19,'2025-07-30','2025-07-25','Property','Approved','Tree fell on roof','Property damage',28000.00,'Tree_Roof_20.pdf','2025-03-10',25500.00,'Arborist report reviewed',NULL,1019),(99999,19,'0000-00-00','0000-00-00','Property','','','',0.00,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `claims` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` text NOT NULL,
  `type` varchar(50) NOT NULL,
  `address` text NOT NULL,
  `phone` varchar(20) NOT NULL,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `client_id` (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=1021 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1001,'John Doe','john.doe@email.com','f5a5fd42d16a20302798ef6ed309979b573d5b6b3d6f9638f1a7878a76f6e3b4','Small Business','123 Main St, NY','123-456-7890','Active'),(1002,'Jane Smith','jane.smith@email.com','d7a8fbb307d7809469a4906ef6a9433c3f30ecbcbdb64eb6e2d5d3e864b29c3e','Enterprise','456 Elm St, CA','987-654-3210','Active'),(1003,'Mike Johnson','mike.j@email.com','5e884898da28047151d0e56f8dc6292773603d0d6aabbdd16b92b450c9bfa8f9','Small Business','789 Pine St, TX','456-123-7890','Inactive'),(1004,'Emily Davis','emily.d@email.com','2c26b46b68ffc68ff99b453c1d30413413422e4aabbadba331d72f2f537a2c9d','Enterprise','321 Oak St, FL','321-987-6543','Active'),(1005,'Robert Brown','robert.b@email.com','e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855','Small Business','555 Sunset Blvd, NY','159-753-4862','Active'),(1006,'Olivia Green','olivia.g@email.com','68b329da9893e34099c7d8ad5cb9c940b0ad0cfc6fc92d5584f77e37722619e1','Small Business','777 Ocean Ave, CA','852-456-9513','Inactive'),(1007,'David White','david.w@email.com','9e107d9d372bb6826bd81d3542a419d6bd6eaf6a1e5b6a01a438b2a56da136fc','Enterprise','654 Maple Rd, TX','741-852-9630','Active'),(1008,'Sophia Hall','sophia.h@email.com','3b5d5c3712955042212316173ccf37be800b126d9f59bff1f0e7e61a93a768e4','Small Business','852 Birch St, FL','963-258-7410','Inactive'),(1009,'William King','william.k@email.com','0cc175b9c0f1b6a831c399e269772661c7d59a41d2cc3e8a8c35065f34ed351f','Enterprise','369 Palm Ave, NY','147-258-3690','Active'),(1010,'Ava Scott','ava.s@email.com','92eb5ffee6ae2fec3ad71c777531578f8880b9b8d6f370bcc60d93cf306d7985','Small Business','951 Cedar Ln, CA','753-159-4826','Active'),(1011,'Lucas Allen','lucas.a@email.com','8f14e45fceea167a5a36dedd4bea2543b6a7b6f6a8e846bd3cfcbcb41a8b8ab2','Small Business','741 Redwood Dr, TX','852-963-7412','Inactive'),(1012,'Mia Carter','mia.c@email.com','c9f0f895fb98ab9159f51fd0297e236d3df8b6a484eb4c7377f8c0b6a6d4f0f1','Enterprise','357 Spruce Rd, FL','123-456-9870','Active'),(1013,'James Baker','james.b@email.com','45c48cce2e2d7fbdea1afc51c7c6ad26e7d0a7c5b635350e80e41a6d4db3d46d','Enterprise','654 Oakwood Dr, NY','987-321-6540','Active'),(1014,'Charlotte Lee','charlotte.l@email.com','f457c545a9ded88f18ecee47145a72c0e409b93f69368a0c980f22af6d4113f2','Small Business','789 Pinecone St, CA','369-147-2580','Inactive'),(1015,'Daniel Hill','daniel.h@email.com','827ccb0eea8a706c4c34a16891f84e7b0e74fddcda38c72d4fd7856dcf4b3b1d','Small Business','951 Magnolia Ave, TX','456-789-1234','Active'),(1016,'Ella Adams','ella.a@email.com','9b74c9897bac770ffc029102a200c5de33222f42a4df8a8f1f53917b6a94141c','Enterprise','123 Hickory St, FL','741-852-3698','Active'),(1017,'Henry Young','henry.y@email.com','3f786850e387550fdab836ed7e6dc881de23001b5b8797c311f58199334f5a68','Small Business','357 Chestnut Rd, NY','159-357-9510','Active'),(1018,'Grace Turner','grace.t@email.com','6ea9ab1baa0efb9e19094440c317e21b4385baf3da4a9f3e957d5d6a04a07db1','Small Business','852 Cypress Ln, CA','123-963-7890','Inactive'),(1019,'Samuel Perez','samuel.p@email.com','9e3669d19b675bd57058fd4664205d2a08b2c308497bd6886a4b13b61f643c35','Enterprise','741 Redwood Dr, TX','321-654-9870','Active'),(1020,'Lily Torres','lily.t@email.com','4a7d1ed414474e4033ac29ccb8653d9b31d9436cc71ff4f982384e78f13b5a4d','Small Business','654 Pinecone St, FL','852-147-9630','Active');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `holiday`
--

DROP TABLE IF EXISTS `holiday`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `holiday` (
  `holiday_id` int NOT NULL AUTO_INCREMENT,
  `holiday_name` varchar(100) NOT NULL,
  `holiday_date` varchar(100) NOT NULL,
  `holiday_type` varchar(50) NOT NULL,
  `state_name` varchar(50) DEFAULT NULL,
  `description` text,
  `approval_authority` varchar(100) NOT NULL,
  `establishment_process` varchar(255) NOT NULL,
  `government_offices` varchar(100) NOT NULL,
  `businesses` varchar(100) NOT NULL,
  `schools` varchar(100) NOT NULL,
  `common_activities` text,
  PRIMARY KEY (`holiday_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `holiday`
--

LOCK TABLES `holiday` WRITE;
/*!40000 ALTER TABLE `holiday` DISABLE KEYS */;
INSERT INTO `holiday` VALUES (1,'New Year\'s Day','January 1','Federal Holiday',NULL,'Celebration of the first day of the new year','US Congress and President','Established by federal law, requiring approval of both houses of Congress and signature of the President','Closed','Mostly closed','Closed','Family gatherings, travel, community events'),(2,'Martin Luther King, Jr. Day','Third Monday in January','Federal Holiday',NULL,'Honors civil rights leader Martin Luther King, Jr.','US Congress and President','Established by federal law, requiring approval of both houses of Congress and signature of the President','Closed','Mostly closed','Closed','Memorial services, educational events'),(3,'Presidents\' Day','Third Monday in February','Federal Holiday',NULL,'Commemorates US Presidents, particularly Washington and Lincoln','US Congress and President','Established by federal law, requiring approval of both houses of Congress and signature of the President','Closed','Mostly closed','Closed','Family gatherings, historical celebrations'),(4,'Memorial Day','May 30','Federal Holiday',NULL,'Remembers those who died while serving in the armed forces','US Congress and President','Established by federal law, requiring approval of both houses of Congress and signature of the President','Closed','Mostly closed','Closed','Memorial services, parades, cemetery visits'),(5,'Independence Day','July 4','Federal Holiday',NULL,'Commemorates the adoption of the Declaration of Independence','US Congress and President','Established by federal law, requiring approval of both houses of Congress and signature of the President','Closed','Mostly closed','Closed','Fireworks, parades, barbecues, family gatherings'),(6,'Labor Day','First Monday in September','Federal Holiday',NULL,'Honors the American labor movement','US Congress and President','Established by federal law, requiring approval of both houses of Congress and signature of the President','Closed','Mostly closed','Closed','Parades, picnics, end of summer celebrations'),(7,'Columbus Day','Second Monday in October','Federal Holiday',NULL,'Commemorates Christopher Columbus\'s arrival to the Americas','US Congress and President','Established by federal law, requiring approval of both houses of Congress and signature of the President','Closed','Mostly closed','Varies','Parades, educational events'),(8,'Veterans Day','November 11','Federal Holiday',NULL,'Honors military veterans who served in the United States Armed Forces','US Congress and President','Established by federal law, requiring approval of both houses of Congress and signature of the President','Closed','Mostly closed','Varies','Parades, ceremonies honoring veterans'),(9,'Thanksgiving Day','Fourth Thursday in November','Federal Holiday',NULL,'Traditional harvest festival and day of giving thanks','US Congress and President','Established by federal law, requiring approval of both houses of Congress and signature of the President','Closed','Mostly closed','Closed','Family dinners, parades, giving thanks'),(10,'Christmas Day','December 25','Federal Holiday',NULL,'Commemorates the birth of Jesus Christ in Christianity','US Congress and President','Established by federal law, requiring approval of both houses of Congress and signature of the President','Closed','Mostly closed','Closed','Gift exchanges, religious services, family gatherings'),(11,'Cesar Chavez Day','March 31','State Holiday','California','Honors Latino American labor leader','State Legislature and Governor','Established by state law, requiring approval of the state legislature and signature of the state governor','Closed in California','Limited hours in California','Special events in California','Community service, educational events'),(12,'Kamehameha Day','June 25','State Holiday','Hawaii','Commemorates King Kamehameha I who unified the Hawaiian Islands','State Legislature and Governor','Established by state law, requiring approval of the state legislature and signature of the state governor','Closed in Hawaii','Limited hours in Hawaii','Special events in Hawaii','Parades, cultural festivities');
/*!40000 ALTER TABLE `holiday` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `insurance_products`
--

DROP TABLE IF EXISTS `insurance_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `insurance_products` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `insurance_type` varchar(100) NOT NULL,
  `coverage_amount` decimal(15,2) NOT NULL,
  `payment_method` text NOT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `insurance_products`
--

LOCK TABLES `insurance_products` WRITE;
/*!40000 ALTER TABLE `insurance_products` DISABLE KEYS */;
INSERT INTO `insurance_products` VALUES (1,'Standard Homeowners','Homeowners',250000.00,'Annual, Monthly',0),(2,'Premium Homeowners','Homeowners',500000.00,'Annual, Monthly',0),(3,'Basic Homeowners','Homeowners',150000.00,'Annual, Monthly',0),(4,'Homeowners Plus','Homeowners',400000.00,'Annual, Monthly',0),(5,'Elite Homeowners','Homeowners',1000000.00,'Annual, Quarterly',0),(6,'Basic Flood Protection','Flood',200000.00,'Annual, Monthly',0),(7,'Comprehensive Flood','Flood',500000.00,'Annual, Monthly',0),(8,'National Flood Program','Flood',250000.00,'Annual',0),(9,'Coastal Flood Coverage','Flood',600000.00,'Annual, Quarterly',0),(10,'High-Risk Flood Protection','Flood',750000.00,'Annual',0),(11,'Basic Earthquake Coverage','Earthquake',300000.00,'Annual, Monthly',0),(12,'Comprehensive Earthquake','Earthquake',700000.00,'Annual, Quarterly',0),(13,'California Earthquake Plan','Earthquake',500000.00,'Annual',0),(14,'Seismic Risk Protection','Earthquake',800000.00,'Annual, Quarterly',0),(15,'West Coast Earthquake Plus','Earthquake',1200000.00,'Annual, Monthly',0),(16,'Jewelry & Valuables Basic','Additional Coverage',50000.00,'Annual, Monthly',0),(17,'Luxury Valuables Protection','Additional Coverage',200000.00,'Annual, Quarterly',0),(18,'Fine Art & Collectibles','Additional Coverage',500000.00,'Annual',0),(19,'Electronics & Gadgets Cover','Additional Coverage',100000.00,'Annual, Monthly',0),(20,'High-Net-Worth Protection','Additional Coverage',2000000.00,'Annual, Quarterly',0);
/*!40000 ALTER TABLE `insurance_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoices`
--

DROP TABLE IF EXISTS `invoices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoices` (
  `invoice_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `transaction_id` bigint unsigned DEFAULT NULL,
  `amount` decimal(15,2) NOT NULL,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`invoice_id`),
  UNIQUE KEY `invoice_id` (`invoice_id`),
  KEY `invoice_frk_1_idx` (`transaction_id`),
  CONSTRAINT `invoice_frk_1` FOREIGN KEY (`transaction_id`) REFERENCES `transactions` (`transaction_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5021 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoices`
--

LOCK TABLES `invoices` WRITE;
/*!40000 ALTER TABLE `invoices` DISABLE KEYS */;
INSERT INTO `invoices` VALUES (5001,1,500.00,'Paid'),(5002,2,700.00,'Paid'),(5003,3,1200.00,'Pending'),(5004,4,2000.00,'Paid'),(5005,5,5000.00,'Pending'),(5006,6,850.00,'Paid'),(5007,7,1500.00,'Paid'),(5008,8,600.00,'Overdue'),(5009,9,3200.00,'Paid'),(5010,10,900.00,'Paid'),(5011,11,750.00,'Pending'),(5012,12,2500.00,'Paid'),(5013,13,1100.00,'Overdue'),(5014,14,950.00,'Paid'),(5015,15,4000.00,'Pending'),(5016,16,650.00,'Paid'),(5017,17,3750.00,'Paid'),(5018,18,5500.00,'Overdue'),(5019,19,1800.00,'Pending'),(5020,20,2200.00,'Paid');
/*!40000 ALTER TABLE `invoices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_tracking`
--

DROP TABLE IF EXISTS `payment_tracking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_tracking` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `policy_contract_id` bigint unsigned DEFAULT NULL,
  `claim_id` bigint unsigned DEFAULT NULL,
  `due_date` date NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `status` varchar(50) NOT NULL,
  `reminder_sent` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `claim_id_UNIQUE` (`claim_id`),
  KEY `payment_tracking_ibfk_1` (`policy_contract_id`),
  KEY `payment_tracking_ibfk_2_idx` (`claim_id`),
  CONSTRAINT `payment_tracking_ibfk_1` FOREIGN KEY (`policy_contract_id`) REFERENCES `policy_contracts` (`id`) ON DELETE CASCADE,
  CONSTRAINT `payment_tracking_ibfk_2` FOREIGN KEY (`claim_id`) REFERENCES `claims` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_tracking`
--

LOCK TABLES `payment_tracking` WRITE;
/*!40000 ALTER TABLE `payment_tracking` DISABLE KEYS */;
INSERT INTO `payment_tracking` VALUES (1,1,NULL,'2024-02-01',500.00,'PAID',1),(2,1,NULL,'2024-03-01',500.00,'PAID',0),(3,2,NULL,'2024-03-15',1200.00,'PAID',1),(4,3,10,'2024-02-20',2000.00,'OVERDUE',1),(5,4,NULL,'2024-04-01',1500.00,'PAID',0),(6,5,12,'2024-04-15',2500.00,'FAILED',1),(7,6,NULL,'2024-05-01',900.00,'PAID',0),(8,7,15,'2024-05-10',1800.00,'OVERDUE',1),(9,8,NULL,'2024-05-15',600.00,'PAID',0),(10,9,NULL,'2024-06-01',2200.00,'PAID',1),(11,10,NULL,'2024-06-10',1300.00,'PAID',0),(12,1,20,'2024-06-15',750.00,'FAILED',1),(13,2,NULL,'2024-07-01',950.00,'PAID',0),(14,3,NULL,'2024-07-10',3000.00,'OVERDUE',1),(15,4,NULL,'2024-07-15',1500.00,'PAID',0),(16,5,NULL,'2024-08-01',800.00,'PAID',1),(17,6,NULL,'2024-08-10',1000.00,'FAILED',1),(18,7,NULL,'2024-08-15',2500.00,'PAID',0),(19,8,NULL,'2024-09-01',1750.00,'OVERDUE',1),(20,9,NULL,'2024-09-10',850.00,'PAID',0);
/*!40000 ALTER TABLE `payment_tracking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `policy_contracts`
--

DROP TABLE IF EXISTS `policy_contracts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `policy_contracts` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `customer_id` bigint unsigned NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `property_details` text NOT NULL,
  `premium_code` varchar(50) NOT NULL,
  `insurance_product_id` bigint unsigned DEFAULT NULL,
  `coverage_amount` decimal(15,2) NOT NULL,
  `policy_start_date` date NOT NULL,
  `policy_end_date` date NOT NULL,
  `frequency` varchar(50) NOT NULL,
  `payment_schedule` varchar(50) NOT NULL,
  `exclusions` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `user_id` (`user_id`),
  KEY `insurance_product_id` (`insurance_product_id`),
  KEY `policy_contracts_ibfk_1` (`customer_id`),
  CONSTRAINT `policy_contracts_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE,
  CONSTRAINT `policy_contracts_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `policy_contracts_ibfk_3` FOREIGN KEY (`insurance_product_id`) REFERENCES `insurance_products` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `policy_contracts`
--

LOCK TABLES `policy_contracts` WRITE;
/*!40000 ALTER TABLE `policy_contracts` DISABLE KEYS */;
INSERT INTO `policy_contracts` VALUES (1,1001,2001,'123 Main St, CA','P001',1,250000.00,'0000-00-00','0000-00-00','Annual, Monthly','Monthly','Earthquake not covered'),(2,1002,2002,'456 Elm St, TX','P002',1,250000.00,'0000-00-00','0000-00-00','Annual, Monthly','Annually','Flood not covered'),(3,1003,2003,'789 Pine St, FL','P005',3,200000.00,'0000-00-00','0000-00-00','Annual, Monthly','Monthly','Theft not covered'),(4,1004,2004,'321 Oak St, LA','P006',3,200000.00,'0000-00-00','0000-00-00','Annual, Monthly','Annually','Fire damage not covered'),(5,1005,2005,'555 Sunset Blvd, CA','P008',5,300000.00,'0000-00-00','0000-00-00','Annual, Quarterly','Monthly','Water damage not covered'),(6,1005,2005,'555 Sunset Blvd, CA','P008',5,300000.00,'0000-00-00','0000-00-00','Annual, Quarterly','Monthly','Water damage not covered'),(7,1006,2006,'789 Lake St, WA','P003',2,275000.00,'0000-00-00','0000-00-00','Annual, Monthly','Monthly','Vandalism not covered'),(8,1007,2007,'888 Broadway, NY','P004',2,350000.00,'0000-00-00','0000-00-00','Annual, Quarterly','Quarterly','Mold damage not covered'),(9,1008,2008,'999 Maple Ave, TX','P007',4,400000.00,'0000-00-00','0000-00-00','Annual, Monthly','Monthly','Hurricane not covered'),(10,1009,2009,'111 River Rd, TN','P009',5,500000.00,'0000-00-00','0000-00-00','Annual, Monthly','Annually','Termite damage not covered'),(11,1010,2010,'222 Forest Dr, OR','P010',4,450000.00,'0000-00-00','0000-00-00','Annual, Monthly','Monthly','Landslide not covered'),(12,1011,2011,'333 Sunset Blvd, CA','P011',3,275000.00,'0000-00-00','0000-00-00','Annual, Monthly','Monthly','Sewer backup not covered'),(13,1012,2012,'444 Ocean Dr, FL','P012',1,600000.00,'0000-00-00','0000-00-00','Annual, Quarterly','Annually','Rodent infestation not covered'),(14,1013,2013,'555 Bay St, MA','P013',2,375000.00,'0000-00-00','0000-00-00','Annual, Monthly','Monthly','Windstorm not covered'),(15,1014,2014,'666 Pine St, CO','P014',3,425000.00,'0000-00-00','0000-00-00','Annual, Monthly','Quarterly','Structural damage not covered'),(16,1015,2015,'777 Elm St, GA','P015',4,475000.00,'0000-00-00','0000-00-00','Annual, Monthly','Monthly','Plumbing failure not covered'),(17,1016,2016,'888 Mountain Rd, AZ','P016',5,525000.00,'0000-00-00','0000-00-00','Annual, Monthly','Annually','Gas leaks not covered'),(18,1017,2017,'999 Capitol St, WA','P017',2,600000.00,'0000-00-00','0000-00-00','Annual, Quarterly','Quarterly','Electrical fire not covered'),(19,1018,2018,'111 Beach Ave, SC','P018',1,700000.00,'0000-00-00','0000-00-00','Annual, Monthly','Monthly','Basement flooding not covered'),(20,1019,2019,'222 Valley Rd, NV','P019',3,325000.00,'0000-00-00','0000-00-00','Annual, Monthly','Monthly','Foundation cracks not covered'),(21,1020,2020,'333 Palm Dr, FL','P020',5,800000.00,'0000-00-00','0000-00-00','Annual, Monthly','Annually','Roof collapse not covered');
/*!40000 ALTER TABLE `policy_contracts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `premium`
--

DROP TABLE IF EXISTS `premium`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `premium` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `insurance_product_id` bigint unsigned NOT NULL,
  `premium_name` varchar(255) NOT NULL,
  `insurance_type` varchar(100) NOT NULL,
  `effective_date` date NOT NULL,
  `state` varchar(100) NOT NULL,
  `country` varchar(100) NOT NULL,
  `rate_from` decimal(15,2) NOT NULL,
  `rate_to` decimal(15,2) NOT NULL,
  `amount` decimal(15,2) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `insurance_product_id` (`insurance_product_id`),
  CONSTRAINT `premium_ibfk_1` FOREIGN KEY (`insurance_product_id`) REFERENCES `insurance_products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `premium`
--

LOCK TABLES `premium` WRITE;
/*!40000 ALTER TABLE `premium` DISABLE KEYS */;
INSERT INTO `premium` VALUES (1,1,'Standard Homeowners Plan','Homeowners','2000-01-01','California','USA',100000.00,250000.00,800.00),(2,1,'Standard Homeowners Plan','Homeowners','2000-01-01','California','USA',250001.00,500000.00,1500.00),(3,1,'Standard Homeowners Plan','Homeowners','2000-01-01','Texas','USA',100000.00,250000.00,750.00),(4,1,'Standard Homeowners Plan','Homeowners','2000-01-01','Texas','USA',250001.00,500000.00,1400.00),(5,2,'Premium Homeowners Plan','Homeowners','2000-01-01','Florida','USA',100000.00,250000.00,900.00),(6,2,'Premium Homeowners Plan','Homeowners','2000-01-01','Florida','USA',250001.00,500000.00,1600.00),(7,3,'Basic Flood Coverage','Flood','2000-01-01','Louisiana','USA',100000.00,250000.00,1200.00),(8,3,'Basic Flood Coverage','Flood','2000-01-01','Louisiana','USA',250001.00,500000.00,2000.00),(9,4,'Comprehensive Flood Plan','Flood','2000-01-01','New York','USA',100000.00,250000.00,1500.00),(10,4,'Comprehensive Flood Plan','Flood','2000-01-01','New York','USA',250001.00,500000.00,2500.00),(11,5,'Standard Earthquake Plan','Earthquake','2000-01-01','California','USA',100000.00,250000.00,2000.00),(12,5,'Standard Earthquake Plan','Earthquake','2000-01-01','California','USA',250001.00,500000.00,3500.00),(13,6,'Premium Earthquake Plan','Earthquake','2000-01-01','Oregon','USA',100000.00,250000.00,1800.00),(14,6,'Premium Earthquake Plan','Earthquake','2000-01-01','Oregon','USA',250001.00,500000.00,3200.00),(15,7,'Valuable Items Coverage','Additional Coverage','2000-01-01','Texas','USA',10000.00,50000.00,500.00),(16,7,'Valuable Items Coverage','Additional Coverage','2000-01-01','Texas','USA',50001.00,100000.00,1000.00),(17,8,'Jewelry Protection Plan','Additional Coverage','2000-01-01','Florida','USA',10000.00,50000.00,600.00),(18,8,'Jewelry Protection Plan','Additional Coverage','2000-01-01','Florida','USA',50001.00,100000.00,1200.00),(19,9,'Art & Antiques Coverage','Additional Coverage','2000-01-01','California','USA',10000.00,50000.00,700.00),(20,9,'Art & Antiques Coverage','Additional Coverage','2000-01-01','California','USA',50001.00,100000.00,1400.00);
/*!40000 ALTER TABLE `premium` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `properties`
--

DROP TABLE IF EXISTS `properties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `properties` (
  `property_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(50) NOT NULL,
  `address` text NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `zip_code` varchar(10) NOT NULL,
  `country` varchar(50) NOT NULL,
  `year_built` int NOT NULL,
  `lot_size_sqft` decimal(10,2) DEFAULT NULL,
  `living_area_sqft` decimal(10,2) NOT NULL,
  `bedrooms` int NOT NULL,
  `bathrooms` decimal(2,1) NOT NULL,
  `attached_garage` tinyint(1) NOT NULL,
  `additional_features` text,
  `recent_renovations` text,
  `estimated_value` decimal(15,2) NOT NULL,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`property_id`),
  UNIQUE KEY `property_id` (`property_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `properties`
--

LOCK TABLES `properties` WRITE;
/*!40000 ALTER TABLE `properties` DISABLE KEYS */;
INSERT INTO `properties` VALUES (1,'Apartment','123 Main St','New York','NY','10001','USA',2005,NULL,900.00,2,1.0,0,'Balcony, Gym Access','New Flooring',450000.00,'Available'),(2,'Condo','456 Park Ave','Chicago','IL','60610','USA',0,NULL,1200.00,3,2.0,0,'Pool, Security System','Kitchen Remodel',600000.00,'Sold'),(3,'Town Home','789 Elm St','Houston','TX','77002','USA',1998,3500.00,2400.00,4,3.5,0,'Fireplace, Private Backyard','Roof Replacement',750000.00,'Pending'),(4,'Other','101 Ocean Dr','Miami','FL','33139','USA',1985,5000.00,3500.00,5,4.0,0,'Beachfront, Smart Home System','Full Renovation',2500000.00,'Available'),(5,'Apartment','222 Sunset Blvd','Los Angeles','CA','90028','USA',0,NULL,1100.00,3,2.0,0,'Rooftop Garden','New Appliances',550000.00,'Available'),(6,'Condo','789 Lake Shore Dr','Seattle','WA','98101','USA',0,NULL,1500.00,2,2.0,0,'Waterfront View','New Windows',700000.00,'Sold'),(7,'Town Home','567 Oak St','Dallas','TX','','USA',2000,4000.00,2800.00,4,3.0,0,'Gated Community, BBQ Area','Bathroom Remodel',800000.00,'Pending'),(8,'Other','303 Mountain Rd','Denver','CO','','USA',1995,6000.00,3800.00,5,5.0,0,'Mountain View, Large Deck','Full Interior Remodel',1800000.00,'Available'),(9,'Apartment','777 Broadway','San Diego','CA','','USA',0,NULL,850.00,1,1.0,0,'Smart Home Features','No Renovations',400000.00,'Available'),(10,'Condo','909 Bay St','San Francisco','CA','94109','USA',0,NULL,1300.00,2,2.0,0,'City View, High Ceilings','No Renovations',1200000.00,'Sold'),(11,'Town Home','888 Maple Ave','Atlanta','GA','30303','USA',2002,3200.00,2500.00,4,3.0,0,'Private Yard, Hardwood Floors','Kitchen Upgrade',720000.00,'Available'),(12,'Other','444 Palm Dr','Tampa','FL','33602','USA',1989,5500.00,3600.00,5,4.0,0,'Pool, Outdoor Kitchen','Full Renovation',1500000.00,'Sold'),(13,'Apartment','PC012 East St','Boston','MA','PC0108','USA',0,NULL,1000.00,2,1.0,0,'Fitness Center, Lounge Area','New Paint',500000.00,'Available'),(14,'Condo','545 Sunset Blvd','Phoenix','AZ','85004','USA',0,NULL,1400.00,3,2.0,0,'Rooftop Pool, Concierge','New Flooring',620000.00,'Pending'),(15,'Town Home','777 Cypress Ln','Orlando','FL','32801','USA',2005,3600.00,2700.00,4,3.5,0,'Tennis Court, Clubhouse','Roof Replacement',790000.00,'Available'),(16,'Other','999 Lake View Rd','Austin','TX','73301','USA',1990,6200.00,4200.00,5,5.0,0,'Lakefront, Large Patio','Complete Renovation',2000000.00,'Sold'),(17,'Apartment','666 Capitol St','Sacramento','CA','95814','USA',0,NULL,850.00,1,1.0,0,'Smart Security System','No Renovations',410000.00,'Available'),(18,'Condo','345 Ocean Blvd','Santa Monica','CA','90401','USA',0,NULL,1600.00,3,2.5,0,'Ocean View, Private Balcony','No Renovations',1350000.00,'Sold'),(19,'Town Home','111 River Rd','Nashville','TN','37PC001','USA',2008,3900.00,2800.00,4,3.0,0,'Music Room, Large Backyard','Bathroom Remodel',810000.00,'Available'),(20,'Other','500 Forest Dr','Portland','OR','97PC001','USA',1992,5800.00,3700.00,5,4.5,0,'Forest View, Custom Architecture','Full Remodel',1750000.00,'Pending');
/*!40000 ALTER TABLE `properties` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactions` (
  `transaction_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `policy_contract_id` bigint unsigned DEFAULT NULL,
  `claim_id` bigint unsigned DEFAULT NULL,
  `type` varchar(50) NOT NULL,
  `transaction_date` date NOT NULL,
  `amount` decimal(15,2) NOT NULL,
  `method` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`transaction_id`),
  UNIQUE KEY `transaction_id` (`transaction_id`),
  KEY `claim_id` (`claim_id`),
  KEY `transactions_ibfk_1` (`policy_contract_id`),
  CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`policy_contract_id`) REFERENCES `policy_contracts` (`id`) ON DELETE CASCADE,
  CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`claim_id`) REFERENCES `claims` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=1021 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES (1,1,NULL,'PREMIUM_PAYMENT','2024-02-01',500.00,'Credit Card','SUCCESS'),(2,1,NULL,'PREMIUM_PAYMENT','2024-03-01',700.00,'Bank Transfer','SUCCESS'),(3,3,NULL,'PREMIUM_PAYMENT','2024-03-15',1200.00,'Credit Card','SUCCESS'),(4,2,NULL,'PREMIUM_PAYMENT','2024-02-20',2000.00,'Bank Transfer','SUCCESS'),(5,NULL,2,'CLAIM_PAYOUT','2024-03-05',22000.00,'Wire Transfer','PENDING'),(6,4,NULL,'PREMIUM_PAYMENT','2024-04-01',1500.00,'Credit Card','SUCCESS'),(7,5,NULL,'PREMIUM_PAYMENT','2024-04-15',2500.00,'PayPal','FAILED'),(8,NULL,6,'CLAIM_PAYOUT','2024-04-20',7000.00,'Wire Transfer','SUCCESS'),(9,6,NULL,'PREMIUM_PAYMENT','2024-05-01',900.00,'Debit Card','SUCCESS'),(10,NULL,9,'CLAIM_PAYOUT','2024-05-10',38000.00,'Check','PENDING'),(11,7,NULL,'PREMIUM_PAYMENT','2024-05-15',600.00,'Credit Card','SUCCESS'),(12,8,NULL,'PREMIUM_PAYMENT','2024-06-01',2200.00,'Bank Transfer','SUCCESS'),(13,NULL,12,'CLAIM_PAYOUT','2024-06-20',140000.00,'Wire Transfer','SUCCESS'),(14,9,NULL,'PREMIUM_PAYMENT','2024-06-25',1800.00,'PayPal','SUCCESS'),(15,NULL,14,'CLAIM_PAYOUT','2024-07-05',3000.00,'Check','PENDING'),(16,10,NULL,'PREMIUM_PAYMENT','2024-07-10',750.00,'Credit Card','SUCCESS'),(17,11,NULL,'PREMIUM_PAYMENT','2024-07-20',1300.00,'Debit Card','FAILED'),(18,NULL,16,'CLAIM_PAYOUT','2024-08-01',18000.00,'Wire Transfer','SUCCESS'),(19,12,NULL,'PREMIUM_PAYMENT','2024-08-10',950.00,'Bank Transfer','SUCCESS'),(20,NULL,18,'CLAIM_PAYOUT','2024-08-15',52000.00,'Check','PENDING');
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `role` varchar(50) NOT NULL,
  `member_since` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2021 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2001,'John Doe','john.doe@email.com','Admin','2020-01-15'),(2002,'Jane Smith','jane.smith@email.com','Manager','2019-06-10'),(2003,'Mike Johnson','mike.j@email.com','Staff','2021-03-22'),(2004,'Emily Davis','emily.d@email.com','Staff','2022-07-18'),(2005,'Robert Brown','robert.b@email.com','Admin','2018-11-05'),(2006,'Olivia Green','olivia.g@email.com','Manager','2020-09-14'),(2007,'David White','david.w@email.com','Staff','2021-12-30'),(2008,'Sophia Hall','sophia.h@email.com','Staff','2019-02-25'),(2009,'William King','william.k@email.com','Admin','2017-08-07'),(2010,'Ava Scott','ava.s@email.com','Manager','2023-01-05'),(2011,'Lucas Allen','lucas.a@email.com','Staff','2020-05-21'),(2012,'Mia Carter','mia.c@email.com','Staff','2021-09-09'),(2013,'James Baker','james.b@email.com','Admin','2016-12-01'),(2014,'Charlotte Lee','charlotte.l@email.com','Manager','2019-04-03'),(2015,'Daniel Hill','daniel.h@email.com','Staff','2022-06-15'),(2016,'Ella Adams','ella.a@email.com','Staff','2023-03-28'),(2017,'Henry Young','henry.y@email.com','Admin','2017-10-19'),(2018,'Grace Turner','grace.t@email.com','Manager','2021-07-12'),(2019,'Samuel Perez','samuel.p@email.com','Staff','2019-11-23'),(2020,'Lily Torres','lily.t@email.com','Staff','2020-02-17');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-15 11:04:27
