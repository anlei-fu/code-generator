exports.qyTradeDownFund = {
	name: "qyTradeDownFund",
	rawName: "QY_TRADE_DOWN_FUND",
	columns: {
		RECORD_ID: {
			nullable: "N",
			isPk: false,
			description: "下游变动编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		QY_ORDER_ID: {
			nullable: "N",
			isPk: false,
			description: "记账系统订单号",
			name: "qyOrderId",
			rawName: "QY_ORDER_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TRADE_ORDER_NO: {
			nullable: "N",
			isPk: false,
			description: "交易系统订单号(激活编号)",
			name: "tradeOrderNo",
			rawName: "TRADE_ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		EXT_ORDER_NO: {
			nullable: "N",
			isPk: false,
			description: "扩展订单号交易(权益卡号)",
			name: "extOrderNo",
			rawName: "EXT_ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		EXT_CONTRACT_NO: {
			nullable: "N",
			isPk: false,
			description: "扩展号(合同编号)",
			name: "extContractNo",
			rawName: "EXT_CONTRACT_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PRODUCT_NAME: {
			nullable: "N",
			isPk: false,
			description: "权益包名称",
			name: "productName",
			rawName: "PRODUCT_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ORDER_SOURCE: {
			nullable: "N",
			isPk: false,
			description: "订单来源（系统编号）",
			name: "orderSource",
			rawName: "ORDER_SOURCE",
			type: {
				name: "NUMBER",
				length: "20"
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
		DOWN_ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "下游支付账号",
			name: "downAccountId",
			rawName: "DOWN_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANGE_TIME: {
			nullable: "N",
			isPk: false,
			description: "变动创建时间",
			name: "changeTime",
			rawName: "CHANGE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		ORDER_TIME: {
			nullable: "N",
			isPk: false,
			description: "订单日期(激活时间)",
			name: "orderTime",
			rawName: "ORDER_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		CHANGE_TYPE: {
			nullable: "N",
			isPk: false,
			description: "变更类型:加款2：交易扣款3：交易退款:提款",
			name: "changeType",
			rawName: "CHANGE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		ORDER_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "订单金额",
			name: "orderAmount",
			rawName: "ORDER_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANGE_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "变动金额(销售金额)",
			name: "changeAmount",
			rawName: "CHANGE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ORDER_FACE: {
			nullable: "N",
			isPk: false,
			description: "订单面值(权益包价值)",
			name: "orderFace",
			rawName: "ORDER_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANGE_FACE: {
			nullable: "N",
			isPk: false,
			description: "变动面值",
			name: "changeFace",
			rawName: "CHANGE_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		BALANCE: {
			nullable: "N",
			isPk: false,
			description: "账户余额",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		MEMO: {
			nullable: "Y",
			isPk: false,
			description: "备注",
			name: "memo",
			rawName: "MEMO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

