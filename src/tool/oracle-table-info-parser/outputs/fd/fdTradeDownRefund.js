exports.fdTradeDownRefund = {
	name: "fdTradeDownRefund",
	rawName: "FD_TRADE_DOWN_REFUND",
	columns: {
		recordId: {
			nullable: false,
			isPk: true,
			description: "主键",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		channelNo: {
			nullable: false,
			isPk: false,
			description: "下游渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		accountId: {
			nullable: false,
			isPk: false,
			description: "下游账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		fdOrderId: {
			nullable: false,
			isPk: false,
			description: "记账系统订单号",
			name: "fdOrderId",
			rawName: "FD_ORDER_ID",
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
		tradeRefundNo: {
			nullable: false,
			isPk: false,
			description: "交易系统退款号",
			name: "tradeRefundNo",
			rawName: "TRADE_REFUND_NO",
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
		refundTime: {
			nullable: false,
			isPk: false,
			description: "退款创建时间",
			name: "refundTime",
			rawName: "REFUND_TIME",
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
		carrierNo: {
			nullable: false,
			isPk: false,
			description: "运营商",
			name: "carrierNo",
			rawName: "CARRIER_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		provinceNo: {
			nullable: false,
			isPk: false,
			description: "省份",
			name: "provinceNo",
			rawName: "PROVINCE_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		refundUnit: {
			nullable: false,
			isPk: false,
			description: "退款总量",
			name: "refundUnit",
			rawName: "REFUND_UNIT",
			type: {
				name: "number",
				length: 20
			}
		},
		refundFace: {
			nullable: false,
			isPk: false,
			description: "退款面值",
			name: "refundFace",
			rawName: "REFUND_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		refundAmount: {
			nullable: false,
			isPk: false,
			description: "退款金额",
			name: "refundAmount",
			rawName: "REFUND_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		realRefund: {
			nullable: false,
			isPk: false,
			description: "实际金额",
			name: "realRefund",
			rawName: "REAL_REFUND",
			type: {
				name: "number",
				length: 20
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
		},
		hasSynUp: {
			nullable: false,
			isPk: false,
			description: "是否同步上游 0.已同步 1.未同步",
			name: "hasSynUp",
			rawName: "HAS_SYN_UP",
			type: {
				name: "number",
				length: 1
			}
		}
	}
};

