exports.dkVReportBankDaily = {
	name: "dkVReportBankDaily",
	rawName: "DK_V_REPORT_BANK_DAILY",
	columns: {
		minusAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "minusAmount",
			rawName: "MINUS_AMOUNT",
			type: {
				name: "number",
				length: null
			}
		},
		startBalance: {
			nullable: false,
			isPk: false,
			description: "",
			name: "startBalance",
			rawName: "START_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		accountName: {
			nullable: false,
			isPk: false,
			description: "",
			name: "accountName",
			rawName: "ACCOUNT_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		endBalance: {
			nullable: false,
			isPk: false,
			description: "",
			name: "endBalance",
			rawName: "END_BALANCE",
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
		accountId: {
			nullable: false,
			isPk: false,
			description: "",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		addAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "addAmount",
			rawName: "ADD_AMOUNT",
			type: {
				name: "number",
				length: null
			}
		}
	}
};

