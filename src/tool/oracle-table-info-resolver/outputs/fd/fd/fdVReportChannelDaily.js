exports.fdVReportChannelDaily = {
	name: "fdVReportChannelDaily",
	rawName: "FD_V_REPORT_CHANNEL_DAILY",
	columns: {
		CHANNEL_STATUS: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "channelStatus",
			rawName: "CHANNEL_STATUS",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		BALANCE_DIFFERENCE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "balanceDifference",
			rawName: "BALANCE_DIFFERENCE",
			type: {
				name: "NUMBER",
				length: ""
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
				length: ""
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
		BEGIN_BALANCE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "beginBalance",
			rawName: "BEGIN_BALANCE",
			type: {
				name: "NUMBER",
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
		QUERY_BALANCE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "queryBalance",
			rawName: "QUERY_BALANCE",
			type: {
				name: "NUMBER",
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
		ADD_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "addAmount",
			rawName: "ADD_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		DRAW_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "drawAmount",
			rawName: "DRAW_AMOUNT",
			type: {
				name: "NUMBER",
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
		WARN_BALANCE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "warnBalance",
			rawName: "WARN_BALANCE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		END_BALANCE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "endBalance",
			rawName: "END_BALANCE",
			type: {
				name: "NUMBER",
				length: ""
			}
		}
	}
};

