exports.qyTradeUpFundDiffer = {
	name: "qyTradeUpFundDiffer",
	rawName: "QY_TRADE_UP_FUND_DIFFER",
	columns: {
		DIFFER_ID: {
			nullable: "N",
			isPk: false,
			description: "主键",
			name: "differId",
			rawName: "DIFFER_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		RECORD_DATE: {
			nullable: "N",
			isPk: false,
			description: "记录生成日期",
			name: "recordDate",
			rawName: "RECORD_DATE",
			type: {
				name: "DATE",
				length: ""
			}
		},
		QY_ORDER_ID: {
			nullable: "N",
			isPk: false,
			description: "记账系统订单编号",
			name: "qyOrderId",
			rawName: "QY_ORDER_ID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "下游渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "下游渠道支付账号编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		BUSINESS_TYPE: {
			nullable: "N",
			isPk: false,
			description: "业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		DOWN_ADJUST_FACE: {
			nullable: "N",
			isPk: false,
			description: "统计下游扣款需要调整的面值（下游退款造成上游面值比下游多时产生，下退）",
			name: "downAdjustFace",
			rawName: "DOWN_ADJUST_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DOWN_ADJUST_UNIT: {
			nullable: "N",
			isPk: false,
			description: "统计下游扣款需要调整的规格",
			name: "downAdjustUnit",
			rawName: "DOWN_ADJUST_UNIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DOWN_ADJUST_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "统计下游扣款需要调整的金额",
			name: "downAdjustAmount",
			rawName: "DOWN_ADJUST_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DOWN_ADJUST_REAL: {
			nullable: "N",
			isPk: false,
			description: "统计下游扣款需要调整的真实扣款",
			name: "downAdjustReal",
			rawName: "DOWN_ADJUST_REAL",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_MANY_FACE: {
			nullable: "N",
			isPk: false,
			description: "上游多充的面值（上游面值比下游面值多时产生，上扣、下退、上退）",
			name: "upManyFace",
			rawName: "UP_MANY_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_MANY_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "上游多充的金额",
			name: "upManyAmount",
			rawName: "UP_MANY_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

