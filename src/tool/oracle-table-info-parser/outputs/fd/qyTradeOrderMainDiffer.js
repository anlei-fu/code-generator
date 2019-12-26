exports.qyTradeOrderMainDiffer = {
	name: "qyTradeOrderMainDiffer",
	rawName: "QY_TRADE_ORDER_MAIN_DIFFER",
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
			description: "记录生成日期",
			name: "recordDate",
			rawName: "RECORD_DATE",
			type: {
				name: "date",
				length: null
			}
		},
		qyOrderId: {
			nullable: false,
			isPk: false,
			description: "记账系统订单编号",
			name: "qyOrderId",
			rawName: "QY_ORDER_ID",
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
		downFirstFace: {
			nullable: false,
			isPk: false,
			description: "下游与上游扣款的时间差造成的差异面值（上下游扣款有时间差异造成，下扣、下退、上扣、上退）",
			name: "downFirstFace",
			rawName: "DOWN_FIRST_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		downFirstAmount: {
			nullable: false,
			isPk: false,
			description: "下游与上游扣款的时间差造成的差异金额",
			name: "downFirstAmount",
			rawName: "DOWN_FIRST_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		}
	}
};

