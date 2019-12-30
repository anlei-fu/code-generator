exports.yxTradeOrderMain = {
	name: "yxTradeOrderMain",
	rawName: "YX_TRADE_ORDER_MAIN",
	columns: {
		YX_ORDER_ID: {
			nullable: "N",
			isPk: false,
			description: "主键",
			name: "yxOrderId",
			rawName: "YX_ORDER_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DOWN_CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "下游渠道编号",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		DOWN_ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "下游扣款账号",
			name: "downAccountId",
			rawName: "DOWN_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DOWN_COMPANY_ID: {
			nullable: "N",
			isPk: false,
			description: "下游公司编号",
			name: "downCompanyId",
			rawName: "DOWN_COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		AGENT_ID: {
			nullable: "N",
			isPk: false,
			description: "代理人编号",
			name: "agentId",
			rawName: "AGENT_ID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		AGENT_TYPE: {
			nullable: "N",
			isPk: false,
			description: "代理人类型",
			name: "agentType",
			rawName: "AGENT_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		TRADE_ORDER_NO: {
			nullable: "N",
			isPk: false,
			description: "交易系统订单号",
			name: "tradeOrderNo",
			rawName: "TRADE_ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		EXT_ORDER_NO: {
			nullable: "N",
			isPk: false,
			description: "扩展订单号交易系统供",
			name: "extOrderNo",
			rawName: "EXT_ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ORDER_SOURCE: {
			nullable: "N",
			isPk: false,
			description: "订单来源（系统编号）",
			name: "orderSource",
			rawName: "ORDER_SOURCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CREATE_TIME: {
			nullable: "N",
			isPk: false,
			description: "订单添加时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		ORDER_TIME: {
			nullable: "N",
			isPk: false,
			description: "订单日期（交易系统下单日期）",
			name: "orderTime",
			rawName: "ORDER_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		BUSINESS_TYPE: {
			nullable: "N",
			isPk: false,
			description: "业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		ORDER_FACE: {
			nullable: "N",
			isPk: false,
			description: "成交面值",
			name: "orderFace",
			rawName: "ORDER_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ORDER_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "代收金额（用户支付金额）",
			name: "orderAmount",
			rawName: "ORDER_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		AGENCY_FEE: {
			nullable: "N",
			isPk: false,
			description: "代理人酬金（代理费）",
			name: "agencyFee",
			rawName: "AGENCY_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		HANDLING_FEE: {
			nullable: "N",
			isPk: false,
			description: "三方平台手续费",
			name: "handlingFee",
			rawName: "HANDLING_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SUCCESS_FACE: {
			nullable: "N",
			isPk: false,
			description: "成功面值",
			name: "successFace",
			rawName: "SUCCESS_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		LAST_EDIT_TIME: {
			nullable: "Y",
			isPk: false,
			description: "最后修改时间",
			name: "lastEditTime",
			rawName: "LAST_EDIT_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		INCOME_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "收益金额",
			name: "incomeAmount",
			rawName: "INCOME_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		REAL_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "实际扣款金额",
			name: "realAmount",
			rawName: "REAL_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		COUPON_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "优惠券金额",
			name: "couponAmount",
			rawName: "COUPON_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

