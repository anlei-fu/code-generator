exports.yxTradeAgentFund = {
	name: "yxTradeAgentFund",
	rawName: "YX_TRADE_AGENT_FUND",
	columns: {
		recordId: {
			nullable: false,
			isPk: false,
			description: "主键",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		upFundId: {
			nullable: false,
			isPk: false,
			description: "上游资金变动编号，退款时为下游资金变动编号",
			name: "upFundId",
			rawName: "UP_FUND_ID",
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
		upChannelNo: {
			nullable: false,
			isPk: false,
			description: "上游渠道编号",
			name: "upChannelNo",
			rawName: "UP_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		orderSource: {
			nullable: false,
			isPk: false,
			description: "订单来源（系统编号）",
			name: "orderSource",
			rawName: "ORDER_SOURCE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		agentId: {
			nullable: false,
			isPk: false,
			description: "代理人编号",
			name: "agentId",
			rawName: "AGENT_ID",
			type: {
				name: "VARCHAR2",
				length: ""
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
		balance: {
			nullable: false,
			isPk: false,
			description: "余额",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		changeType: {
			nullable: false,
			isPk: false,
			description: "变更类型:加款2：交易扣款3：交易退款4：提款,12：发行扣款，13：发行退款",
			name: "changeType",
			rawName: "CHANGE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		changeTime: {
			nullable: false,
			isPk: false,
			description: "变动时间",
			name: "changeTime",
			rawName: "CHANGE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		businessType: {
			nullable: true,
			isPk: false,
			description: "业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		yxTradeOrderNo: {
			nullable: true,
			isPk: false,
			description: "外部系统订单编号",
			name: "yxTradeOrderNo",
			rawName: "YX_TRADE_ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		yxOrderId: {
			nullable: true,
			isPk: false,
			description: "订单编号",
			name: "yxOrderId",
			rawName: "YX_ORDER_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

