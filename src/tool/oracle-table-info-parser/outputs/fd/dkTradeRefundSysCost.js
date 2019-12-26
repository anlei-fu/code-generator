exports.dkTradeRefundSysCost = {
	name: "dkTradeRefundSysCost",
	rawName: "DK_TRADE_REFUND_SYS_COST",
	columns: {
		id: {
			nullable: false,
			isPk: false,
			description: "主键",
			name: "id",
			rawName: "ID",
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
		dkOrderId: {
			nullable: false,
			isPk: false,
			description: "记账系统订单号",
			name: "dkOrderId",
			rawName: "DK_ORDER_ID",
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
		sysCost: {
			nullable: false,
			isPk: false,
			description: "垫付金额(元)",
			name: "sysCost",
			rawName: "SYS_COST",
			type: {
				name: "number",
				length: 20
			}
		},
		tradeOrderNo: {
			nullable: false,
			isPk: false,
			description: "交易订单号",
			name: "tradeOrderNo",
			rawName: "TRADE_ORDER_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		tradeRefundNo: {
			nullable: false,
			isPk: false,
			description: "退款单号",
			name: "tradeRefundNo",
			rawName: "TRADE_REFUND_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		billType: {
			nullable: false,
			isPk: false,
			description: "",
			name: "billType",
			rawName: "BILL_TYPE",
			type: {
				name: "number",
				length: 1
			}
		}
	}
};

