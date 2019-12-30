exports.rptUnitReportTrade = {
	name: "rptUnitReportTrade",
	rawName: "RPT_UNIT_REPORT_TRADE",
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
		SYS_NO: {
			nullable: "Y",
			isPk: false,
			description: "系统编号，fd、直冲，dk、代扣系统",
			name: "sysNo",
			rawName: "SYS_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		IS_HISTORY_DATA: {
			nullable: "N",
			isPk: false,
			description: "是否为历史库生成的数据（用来加入唯一索引）",
			name: "isHistoryData",
			rawName: "IS_HISTORY_DATA",
			type: {
				name: "NUMBER",
				length: "1"
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
		},
		SYNC_STATUS: {
			nullable: "N",
			isPk: false,
			description: "同步状态，0、同步完成，1等待同步，2正在同步",
			name: "syncStatus",
			rawName: "SYNC_STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		SYNC_BATCH: {
			nullable: "N",
			isPk: false,
			description: "同步批次号",
			name: "syncBatch",
			rawName: "SYNC_BATCH",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

