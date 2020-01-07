exports.fdVReportBankDaily = {
	name: "fdVReportBankDaily",
	rawName: "FD_V_REPORT_BANK_DAILY",
	columns: {
		addAmount: {
			nullable: true,
			isPk: false,
			description: "",
			name: "addAmount",
			rawName: "ADD_AMOUNT",
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
		endBalance: {
			nullable: true,
			isPk: false,
			description: "",
			name: "endBalance",
			rawName: "END_BALANCE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		accountName: {
			nullable: false,
			isPk: false,
			description: "",
			name: "accountName",
			rawName: "ACCOUNT_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		accountId: {
			nullable: false,
			isPk: false,
			description: "",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		minusAmount: {
			nullable: true,
			isPk: false,
			description: "",
			name: "minusAmount",
			rawName: "MINUS_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		startBalance: {
			nullable: true,
			isPk: false,
			description: "",
			name: "startBalance",
			rawName: "START_BALANCE",
			type: {
				name: "NUMBER",
				length: ""
			}
		}
	}
};

