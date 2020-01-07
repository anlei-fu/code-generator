exports.fdReportDownDaily = {
	name: "fdReportDownDaily",
	rawName: "FD_REPORT_DOWN_DAILY",
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
		reportTime: {
			nullable: false,
			isPk: false,
			description: "报表时间",
			name: "reportTime",
			rawName: "REPORT_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		billType: {
			nullable: true,
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
		orderCount: {
			nullable: false,
			isPk: false,
			description: "订单数量",
			name: "orderCount",
			rawName: "ORDER_COUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		tradeFace: {
			nullable: false,
			isPk: false,
			description: "交易面值",
			name: "tradeFace",
			rawName: "TRADE_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		tradeUnit: {
			nullable: false,
			isPk: false,
			description: "交易数量",
			name: "tradeUnit",
			rawName: "TRADE_UNIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		costFee: {
			nullable: false,
			isPk: false,
			description: "扣款金额",
			name: "costFee",
			rawName: "COST_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		realFee: {
			nullable: false,
			isPk: false,
			description: "实际扣款",
			name: "realFee",
			rawName: "REAL_FEE",
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
		refundUnit: {
			nullable: false,
			isPk: false,
			description: "退款数量(M)",
			name: "refundUnit",
			rawName: "REFUND_UNIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		refundFee: {
			nullable: false,
			isPk: false,
			description: "退款金额",
			name: "refundFee",
			rawName: "REFUND_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		refundReal: {
			nullable: false,
			isPk: false,
			description: "实际退款",
			name: "refundReal",
			rawName: "REFUND_REAL",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

