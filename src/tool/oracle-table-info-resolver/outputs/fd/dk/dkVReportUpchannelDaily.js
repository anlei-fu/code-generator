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
				name: "DATE",
				length: ""
			}
		},
		allAmount: {
			nullable: true,
			isPk: false,
			description: "",
			name: "allAmount",
			rawName: "ALL_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		allUp: {
			nullable: true,
			isPk: false,
			description: "",
			name: "allUp",
			rawName: "ALL_UP",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		upPay: {
			nullable: true,
			isPk: false,
			description: "",
			name: "upPay",
			rawName: "UP_PAY",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		upPayAmount: {
			nullable: true,
			isPk: false,
			description: "",
			name: "upPayAmount",
			rawName: "UP_PAY_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		upIncome: {
			nullable: true,
			isPk: false,
			description: "",
			name: "upIncome",
			rawName: "UP_INCOME",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		accountStatus: {
			nullable: false,
			isPk: false,
			description: "",
			name: "accountStatus",
			rawName: "ACCOUNT_STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		upIncomeAmount: {
			nullable: true,
			isPk: false,
			description: "",
			name: "upIncomeAmount",
			rawName: "UP_INCOME_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		}
	}
};

