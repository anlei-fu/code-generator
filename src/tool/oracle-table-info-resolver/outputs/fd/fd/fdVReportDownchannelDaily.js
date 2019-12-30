exports.fdVReportDownchannelDaily = {
	name: "fdVReportDownchannelDaily",
	rawName: "FD_V_REPORT_DOWNCHANNEL_DAILY",
	columns: {
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
		DOWN_PAY: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "downPay",
			rawName: "DOWN_PAY",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		DOWN_INCOME_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "downIncomeAmount",
			rawName: "DOWN_INCOME_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		ALL_DOWN: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "allDown",
			rawName: "ALL_DOWN",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		DOWN_PAY_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "downPayAmount",
			rawName: "DOWN_PAY_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		DOWN_INCOME: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "downIncome",
			rawName: "DOWN_INCOME",
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
		}
	}
};

