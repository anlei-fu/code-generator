exports.fdSystemDownProfitMap = {
	name: "fdSystemDownProfitMap",
	rawName: "FD_SYSTEM_DOWN_PROFIT_MAP",
	columns: {
		id: {
			nullable: false,
			isPk: false,
			description: "编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "number",
				length: 20
			}
		},
		channelNo: {
			nullable: false,
			isPk: false,
			description: "渠道",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		profitRatio: {
			nullable: false,
			isPk: false,
			description: "利润分配给下游的比例",
			name: "profitRatio",
			rawName: "PROFIT_RATIO",
			type: {
				name: "number",
				length: 20
			}
		}
	}
};

