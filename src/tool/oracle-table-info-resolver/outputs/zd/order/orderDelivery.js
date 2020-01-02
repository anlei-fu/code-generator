exports.orderDelivery = {
	name: "orderDelivery",
	rawName: "ORDER_DELIVERY",
	columns: {
		DELIVERY_ID: {
			nullable: false,
			isPk: false,
			description: "发货编号",
			name: "deliveryId",
			rawName: "DELIVERY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ORDER_NO: {
			nullable: false,
			isPk: false,
			description: "订单号",
			name: "orderNo",
			rawName: "ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ROBOT_IP: {
			nullable: true,
			isPk: false,
			description: "发货ip",
			name: "robotIp",
			rawName: "ROBOT_IP",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		UP_ORDER_NO: {
			nullable: true,
			isPk: false,
			description: "上游订单号",
			name: "upOrderNo",
			rawName: "UP_ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		STATUS: {
			nullable: false,
			isPk: false,
			description: "状:20-等待发货30-正在发货90-失败0-成功",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		MANUAL_STATUS: {
			nullable: false,
			isPk: false,
			description: "人工状:10-无需20-等待人工0-成功",
			name: "manualStatus",
			rawName: "MANUAL_STATUS",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		RESULT_MSG: {
			nullable: true,
			isPk: false,
			description: "结果消息",
			name: "resultMsg",
			rawName: "RESULT_MSG",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		QUERY_STATUS: {
			nullable: false,
			isPk: false,
			description: "查询状态10-无需20-等待查询90-失败0-成功",
			name: "queryStatus",
			rawName: "QUERY_STATUS",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		QUERY_MSG: {
			nullable: true,
			isPk: false,
			description: "查询消息",
			name: "queryMsg",
			rawName: "QUERY_MSG",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		QUERY_IP: {
			nullable: true,
			isPk: false,
			description: "查询机器IP",
			name: "queryIp",
			rawName: "QUERY_IP",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CREATE_TIME: {
			nullable: false,
			isPk: false,
			description: "创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		FINISH_TIME: {
			nullable: true,
			isPk: false,
			description: "完成时间",
			name: "finishTime",
			rawName: "FINISH_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		QUERY_CREATE_TIME: {
			nullable: true,
			isPk: false,
			description: "查询创建时间",
			name: "queryCreateTime",
			rawName: "QUERY_CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		NEXT_QUERY_TIME: {
			nullable: true,
			isPk: false,
			description: "下次查询时间",
			name: "nextQueryTime",
			rawName: "NEXT_QUERY_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		QUERY_CNTR: {
			nullable: false,
			isPk: false,
			description: "查询次数",
			name: "queryCntr",
			rawName: "QUERY_CNTR",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		DOWN_CHANNEL_NO: {
			nullable: true,
			isPk: false,
			description: "下游渠道编号",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		NEXT_DELIVERY_TIME: {
			nullable: true,
			isPk: false,
			description: "下次发货时间",
			name: "nextDeliveryTime",
			rawName: "NEXT_DELIVERY_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		DELIVERY_COUNT: {
			nullable: true,
			isPk: false,
			description: "发货次数",
			name: "deliveryCount",
			rawName: "DELIVERY_COUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		ERROR_CODE: {
			nullable: true,
			isPk: false,
			description: "错误码",
			name: "errorCode",
			rawName: "ERROR_CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		UP_API_UID: {
			nullable: true,
			isPk: false,
			description: "上游api_uid",
			name: "upApiUid",
			rawName: "UP_API_UID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PROOF: {
			nullable: true,
			isPk: false,
			description: "凭证",
			name: "proof",
			rawName: "PROOF",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		UP_CHANNEL_ID: {
			nullable: true,
			isPk: false,
			description: "上游渠道编号",
			name: "upChannelId",
			rawName: "UP_CHANNEL_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		DELIVERY_CODE: {
			nullable: true,
			isPk: false,
			description: "发货机器人标识",
			name: "deliveryCode",
			rawName: "DELIVERY_CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		QUERY_CODE: {
			nullable: true,
			isPk: false,
			description: "查询机器人标识",
			name: "queryCode",
			rawName: "QUERY_CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	},
	description: "订单发货表"
};

