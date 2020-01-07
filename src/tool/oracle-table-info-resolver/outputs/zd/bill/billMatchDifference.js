exports.billMatchDifference = {
	name: "billMatchDifference",
	rawName: "BILL_MATCH_DIFFERENCE",
	columns: {
		orderNo: {
			nullable: true,
			isPk: false,
			description: "订单号",
			name: "orderNo",
			rawName: "ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		diffId: {
			nullable: true,
			isPk: false,
			description: "id",
			name: "diffId",
			rawName: "DIFF_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		channelNo: {
			nullable: true,
			isPk: false,
			description: "渠道",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		diffType: {
			nullable: true,
			isPk: false,
			description: "差异类型 ",
			name: "diffType",
			rawName: "DIFF_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		price: {
			nullable: true,
			isPk: false,
			description: "订单金额",
			name: "price",
			rawName: "PRICE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		realFee: {
			nullable: true,
			isPk: false,
			description: "实际金额",
			name: "realFee",
			rawName: "REAL_FEE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		diffMsg: {
			nullable: true,
			isPk: false,
			description: "差异信息",
			name: "diffMsg",
			rawName: "DIFF_MSG",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		createTime: {
			nullable: true,
			isPk: false,
			description: "生成时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		sysPrice: {
			nullable: true,
			isPk: false,
			description: "系统金额",
			name: "sysPrice",
			rawName: "SYS_PRICE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		sysRealFace: {
			nullable: true,
			isPk: false,
			description: "系统实际金额",
			name: "sysRealFace",
			rawName: "SYS_REAL_FACE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		taskId: {
			nullable: true,
			isPk: false,
			description: "任务id",
			name: "taskId",
			rawName: "TASK_ID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		orderTime: {
			nullable: true,
			isPk: false,
			description: "订单时间",
			name: "orderTime",
			rawName: "ORDER_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		payType: {
			nullable: true,
			isPk: false,
			description: "支付类型",
			name: "payType",
			rawName: "PAY_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		billDate: {
			nullable: true,
			isPk: false,
			description: "账单日期 (yyyy-mm-dd)",
			name: "billDate",
			rawName: "BILL_DATE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	},
	description: "对账差异"
};

