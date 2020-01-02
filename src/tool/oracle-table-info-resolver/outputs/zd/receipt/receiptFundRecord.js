exports.receiptFundRecord = {
	name: "receiptFundRecord",
	rawName: "RECEIPT_FUND_RECORD",
	columns: {
		RECORD_ID: {
			nullable: false,
			isPk: true,
			description: "记录编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ACCOUNT_ID: {
			nullable: true,
			isPk: false,
			description: "账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANGE_TYPE: {
			nullable: true,
			isPk: false,
			description: "变动类型 :支付 :退款 :提现",
			name: "changeType",
			rawName: "CHANGE_TYPE",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		CHANGE_AMOUNT: {
			nullable: true,
			isPk: false,
			description: "变动金额",
			name: "changeAmount",
			rawName: "CHANGE_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		BALANCE: {
			nullable: true,
			isPk: false,
			description: "当前余额",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		CHANGE_TIME: {
			nullable: true,
			isPk: false,
			description: "变动时间",
			name: "changeTime",
			rawName: "CHANGE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		OPERATOR: {
			nullable: true,
			isPk: false,
			description: "操作人",
			name: "operator",
			rawName: "OPERATOR",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		REMARK: {
			nullable: true,
			isPk: false,
			description: "备注",
			name: "remark",
			rawName: "REMARK",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PRODUCT_TYPE: {
			nullable: true,
			isPk: false,
			description: "产品类型 :话费 :流量",
			name: "productType",
			rawName: "PRODUCT_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		SERVICE_LOSS: {
			nullable: true,
			isPk: false,
			description: "亏损的手续费",
			name: "serviceLoss",
			rawName: "SERVICE_LOSS",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		ORDER_NO: {
			nullable: true,
			isPk: false,
			description: "订单号",
			name: "orderNo",
			rawName: "ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	},
	description: "收款账户资金变动表"
};

