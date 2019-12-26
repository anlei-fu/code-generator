exports.fdVReportUpchannelDaily = {
	name: "fdVReportUpchannelDaily",
	rawName: "FD_V_REPORT_UPCHANNEL_DAILY",
	columns: {
		channelClassif: {
			nullable: false,
			isPk: false,
			description: "",
			name: "channelClassif",
			rawName: "CHANNEL_CLASSIF",
			type: {
				name: "number",
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
		allUp: {
			nullable: false,
			isPk: false,
			description: "",
			name: "allUp",
			rawName: "ALL_UP",
			type: {
				name: "number",
				length: null
			}
		},
		upIncomeAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "upIncomeAmount",
			rawName: "UP_INCOME_AMOUNT",
			type: {
				name: "number",
				length: null
			}
		},
		upPay: {
			nullable: false,
			isPk: false,
			description: "",
			name: "upPay",
			rawName: "UP_PAY",
			type: {
				name: "number",
				length: null
			}
		},
		allAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "allAmount",
			rawName: "ALL_AMOUNT",
			type: {
				name: "number",
				length: null
			}
		},
		upPayAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "upPayAmount",
			rawName: "UP_PAY_AMOUNT",
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
				length: 1
			}
		},
		upIncome: {
			nullable: false,
			isPk: false,
			description: "",
			name: "upIncome",
			rawName: "UP_INCOME",
			type: {
				name: "number",
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
		}
	}
};

