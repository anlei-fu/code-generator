exports.supTradeDownFund = {
	name: "supTradeDownFund",
	rawName: "SUP_TRADE_DOWN_FUND",
	columns: {
		recordId: {
			nullable: false,
			isPk: false,
			description: "资金变动编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		supOrderId: {
			nullable: false,
			isPk: false,
			description: "记账系统订单号",
			name: "supOrderId",
			rawName: "SUP_ORDER_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		downChannelNo: {
			nullable: false,
			isPk: false,
			description: "下游渠道编号",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		downAccountId: {
			nullable: false,
			isPk: false,
			description: "下游账户编号",
			name: "downAccountId",
			rawName: "DOWN_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		downCompanyId: {
			nullable: false,
			isPk: false,
			description: "下游公司编号",
			name: "downCompanyId",
			rawName: "DOWN_COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		sourceSystemId: {
			nullable: false,
			isPk: false,
			description: "系统编号",
			name: "sourceSystemId",
			rawName: "SOURCE_SYSTEM_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		tradeOrderNo: {
			nullable: false,
			isPk: false,
			description: "生产系统订单号",
			name: "tradeOrderNo",
			rawName: "TRADE_ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		tradeRefundNo: {
			nullable: false,
			isPk: false,
			description: "生产系统退款编号",
			name: "tradeRefundNo",
			rawName: "TRADE_REFUND_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		changeType: {
			nullable: false,
			isPk: false,
			description: "变动类型（加款、扣款、退款、提款）",
			name: "changeType",
			rawName: "CHANGE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		changeFace: {
			nullable: false,
			isPk: false,
			description: "变动面值",
			name: "changeFace",
			rawName: "CHANGE_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		changeAmount: {
			nullable: false,
			isPk: false,
			description: "变动金额",
			name: "changeAmount",
			rawName: "CHANGE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		changeTime: {
			nullable: false,
			isPk: false,
			description: "资金变动时间",
			name: "changeTime",
			rawName: "CHANGE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		tradeOrderTime: {
			nullable: false,
			isPk: false,
			description: "生产系统订单时间",
			name: "tradeOrderTime",
			rawName: "TRADE_ORDER_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		tradeChangeTime: {
			nullable: false,
			isPk: false,
			description: "生产系统资金变动时间",
			name: "tradeChangeTime",
			rawName: "TRADE_CHANGE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		balance: {
			nullable: false,
			isPk: false,
			description: "账户余额",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		memo: {
			nullable: true,
			isPk: false,
			description: "备注",
			name: "memo",
			rawName: "MEMO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

