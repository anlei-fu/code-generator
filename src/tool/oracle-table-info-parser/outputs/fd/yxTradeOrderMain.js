exports.yxTradeOrderMain = {
	name: "yxTradeOrderMain",
	rawName: "YX_TRADE_ORDER_MAIN",
	columns: {
		yxOrderId: {
			nullable: false,
			isPk: false,
			description: "主键",
			name: "yxOrderId",
			rawName: "YX_ORDER_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		downChannelNo: {
			nullable: false,
			isPk: false,
			description: "下游渠道编号",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		downAccountId: {
			nullable: false,
			isPk: false,
			description: "下游扣款账号",
			name: "downAccountId",
			rawName: "DOWN_ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		downCompanyId: {
			nullable: false,
			isPk: false,
			description: "下游公司编号",
			name: "downCompanyId",
			rawName: "DOWN_COMPANY_ID",
			type: {
				name: "number",
				length: 20
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
		agentType: {
			nullable: false,
			isPk: false,
			description: "代理人类型",
			name: "agentType",
			rawName: "AGENT_TYPE",
			type: {
				name: "number",
				length: 3
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
		extOrderNo: {
			nullable: false,
			isPk: false,
			description: "扩展订单号交易系统供",
			name: "extOrderNo",
			rawName: "EXT_ORDER_NO",
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
				length: 20
			}
		},
		createTime: {
			nullable: false,
			isPk: false,
			description: "订单添加时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		orderTime: {
			nullable: false,
			isPk: false,
			description: "订单日期（交易系统下单日期）",
			name: "orderTime",
			rawName: "ORDER_TIME",
			type: {
				name: "date",
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
		orderFace: {
			nullable: false,
			isPk: false,
			description: "成交面值",
			name: "orderFace",
			rawName: "ORDER_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		orderAmount: {
			nullable: false,
			isPk: false,
			description: "代收金额（用户支付金额）",
			name: "orderAmount",
			rawName: "ORDER_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		agencyFee: {
			nullable: false,
			isPk: false,
			description: "代理人酬金（代理费）",
			name: "agencyFee",
			rawName: "AGENCY_FEE",
			type: {
				name: "number",
				length: 20
			}
		},
		handlingFee: {
			nullable: false,
			isPk: false,
			description: "三方平台手续费",
			name: "handlingFee",
			rawName: "HANDLING_FEE",
			type: {
				name: "number",
				length: 20
			}
		},
		successFace: {
			nullable: false,
			isPk: false,
			description: "成功面值",
			name: "successFace",
			rawName: "SUCCESS_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		lastEditTime: {
			nullable: false,
			isPk: false,
			description: "最后修改时间",
			name: "lastEditTime",
			rawName: "LAST_EDIT_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		incomeAmount: {
			nullable: false,
			isPk: false,
			description: "收益金额",
			name: "incomeAmount",
			rawName: "INCOME_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		realAmount: {
			nullable: false,
			isPk: false,
			description: "实际扣款金额",
			name: "realAmount",
			rawName: "REAL_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		couponAmount: {
			nullable: false,
			isPk: false,
			description: "优惠券金额",
			name: "couponAmount",
			rawName: "COUPON_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		}
	}
};

