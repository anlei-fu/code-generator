exports.incomeDownUpMonth = {
	name: "incomeDownUpMonth",
	rawName: "INCOME_DOWN_UP_MONTH",
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
			description: "交易月份",
			name: "tradeMonth",
			rawName: "TRADE_MONTH",
			type: {
				name: "DATE",
				length: ""
			}
		},
		DOWN_CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "下游渠道编号",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		DOWN_CHANNEL_NAME: {
			nullable: "N",
			isPk: false,
			description: "下游渠道名称",
			name: "downChannelName",
			rawName: "DOWN_CHANNEL_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		UP_CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "上游渠道编号",
			name: "upChannelNo",
			rawName: "UP_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		UP_CHANNEL_NAME: {
			nullable: "N",
			isPk: false,
			description: "上游渠道名称",
			name: "upChannelName",
			rawName: "UP_CHANNEL_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		DOWN_GROUP_ID: {
			nullable: "N",
			isPk: false,
			description: "下游分组",
			name: "downGroupId",
			rawName: "DOWN_GROUP_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TRADE_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "交易金额",
			name: "tradeAmount",
			rawName: "TRADE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TRADE_PROFIT: {
			nullable: "N",
			isPk: false,
			description: "交易利润",
			name: "tradeProfit",
			rawName: "TRADE_PROFIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

