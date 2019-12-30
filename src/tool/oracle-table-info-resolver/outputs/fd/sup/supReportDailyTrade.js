exports.supReportDailyTrade = {
	name: "supReportDailyTrade",
	rawName: "SUP_REPORT_DAILY_TRADE",
	columns: {
		RECORD_ID: {
			nullable: "N",
			isPk: false,
			description: "记录编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		REPORT_DATE: {
			nullable: "N",
			isPk: false,
			description: "数据日期",
			name: "reportDate",
			rawName: "REPORT_DATE",
			type: {
				name: "DATE",
				length: ""
			}
		},
		CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "渠道编号",
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
			description: "账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		COMPANY_ID: {
			nullable: "N",
			isPk: false,
			description: "公司编号",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SYSTEM_ID: {
			nullable: "N",
			isPk: false,
			description: "系统编号",
			name: "systemId",
			rawName: "SYSTEM_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANNEL_TYPE: {
			nullable: "N",
			isPk: false,
			description: "渠道类型",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
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
		STATISTICS_TYPE: {
			nullable: "N",
			isPk: false,
			description: "财务分类",
			name: "statisticsType",
			rawName: "STATISTICS_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		TRADE_COUNT: {
			nullable: "N",
			isPk: false,
			description: "销卡张数",
			name: "tradeCount",
			rawName: "TRADE_COUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TRADE_UNIT: {
			nullable: "N",
			isPk: false,
			description: "交易规格",
			name: "tradeUnit",
			rawName: "TRADE_UNIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TRADE_FACE: {
			nullable: "N",
			isPk: false,
			description: "交易面值",
			name: "tradeFace",
			rawName: "TRADE_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TRADE_AMOUNT: {
			nullable: "N",
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

