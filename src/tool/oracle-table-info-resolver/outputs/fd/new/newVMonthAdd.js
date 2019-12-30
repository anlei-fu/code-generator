exports.newVMonthAdd = {
	name: "newVMonthAdd",
	rawName: "NEW_V_MONTH_ADD",
	columns: {
		ACCOUNT_TYPE: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "accountType",
			rawName: "ACCOUNT_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
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
		SUM_ADD_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "sumAddAmount",
			rawName: "SUM_ADD_AMOUNT",
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
		SNAP_MONTH: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "snapMonth",
			rawName: "SNAP_MONTH",
			type: {
				name: "DATE",
				length: ""
			}
		},
		CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
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
		}
	}
};

