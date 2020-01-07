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
				name: "NUMBER",
				length: "3"
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
		sumAddAmount: {
			nullable: true,
			isPk: false,
			description: "",
			name: "sumAddAmount",
			rawName: "SUM_ADD_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
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
		snapMonth: {
			nullable: true,
			isPk: false,
			description: "",
			name: "snapMonth",
			rawName: "SNAP_MONTH",
			type: {
				name: "DATE",
				length: ""
			}
		},
		channelNo: {
			nullable: false,
			isPk: false,
			description: "",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
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
		}
	}
};

