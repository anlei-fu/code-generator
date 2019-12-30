exports.fdVBaseBankChange = {
	name: "fdVBaseBankChange",
	rawName: "FD_V_BASE_BANK_CHANGE",
	columns: {
		ADD_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "addAmount",
			rawName: "ADD_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		MINUS_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "minusAmount",
			rawName: "MINUS_AMOUNT",
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
		ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SNAP_TIME: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "snapTime",
			rawName: "SNAP_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	}
};

