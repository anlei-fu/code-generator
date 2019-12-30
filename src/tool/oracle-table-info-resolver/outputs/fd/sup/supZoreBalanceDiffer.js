exports.supZoreBalanceDiffer = {
	name: "supZoreBalanceDiffer",
	rawName: "SUP_ZORE_BALANCE_DIFFER",
	columns: {
		BALANCE: {
			nullable: "N",
			isPk: false,
			description: "调整金额",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

