exports.newVMonthAdd = {
	name: "newVMonthAdd",
	rawName: "NEW_V_MONTH_ADD",
	columns: {
		accountType: {
			nullable: false,
			isPk: false,
			description: "",
			name: "accountType",
			rawName: "ACCOUNT_TYPE",
			type: {
				name: "number",
				length: 3
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
		sumAddAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "sumAddAmount",
			rawName: "SUM_ADD_AMOUNT",
			type: {
				name: "number",
				length: null
			}
		},
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
		snapMonth: {
			nullable: false,
			isPk: false,
			description: "",
			name: "snapMonth",
			rawName: "SNAP_MONTH",
			type: {
				name: "date",
				length: null
			}
		},
		channelNo: {
			nullable: false,
			isPk: false,
			description: "",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
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

