exports.yxTradeUpFundDiffer = {
	name: "yxTradeUpFundDiffer",
	rawName: "YX_TRADE_UP_FUND_DIFFER",
	columns: {
		recordDate: {
			nullable: false,
			isPk: false,
			description: "记录生成日期",
			name: "recordDate",
			rawName: "RECORD_DATE",
			type: {
				name: "date",
				length: null
			}
		},
		differId: {
			nullable: false,
			isPk: false,
			description: "主键",
			name: "differId",
			rawName: "DIFFER_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		yxOrderId: {
			nullable: false,
			isPk: false,
			description: "记账系统订单编号",
			name: "yxOrderId",
			rawName: "YX_ORDER_ID",
			type: {
				name: "varchar2",
				length: null
			}
		},
		channelNo: {
			nullable: false,
			isPk: false,
			description: "下游渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		accountId: {
			nullable: false,
			isPk: false,
			description: "下游渠道支付账号编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		businessType: {
			nullable: false,
			isPk: false,
			description: "业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		downAdjustFace: {
			nullable: false,
			isPk: false,
			description: "统计下游扣款需要调整的面值（下游退款造成上游面值比下游多时产生，下退）",
			name: "downAdjustFace",
			rawName: "DOWN_ADJUST_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		downAdjustUnit: {
			nullable: false,
			isPk: false,
			description: "统计下游扣款需要调整的规格",
			name: "downAdjustUnit",
			rawName: "DOWN_ADJUST_UNIT",
			type: {
				name: "number",
				length: 20
			}
		},
		downAdjustAmount: {
			nullable: false,
			isPk: false,
			description: "统计下游扣款需要调整的金额",
			name: "downAdjustAmount",
			rawName: "DOWN_ADJUST_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		downAdjustReal: {
			nullable: false,
			isPk: false,
			description: "统计下游扣款需要调整的真实扣款",
			name: "downAdjustReal",
			rawName: "DOWN_ADJUST_REAL",
			type: {
				name: "number",
				length: 20
			}
		},
		upManyFace: {
			nullable: false,
			isPk: false,
			description: "上游多充的面值（上游面值比下游面值多时产生，上扣、下退、上退）",
			name: "upManyFace",
			rawName: "UP_MANY_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		upManyAmount: {
			nullable: false,
			isPk: false,
			description: "上游多充的金额",
			name: "upManyAmount",
			rawName: "UP_MANY_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		downAdjustIncome: {
			nullable: false,
			isPk: false,
			description: "统计下游收入需要调整的金额",
			name: "downAdjustIncome",
			rawName: "DOWN_ADJUST_INCOME",
			type: {
				name: "number",
				length: 20
			}
		}
	}
};

