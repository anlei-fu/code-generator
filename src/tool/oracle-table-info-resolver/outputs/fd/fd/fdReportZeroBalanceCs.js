exports.fdReportZeroBalanceCs = {
	name: "fdReportZeroBalanceCs",
	rawName: "FD_REPORT_ZERO_BALANCE_CS",
	columns: {
		DOWN_FIRST_FACE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "downFirstFace",
			rawName: "DOWN_FIRST_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SYNC_STATUS: {
			nullable: "N",
			isPk: false,
			description: "",
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
			description: "",
			name: "syncBatch",
			rawName: "SYNC_BATCH",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		RECORD_DATE: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "recordDate",
			rawName: "RECORD_DATE",
			type: {
				name: "DATE",
				length: ""
			}
		},
		CHANNEL_NAME: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "channelName",
			rawName: "CHANNEL_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ACCOUNT_TYPE: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "accountType",
			rawName: "ACCOUNT_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		DOWN_FIRST_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "downFirstAmount",
			rawName: "DOWN_FIRST_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANNEL_STATUS: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "channelStatus",
			rawName: "CHANNEL_STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		ACCOUNT_NAME: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "accountName",
			rawName: "ACCOUNT_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		COMPANY_ID: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ACCOUNT_STATUS: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "accountStatus",
			rawName: "ACCOUNT_STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		BALANCE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CREATED_TIME: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "createdTime",
			rawName: "CREATED_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		RECORD_ID: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		QUERY_BALANCE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "queryBalance",
			rawName: "QUERY_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

