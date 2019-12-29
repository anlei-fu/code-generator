exports.incomeDownUpMonth = {
	name: "incomeDownUpMonth",
	rawName: "INCOME_DOWN_UP_MONTH",
	columns: {
		id: {
			nullable: false,
			isPk: true,
			description: "编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "number",
				length: 20
			}
		},
		tradeMonth: {
			nullable: false,
			isPk: false,
			description: "交易月份",
			name: "tradeMonth",
			rawName: "TRADE_MONTH",
			type: {
				name: "date",
				length: null
			}
		},
		downChannelNo: {
			nullable: false,
			isPk: false,
			description: "下游渠道编号",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		downChannelName: {
			nullable: false,
			isPk: false,
			description: "下游渠道名称",
			name: "downChannelName",
			rawName: "DOWN_CHANNEL_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		upChannelNo: {
			nullable: false,
			isPk: false,
			description: "上游渠道编号",
			name: "upChannelNo",
			rawName: "UP_CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		upChannelName: {
			nullable: false,
			isPk: false,
			description: "上游渠道名称",
			name: "upChannelName",
			rawName: "UP_CHANNEL_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		downGroupId: {
			nullable: false,
			isPk: false,
			description: "下游分组",
			name: "downGroupId",
			rawName: "DOWN_GROUP_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		tradeAmount: {
			nullable: false,
			isPk: false,
			description: "交易金额",
			name: "tradeAmount",
			rawName: "TRADE_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		tradeProfit: {
			nullable: false,
			isPk: false,
			description: "交易利润",
			name: "tradeProfit",
			rawName: "TRADE_PROFIT",
			type: {
				name: "number",
				length: 20
			}
		}
	}
};

