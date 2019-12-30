exports.rptUnitReportTradeSplit = {
	name: "rptUnitReportTradeSplit",
	rawName: "RPT_UNIT_REPORT_TRADE_SPLIT",
	columns: {
		ID: {
			nullable: "N",
			isPk: false,
			description: "编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
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
		CHANNEL_NAME: {
			nullable: "N",
			isPk: false,
			description: "渠道名称",
			name: "channelName",
			rawName: "CHANNEL_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CHANNEL_TYPE: {
			nullable: "N",
			isPk: false,
			description: "渠道分类，1、上游渠道，2、下游渠道",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		INCOME_UNIT: {
			nullable: "N",
			isPk: false,
			description: "收入单元，对应枚举",
			name: "incomeUnit",
			rawName: "INCOME_UNIT",
			type: {
				name: "NUMBER",
				length: "3"
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
		SOURCE_SYSTEM_ID: {
			nullable: "N",
			isPk: false,
			description: "系统编号",
			name: "sourceSystemId",
			rawName: "SOURCE_SYSTEM_ID",
			type: {
				name: "NUMBER",
				length: "20"
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
		BILL_SPLIT_TYPE: {
			nullable: "N",
			isPk: false,
			description: "分账方式，1、不分账，2、比例分账，3、双计分账",
			name: "billSplitType",
			rawName: "BILL_SPLIT_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		BILL_SPLIT_RATIO: {
			nullable: "N",
			isPk: false,
			description: "分账比例",
			name: "billSplitRatio",
			rawName: "BILL_SPLIT_RATIO",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TRADE_COUNT: {
			nullable: "N",
			isPk: false,
			description: "交易笔数",
			name: "tradeCount",
			rawName: "TRADE_COUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TRADE_DEBIT_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "交易扣款金额",
			name: "tradeDebitAmount",
			rawName: "TRADE_DEBIT_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TRADE_PROFIT: {
			nullable: "N",
			isPk: false,
			description: "交易利润",
			name: "tradeProfit",
			rawName: "TRADE_PROFIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		RV_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "交易平账影响利润的金额",
			name: "rvAmount",
			rawName: "RV_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SNAP_TIME: {
			nullable: "N",
			isPk: false,
			description: "数据快照日期",
			name: "snapTime",
			rawName: "SNAP_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	}
};

