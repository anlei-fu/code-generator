exports.incomeChannelMonthSum = {
	name: "incomeChannelMonthSum",
	rawName: "INCOME_CHANNEL_MONTH_SUM",
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
		TRADE_MONTH: {
			nullable: "N",
			isPk: false,
			description: "交易日期",
			name: "tradeMonth",
			rawName: "TRADE_MONTH",
			type: {
				name: "DATE",
				length: ""
			}
		},
		SYSTEM_NO: {
			nullable: "N",
			isPk: false,
			description: "所属系统编号",
			name: "systemNo",
			rawName: "SYSTEM_NO",
			type: {
				name: "VARCHAR2",
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
		CHANNEL_NAME: {
			nullable: "N",
			isPk: false,
			description: "渠道名称",
			name: "channelName",
			rawName: "CHANNEL_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PROVINCE_NO: {
			nullable: "N",
			isPk: false,
			description: "所属省份(下游为‘-’)",
			name: "provinceNo",
			rawName: "PROVINCE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		TRADE_TYPE: {
			nullable: "N",
			isPk: false,
			description: "业务分类",
			name: "tradeType",
			rawName: "TRADE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		GROUP_ID: {
			nullable: "N",
			isPk: false,
			description: "分组",
			name: "groupId",
			rawName: "GROUP_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		GROUP_TYPE: {
			nullable: "N",
			isPk: false,
			description: "分组类型",
			name: "groupType",
			rawName: "GROUP_TYPE",
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
		TRADE_RV_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "交易平账金额",
			name: "tradeRvAmount",
			rawName: "TRADE_RV_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TRADE_PROFIT: {
			nullable: "N",
			isPk: false,
			description: "利润(包含平账）",
			name: "tradeProfit",
			rawName: "TRADE_PROFIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

