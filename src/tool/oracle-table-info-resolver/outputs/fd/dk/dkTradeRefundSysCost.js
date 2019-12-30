exports.dkTradeRefundSysCost = {
	name: "dkTradeRefundSysCost",
	rawName: "DK_TRADE_REFUND_SYS_COST",
	columns: {
		ID: {
			nullable: "N",
			isPk: false,
			description: "主键",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		RECORD_DATE: {
			nullable: "N",
			isPk: false,
			description: "记录创建的日期",
			name: "recordDate",
			rawName: "RECORD_DATE",
			type: {
				name: "DATE",
				length: ""
			}
		},
		DK_ORDER_ID: {
			nullable: "N",
			isPk: false,
			description: "记账系统订单号",
			name: "dkOrderId",
			rawName: "DK_ORDER_ID",
			type: {
				name: "NUMBER",
				length: "20"
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
			description: "下游渠道支付账户编号",
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
		SYS_COST: {
			nullable: "N",
			isPk: false,
			description: "垫付金额(元)",
			name: "sysCost",
			rawName: "SYS_COST",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TRADE_ORDER_NO: {
			nullable: "Y",
			isPk: false,
			description: "交易订单号",
			name: "tradeOrderNo",
			rawName: "TRADE_ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		TRADE_REFUND_NO: {
			nullable: "Y",
			isPk: false,
			description: "退款单号",
			name: "tradeRefundNo",
			rawName: "TRADE_REFUND_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		BILL_TYPE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "billType",
			rawName: "BILL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		}
	}
};

