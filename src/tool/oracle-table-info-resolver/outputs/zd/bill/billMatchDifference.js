exports.billMatchDifference = {
	name: "billMatchDifference",
	rawName: "BILL_MATCH_DIFFERENCE",
	columns: {
		ORDER_NO: {
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
		DIFF_ID: {
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
		CHANNEL_NO: {
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
		DIFF_TYPE: {
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
		PRICE: {
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
		REAL_FEE: {
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
		DIFF_MSG: {
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
		CREATE_TIME: {
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
		SYS_PRICE: {
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
		SYS_REAL_FACE: {
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
		TASK_ID: {
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
		ORDER_TIME: {
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
		PAY_TYPE: {
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
		BILL_DATE: {
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

