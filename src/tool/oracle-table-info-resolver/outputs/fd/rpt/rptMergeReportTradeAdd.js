exports.rptMergeReportTradeAdd = {
	name: "rptMergeReportTradeAdd",
	rawName: "RPT_MERGE_REPORT_TRADE_ADD",
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
		ACCOUNT_TYPE: {
			nullable: "N",
			isPk: false,
			description: "账户类型:上游渠道:下游渠道:银行账户",
			name: "accountType",
			rawName: "ACCOUNT_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		ADD_SYS_NO: {
			nullable: "N",
			isPk: false,
			description: "加款数据所属系统，存储过程中写死",
			name: "addSysNo",
			rawName: "ADD_SYS_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ADD_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "加款金额",
			name: "addAmount",
			rawName: "ADD_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		MINUS_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "加款金额",
			name: "minusAmount",
			rawName: "MINUS_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SNAP_TIME: {
			nullable: "N",
			isPk: false,
			description: "加款统计时间",
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

