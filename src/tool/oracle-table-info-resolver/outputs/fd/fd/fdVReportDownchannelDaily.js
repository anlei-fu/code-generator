exports.fdVReportDownchannelDaily = {
	name: "fdVReportDownchannelDaily",
	rawName: "FD_V_REPORT_DOWNCHANNEL_DAILY",
	columns: {
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
		},
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
		companyId: {
			nullable: false,
			isPk: false,
			description: "",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
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
		channelStatus: {
			nullable: false,
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

