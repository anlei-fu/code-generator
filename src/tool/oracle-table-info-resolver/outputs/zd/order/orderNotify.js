exports.orderNotify = {
	name: "orderNotify",
	rawName: "ORDER_NOTIFY",
	columns: {
		NOTIFY_ID: {
			nullable: false,
			isPk: false,
			description: "通知编号",
			name: "notifyId",
			rawName: "NOTIFY_ID",
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
		STATUS: {
			nullable: false,
			isPk: false,
			description: "回调状态1:无需处理2:等待处理3:正在处理:处理成功9:处理失败",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		NOTIFY_URL: {
			nullable: true,
			isPk: false,
			description: "通知地址",
			name: "notifyUrl",
			rawName: "NOTIFY_URL",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		LIMIT_NOTIFY: {
			nullable: false,
			isPk: false,
			description: "限制回调次数",
			name: "limitNotify",
			rawName: "LIMIT_NOTIFY",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		ROBOT_IP: {
			nullable: true,
			isPk: false,
			description: "机器IP",
			name: "robotIp",
			rawName: "ROBOT_IP",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		NOTIFY_CNTR: {
			nullable: false,
			isPk: false,
			description: "回调次数",
			name: "notifyCntr",
			rawName: "NOTIFY_CNTR",
			type: {
				name: "NUMBER",
				length: "1"
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
		NEXT_TIME: {
			nullable: true,
			isPk: false,
			description: "下次通知时间",
			name: "nextTime",
			rawName: "NEXT_TIME",
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
		NOTIFY_TYPE: {
			nullable: true,
			isPk: false,
			description: "通知类:1.支付,2.退款,3.充值",
			name: "notifyType",
			rawName: "NOTIFY_TYPE",
			type: {
				name: "NUMBER",
				length: ""
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
		}
	},
	description: "订单通知"
};

