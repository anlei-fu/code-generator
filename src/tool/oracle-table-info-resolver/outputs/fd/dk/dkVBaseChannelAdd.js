exports.dkVBaseChannelAdd = {
	name: "dkVBaseChannelAdd",
	rawName: "DK_V_BASE_CHANNEL_ADD",
	columns: {
		ACCOUNT_TYPE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "accountType",
			rawName: "ACCOUNT_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		CHANNEL_NO: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
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
		},
		ACCOUNT_ID: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};
