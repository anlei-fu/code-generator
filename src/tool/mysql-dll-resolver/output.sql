DROP TABLE IF EXISTS `bridge_info`;
CREATE TABLE `bridge_info` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '桥梁编号',
`bridge_no` varchar(32) DEFAULT NULL COMMENT '桥号',
`bridge_name` varchar(64) DEFAULT NULL COMMENT '桥名',
`track_division_id` int(11) DEFAULT NULL COMMENT '工务段编号',
`line_id` int(11) DEFAULT NULL COMMENT '线路编号',
`side` int(11) DEFAULT NULL COMMENT '线别',
`direction` int(11) DEFAULT NULL COMMENT '行别',
`track_weigth` float DEFAULT NULL COMMENT '轨距',
`bridge_length` float DEFAULT NULL COMMENT '桥全长',
`start_miles` float DEFAULT NULL COMMENT '起点里程',
`end_miles` float DEFAULT NULL COMMENT '终点里程',
`middle_miles` float DEFAULT NULL COMMENT '中心里程',
`hole_length` float DEFAULT NULL COMMENT '桥孔总长',
`cross_hole_style` varchar(32) DEFAULT NULL COMMENT '孔跨样式',
`flyover_category` varchar(32) DEFAULT NULL COMMENT '立交类别',
`long_chain` int(11) DEFAULT NULL COMMENT '长链标记',
`remark` varchar(128) DEFAULT NULL COMMENT '备注',
`status` int(11) DEFAULT NULL COMMENT '状态',
`is_delete` int(11) NOT NULL COMMENT '删除标记',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='桥梁信息';
LOCK TABLES `bridge_info` WRITE;
INSERT INTO `bridge_info` VALUES (1,'1','1',1,1,1,1,1,1,1,1,1,1,'1','1',1,'1',1,1,'2019-10-30 17:00:41',NULL,1),(2,'11','11',123,11,11,11,11,11,11,11,11,11,'11','11',11,'11',1,1,NULL,'2019-11-01 15:47:08',10086),(3,'11','11',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'22','22',NULL,'22',NULL,1,'2019-11-01 15:28:54',NULL,NULL),(4,'123','123',123,123,123,123,123,123,123,123,123,123,'123','123',123,'123',123,1,'2019-11-01 15:36:32',NULL,NULL);
UNLOCK TABLES;
DROP TABLE IF EXISTS `bureau_info`;
CREATE TABLE `bureau_info` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '铁路局编号',
`bureau_name` varchar(64) NOT NULL COMMENT '铁路局名称',
`bureau_code` varchar(16) NOT NULL COMMENT '铁路局编码',
`input_code` varchar(16) DEFAULT NULL COMMENT '输入代码',
`is_delete` int(11) NOT NULL COMMENT '删除标记',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='铁路局信息';
LOCK TABLES `bureau_info` WRITE;
INSERT INTO `bureau_info` VALUES (1,'成都测试铁路局','1001','102410241024',1,'2019-10-30 16:20:38','2019-10-30 16:20:41',1231),(2,'测试2铁路局','1002','102410242048',-1,NULL,NULL,NULL);
UNLOCK TABLES;
DROP TABLE IF EXISTS `bureau_line_order`;
CREATE TABLE `bureau_line_order` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
`bureau_id` int(11) DEFAULT NULL COMMENT '铁路局编号',
`line_id` int(11) DEFAULT NULL COMMENT '线路编号',
`sort_num` varchar(16) DEFAULT NULL COMMENT '排序编号',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='铁路局线路';
LOCK TABLES `bureau_line_order` WRITE;
INSERT INTO `bureau_line_order` VALUES (1,1,1,'1','2019-10-31 10:08:11','2019-10-31 10:08:14',1);
UNLOCK TABLES;
DROP TABLE IF EXISTS `curve_info`;
CREATE TABLE `curve_info` (
`curve_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '曲线编号',
`track_division_id` int(11) DEFAULT NULL COMMENT '宸ュ姟娈电紪鍙?',
`line_id` int(11) DEFAULT NULL COMMENT '线路编号',
`side` int(11) DEFAULT NULL COMMENT '线别',
`direction` int(11) DEFAULT NULL COMMENT '行别',
`start_miles` float DEFAULT NULL COMMENT '起点里程',
`end_miles` float(10,0) DEFAULT NULL COMMENT '缁堢偣閲岀▼',
`curve_direction` int(11) DEFAULT NULL COMMENT '鏇茬嚎鏂瑰悜',
`curve_readius` float DEFAULT NULL COMMENT '鏇茬嚎鍗婂緞',
`steering_angle` float DEFAULT NULL COMMENT '转向角',
`track_dis_type` int(11) DEFAULT NULL COMMENT '轨距类型',
`track_dis_wide` float DEFAULT NULL COMMENT '轨距加宽',
`over_height` float DEFAULT NULL COMMENT '超高',
`slope_rate` float DEFAULT NULL COMMENT '顺坡率',
`start_tangent_length` float DEFAULT NULL COMMENT '起点切线长',
`end_tangent_length` float DEFAULT NULL COMMENT '终点切线长',
`start_slow_length` float DEFAULT NULL COMMENT '起缓和线长',
`end_slow_length` float DEFAULT NULL COMMENT '终缓和线长',
`curve_length` float DEFAULT NULL COMMENT '鏇茬嚎闀?',
`average_speed` float DEFAULT NULL COMMENT '平均速度',
`long_chain` int(11) DEFAULT NULL COMMENT '长链标记',
`remark` varchar(128) DEFAULT NULL COMMENT '备注',
`status` int(11) DEFAULT NULL COMMENT '状态',
`is_delete` int(11) NOT NULL COMMENT '删除标记',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
PRIMARY KEY (`curve_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='曲线信息';
LOCK TABLES `curve_info` WRITE;
INSERT INTO `curve_info` VALUES (1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,'1',1,1,'2019-10-30 17:33:00',NULL,1);
UNLOCK TABLES;
DROP TABLE IF EXISTS `damage_deal_user`;
CREATE TABLE `damage_deal_user` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '人员编号',
`workarea_id` int(11) DEFAULT NULL COMMENT '工区编号',
`name` varchar(32) DEFAULT NULL COMMENT '姓名',
`position_id` int(11) DEFAULT NULL COMMENT '职位编号',
`gender` int(11) DEFAULT NULL COMMENT '性别',
`id_card_no` varchar(32) DEFAULT NULL COMMENT '身份证',
`birthday` date DEFAULT NULL COMMENT '出生日期',
`edu_degree` int(11) DEFAULT NULL COMMENT '文化程度',
`deal_type` int(11) DEFAULT NULL COMMENT '处理类别',
`tec_category` int(11) DEFAULT NULL COMMENT '技术类别',
`grade_id` varchar(225) DEFAULT NULL COMMENT '职称编号',
`grade_gain_date` date DEFAULT NULL COMMENT '职称获得时间',
`qualification_grade` int(11) DEFAULT NULL COMMENT '探伤资质等级',
`qualification_gain_date` date DEFAULT NULL COMMENT '探伤资质发证日期',
`qualification_audit_date` date DEFAULT NULL COMMENT '探伤资质复审日期',
`qualification_valid_time` int(11) DEFAULT NULL COMMENT '探伤资质有效期',
`qualification_invalid_date` date DEFAULT NULL COMMENT '探伤资质截止日期',
`contact` varchar(16) DEFAULT NULL COMMENT '联系电话',
`remark` varchar(128) DEFAULT NULL COMMENT '备注',
`status` int(11) DEFAULT NULL COMMENT '状态',
`is_delete` int(11) NOT NULL COMMENT '删除标记',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='伤损处理人员';
LOCK TABLES `damage_deal_user` WRITE;
UNLOCK TABLES;
DROP TABLE IF EXISTS `damage_order`;
CREATE TABLE `damage_order` (
`order_no` varchar(32) NOT NULL COMMENT '伤损单号',
`workarea_id` int(11) DEFAULT NULL COMMENT '探伤工区',
`submit_staff` int(11) DEFAULT NULL COMMENT '提交人',
`submit_time` datetime DEFAULT NULL COMMENT '提交时间',
`is_delete` int(11) NOT NULL COMMENT '删除标记',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
PRIMARY KEY (`order_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='伤损单';
LOCK TABLES `damage_order` WRITE;
INSERT INTO `damage_order` VALUES ('OD-20191101160358-91',0,0,'2019-11-01 16:03:40',0,'2019-11-01 16:03:40','2019-11-01 16:03:40'),('OD-20191101170731-17',0,0,'2019-11-01 17:06:22',0,'2019-11-01 17:06:22','2019-11-01 17:06:22'),('OD-20191101171632-90',45,12,'2019-11-01 17:06:22',0,'2019-11-01 17:06:22','2019-11-01 17:06:22');
UNLOCK TABLES;
DROP TABLE IF EXISTS `damage_repository`;
CREATE TABLE `damage_repository` (
`order_detail_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '记录编号',
`order_no` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '伤损单号',
`detect_time` datetime DEFAULT NULL COMMENT '检测时间',
`detect_stuff` int(11) DEFAULT NULL COMMENT '检查人员',
`damage_type` int(11) DEFAULT NULL COMMENT '损伤类型',
`damage_level` int(11) DEFAULT NULL COMMENT '伤损程度',
`damage_detail` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '损伤详情',
`damage_code` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '伤损编码',
`damage_old` int(32) DEFAULT NULL COMMENT '新旧伤',
`damage_old_id` int(32) DEFAULT NULL COMMENT '原伤损id',
`receiving_unit` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '接收单位',
`receiving_user` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '接收人',
`remark` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '备注',
`receiving_workarea_info` int(32) DEFAULT NULL COMMENT '接收线路工区',
`deal_status` int(32) DEFAULT NULL COMMENT '处置状态',
`import_status` int(32) DEFAULT NULL COMMENT '导入状态:1导入,2编辑,3已归档',
`check_equipment` int(32) DEFAULT NULL COMMENT '1.钢轨探伤仪,2.焊缝探伤仪,3.通用探伤仪,4.手工检查,5.双轨探伤仪,6.探伤车',
`analysis_result` int(32) DEFAULT NULL COMMENT '1.检验通过,2.数据重复,3.数据异常,4.疑似前后伤',
`is_delete` int(11) NOT NULL COMMENT '删除标记',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
`cancel` int(11) DEFAULT NULL COMMENT '销号状态:-1销号成功,1未销号',
`audit_status` int(11) DEFAULT NULL COMMENT '删除审计状态:-1审计成功,1待审计',
`last_detect_time` datetime DEFAULT NULL COMMENT '末次检测时间',
`delete_time` datetime DEFAULT NULL COMMENT '删除时间',
PRIMARY KEY (`order_detail_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20192035 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='伤损归档';
LOCK TABLES `damage_repository` WRITE;
INSERT INTO `damage_repository` VALUES (20191028,'OD-20191101160358-91','2019-10-29 17:52:42',1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,3,NULL,NULL,1,NULL,'2019-10-31 14:53:59',NULL,1,-1,NULL,NULL),(20191029,'OD-20191101160358-91','2019-10-15 17:47:39',2,2,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,3,NULL,NULL,1,NULL,NULL,NULL,1,0,NULL,NULL),(20192028,'OD-20191101170731-17','2019-10-25 17:52:42',4,2,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,-1,3,NULL,NULL,1,NULL,NULL,NULL,-1,0,NULL,NULL),(20192029,'OD-20191101170731-17','2019-10-18 17:47:39',5,7,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,3,NULL,NULL,1,NULL,NULL,NULL,-1,0,NULL,NULL),(20192030,'OD-20191101171632-90','2019-10-13 17:52:42',6,1,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,-1,3,NULL,NULL,1,NULL,NULL,NULL,-1,0,NULL,NULL);
UNLOCK TABLES;
DROP TABLE IF EXISTS `damage_repository_device`;
CREATE TABLE `damage_repository_device` (
`order_detail_id` int(11) NOT NULL COMMENT '记录编号',
`device_name` varchar(225) DEFAULT NULL COMMENT '设备名称',
`device_code` varchar(225) DEFAULT NULL COMMENT '位置唯一钢轨号/焊缝号/岔道号',
`device_type_code` varchar(225) DEFAULT NULL COMMENT '道岔配轨/焊缝(类型)号',
`track_no` varchar(32) DEFAULT NULL COMMENT '钢轨号',
`turnout_no` varchar(32) DEFAULT NULL COMMENT '道岔号',
`device_type` int(32) DEFAULT NULL COMMENT '设备类型',
`seal_number` varchar(225) DEFAULT NULL COMMENT '钢轨热印号',
`factory` varchar(225) DEFAULT NULL COMMENT '生产厂',
`nature` varchar(225) DEFAULT NULL COMMENT '材质',
`total_weight` float DEFAULT NULL COMMENT '累计通过总重',
`user_date` varchar(225) DEFAULT NULL COMMENT '出厂年月',
`radius` float DEFAULT NULL COMMENT '曲线半径',
`sleeper` int(11) DEFAULT NULL COMMENT '轨枕',
`rail_type` int(32) DEFAULT NULL COMMENT '铁轨类型',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
PRIMARY KEY (`order_detail_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='伤损归档-设备扩展';
LOCK TABLES `damage_repository_device` WRITE;
INSERT INTO `damage_repository_device` VALUES (20191028,'1','200',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,3,NULL,NULL),(20191029,'1','200',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,4,NULL,NULL),(20191030,'1','200',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,4,NULL,NULL),(20192028,'3','300',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,3,NULL,NULL),(20192029,'3','300',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,4,NULL,NULL),(20192030,'3','300',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,4,NULL,NULL);
UNLOCK TABLES;
DROP TABLE IF EXISTS `damage_repository_position`;
CREATE TABLE `damage_repository_position` (
`order_detail_id` int(11) NOT NULL COMMENT '记录编号',
`line_id` int(11) DEFAULT NULL COMMENT '线路编号',
`line_name` varchar(32) DEFAULT NULL COMMENT '线名',
`line_category` int(11) DEFAULT NULL COMMENT '线别',
`direction` int(11) DEFAULT NULL COMMENT '行别',
`station_id` int(11) DEFAULT NULL COMMENT '车站编号',
`miles` float DEFAULT NULL COMMENT '里程',
`thigh_track_id` int(11) DEFAULT NULL COMMENT '股道号',
`stock_exchange` int(11) DEFAULT NULL COMMENT '股别',
`damage_position` int(11) DEFAULT NULL COMMENT '损伤位置',
`hole_position` int(11) DEFAULT NULL COMMENT '孔裂位置',
`bridge_tunnel` int(11) DEFAULT NULL COMMENT '桥隧道口',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
PRIMARY KEY (`order_detail_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='伤损归档-受伤位置扩展';
LOCK TABLES `damage_repository_position` WRITE;
INSERT INTO `damage_repository_position` VALUES (20191028,2,'新疆',1,1,2,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL),(20191029,1,'成昆',1,2,1,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL),(20191030,2,'新疆',2,2,2,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL),(20192028,2,'京张',3,2,2,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL),(20192029,1,'西成',1,2,1,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL),(20192030,2,'沪蓉',2,2,2,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL);
UNLOCK TABLES;
DROP TABLE IF EXISTS `damage_type`;
CREATE TABLE `damage_type` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '伤损类型编号',
`damage_no` varchar(32) DEFAULT NULL COMMENT '伤损类型编码',
`damage_type` int(11) DEFAULT NULL COMMENT '伤损类型',
`damage_desc` varchar(128) DEFAULT NULL COMMENT '伤损类型描述',
`sort_num` varchar(16) DEFAULT NULL COMMENT '排序编号',
`status` int(11) DEFAULT NULL COMMENT '状态',
`is_delete` int(11) NOT NULL COMMENT '删除标记',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='伤损类型';
LOCK TABLES `damage_type` WRITE;
INSERT INTO `damage_type` VALUES (2,NULL,NULL,NULL,NULL,NULL,1,'2019-11-02 17:12:20','2019-11-02 17:12:20',NULL),(3,NULL,NULL,NULL,NULL,NULL,1,'2019-11-02 17:47:55','2019-11-02 17:47:55',NULL),(4,NULL,NULL,NULL,NULL,NULL,1,'2019-11-02 17:49:33','2019-11-02 17:49:33',NULL),(5,NULL,NULL,NULL,NULL,NULL,1,'2019-11-04 10:07:42','2019-11-04 10:07:42',NULL),(6,NULL,NULL,NULL,NULL,NULL,1,'2019-11-04 16:20:08','2019-11-04 16:20:08',NULL),(7,NULL,NULL,NULL,NULL,NULL,1,'2019-11-04 16:23:21','2019-11-04 16:23:21',NULL),(8,NULL,NULL,NULL,NULL,NULL,1,'2019-11-04 16:28:05','2019-11-04 16:28:05',NULL),(9,NULL,NULL,NULL,NULL,NULL,1,'2019-11-04 16:28:32','2019-11-04 16:28:32',NULL),(10,NULL,NULL,NULL,NULL,NULL,1,'2019-11-04 16:29:32','2019-11-04 16:29:32',NULL),(11,NULL,NULL,NULL,NULL,NULL,1,'2019-11-04 16:29:53','2019-11-04 16:29:53',NULL),(12,NULL,NULL,NULL,NULL,NULL,1,'2019-11-04 16:31:04','2019-11-04 16:31:04',NULL),(13,'123',1,'1','5',1,1,'2019-11-04 16:41:07','2019-11-04 16:41:07',NULL),(14,'456',1,'1','5',1,1,'2019-11-04 16:42:31','2019-11-04 16:42:31',NULL),(15,'456',1,'1','5',1,1,'2019-11-04 17:40:23','2019-11-04 17:40:23',NULL),(16,'456',1,'1','5',1,1,'2019-11-05 09:29:29','2019-11-05 09:29:29',NULL),(17,'456',1,'1','5',1,1,'2019-11-05 09:37:20','2019-11-05 09:37:20',NULL),(18,'456',1,'1','5',1,1,'2019-11-05 09:42:18','2019-11-05 09:42:18',NULL);
UNLOCK TABLES;
DROP TABLE IF EXISTS `deal_record`;
CREATE TABLE `deal_record` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '处置记录编号',
`order_detail_id` int(11) DEFAULT NULL COMMENT '记录编号',
`workshop_info_id` int(32) DEFAULT NULL COMMENT '处置车间',
`workarea_id` int(11) DEFAULT NULL COMMENT '处置人',
`deal_time` datetime DEFAULT NULL COMMENT '处置时间',
`deal_result` int(11) DEFAULT NULL COMMENT '处置结果',
`deal_remark` varchar(128) DEFAULT NULL COMMENT '处置说明',
`cmd_no` varchar(32) DEFAULT NULL COMMENT '施工命令行',
`is_delete` int(11) NOT NULL COMMENT '删除标记',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
`delete_audit_status` int(11) DEFAULT NULL COMMENT '删除审计状态:-1审计成功,1待审计',
`delete_time` datetime DEFAULT NULL COMMENT '删除时间',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='探伤处置记录';
LOCK TABLES `deal_record` WRITE;
INSERT INTO `deal_record` VALUES (1,20191028,NULL,1,'2019-10-30 00:00:00',1,NULL,NULL,1,NULL,NULL,NULL,0,NULL),(2,20191028,NULL,1,'2019-10-30 10:35:00',1,NULL,NULL,1,NULL,NULL,NULL,0,NULL),(3,20191028,NULL,12,'2019-10-30 00:00:00',1,NULL,NULL,-1,NULL,NULL,NULL,-1,NULL),(4,1,2,1,'2019-10-30 00:00:00',1,'cya','sdas',-1,NULL,NULL,NULL,-1,NULL),(5,20191029,1,2,'2019-10-30 00:00:00',1,NULL,NULL,1,NULL,NULL,NULL,0,NULL);
UNLOCK TABLES;
DROP TABLE IF EXISTS `detect_boundary_info`;
CREATE TABLE `detect_boundary_info` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '探伤管界编号',
`workshop_id` int(11) DEFAULT NULL COMMENT '工区编号',
`line_id` int(11) DEFAULT NULL COMMENT '线路编号',
`direction` int(11) DEFAULT NULL COMMENT '行别',
`start_miles` float DEFAULT NULL COMMENT '起点里程',
`end_miles` float DEFAULT NULL COMMENT '终点里程',
`track_type` int(11) DEFAULT NULL COMMENT '轨道类型',
`track_dis_category` int(11) DEFAULT NULL COMMENT '轨距类型',
`operate_status` int(11) DEFAULT NULL COMMENT '运营状态',
`long_chain` int(11) DEFAULT NULL COMMENT '长链标记',
`remark` varchar(128) DEFAULT NULL COMMENT '备注',
`status` int(11) DEFAULT NULL COMMENT '状态',
`is_delete` int(11) NOT NULL COMMENT '删除标记',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='探伤管界';
LOCK TABLES `detect_boundary_info` WRITE;
UNLOCK TABLES;
DROP TABLE IF EXISTS `detect_device_info`;
CREATE TABLE `detect_device_info` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '探伤仪器编号',
`workarea_id` int(11) DEFAULT NULL COMMENT '探伤工区编号',
`device_name` varchar(64) DEFAULT NULL COMMENT '仪器名称',
`device_mode` varchar(64) DEFAULT NULL COMMENT '仪器型号',
`deivce_no` varchar(64) DEFAULT NULL COMMENT '仪器编号',
`manufacturer` varchar(64) DEFAULT NULL COMMENT '制造厂家',
`ex_factory_date` date DEFAULT NULL COMMENT '出厂日期',
`fixed_assets_no` varchar(32) DEFAULT NULL COMMENT '固定资产编号',
`fixed_assets_price` float DEFAULT NULL COMMENT '固定资产值',
`purchase_price` float DEFAULT NULL COMMENT '购置价格',
`commissioning_date` date DEFAULT NULL COMMENT '投产日期',
`durable_years` int(11) DEFAULT NULL COMMENT '可用年限',
`scrap_date` date DEFAULT NULL COMMENT '报废日期',
`length` float DEFAULT NULL COMMENT '外形长度',
`width` float DEFAULT NULL COMMENT '外形宽度',
`weight` float DEFAULT NULL COMMENT '外形高度',
`use_status` int(11) DEFAULT NULL COMMENT '使用状态',
`remark` varchar(128) DEFAULT NULL COMMENT '备注',
`status` int(11) DEFAULT NULL COMMENT '状态',
`is_delete` int(11) NOT NULL COMMENT '删除标记',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='探伤仪器';
LOCK TABLES `detect_device_info` WRITE;
UNLOCK TABLES;
DROP TABLE IF EXISTS `detect_goup_user`;
CREATE TABLE `detect_goup_user` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '组员编号',
`group_id` int(11) DEFAULT NULL COMMENT '班组编号',
`member_id` int(11) DEFAULT NULL COMMENT '成员编号',
`status` int(11) DEFAULT NULL COMMENT '状态',
`is_delete` int(11) NOT NULL COMMENT '删除标记',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='探伤班组人员';
LOCK TABLES `detect_goup_user` WRITE;
UNLOCK TABLES;
DROP TABLE IF EXISTS `detect_group`;
CREATE TABLE `detect_group` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '班组编号',
`group_name` varchar(32) DEFAULT NULL COMMENT '班组名称',
`leader_id` int(11) DEFAULT NULL COMMENT '班组组长',
`status` int(11) DEFAULT NULL COMMENT '状态',
`is_delete` int(11) NOT NULL COMMENT '删除标记',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='探伤班组信息';
LOCK TABLES `detect_group` WRITE;
UNLOCK TABLES;
DROP TABLE IF EXISTS `detect_staff_info`;
CREATE TABLE `detect_staff_info` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '探伤人员编号',
`workarea_id` int(11) DEFAULT NULL COMMENT '探伤工区编号',
`name` varchar(32) DEFAULT NULL COMMENT '姓名',
`position_id` int(11) DEFAULT NULL COMMENT '职位编号',
`gender` int(11) DEFAULT NULL COMMENT '性别',
`id_card_no` varchar(32) DEFAULT NULL COMMENT '身份证',
`birthday` date DEFAULT NULL COMMENT '出生日期',
`edu_degree` int(11) DEFAULT NULL COMMENT '文化程度',
`tec_category` int(11) DEFAULT NULL COMMENT '技术类别',
`grade_id` int(11) DEFAULT NULL COMMENT '职称编号',
`grade_gain_date` date DEFAULT NULL COMMENT '职称获得时间',
`qualification_grade` int(11) DEFAULT NULL COMMENT '探伤资质等级',
`qualification_gain_date` date DEFAULT NULL COMMENT '探伤资质发证日期',
`qualification_audit_date` date DEFAULT NULL COMMENT '探伤资质复审日期',
`qualification_valid_time` int(11) DEFAULT NULL COMMENT '探伤资质有效期',
`qualification_invalid_date` date DEFAULT NULL COMMENT '探伤资质截止日期',
`contact` varchar(16) DEFAULT NULL COMMENT '联系电话',
`remark` varchar(128) DEFAULT NULL COMMENT '备注',
`status` int(11) DEFAULT NULL COMMENT '状态',
`is_delete` int(11) NOT NULL COMMENT '删除标记',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='探伤人员';
LOCK TABLES `detect_staff_info` WRITE;
UNLOCK TABLES;
DROP TABLE IF EXISTS `detect_staff_info_copy`;
CREATE TABLE `detect_staff_info_copy` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '探伤人员编号',
`workarea_id` int(11) DEFAULT NULL COMMENT '探伤工区编号',
`name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '姓名',
`position_id` int(11) DEFAULT NULL COMMENT '职位编号',
`gender` int(11) DEFAULT NULL COMMENT '性别',
`id_card_no` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '身份证',
`birthday` date DEFAULT NULL COMMENT '出生日期',
`edu_degree` int(11) DEFAULT NULL COMMENT '文化程度',
`tec_category` int(11) DEFAULT NULL COMMENT '技术类别',
`grade_id` int(11) DEFAULT NULL COMMENT '职称编号',
`grade_gain_date` date DEFAULT NULL COMMENT '职称获得时间',
`qualification_grade` int(11) DEFAULT NULL COMMENT '探伤资质等级',
`qualification_gain_date` date DEFAULT NULL COMMENT '探伤资质发证日期',
`qualification_audit_date` date DEFAULT NULL COMMENT '探伤资质复审日期',
`qualification_valid_time` int(11) DEFAULT NULL COMMENT '探伤资质有效期',
`qualification_invalid_date` date DEFAULT NULL COMMENT '探伤资质截止日期',
`contact` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '联系电话',
`remark` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '备注',
`status` int(11) DEFAULT NULL COMMENT '状态',
`is_delete` int(11) NOT NULL COMMENT '删除标记',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='探伤人员';
LOCK TABLES `detect_staff_info_copy` WRITE;
UNLOCK TABLES;
DROP TABLE IF EXISTS `device_damage_map`;
CREATE TABLE `device_damage_map` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '关系编号',
`device_type` int(11) DEFAULT NULL COMMENT '设备类型',
`deivce_id` int(11) DEFAULT NULL COMMENT '设备编号',
`damage_id` int(11) DEFAULT NULL COMMENT '伤损编号',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='设备伤损关系';
LOCK TABLES `device_damage_map` WRITE;
INSERT INTO `device_damage_map` VALUES (1,1,1,2),(2,1,2,2),(3,1,3,2),(4,1,4,2),(17,1,1,1),(18,1,1,1),(19,1,1,1);
UNLOCK TABLES;
DROP TABLE IF EXISTS `device_position`;
CREATE TABLE `device_position` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
`device_code` varchar(32) DEFAULT NULL COMMENT '设备位置唯一编号',
`track_id` int(11) DEFAULT NULL COMMENT '钢轨id',
`device_no` varchar(32) DEFAULT NULL COMMENT '设备编号(对应导入标号)',
`line_id` int(11) DEFAULT NULL COMMENT '线路编号',
`line_name` varchar(32) DEFAULT NULL COMMENT '线名',
`line_category` int(11) DEFAULT NULL COMMENT '线别',
`direction` int(11) DEFAULT NULL COMMENT '行别',
`station_id` int(11) DEFAULT NULL COMMENT '车站编号',
`miles` float DEFAULT NULL COMMENT '里程',
`thigh_track_id` int(11) DEFAULT NULL COMMENT '股道号',
`stock_exchange` int(11) DEFAULT NULL COMMENT '股别',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='设备-位置映射';
LOCK TABLES `device_position` WRITE;
UNLOCK TABLES;
DROP TABLE IF EXISTS `division_user`;
CREATE TABLE `division_user` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
`user_id` int(11) DEFAULT NULL COMMENT '用户id',
`division_id` int(11) DEFAULT NULL COMMENT '工务段id',
`is_delete` int(11) DEFAULT NULL COMMENT '删除标记',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='工务段用户关系表';
LOCK TABLES `division_user` WRITE;
INSERT INTO `division_user` VALUES (1,1,1,1,'2019-10-30 18:28:20','2019-10-30 18:28:23',NULL),(2,1,2,1,'2019-10-30 19:15:22','2019-10-30 19:15:25',NULL);
UNLOCK TABLES;
DROP TABLE IF EXISTS `line_info`;
CREATE TABLE `line_info` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '线路编号',
`full_name` varchar(32) NOT NULL COMMENT '线路全称',
`short_name` varchar(64) NOT NULL COMMENT '线路简称',
`line_code` varchar(32) NOT NULL COMMENT '线路编码',
`input_code` varchar(16) NOT NULL COMMENT '输入代码',
`nature` int(11) DEFAULT NULL COMMENT '线路性质',
`grade` int(11) DEFAULT NULL COMMENT '线路等级',
`track_type` int(11) DEFAULT NULL COMMENT '轨道类型',
`distance` float DEFAULT NULL COMMENT '线路里程',
`traction_type` int(11) DEFAULT NULL COMMENT '牵引类型',
`gauge_type` int(11) DEFAULT NULL COMMENT '轨距类型',
`limit_grad` float DEFAULT NULL COMMENT '限制坡度',
`min_radius_curve` float DEFAULT NULL COMMENT '最小曲线半径',
`year_volume` float DEFAULT NULL COMMENT '年运量(万吨)',
`line_num` int(11) DEFAULT NULL COMMENT '正线数目',
`ballast_type` int(11) DEFAULT NULL COMMENT '道床类别',
`operate_type` int(11) DEFAULT NULL COMMENT '运营类型',
`commissioning_date` date DEFAULT NULL COMMENT '投产日期',
`line_branches` int(11) DEFAULT NULL COMMENT '线路干支',
`status` int(11) DEFAULT NULL COMMENT '状态',
`is_delete` int(11) NOT NULL COMMENT '删除标记',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='线路信息';
LOCK TABLES `line_info` WRITE;
INSERT INTO `line_info` VALUES (1,'测试2','cs','xxx','xxx',2,1,1,1.1,1,1,1.1,1.1,1.1,1,1,1,'2019-10-31',1,1,1,'2019-10-29 14:35:16',NULL,1),(2,'2','2','2','2',2,2,2,2,2,NULL,2,2,2,2,2,2,NULL,2,2,1,NULL,'2019-11-04 17:46:42',NULL),(4,'3','3','3','3',3,3,3,3,3,1,3,3,3,3,3,3,NULL,3,1,1,'2019-10-30 16:55:13','2019-11-05 10:36:27',NULL),(5,'线路测试','cs','2','xxxxx',1,1,1,2.22,1,NULL,12.2,3.3,3.3,5,1,1,'2019-11-05',NULL,1,1,'2019-11-04 17:38:31',NULL,1),(6,'线路全称测试','线路简称测试','csbm','输入码测试',1,1,1,20.2,1,NULL,45,50,50,1,1,1,'2019-11-05',1,1,1,'2019-11-05 10:28:13','2019-11-05 10:36:32',1),(7,'cs全称','cs简称','cs编码','cs输入码',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2019-11-05 10:35:48','2019-11-05 10:36:29',1);
UNLOCK TABLES;
DROP TABLE IF EXISTS `login_user`;
CREATE TABLE `login_user` (
`id` int(32) NOT NULL AUTO_INCREMENT,
`name` varchar(225) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '名字',
`password` varchar(26) DEFAULT NULL COMMENT '密码3',
`type` varchar(32) DEFAULT NULL,
`state` varchar(32) DEFAULT NULL,
`create_time` datetime DEFAULT NULL,
`update_time` datetime DEFAULT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
LOCK TABLES `login_user` WRITE;
INSERT INTO `login_user` VALUES (1,'(db)修改张无忌','修改密码','1','1','2019-07-29 14:48:28','2019-07-29 14:48:31'),(3,'小明','123456',NULL,NULL,NULL,NULL),(4,'Test','123456',NULL,NULL,NULL,NULL);
UNLOCK TABLES;
DROP TABLE IF EXISTS `station_info`;
CREATE TABLE `station_info` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '车站编号',
`track_division_id` int(11) NOT NULL COMMENT '公务段编号',
`full_name` varchar(64) DEFAULT NULL COMMENT '车站全称',
`short_name` varchar(32) DEFAULT NULL COMMENT '车站简称',
`station_code` varchar(32) DEFAULT NULL COMMENT '车站编码',
`input_code` varchar(16) DEFAULT NULL COMMENT '输入代码',
`station_type` int(11) DEFAULT NULL COMMENT '车站类型',
`station_grade` int(11) DEFAULT NULL COMMENT '车站等级',
`job_type` int(11) DEFAULT NULL COMMENT '技术作业别',
`thigh_track_num` int(11) DEFAULT NULL COMMENT '股道数量',
`ternout_num` int(11) DEFAULT NULL COMMENT '岔道数量',
`status` int(11) DEFAULT NULL COMMENT '状态',
`is_delete` int(11) DEFAULT NULL COMMENT '删除标记',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='车站信息';
LOCK TABLES `station_info` WRITE;
INSERT INTO `station_info` VALUES (1,1,'11','1','1','1',1,1,1,1,1,1,1,'2019-10-31 14:09:02',NULL,1),(2,1,'223','22','2','1',1,1,1,1,1,1,1,'2019-11-04 11:07:35','2019-11-04 11:07:37',1),(3,2,'测试车站','cs','csxxx','ppp',1,1,1,1,NULL,1,1,'2019-11-04 18:03:47',NULL,NULL);
UNLOCK TABLES;
DROP TABLE IF EXISTS `station_line`;
CREATE TABLE `station_line` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
`station_id` int(11) NOT NULL COMMENT '车站编号',
`line_id` int(11) NOT NULL COMMENT '线路编号',
`direction` int(11) DEFAULT NULL COMMENT '行别',
`cent_distance` float DEFAULT NULL COMMENT '中心点距离',
`start_distance` float DEFAULT NULL COMMENT '开始距离',
`end_distance` float DEFAULT NULL COMMENT '终端距离',
`status` int(11) DEFAULT NULL COMMENT '状态',
`sort_num` varchar(16) DEFAULT NULL COMMENT '排序编号',
`is_delete` int(11) NOT NULL COMMENT '删除标记',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='车站线路';
LOCK TABLES `station_line` WRITE;
INSERT INTO `station_line` VALUES (2,1,1,1,1,1,1,1,'1',1,'2019-11-04 10:45:55','2019-11-04 10:45:58',1),(4,2,2,1,1,1,1,1,'1',1,'2019-11-04 17:07:59','2019-11-04 17:08:01',1);
UNLOCK TABLES;
DROP TABLE IF EXISTS `sys_system_dictionary`;
CREATE TABLE `sys_system_dictionary` (
`dicid` int(20) NOT NULL AUTO_INCREMENT COMMENT '瀛楀吀Id',
`enum_name` varchar(225) DEFAULT NULL,
`enum_type` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '鏋氫妇绫诲瀷',
`text` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '鏋氫妇椤瑰叿浣撳悕瀛?',
`value` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '鏋氫妇value',
`sort_id` int(2) NOT NULL COMMENT '鎺掑簭',
`status` int(2) NOT NULL COMMENT '鐘舵€?0-鍚敤,1-绂佺敤',
`system_id` int(2) DEFAULT NULL COMMENT '浣跨敤绯荤粺',
PRIMARY KEY (`dicid`)
) ENGINE=InnoDB AUTO_INCREMENT=221 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
LOCK TABLES `sys_system_dictionary` WRITE;
INSERT INTO `sys_system_dictionary` VALUES (1,'伤损程度','defectsExtent','↑△','1',1,0,NULL),(2,'伤损程度','defectsExtent','↓△','2',2,0,NULL),(3,'伤损程度','defectsExtent','←△→','3',3,0,NULL),(4,'伤损程度','defectsExtent','↑△△','4',4,0,NULL),(5,'伤损程度','defectsExtent','↓△△','5',5,0,NULL),(6,'伤损程度','defectsExtent','←△△→','6',6,0,NULL),(7,'伤损程度','defectsExtent','↑△△△','7',7,0,NULL),(8,'伤损程度','defectsExtent','↓△△△','8',8,0,NULL),(9,'伤损程度','defectsExtent','←△△△→','9',9,0,NULL),(10,'伤损程度','defectsExtent','折断','10',10,0,NULL),(22,'处置状态','dealStatus','已处理','1',1,0,NULL),(23,'处置状态','dealStatus','未处理','-1',2,0,NULL),(24,'删除状态','delStatus','正常','1',1,0,NULL),(25,'删除状态','delStatus','已删除','-1',2,0,NULL),(26,'伤损位置','damagePosition','轨头','1',1,0,NULL),(27,'伤损位置','damagePosition','轨腰','2',2,0,NULL),(28,'伤损位置','damagePosition','轨底','3',3,0,NULL),(29,'伤损位置','damagePosition','螺孔','4',4,0,NULL),(30,'轨型','trackType','P75','1',1,0,NULL),(31,'轨型','trackType','P43','4',4,0,NULL),(32,'轨型','trackType','P50','3',3,0,NULL),(33,'轨型','trackType','P60','2',2,0,NULL),(34,'轨枕','tieCategory','土枕','1',1,0,NULL),(35,'轨枕','tieCategory','混凝土枕','2',2,0,NULL),(36,'轨枕','tieCategory','其他','3',3,0,NULL),(37,'线别','lineCategory','正线','1',1,0,NULL),(38,'线别','lineCategory','到发线','2',2,0,NULL),(39,'线别','lineCategory','其他站线','3',3,0,NULL),(40,'伤损类型','damageType','横向裂纹','1',1,0,NULL),(41,'伤损类型','damageType','螺孔裂纹','2',2,0,NULL),(42,'伤损类型','damageType','轨端裂纹','3',3,0,NULL),(43,'伤损类型','damageType','剥离掉块','4',4,0,NULL),(44,'伤损类型','damageType','轨面擦伤','5',5,0,NULL),(45,'伤损类型','damageType','水平裂纹','6',6,0,NULL),(46,'伤损类型','damageType','其他伤损','7',7,0,NULL),(47,'伤损类型','damageType','灰斑','8',8,0,NULL),(48,'伤损类型','damageType','光斑','9',9,0,NULL),(49,'伤损类型','damageType','裂纹','10',10,0,NULL),(50,'伤损类型','damageType','气孔','11',11,0,NULL),(51,'伤损类型','damageType','夹渣','12',12,0,NULL),(52,'伤损类型','damageType','未焊合','13',13,0,NULL),(53,'行别','direction','上行','1',1,0,NULL),(54,'行别','direction','下行','2',2,0,NULL),(55,'行别','direction','单线','3',3,0,NULL),(56,'行别','direction','三线','4',4,0,NULL),(57,'行别','direction','四线','5',5,0,NULL),(58,'行别','direction','五线','6',6,0,NULL),(59,'行别','direction','专用线','7',7,0,NULL),(60,'设备名称','deviceName','钢轨','1',1,0,NULL),(61,'设备名称','deviceName','道岔','3',3,0,NULL),(62,'设备名称','deviceName','焊缝','2',2,0,NULL),(63,'设备类型','deviceType','P75','101',1,0,NULL),(64,'设备类型','deviceType','P60','102',2,0,NULL),(65,'设备类型','deviceType','P50','103',3,0,NULL),(66,'设备类型','deviceType','P43','104',4,0,NULL),(67,'设备类型','deviceType','可动心岔','201',5,0,NULL),(68,'设备类型','deviceType','合金钢岔','202',6,0,NULL),(69,'设备类型','deviceType','高锰钢岔','203',7,0,NULL),(70,'设备类型','deviceType','铝热焊','301',8,0,NULL),(71,'设备类型','deviceType','气压焊','302',9,0,NULL),(72,'设备类型','deviceType','厂闪光焊','303',10,0,NULL),(73,'设备类型','deviceType','现闪光焊','304',11,0,NULL),(74,'设备类型','deviceType','电弧焊','305',12,0,NULL),(78,'焊缝类型','weldingType','铝热焊','1',1,0,NULL),(79,'焊缝类型','weldingType','气压焊','2',2,0,NULL),(80,'焊缝类型','weldingType','厂闪光焊','3',3,0,NULL),(81,'焊缝类型','weldingType','现闪光焊','4',4,0,NULL),(82,'焊缝类型','weldingType','电弧焊','5',5,0,NULL),(83,'辙叉构造','frogStructure','可动心岔','1',1,0,NULL),(84,'辙叉构造','frogStructure','合金钢岔','2',2,0,NULL),(85,'辙叉构造','frogStructure','高锰钢岔','3',3,0,NULL),(86,'线路性质','lineNature','普速','1',1,0,NULL),(87,'线路性质','lineNature','高铁','2',2,0,NULL),(88,'线路等级','lineGrade','普速I','1',1,0,NULL),(89,'线路等级','lineGrade','普速II','2',2,0,NULL),(90,'线路等级','lineGrade','普速III','3',3,0,NULL),(91,'线路等级','lineGrade','高铁250km/H','4',4,0,NULL),(92,'线路等级','lineGrade','高铁300Km/H','5',5,0,NULL),(93,'线路等级','lineGrade','高铁350Km/H','6',6,0,NULL),(94,'线路等级','lineGrade','其他','7',7,0,NULL),(95,'正线数目','lineNum','单线','1',1,0,NULL),(96,'正线数目','lineNum','双线','2',2,0,NULL),(97,'正线数目','lineNum','三线','3',3,0,NULL),(98,'正线数目','lineNum','四线','4',4,0,NULL),(99,'正线数目','lineNum','五线','5',5,0,NULL),(100,'牵引类型','tractionType','电力','1',1,0,NULL),(101,'牵引类型','tractionType','内燃','2',2,0,NULL),(102,'牵引类型','tractionType','动力组','3',3,0,NULL),(103,'牵引类型','tractionType','蒸汽','4',4,0,NULL),(104,'牵引类型','tractionType','其他','5',5,0,NULL),(105,'道床类型','ballastType','沥青道床','1',1,0,NULL),(106,'道床类型','ballastType','碎石道床','2',2,0,NULL),(107,'道床类型','ballastType','混泥土道床','3',3,0,NULL),(108,'轨道类型','trackType1','有缝','1',1,0,NULL),(109,'轨道类型','trackType1','无缝','2',2,0,NULL),(110,'运营类型','operateType','客运共线','1',1,0,NULL),(111,'运营类型','operateType','客运专线','2',2,0,NULL),(112,'运营类型','operateType','货运专线','3',3,0,NULL),(113,'轨距类型','gaugeType','准轨','1',1,0,NULL),(114,'轨距类型','gaugeType','窄轨','2',2,0,NULL),(115,'轨距类型','gaugeType','宽轨','3',3,0,NULL),(116,'干支线别','lineBranches','干线','1',1,0,NULL),(117,'干支线别','lineBranches','支线','2',2,0,NULL),(118,'新旧伤','damageOld','新伤','1',1,0,NULL),(119,'新旧伤','damageOld','旧伤','2',2,0,NULL),(120,'长链标记','longChain','是','1',1,0,NULL),(121,'长链标记','longChain','否','2',2,0,NULL),(122,'股别','stockExchange','左股','1',1,0,NULL),(123,'股别','stockExchange','右股','2',2,0,NULL),(124,'处置方式','dealResult','加固','1',1,0,NULL),(125,'桥隧道口','bridgeTunnel','桥','1',1,0,NULL),(126,'桥隧道口','bridgeTunnel','隧','2',2,0,NULL),(127,'股道类型','thighTrackType','正线','1',1,0,NULL),(128,'股道类型','thighTrackType','到发线','2',2,0,NULL),(129,'股道类型','thighTrackType','其他线','3',3,0,NULL),(130,'股道类型','thighTrackType','牵出线','4',4,0,NULL),(131,'股道类型','thighTrackType','货物线','5',5,0,NULL),(132,'股道类型','thighTrackType','机车行','6',6,0,NULL),(133,'股道类型','thighTrackType','车辆站修线','7',7,0,NULL),(134,'股道类型','thighTrackType','驼峰禁溜线','8',8,0,NULL),(135,'股道类型','thighTrackType','安全线','9',9,0,NULL),(136,'伤损程度2','damageLevel','重伤','1',1,0,NULL),(137,'伤损程度2','damageLevel','轻发伤','2',2,0,NULL),(138,'伤损程度2','damageLevel','轻伤','3',3,0,NULL),(139,'股道类型','thighTrackType','避难线','10',10,0,NULL),(140,'股道类型','thighTrackType','岔线','11',11,0,NULL),(141,'股道类型','thighTrackType','调车线','12',12,0,NULL),(142,'股道类型','thighTrackType','段管线','13',13,0,NULL),(143,'股道类型','thighTrackType','专用线','14',14,0,NULL),(144,'车站类型','stationType','客运站','1',1,0,NULL),(145,'车站类型','stationType','货运站','2',2,0,NULL),(146,'车站类型','stationType','编组站','3',3,0,NULL),(147,'车站类型','stationType','客货站','4',4,0,NULL),(148,'车站类型','stationType','其他','5',5,0,NULL),(149,'技术作业别','jobType','编组站','1',1,0,NULL),(150,'技术作业别','jobType','区段站','2',2,0,NULL),(151,'技术作业别','jobType','线路站','3',3,0,NULL),(152,'技术作业别','jobType','中间站','4',4,0,NULL),(153,'车站等级','stationGrade','特等站','1',1,0,NULL),(154,'车站等级','stationGrade','一等站','2',2,0,NULL),(155,'车站等级','stationGrade','二等站','3',3,0,NULL),(156,'车站等级','stationGrade','三等站','4',4,0,NULL),(157,'车站等级','stationGrade','四等站','5',5,0,NULL),(158,'车站等级','stationGrade','五等站','6',6,0,NULL),(159,'车站等级','stationGrade','乘降所','7',7,0,NULL),(160,'车站等级','stationGrade','线路所','8',8,0,NULL),(161,'道岔股别','turnoutThignCategory','直股','1',1,0,NULL),(162,'道岔股别','turnoutThignCategory','曲股','2',2,0,NULL),(163,'焊缝类型','weldingType','闪光焊','1',1,0,NULL),(164,'焊缝类型','weldingType','气压焊','2',2,0,NULL),(165,'焊缝类型','weldingType','铝热焊','3',3,0,NULL),(166,'焊缝类型','weldingType','电弧焊','4',4,0,NULL),(167,'焊接方式','weldingWay','固定式(工厂焊)','1',1,0,NULL),(168,'焊接方式','weldingWay','移动式(现场焊)','2',2,0,NULL),(169,'是否加固焊接','reinforceWelding','是','1',1,0,NULL),(170,'是否加固焊缝','reinforceWelding','否','2',2,0,NULL),(171,'道岔位置','position','正线','1',1,0,NULL),(172,'道岔位置','position','到发站','2',2,0,NULL),(173,'道岔位置','position','其他线','3',3,0,NULL),(174,'道岔位置','position','牵出线','4',4,0,NULL),(175,'道岔位置','position','货物线','5',5,0,NULL),(176,'道岔位置','position','车辆站','6',6,0,NULL),(177,'道岔位置','position','驼峰迂回线','7',7,0,NULL),(178,'道岔位置','position','驼峰禁溜线','8',8,0,NULL),(179,'道岔位置','position','安全线','9',9,0,NULL),(180,'道岔位置','position','避难线','10',10,0,NULL),(181,'道岔位置','position','岔线','11',11,0,NULL),(182,'道岔位置','position','调车线','12',12,0,NULL),(183,'道岔位置','position','段管线','13',13,0,NULL),(184,'道岔种类','turnoutKind','双开道岔','1',1,0,NULL),(185,'道岔种类','turnoutKind','单开道岔','2',2,0,NULL),(186,'道岔种类','turnoutKind','复式交分道岔','3',3,0,NULL),(187,'道岔种类','turnoutKind','菱形交叉','4',4,0,NULL),(188,'道岔种类','turnoutKind','其他','5',5,0,NULL),(189,'轨型','trackType','其他','5',5,0,NULL),(190,'尖轨类型','switchRailType','普曲','1',1,0,NULL),(191,'尖轨类型','switchRailType','普直','2',2,0,NULL),(192,'尖轨类型','switchRailType','AT弹','3',3,0,NULL),(193,'尖轨类型','switchRailType','AT直','4',4,0,NULL),(194,'尖轨类型','switchRailType','AT','5',5,0,NULL),(195,'尖轨类型','switchRailType','其他','6',6,0,NULL),(196,'曲线方向','cuvreDirection','左','1',1,0,NULL),(197,'曲线方向','cuvreDirection','右','2',2,0,NULL),(198,'时间段类型','durationType','当年','1',1,0,NULL),(199,'时间段类型','durationType','当月','2',2,0,NULL),(200,'时间段类型','durationType','当周','3',3,0,NULL),(201,'期次类型','lastOrCurrent','本期','1',1,0,NULL),(202,'期次类型（5.1）','lastOrCurrent','上期','2',2,0,NULL),(203,'排序类型（5.2）','rankType','按线路','2',2,0,NULL),(204,'排序类型（5.2）','rankType','按单位','1',1,0,NULL),(205,'材质','railMaterial','API','1',1,0,NULL),(206,'材质','railMaterial','U75','2',2,0,NULL),(207,'材质','railMaterial','U75V','3',3,0,NULL),(208,'材质','railMaterial','UIC','4',4,0,NULL),(209,'材质','railMaterial','U71MnK','5',5,0,NULL),(210,'材质','railMaterial','U71Mn','6',6,0,NULL),(211,'材质','railMaterial','QT','7',7,0,NULL),(212,'材质','railMaterial','U78CrV','8',8,0,NULL),(213,'材质','railMaterial','U77MnCr','9',9,0,NULL),(214,'材质','railMaterial','U76CrRE','10',10,0,NULL),(215,'材质','railMaterial','U75VG','11',11,0,NULL),(216,'材质','railMaterial','U71MnG','12',12,0,NULL),(217,'材质','railMaterial','贝氏体','13',13,0,NULL),(218,'钢轨伤损统计类型','railChartType','轨型','1',1,0,NULL),(219,'钢轨伤损统计类型','railChartType','材质','2',2,0,NULL),(220,'钢轨伤损统计类型','railChartType','钢厂','3',3,0,NULL);
UNLOCK TABLES;
DROP TABLE IF EXISTS `thigh_track_info`;
CREATE TABLE `thigh_track_info` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '股道编号',
`station_id` int(11) DEFAULT NULL COMMENT '车站编号',
`line_id` int(11) DEFAULT NULL COMMENT '线路编号',
`workarea_id` int(11) DEFAULT NULL COMMENT '宸ュ尯缂栧彿',
`thigh_track_no` varchar(16) DEFAULT NULL COMMENT '股道号',
`thigh_track_type` int(11) DEFAULT NULL COMMENT '鑲￠亾绫诲瀷',
`direction` int(11) DEFAULT NULL COMMENT '行别',
`tie_category` int(11) DEFAULT NULL COMMENT '轨枕类别',
`max_gradient` int(11) DEFAULT NULL COMMENT '最大坡度',
`curve_radius` float DEFAULT NULL COMMENT '曲线半径',
`grade_section_length` float DEFAULT NULL COMMENT '坡段长度',
`thigh_track_length` float DEFAULT NULL COMMENT '鑲￠亾闀垮害',
`sort_num` varchar(16) DEFAULT NULL COMMENT '排序编号',
`status` int(11) DEFAULT NULL COMMENT '状态',
`is_delete` int(11) NOT NULL COMMENT '删除标记',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='股道信息';
LOCK TABLES `thigh_track_info` WRITE;
INSERT INTO `thigh_track_info` VALUES (1,1,1,1,'1',1,1,1,1,1,1,1,'1',1,1,NULL,NULL,1),(2,1,1,1,'1',1,1,1,NULL,1,1,1,'1',1,1,'2019-10-30 18:37:11',NULL,NULL),(3,1,1,1,'1',1,1,1,NULL,1,1,1,'1',1,1,'2019-10-30 18:37:21',NULL,NULL),(4,1,1,1,'1',1,1,1,NULL,1,1,1,'1',1,1,'2019-10-30 18:37:37',NULL,NULL);
UNLOCK TABLES;
DROP TABLE IF EXISTS `track_division_info`;
CREATE TABLE `track_division_info` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
`full_name` varchar(128) NOT NULL COMMENT '工务段名称',
`short_name` varchar(64) DEFAULT NULL COMMENT '工务段简称',
`input_code` varchar(16) DEFAULT NULL COMMENT '输入代码',
`bureau_id` int(11) DEFAULT NULL COMMENT '铁路局编号',
`is_delete` int(11) NOT NULL COMMENT '删除标记',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='工务段信息';
LOCK TABLES `track_division_info` WRITE;
INSERT INTO `track_division_info` VALUES (1,'成都铁路局测试工务段1','测试工务段1','10086',1,1,'2019-10-31 09:43:43','2019-10-31 09:43:51',1),(2,'成都铁路局测试工务段2','测试工务段2','10087',2,1,'2019-10-31 09:51:24','2019-10-31 09:51:26',1);
UNLOCK TABLES;
DROP TABLE IF EXISTS `track_info`;
CREATE TABLE `track_info` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '轨道编号',
`track_code` varchar(32) NOT NULL COMMENT '轨道编码',
`track_type` int(11) DEFAULT NULL COMMENT '钢轨类型',
`track_division_id` int(11) NOT NULL COMMENT '工务段编号',
`is_delete` int(11) NOT NULL COMMENT '删除标记',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='钢轨信息';
LOCK TABLES `track_info` WRITE;
INSERT INTO `track_info` VALUES (1,'xxx',1,1,1,'2019-11-05 18:21:46','2019-11-06 18:21:51',1);
UNLOCK TABLES;
DROP TABLE IF EXISTS `tunnel_info`;
CREATE TABLE `tunnel_info` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '隧道编号',
`tunne_no` varchar(32) DEFAULT NULL COMMENT '隧道号',
`tunne_name` varchar(64) DEFAULT NULL COMMENT '隧道名',
`input_code` varchar(16) DEFAULT NULL COMMENT '输入码',
`track_division_id` int(11) DEFAULT NULL COMMENT '工务段编号',
`line_id` int(11) DEFAULT NULL COMMENT '线路编号',
`side` int(11) DEFAULT NULL COMMENT '线别',
`direction` int(11) DEFAULT NULL COMMENT '行别',
`track_distance` float DEFAULT NULL COMMENT '轨距',
`start_miles` float DEFAULT NULL COMMENT '起点里程',
`end_miles` float DEFAULT NULL COMMENT '终点里程',
`middle_miles` float DEFAULT NULL COMMENT '中心里程',
`length` float DEFAULT NULL COMMENT '全长',
`long_chain` int(11) DEFAULT NULL COMMENT '长链标记',
`remark` varchar(128) DEFAULT NULL COMMENT '备注',
`status` int(11) DEFAULT NULL COMMENT '状态',
`is_delete` int(11) NOT NULL COMMENT '删除标记',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='隧道信息';
LOCK TABLES `tunnel_info` WRITE;
INSERT INTO `tunnel_info` VALUES (1,'1','1','1',1,1,1,1,1,1,1,1,1,1,'1',1,1,'2019-10-30 16:46:09',NULL,1),(3,NULL,NULL,NULL,213,3123,123,NULL,123,1233,12312,123,123,123,'123',NULL,1,NULL,'2019-11-01 18:32:19',10086);
UNLOCK TABLES;
DROP TABLE IF EXISTS `turnout_info`;
CREATE TABLE `turnout_info` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '道岔编号',
`turnout_no` varchar(32) NOT NULL COMMENT '岔道号',
`station_id` int(11) NOT NULL COMMENT '车站编号',
`line_id` int(11) NOT NULL COMMENT '线路编号',
`workarea_id` int(11) NOT NULL COMMENT '宸ュ尯缂栧彿',
`thigh_track_id` int(11) DEFAULT NULL COMMENT '股道号',
`position` int(11) DEFAULT NULL COMMENT '岔道位置',
`frog_no` varchar(32) DEFAULT NULL COMMENT '辙叉号',
`frog_structure` int(11) DEFAULT NULL COMMENT '辙叉构造',
`direction` int(11) DEFAULT NULL COMMENT '行别',
`turnout_kind` int(11) DEFAULT NULL COMMENT '道岔种类',
`turnout_type` int(11) DEFAULT NULL COMMENT '道岔类型',
`track_type` int(11) DEFAULT NULL COMMENT '轨型',
`switch_rail_type` int(11) DEFAULT NULL COMMENT '尖轨类型',
`has_switch_rail` int(11) DEFAULT NULL COMMENT '是否包含道岔尖轨',
`has_movable_point_frog` int(11) DEFAULT NULL COMMENT '是否包含可动心轨',
`miles` float DEFAULT NULL COMMENT '里程',
`turnout_length` float DEFAULT NULL COMMENT '道岔全长',
`commissioning_date` date DEFAULT NULL COMMENT '投产日期',
`sort_num` varchar(16) DEFAULT NULL COMMENT '排序编号',
`status` int(11) DEFAULT NULL COMMENT '状态',
`remark` varchar(225) DEFAULT NULL COMMENT '备注',
`is_delete` int(11) DEFAULT NULL COMMENT '删除标记',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='道岔信息';
LOCK TABLES `turnout_info` WRITE;
INSERT INTO `turnout_info` VALUES (1,'300',1,1,1,1,1,'1',1,1,1,1,1,1,1,1,1,1,'2019-10-31','1',1,'1',1,'2019-10-30 17:02:54',NULL,NULL);
UNLOCK TABLES;
DROP TABLE IF EXISTS `welding_info`;
CREATE TABLE `welding_info` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '焊缝编号',
`welding_no` varchar(32) DEFAULT NULL COMMENT '焊缝标识',
`workarea_id` int(11) DEFAULT NULL COMMENT '工区编号',
`station_id` int(11) DEFAULT NULL COMMENT '车站编号',
`thigh_track_id` int(11) DEFAULT NULL COMMENT '股道编号',
`line_id` int(11) DEFAULT NULL COMMENT '线路编号',
`miles` float DEFAULT NULL COMMENT '里程',
`side` int(11) DEFAULT NULL COMMENT '线别',
`direction` int(11) DEFAULT NULL COMMENT '行别',
`turnout_id` int(11) DEFAULT NULL COMMENT '道岔号',
`welding_type` int(11) DEFAULT NULL COMMENT '焊缝类型',
`welding_way` int(11) DEFAULT NULL COMMENT '焊缝方式',
`position_category` int(11) DEFAULT NULL COMMENT '焊缝位置类别',
`track_id` int(11) DEFAULT NULL COMMENT '轨道编号',
`thign_track_category` int(11) DEFAULT NULL COMMENT '股别',
`turnout_thign_category` int(11) DEFAULT NULL COMMENT '道岔股别',
`position` int(11) DEFAULT NULL COMMENT '道岔位置',
`hole_num` int(11) DEFAULT NULL COMMENT '带孔数量',
`track_glancing_flatness` float DEFAULT NULL COMMENT '轨面平直度',
`inner_glancing_flatness` float DEFAULT NULL COMMENT '内测平直度',
`weld_track_temperature` float DEFAULT NULL COMMENT '焊接时轨温',
`weld_date` date DEFAULT NULL COMMENT '焊接日期',
`reinforce_welding` int(11) DEFAULT NULL COMMENT '是否加固焊接',
`weld_user` varchar(255) DEFAULT NULL COMMENT '鐒婃帴浜?',
`welder_unit` varchar(255) DEFAULT NULL COMMENT '焊接人员所属单位',
`status` int(11) DEFAULT NULL COMMENT '状态',
`is_delete` int(11) NOT NULL COMMENT '删除标记',
`remark` varchar(225) DEFAULT NULL COMMENT '备注',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='焊缝信息';
LOCK TABLES `welding_info` WRITE;
INSERT INTO `welding_info` VALUES (1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL),(2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL),(3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL),(4,'1',1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,'2019-11-19',1,'1','1',1,1,'1','2019-10-30 16:35:52','2019-11-12 18:40:50',1),(5,'1',1,NULL,NULL,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,NULL,NULL,'1',NULL,1,1,'1','2019-10-30 17:01:35',NULL,1);
UNLOCK TABLES;
DROP TABLE IF EXISTS `workarea_info`;
CREATE TABLE `workarea_info` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '工区编号',
`full_name` varchar(64) NOT NULL COMMENT '工区名称',
`short_name` varchar(32) NOT NULL COMMENT '工区简称',
`input_code` varchar(16) DEFAULT NULL COMMENT '输入代码',
`workshop_id` int(11) NOT NULL COMMENT '线路车间编号',
`is_delete` int(11) NOT NULL COMMENT '删除标记',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='线路工区';
LOCK TABLES `workarea_info` WRITE;
INSERT INTO `workarea_info` VALUES (1,'成都探伤工区测试1','成都探伤工区1','10089',1,1,'2019-10-31 09:58:19','2019-10-31 09:58:23',1),(2,'成都测试工区测试工区1','成都测试工区2','10090',2,1,'2019-10-31 09:59:10','2019-10-31 09:59:17',1);
UNLOCK TABLES;
DROP TABLE IF EXISTS `workshop_info`;
CREATE TABLE `workshop_info` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '车间编号',
`full_name` varchar(64) NOT NULL COMMENT '车间名称',
`short_name` varchar(32) DEFAULT NULL COMMENT '车间简称',
`input_code` varchar(16) DEFAULT NULL COMMENT '输入代码',
`workshop_type` int(11) DEFAULT NULL COMMENT '车间类型',
`track_division_id` int(11) DEFAULT NULL COMMENT '工务段编号',
`line_id` int(11) DEFAULT NULL COMMENT '线路编号',
`is_delete` int(11) NOT NULL COMMENT '删除标记',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='线路车间信息';
LOCK TABLES `workshop_info` WRITE;
INSERT INTO `workshop_info` VALUES (1,'成都铁路局测试车间1','成都测试车间1','10088',1,1,1,1,'2019-10-31 09:54:26','2019-10-31 09:54:29',1),(2,'成都铁路局测试车间2','成都测试车间2','10089',2,2,2,1,'2019-10-31 09:55:03','2019-10-31 09:55:12',1);
UNLOCK TABLES;
DROP TABLE IF EXISTS `worshop_boundary_info`;
CREATE TABLE `worshop_boundary_info` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '车间管界编号',
`workarea_id` int(11) DEFAULT NULL COMMENT '工区编号',
`line_id` int(11) DEFAULT NULL COMMENT '线路编号',
`direction` int(11) DEFAULT NULL COMMENT '行别',
`start_miles` float DEFAULT NULL COMMENT '起点里程',
`end_miles` float DEFAULT NULL COMMENT '终点里程',
`track_category` int(11) DEFAULT NULL COMMENT '轨道类别',
`track_type` int(11) DEFAULT NULL COMMENT '轨道类型',
`operate_status` int(11) DEFAULT NULL COMMENT '运营状态',
`long_chain` int(11) DEFAULT NULL COMMENT '长链标记',
`remark` varchar(128) DEFAULT NULL COMMENT '备注',
`status` int(11) DEFAULT NULL COMMENT '状态',
`is_delete` int(11) NOT NULL COMMENT '删除标记',
`create_time` datetime DEFAULT NULL COMMENT '创建时间',
`update_time` datetime DEFAULT NULL COMMENT '更新时间',
`operator` int(11) DEFAULT NULL COMMENT '操作人',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='线路车间管界';
LOCK TABLES `worshop_boundary_info` WRITE;
INSERT INTO `worshop_boundary_info` VALUES (4,1,1,NULL,11,11,11,1,1,1,NULL,1,1,'2019-10-30 16:08:37',NULL,NULL),(5,NULL,NULL,NULL,1231,1231,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'2019-10-31 18:55:53',123),(6,12,2,2,2,2,2,2,2,2,NULL,1,1,'2019-10-31 16:37:36',NULL,NULL),(7,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2019-10-31 18:15:26',NULL,NULL);
UNLOCK TABLES;
