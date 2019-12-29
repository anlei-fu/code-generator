exports.fdVReportDownchannelDaily = {
	name: "fdVReportDownchannelDaily",
	rawName: "FD_V_REPORT_DOWNCHANNEL_DAILY",
	columns: {
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
		downPay: {
			nullable: false,
			isPk: false,
			description: "",
			name: "downPay",
			rawName: "DOWN_PAY",
			type: {
				name: "number",
				length: null
			}
		},
		downIncomeAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "downIncomeAmount",
			rawName: "DOWN_INCOME_AMOUNT",
			type: {
				name: "number",
				length: null
			}
		},
		allDown: {
			nullable: false,
			isPk: false,
			description: "",
			name: "allDown",
			rawName: "ALL_DOWN",
			type: {
				name: "number",
				length: null
			}
		},
		downPayAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "downPayAmount",
			rawName: "DOWN_PAY_AMOUNT",
			type: {
				name: "number",
				length: null
			}
		},
		downIncome: {
			nullable: false,
			isPk: false,
			description: "",
			name: "downIncome",
			rawName: "DOWN_INCOME",
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
		}
	}
};

