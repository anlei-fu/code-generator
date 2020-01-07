exports.incomeUpTrade = {
	name: "incomeUpTrade",
	rawName: "INCOME_UP_TRADE",
	columns: {
		id: {
			nullable: false,
			isPk: true,
			description: "编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		tradeDate: {
			nullable: false,
			isPk: false,
			description: "交易日期",
			name: "tradeDate",
			rawName: "TRADE_DATE",
			type: {
				name: "DATE",
				length: ""
			}
		},
		channelNo: {
			nullable: false,
			isPk: false,
			description: "渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		provinceNo: {
			nullable: false,
			isPk: false,
			description: "所属省份",
			name: "provinceNo",
			rawName: "PROVINCE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		tradeType: {
			nullable: false,
			isPk: false,
			description: "业务分类",
			name: "tradeType",
			rawName: "TRADE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		tradeAmount: {
			nullable: false,
			isPk: false,
			description: "交易量",
			name: "tradeAmount",
			rawName: "TRADE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		tradeRvProfit: {
			nullable: false,
			isPk: false,
			description: "交易平账利润",
			name: "tradeRvProfit",
			rawName: "TRADE_RV_PROFIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		tradeProfit: {
			nullable: false,
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

