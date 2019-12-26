exports.fdReportZeroBalanceCs = {
	name: "fdReportZeroBalanceCs",
	rawName: "FD_REPORT_ZERO_BALANCE_CS",
	columns: {
		downFirstFace: {
			nullable: false,
			isPk: false,
			description: "",
			name: "downFirstFace",
			rawName: "DOWN_FIRST_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		syncStatus: {
			nullable: false,
			isPk: false,
			description: "",
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
			description: "",
			name: "syncBatch",
			rawName: "SYNC_BATCH",
			type: {
				name: "number",
				length: 20
			}
		},
		recordDate: {
			nullable: false,
			isPk: false,
			description: "",
			name: "recordDate",
			rawName: "RECORD_DATE",
			type: {
				name: "date",
				length: null
			}
		},
		channelName: {
			nullable: false,
			isPk: false,
			description: "",
			name: "channelName",
			rawName: "CHANNEL_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		accountType: {
			nullable: false,
			isPk: false,
			description: "",
			name: "accountType",
			rawName: "ACCOUNT_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		downFirstAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "downFirstAmount",
			rawName: "DOWN_FIRST_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		channelStatus: {
			nullable: false,
			isPk: false,
			description: "",
			name: "channelStatus",
			rawName: "CHANNEL_STATUS",
			type: {
				name: "number",
				length: 1
			}
		},
		accountName: {
			nullable: false,
			isPk: false,
			description: "",
			name: "accountName",
			rawName: "ACCOUNT_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		companyId: {
			nullable: false,
			isPk: false,
			description: "",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		accountStatus: {
			nullable: false,
			isPk: false,
			description: "",
			name: "accountStatus",
			rawName: "ACCOUNT_STATUS",
			type: {
				name: "number",
				length: 1
			}
		},
		channelNo: {
			nullable: false,
			isPk: false,
			description: "",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		balance: {
			nullable: false,
			isPk: false,
			description: "",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		createdTime: {
			nullable: false,
			isPk: false,
			description: "",
			name: "createdTime",
			rawName: "CREATED_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		accountId: {
			nullable: false,
			isPk: false,
			description: "",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		recordId: {
			nullable: false,
			isPk: false,
			description: "",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		queryBalance: {
			nullable: false,
			isPk: false,
			description: "",
			name: "queryBalance",
			rawName: "QUERY_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		}
	}
};

