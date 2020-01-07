exports.supReportDailyTrade = {
	name: "supReportDailyTrade",
	rawName: "SUP_REPORT_DAILY_TRADE",
	columns: {
		recordId: {
			nullable: false,
			isPk: false,
			description: "记录编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		reportDate: {
			nullable: false,
			isPk: false,
			description: "数据日期",
			name: "reportDate",
			rawName: "REPORT_DATE",
			type: {
				name: "DATE",
				length: ""
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
		companyId: {
			nullable: false,
			isPk: false,
			description: "公司编号",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		systemId: {
			nullable: false,
			isPk: false,
			description: "系统编号",
			name: "systemId",
			rawName: "SYSTEM_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		channelType: {
			nullable: false,
			isPk: false,
			description: "渠道类型",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		billType: {
			nullable: false,
			isPk: false,
			description: "前后项信息",
			name: "billType",
			rawName: "BILL_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
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
		statisticsType: {
			nullable: false,
			isPk: false,
			description: "财务分类",
			name: "statisticsType",
			rawName: "STATISTICS_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		tradeCount: {
			nullable: false,
			isPk: false,
			description: "销卡张数",
			name: "tradeCount",
			rawName: "TRADE_COUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		tradeUnit: {
			nullable: false,
			isPk: false,
			description: "交易规格",
			name: "tradeUnit",
			rawName: "TRADE_UNIT",
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
		tradeAmount: {
			nullable: false,
			isPk: false,
			description: "交易金额",
			name: "tradeAmount",
			rawName: "TRADE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

