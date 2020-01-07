exports.fdVReportUpchannelDaily = {
	name: "fdVReportUpchannelDaily",
	rawName: "FD_V_REPORT_UPCHANNEL_DAILY",
	columns: {
		channelClassif: {
			nullable: true,
			isPk: false,
			description: "",
			name: "channelClassif",
			rawName: "CHANNEL_CLASSIF",
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
		}
	}
};

