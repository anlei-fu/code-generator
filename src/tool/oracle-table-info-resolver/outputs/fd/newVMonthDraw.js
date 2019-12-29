exports.newVMonthDraw = {
	name: "newVMonthDraw",
	rawName: "NEW_V_MONTH_DRAW",
	columns: {
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
		channelType: {
			nullable: false,
			isPk: false,
			description: "",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "number",
				length: 1
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
		drawAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "drawAmount",
			rawName: "DRAW_AMOUNT",
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
		}
	}
};

