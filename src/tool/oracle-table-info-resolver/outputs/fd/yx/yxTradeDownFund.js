exports.yxTradeDownFund = {
	name: "yxTradeDownFund",
	rawName: "YX_TRADE_DOWN_FUND",
	columns: {
		RECORD_ID: {
			nullable: "N",
			isPk: false,
			description: "下游变动编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		YX_ORDER_ID: {
			nullable: "N",
			isPk: false,
			description: "记账系统订单号",
			name: "yxOrderId",
			rawName: "YX_ORDER_ID",
			type: {
				name: "NUMBER",
				length: "20"
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
			description: "下游支付账号",
			name: "downAccountId",
			rawName: "DOWN_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANGE_TIME: {
			nullable: "N",
			isPk: false,
			description: "变动创建时间",
			name: "changeTime",
			rawName: "CHANGE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		ORDER_TIME: {
			nullable: "Y",
			isPk: false,
			description: "订单日期(交易系统下单日期)",
			name: "orderTime",
			rawName: "ORDER_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		CHANGE_TYPE: {
			nullable: "N",
			isPk: false,
			description: "变更类型:加款2：交易扣款3：交易退款:提款,11：发行加款，12：发行扣款，13：发行退款",
			name: "changeType",
			rawName: "CHANGE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		PAY_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "用户支付金额",
			name: "payAmount",
			rawName: "PAY_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANGE_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "变动金额",
			name: "changeAmount",
			rawName: "CHANGE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		BALANCE: {
			nullable: "N",
			isPk: false,
			description: "账户余额",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		HANDLING_FEE: {
			nullable: "N",
			isPk: false,
			description: "手续费（handling_fee=pay_Amount-Change_amount-INCOME_AMOUNT）",
			name: "handlingFee",
			rawName: "HANDLING_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		MEMO: {
			nullable: "Y",
			isPk: false,
			description: "备注",
			name: "memo",
			rawName: "MEMO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CHANGE_FACE: {
			nullable: "N",
			isPk: false,
			description: "变动面值",
			name: "changeFace",
			rawName: "CHANGE_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ORDER_FACE: {
			nullable: "N",
			isPk: false,
			description: "订单面值",
			name: "orderFace",
			rawName: "ORDER_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		REFUND_ORDER_ID: {
			nullable: "Y",
			isPk: false,
			description: "退款编号",
			name: "refundOrderId",
			rawName: "REFUND_ORDER_ID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		INCOME_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "收益金额",
			name: "incomeAmount",
			rawName: "INCOME_AMOUNT",
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

