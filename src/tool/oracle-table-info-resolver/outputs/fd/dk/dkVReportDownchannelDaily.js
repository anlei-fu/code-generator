exports.dkVReportDownchannelDaily = {
	name: "dkVReportDownchannelDaily",
	rawName: "DK_V_REPORT_DOWNCHANNEL_DAILY",
	columns: {
		allDown: {
			nullable: true,
			isPk: false,
			description: "",
			name: "allDown",
			rawName: "ALL_DOWN",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		downPayAmount: {
			nullable: true,
			isPk: false,
			description: "",
			name: "downPayAmount",
			rawName: "DOWN_PAY_AMOUNT",
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
		downPay: {
			nullable: true,
			isPk: false,
			description: "",
			name: "downPay",
			rawName: "DOWN_PAY",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
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
		downIncome: {
			nullable: true,
			isPk: false,
			description: "",
			name: "downIncome",
			rawName: "DOWN_INCOME",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		downIncomeAmount: {
			nullable: true,
			isPk: false,
			description: "",
			name: "downIncomeAmount",
			rawName: "DOWN_INCOME_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		}
	}
};

