exports.fdSystemDownProfitMap = {
	name: "fdSystemDownProfitMap",
	rawName: "FD_SYSTEM_DOWN_PROFIT_MAP",
	columns: {
		ID: {
			nullable: "N",
			isPk: false,
			description: "编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "渠道",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PROFIT_RATIO: {
			nullable: "N",
			isPk: false,
			description: "利润分配给下游的比例",
			name: "profitRatio",
			rawName: "PROFIT_RATIO",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

