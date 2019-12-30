exports.dkTradeDownRefund = {
	name: "dkTradeDownRefund",
	rawName: "DK_TRADE_DOWN_REFUND",
	columns: {
		RECORD_ID: {
			nullable: "N",
			isPk: true,
			description: "主键",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "下游渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "下游账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DK_ORDER_ID: {
			nullable: "N",
			isPk: false,
			description: "记账系统订单号",
			name: "dkOrderId",
			rawName: "DK_ORDER_ID",
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
		TRADE_REFUND_NO: {
			nullable: "N",
			isPk: false,
			description: "交易系统退款号",
			name: "tradeRefundNo",
			rawName: "TRADE_REFUND_NO",
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
		REFUND_TIME: {
			nullable: "N",
			isPk: false,
			description: "退款创建时间",
			name: "refundTime",
			rawName: "REFUND_TIME",
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
		CARRIER_NO: {
			nullable: "N",
			isPk: false,
			description: "运营商",
			name: "carrierNo",
			rawName: "CARRIER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PROVINCE_NO: {
			nullable: "N",
			isPk: false,
			description: "省份",
			name: "provinceNo",
			rawName: "PROVINCE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		REFUND_UNIT: {
			nullable: "N",
			isPk: false,
			description: "退款总量",
			name: "refundUnit",
			rawName: "REFUND_UNIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		REFUND_FACE: {
			nullable: "N",
			isPk: false,
			description: "退款面值",
			name: "refundFace",
			rawName: "REFUND_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		REFUND_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "退款金额",
			name: "refundAmount",
			rawName: "REFUND_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		REAL_REFUND: {
			nullable: "N",
			isPk: false,
			description: "实际金额",
			name: "realRefund",
			rawName: "REAL_REFUND",
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
		}
	}
};

