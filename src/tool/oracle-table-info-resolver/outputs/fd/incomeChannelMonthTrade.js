exports.incomeChannelMonthTrade = {
	name: "incomeChannelMonthTrade",
	rawName: "INCOME_CHANNEL_MONTH_TRADE",
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
			description: "交易日期",
			name: "tradeMonth",
			rawName: "TRADE_MONTH",
			type: {
				name: "date",
				length: null
			}
		},
		channelNo: {
			nullable: false,
			isPk: false,
			description: "渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		channelName: {
			nullable: false,
			isPk: false,
			description: "渠道名称",
			name: "channelName",
			rawName: "CHANNEL_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		provinceNo: {
			nullable: false,
			isPk: false,
			description: "所属省份(下游为‘-’)",
			name: "provinceNo",
			rawName: "PROVINCE_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		tradeType: {
			nullable: false,
			isPk: false,
			description: "业务分类",
			name: "tradeType",
			rawName: "TRADE_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		groupId: {
			nullable: false,
			isPk: false,
			description: "分组",
			name: "groupId",
			rawName: "GROUP_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		groupType: {
			nullable: false,
			isPk: false,
			description: "分组类型",
			name: "groupType",
			rawName: "GROUP_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		tradeAmount: {
			nullable: false,
			isPk: false,
			description: "交易量",
			name: "tradeAmount",
			rawName: "TRADE_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		tradeRvAmount: {
			nullable: false,
			isPk: false,
			description: "交易平账金额",
			name: "tradeRvAmount",
			rawName: "TRADE_RV_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		tradeProfit: {
			nullable: false,
			isPk: false,
			description: "利润(包含平账）",
			name: "tradeProfit",
			rawName: "TRADE_PROFIT",
			type: {
				name: "number",
				length: 20
			}
		}
	}
};

