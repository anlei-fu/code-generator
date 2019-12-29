exports.rptMergeReportTradeAdd = {
	name: "rptMergeReportTradeAdd",
	rawName: "RPT_MERGE_REPORT_TRADE_ADD",
	columns: {
		id: {
			nullable: false,
			isPk: false,
			description: "编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "number",
				length: 20
			}
		},
		channelNo: {
			nullable: false,
			isPk: false,
			description: "渠道编号",
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
			description: "账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		accountType: {
			nullable: false,
			isPk: false,
			description: "账户类型:上游渠道:下游渠道:银行账户",
			name: "accountType",
			rawName: "ACCOUNT_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		addSysNo: {
			nullable: false,
			isPk: false,
			description: "加款数据所属系统，存储过程中写死",
			name: "addSysNo",
			rawName: "ADD_SYS_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		addAmount: {
			nullable: false,
			isPk: false,
			description: "加款金额",
			name: "addAmount",
			rawName: "ADD_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		minusAmount: {
			nullable: false,
			isPk: false,
			description: "加款金额",
			name: "minusAmount",
			rawName: "MINUS_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		snapTime: {
			nullable: false,
			isPk: false,
			description: "加款统计时间",
			name: "snapTime",
			rawName: "SNAP_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		syncStatus: {
			nullable: false,
			isPk: false,
			description: "同步状态，0、同步完成，1等待同步，2正在同步",
			name: "syncStatus",
			rawName: "SYNC_STATUS",
			type: {
				name: "number",
				length: 1
			}
		},
		syncBatch: {
			nullable: false,
			isPk: false,
			description: "同步批次号",
			name: "syncBatch",
			rawName: "SYNC_BATCH",
			type: {
				name: "number",
				length: 20
			}
		}
	}
};

