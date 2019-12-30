exports.incomeDownTrade = {
	name: "incomeDownTrade",
	rawName: "INCOME_DOWN_TRADE",
	columns: {
		ID: {
			nullable: "N",
			isPk: true,
			description: "编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TRADE_DATE: {
			nullable: "N",
			isPk: false,
			description: "交易日期",
			name: "tradeDate",
			rawName: "TRADE_DATE",
			type: {
				name: "DATE",
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
		},
		TRADE_TYPE: {
			nullable: "N",
			isPk: false,
			description: "交易分类",
			name: "tradeType",
			rawName: "TRADE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		TRADE_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "交易量",
			name: "tradeAmount",
			rawName: "TRADE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TRADE_RV_PROFIT: {
			nullable: "N",
			isPk: false,
			description: "交易平账利润",
			name: "tradeRvProfit",
			rawName: "TRADE_RV_PROFIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TRADE_PROFIT: {
			nullable: "N",
			isPk: false,
			description: "利润（包含平账）",
			name: "tradeProfit",
			rawName: "TRADE_PROFIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

