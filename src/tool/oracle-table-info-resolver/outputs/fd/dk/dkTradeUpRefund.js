exports.dkTradeUpRefund = {
	name: "dkTradeUpRefund",
	rawName: "DK_TRADE_UP_REFUND",
	columns: {
		recordId: {
			nullable: false,
			isPk: true,
			description: "主键",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		channelNo: {
			nullable: false,
			isPk: false,
			description: "渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		accountId: {
			nullable: false,
			isPk: false,
			description: "账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		dkOrderId: {
			nullable: false,
			isPk: false,
			description: "系统订单号",
			name: "dkOrderId",
			rawName: "DK_ORDER_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		tradeOrderNo: {
			nullable: false,
			isPk: false,
			description: "交易系统订单号",
			name: "tradeOrderNo",
			rawName: "TRADE_ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		tradeDeliveryNo: {
			nullable: false,
			isPk: false,
			description: "交易系统发货编号",
			name: "tradeDeliveryNo",
			rawName: "TRADE_DELIVERY_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		tradeRefundNo: {
			nullable: false,
			isPk: false,
			description: "交易系统退款编号",
			name: "tradeRefundNo",
			rawName: "TRADE_REFUND_NO",
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
		refundTime: {
			nullable: false,
			isPk: false,
			description: "退款时间",
			name: "refundTime",
			rawName: "REFUND_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		billType: {
			nullable: false,
			isPk: false,
			description: "利润类:1-前向2-后向",
			name: "billType",
			rawName: "BILL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		businessType: {
			nullable: false,
			isPk: false,
			description: "业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		carrierNo: {
			nullable: false,
			isPk: false,
			description: "运营商",
			name: "carrierNo",
			rawName: "CARRIER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		provinceNo: {
			nullable: false,
			isPk: false,
			description: "省份",
			name: "provinceNo",
			rawName: "PROVINCE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		refundUnit: {
			nullable: false,
			isPk: false,
			description: "退款总量",
			name: "refundUnit",
			rawName: "REFUND_UNIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		refundFace: {
			nullable: false,
			isPk: false,
			description: "退款面值",
			name: "refundFace",
			rawName: "REFUND_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		refundAmount: {
			nullable: false,
			isPk: false,
			description: "退款金额",
			name: "refundAmount",
			rawName: "REFUND_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		realRefund: {
			nullable: false,
			isPk: false,
			description: "实际金额",
			name: "realRefund",
			rawName: "REAL_REFUND",
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

