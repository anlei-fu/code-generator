exports.dkVReportChannelDaily = {
	name: "dkVReportChannelDaily",
	rawName: "DK_V_REPORT_CHANNEL_DAILY",
	columns: {
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
		queryBalance: {
			nullable: false,
			isPk: false,
			description: "",
			name: "queryBalance",
			rawName: "QUERY_BALANCE",
			type: {
				name: "number",
				length: null
			}
		},
		endBalance: {
			nullable: false,
			isPk: false,
			description: "",
			name: "endBalance",
			rawName: "END_BALANCE",
			type: {
				name: "number",
				length: null
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
		addAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "addAmount",
			rawName: "ADD_AMOUNT",
			type: {
				name: "number",
				length: null
			}
		},
		balanceDifference: {
			nullable: false,
			isPk: false,
			description: "",
			name: "balanceDifference",
			rawName: "BALANCE_DIFFERENCE",
			type: {
				name: "number",
				length: null
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
				length: null
			}
		},
		channelSourceSystem: {
			nullable: false,
			isPk: false,
			description: "",
			name: "channelSourceSystem",
			rawName: "CHANNEL_SOURCE_SYSTEM",
			type: {
				name: "number",
				length: 20
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
		beginBalance: {
			nullable: false,
			isPk: false,
			description: "",
			name: "beginBalance",
			rawName: "BEGIN_BALANCE",
			type: {
				name: "number",
				length: null
			}
		},
		drawAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "drawAmount",
			rawName: "DRAW_AMOUNT",
			type: {
				name: "number",
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
		}
	}
};

