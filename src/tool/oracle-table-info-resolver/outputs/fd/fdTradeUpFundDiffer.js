exports.fdTradeUpFundDiffer = {
	name: "fdTradeUpFundDiffer",
	rawName: "FD_TRADE_UP_FUND_DIFFER",
	columns: {
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
		recordDate: {
			nullable: false,
			isPk: false,
			description: "记录创建的日期",
			name: "recordDate",
			rawName: "RECORD_DATE",
			type: {
				name: "date",
				length: null
			}
		},
		fdOrderId: {
			nullable: false,
			isPk: false,
			description: "记账系统订单号",
			name: "fdOrderId",
			rawName: "FD_ORDER_ID",
			type: {
				name: "number",
				length: 20
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
			description: "下游渠道支付账户编号",
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
		billType: {
			nullable: false,
			isPk: false,
			description: "利润类型，1.前向，2后向",
			name: "billType",
			rawName: "BILL_TYPE",
			type: {
				name: "number",
				length: 1
			}
		},
		downAdjustFace: {
			nullable: false,
			isPk: false,
			description: "统计下游扣款需调整的面值(下游退款造成上游面值比下游多时产生，下退)",
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
			description: "统计下游扣款需调整的规格",
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
			description: "统计下游扣款需调整的金额",
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
			description: "统计下游扣款需调整的真实扣款",
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
			description: "上游多冲的面值(上游面值比下游面值多时产生，上扣、下退、上退)",
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
			description: "上游多冲的金额",
			name: "upManyAmount",
			rawName: "UP_MANY_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		toFrontFace: {
			nullable: false,
			isPk: false,
			description: "需要由后向转前向的面值(上游退款时，退的多冲数据且与多冲前后向不一致时，后退前为正)",
			name: "toFrontFace",
			rawName: "TO_FRONT_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		toFrontUnit: {
			nullable: false,
			isPk: false,
			description: "需要由后向转前向的规格",
			name: "toFrontUnit",
			rawName: "TO_FRONT_UNIT",
			type: {
				name: "number",
				length: 20
			}
		},
		toFrontAmount: {
			nullable: false,
			isPk: false,
			description: "需要由后向转前向的金额",
			name: "toFrontAmount",
			rawName: "TO_FRONT_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		toFrontReal: {
			nullable: false,
			isPk: false,
			description: "需要由后向转前向的真实扣款",
			name: "toFrontReal",
			rawName: "TO_FRONT_REAL",
			type: {
				name: "number",
				length: 20
			}
		}
	}
};

