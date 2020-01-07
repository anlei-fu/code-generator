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
				name: "NUMBER",
				length: "20"
			}
		},
		tradeMonth: {
			nullable: false,
			isPk: false,
			description: "交易月份",
			name: "tradeMonth",
			rawName: "TRADE_MONTH",
			type: {
				name: "DATE",
				length: ""
			}
		},
		downChannelNo: {
			nullable: false,
			isPk: false,
			description: "下游渠道编号",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		downChannelName: {
			nullable: false,
			isPk: false,
			description: "下游渠道名称",
			name: "downChannelName",
			rawName: "DOWN_CHANNEL_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		upChannelNo: {
			nullable: false,
			isPk: false,
			description: "上游渠道编号",
			name: "upChannelNo",
			rawName: "UP_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		upChannelName: {
			nullable: false,
			isPk: false,
			description: "上游渠道名称",
			name: "upChannelName",
			rawName: "UP_CHANNEL_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		downGroupId: {
			nullable: false,
			isPk: false,
			description: "下游分组",
			name: "downGroupId",
			rawName: "DOWN_GROUP_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		tradeAmount: {
			nullable: false,
			isPk: false,
			description: "交易金额",
			name: "tradeAmount",
			rawName: "TRADE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		tradeProfit: {
			nullable: false,
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

