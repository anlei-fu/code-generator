exports.yxTradeExpense = {
	name: "yxTradeExpense",
	rawName: "YX_TRADE_EXPENSE",
	columns: {
		recordId: {
			nullable: false,
			isPk: false,
			description: "主键",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		yxOrderId: {
			nullable: false,
			isPk: false,
			description: "记账系统订单号",
			name: "yxOrderId",
			rawName: "YX_ORDER_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		tradeOrderNo: {
			nullable: false,
			isPk: false,
			description: "交易系统订单号",
			name: "tradeOrderNo",
			rawName: "TRADE_ORDER_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		tradeExpenseNo: {
			nullable: false,
			isPk: false,
			description: "交易系统费用编号",
			name: "tradeExpenseNo",
			rawName: "TRADE_EXPENSE_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		orderSource: {
			nullable: false,
			isPk: false,
			description: "订单来源（系统编号）",
			name: "orderSource",
			rawName: "ORDER_SOURCE",
			type: {
				name: "number",
				length: 3
			}
		},
		expenseType: {
			nullable: false,
			isPk: false,
			description: "费用类型1：快递费，21：销券收益",
			name: "expenseType",
			rawName: "EXPENSE_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		downChannelNo: {
			nullable: false,
			isPk: false,
			description: "下游渠道",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		upChannelNo: {
			nullable: false,
			isPk: false,
			description: "上游渠道",
			name: "upChannelNo",
			rawName: "UP_CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		agentId: {
			nullable: false,
			isPk: false,
			description: "代理人编号",
			name: "agentId",
			rawName: "AGENT_ID",
			type: {
				name: "varchar2",
				length: null
			}
		},
		businessType: {
			nullable: false,
			isPk: false,
			description: "业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		changeAmount: {
			nullable: false,
			isPk: false,
			description: "费用金额",
			name: "changeAmount",
			rawName: "CHANGE_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		balance: {
			nullable: false,
			isPk: false,
			description: "余额",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		changeTime: {
			nullable: false,
			isPk: false,
			description: "变动时间",
			name: "changeTime",
			rawName: "CHANGE_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		orderTime: {
			nullable: false,
			isPk: false,
			description: "交易系统订单时间",
			name: "orderTime",
			rawName: "ORDER_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		outChangeTime: {
			nullable: false,
			isPk: false,
			description: "交易系统变动时间",
			name: "outChangeTime",
			rawName: "OUT_CHANGE_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		accountId: {
			nullable: false,
			isPk: false,
			description: "费用账号id",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		orderAmount: {
			nullable: false,
			isPk: false,
			description: "订单金额",
			name: "orderAmount",
			rawName: "ORDER_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		incomeType: {
			nullable: false,
			isPk: false,
			description: "收入类型：1：支出，2：收入",
			name: "incomeType",
			rawName: "INCOME_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		memo: {
			nullable: false,
			isPk: false,
			description: "备注",
			name: "memo",
			rawName: "MEMO",
			type: {
				name: "varchar2",
				length: null
			}
		}
	}
};

