exports.incomeDownUpTrade = {
	name: "incomeDownUpTrade",
	rawName: "INCOME_DOWN_UP_TRADE",
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
		tradeDate: {
			nullable: false,
			isPk: false,
			description: "交易日期",
			name: "tradeDate",
			rawName: "TRADE_DATE",
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

