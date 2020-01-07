exports.orderDelivery = {
	name: "orderDelivery",
	rawName: "ORDER_DELIVERY",
	columns: {
		deliveryId: {
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
		orderNo: {
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
		robotIp: {
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
		upOrderNo: {
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
		status: {
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
		manualStatus: {
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
		resultMsg: {
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
		queryStatus: {
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
		queryMsg: {
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
		queryIp: {
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
		createTime: {
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
		finishTime: {
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
		queryCreateTime: {
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
		nextQueryTime: {
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
		queryCntr: {
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
		downChannelNo: {
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
		nextDeliveryTime: {
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
		deliveryCount: {
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
		errorCode: {
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
		upApiUid: {
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
		proof: {
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
		upChannelId: {
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
		deliveryCode: {
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
		queryCode: {
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

