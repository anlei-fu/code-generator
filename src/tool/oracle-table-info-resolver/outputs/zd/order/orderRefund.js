exports.orderRefund = {
	name: "orderRefund",
	rawName: "ORDER_REFUND",
	columns: {
		recordId: {
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
		refundFee: {
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
		createUser: {
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
		remark: {
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
		refundNo: {
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
		status: {
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
		refundMsg: {
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
		sendTime: {
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
		robotIp: {
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
		queryIp: {
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
		nextTime: {
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
		notifyState: {
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
		notifyTime: {
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
		refundDesc: {
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
		needNotify: {
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
		lossServiceFee: {
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
		startTime: {
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
		refundCntr: {
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

