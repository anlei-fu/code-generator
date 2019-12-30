exports.czthTradeReport = {
	name: "czthTradeReport",
	rawName: "CZTH_TRADE_REPORT",
	columns: {
		RECORD_ID: {
			nullable: "N",
			isPk: false,
			description: "交易报表数据编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SNAP_TIME: {
			nullable: "N",
			isPk: false,
			description: "报表数据日期",
			name: "snapTime",
			rawName: "SNAP_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		SOURCE_SYSTEM: {
			nullable: "N",
			isPk: false,
			description: "渠道所属系统编号",
			name: "sourceSystem",
			rawName: "SOURCE_SYSTEM",
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
			description: "下游账户编号",
			name: "downAccountId",
			rawName: "DOWN_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_COMPANY_ID: {
			nullable: "N",
			isPk: false,
			description: "上游公司编号",
			name: "upCompanyId",
			rawName: "UP_COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "上游渠道编号",
			name: "upChannelNo",
			rawName: "UP_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		UP_ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "上游账户编号",
			name: "upAccountId",
			rawName: "UP_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		STATISTICS_TYPE: {
			nullable: "N",
			isPk: false,
			description: "业务分类",
			name: "statisticsType",
			rawName: "STATISTICS_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
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
		BILL_TYPE: {
			nullable: "N",
			isPk: false,
			description: "前后项信息",
			name: "billType",
			rawName: "BILL_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		SERVICE_RATE: {
			nullable: "N",
			isPk: false,
			description: "服务费率",
			name: "serviceRate",
			rawName: "SERVICE_RATE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TOTAL_UNIT: {
			nullable: "N",
			isPk: false,
			description: "扣款总规格",
			name: "totalUnit",
			rawName: "TOTAL_UNIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TOTAL_FACE: {
			nullable: "N",
			isPk: false,
			description: "扣款总面值",
			name: "totalFace",
			rawName: "TOTAL_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TOTAL_DRAW_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "扣款总金额",
			name: "totalDrawAmount",
			rawName: "TOTAL_DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		REFUND_UNIT: {
			nullable: "N",
			isPk: false,
			description: "退款总规格",
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
		REFUND_DRAW_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "退款金额",
			name: "refundDrawAmount",
			rawName: "REFUND_DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TOTAL_SUBSIDY: {
			nullable: "N",
			isPk: false,
			description: "总补贴金额",
			name: "totalSubsidy",
			rawName: "TOTAL_SUBSIDY",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		REFUND_SUBSIDY: {
			nullable: "N",
			isPk: false,
			description: "总退回补贴金额",
			name: "refundSubsidy",
			rawName: "REFUND_SUBSIDY",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

