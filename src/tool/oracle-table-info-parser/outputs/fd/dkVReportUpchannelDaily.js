exports.dkVReportUpchannelDaily = {
	name: "dkVReportUpchannelDaily",
	rawName: "DK_V_REPORT_UPCHANNEL_DAILY",
	columns: {
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
		}
	}
};

