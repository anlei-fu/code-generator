exports.fdVReportUpchannelDaily = {
	name: "fdVReportUpchannelDaily",
	rawName: "FD_V_REPORT_UPCHANNEL_DAILY",
	columns: {
		CHANNEL_CLASSIF: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "channelClassif",
			rawName: "CHANNEL_CLASSIF",
			type: {
				name: "NUMBER",
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
		ALL_UP: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "allUp",
			rawName: "ALL_UP",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		UP_INCOME_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "upIncomeAmount",
			rawName: "UP_INCOME_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		UP_PAY: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "upPay",
			rawName: "UP_PAY",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		ALL_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "allAmount",
			rawName: "ALL_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		UP_PAY_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "upPayAmount",
			rawName: "UP_PAY_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
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
		UP_INCOME: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "upIncome",
			rawName: "UP_INCOME",
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
		}
	}
};

