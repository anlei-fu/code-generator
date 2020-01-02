exports.orderRefund = {
	name: "orderRefund",
	rawName: "ORDER_REFUND",
	columns: {
		RECORD_ID: {
			nullable: false,
			isPk: true,
			description: "退款编号",
			name: "recordId",
			rawName: "RECORD_ID",
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
		REFUND_FEE: {
			nullable: false,
			isPk: false,
			description: "退款金额",
			name: "refundFee",
			rawName: "REFUND_FEE",
			type: {
				name: "NUMBER",
				length: "20"
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
		CREATE_USER: {
			nullable: false,
			isPk: false,
			description: "创建人",
			name: "createUser",
			rawName: "CREATE_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		REMARK: {
			nullable: true,
			isPk: false,
			description: "备注",
			name: "remark",
			rawName: "REMARK",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		REFUND_NO: {
			nullable: true,
			isPk: false,
			description: "退款单号",
			name: "refundNo",
			rawName: "REFUND_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		STATUS: {
			nullable: false,
			isPk: false,
			description: "状态20-等待退款30-正在退款90-失败0-成功",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: "2"
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
		REFUND_MSG: {
			nullable: true,
			isPk: false,
			description: "上游退款消息",
			name: "refundMsg",
			rawName: "REFUND_MSG",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		SEND_TIME: {
			nullable: true,
			isPk: false,
			description: "发送上游退款的时间",
			name: "sendTime",
			rawName: "SEND_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		ROBOT_IP: {
			nullable: true,
			isPk: false,
			description: "退款机器人",
			name: "robotIp",
			rawName: "ROBOT_IP",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		QUERY_IP: {
			nullable: true,
			isPk: false,
			description: "查询机器ip",
			name: "queryIp",
			rawName: "QUERY_IP",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		NEXT_TIME: {
			nullable: true,
			isPk: false,
			description: "下次查询时间",
			name: "nextTime",
			rawName: "NEXT_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		NOTIFY_STATE: {
			nullable: true,
			isPk: false,
			description: "回调状态 10-无需20-等待30-正在90-失败0-成功",
			name: "notifyState",
			rawName: "NOTIFY_STATE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		NOTIFY_TIME: {
			nullable: true,
			isPk: false,
			description: "回调时间",
			name: "notifyTime",
			rawName: "NOTIFY_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		REFUND_DESC: {
			nullable: true,
			isPk: false,
			description: "退款原因",
			name: "refundDesc",
			rawName: "REFUND_DESC",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		NEED_NOTIFY: {
			nullable: true,
			isPk: false,
			description: "是否需要通知  :需要 :不需要",
			name: "needNotify",
			rawName: "NEED_NOTIFY",
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
		LOSS_SERVICE_FEE: {
			nullable: true,
			isPk: false,
			description: "亏损手续费",
			name: "lossServiceFee",
			rawName: "LOSS_SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		START_TIME: {
			nullable: true,
			isPk: false,
			description: "退款开始时间",
			name: "startTime",
			rawName: "START_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		REFUND_CNTR: {
			nullable: true,
			isPk: false,
			description: "退款次数",
			name: "refundCntr",
			rawName: "REFUND_CNTR",
			type: {
				name: "NUMBER",
				length: ""
			}
		}
	},
	description: "订单退款"
};

