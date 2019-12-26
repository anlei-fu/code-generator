exports.czthTradeReport = {
	name: "czthTradeReport",
	rawName: "CZTH_TRADE_REPORT",
	columns: {
		recordId: {
			nullable: false,
			isPk: false,
			description: "交易报表数据编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		snapTime: {
			nullable: false,
			isPk: false,
			description: "报表数据日期",
			name: "snapTime",
			rawName: "SNAP_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		sourceSystem: {
			nullable: false,
			isPk: false,
			description: "渠道所属系统编号",
			name: "sourceSystem",
			rawName: "SOURCE_SYSTEM",
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
			description: "下游账户编号",
			name: "downAccountId",
			rawName: "DOWN_ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		upCompanyId: {
			nullable: false,
			isPk: false,
			description: "上游公司编号",
			name: "upCompanyId",
			rawName: "UP_COMPANY_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		upChannelNo: {
			nullable: false,
			isPk: false,
			description: "上游渠道编号",
			name: "upChannelNo",
			rawName: "UP_CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		upAccountId: {
			nullable: false,
			isPk: false,
			description: "上游账户编号",
			name: "upAccountId",
			rawName: "UP_ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		statisticsType: {
			nullable: false,
			isPk: false,
			description: "业务分类",
			name: "statisticsType",
			rawName: "STATISTICS_TYPE",
			type: {
				name: "number",
				length: 3
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
		billType: {
			nullable: false,
			isPk: false,
			description: "前后项信息",
			name: "billType",
			rawName: "BILL_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		serviceRate: {
			nullable: false,
			isPk: false,
			description: "服务费率",
			name: "serviceRate",
			rawName: "SERVICE_RATE",
			type: {
				name: "number",
				length: 20
			}
		},
		totalUnit: {
			nullable: false,
			isPk: false,
			description: "扣款总规格",
			name: "totalUnit",
			rawName: "TOTAL_UNIT",
			type: {
				name: "number",
				length: 20
			}
		},
		totalFace: {
			nullable: false,
			isPk: false,
			description: "扣款总面值",
			name: "totalFace",
			rawName: "TOTAL_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		totalDrawAmount: {
			nullable: false,
			isPk: false,
			description: "扣款总金额",
			name: "totalDrawAmount",
			rawName: "TOTAL_DRAW_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		refundUnit: {
			nullable: false,
			isPk: false,
			description: "退款总规格",
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
		refundDrawAmount: {
			nullable: false,
			isPk: false,
			description: "退款金额",
			name: "refundDrawAmount",
			rawName: "REFUND_DRAW_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		totalSubsidy: {
			nullable: false,
			isPk: false,
			description: "总补贴金额",
			name: "totalSubsidy",
			rawName: "TOTAL_SUBSIDY",
			type: {
				name: "number",
				length: 20
			}
		},
		refundSubsidy: {
			nullable: false,
			isPk: false,
			description: "总退回补贴金额",
			name: "refundSubsidy",
			rawName: "REFUND_SUBSIDY",
			type: {
				name: "number",
				length: 20
			}
		}
	}
};

