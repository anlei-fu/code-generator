exports.newVMonthStartZbalance = {
	name: "newVMonthStartZbalance",
	rawName: "NEW_V_MONTH_START_ZBALANCE",
	columns: {
		ACCOUNT_TYPE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "accountType",
			rawName: "ACCOUNT_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
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
		COMPANY_ID: {
			nullable: "Y",
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
			nullable: "Y",
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
			nullable: "Y",
			isPk: false,
			description: "",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		WARN_BALANCE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "warnBalance",
			rawName: "WARN_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		RECORD_DATE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "recordDate",
			rawName: "RECORD_DATE",
			type: {
				name: "DATE",
				length: ""
			}
		},
		ACCOUNT_NAME: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "accountName",
			rawName: "ACCOUNT_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CHANNEL_NAME: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "channelName",
			rawName: "CHANNEL_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ACCOUNT_ID: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANNEL_STATUS: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "channelStatus",
			rawName: "CHANNEL_STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		}
	}
};

