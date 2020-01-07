exports.qyTradeUpFund = {
	name: "qyTradeUpFund",
	rawName: "QY_TRADE_UP_FUND",
	columns: {
		recordId: {
			nullable: false,
			isPk: false,
			description: "上游变动编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		qyOrderId: {
			nullable: false,
			isPk: false,
			description: "记账系统订单号",
			name: "qyOrderId",
			rawName: "QY_ORDER_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		tradeOrderNo: {
			nullable: false,
			isPk: false,
			description: "交易系统订单号(激活编号)",
			name: "tradeOrderNo",
			rawName: "TRADE_ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		tradeDeliveryNo: {
			nullable: false,
			isPk: false,
			description: "交易系统发货号(上游发货编号)",
			name: "tradeDeliveryNo",
			rawName: "TRADE_DELIVERY_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		extDeliveryNo: {
			nullable: false,
			isPk: false,
			description: "扩展发货编号(下游订单号)",
			name: "extDeliveryNo",
			rawName: "EXT_DELIVERY_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		extOrderNo: {
			nullable: false,
			isPk: false,
			description: "扩展订单号交易(权益卡号)",
			name: "extOrderNo",
			rawName: "EXT_ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		extContractNo: {
			nullable: false,
			isPk: false,
			description: "扩展号(合同编号)",
			name: "extContractNo",
			rawName: "EXT_CONTRACT_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		extUseNo: {
			nullable: false,
			isPk: false,
			description: "扩展号(权益卡使用编号)",
			name: "extUseNo",
			rawName: "EXT_USE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		productName: {
			nullable: false,
			isPk: false,
			description: "权益包名称",
			name: "productName",
			rawName: "PRODUCT_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		orderSource: {
			nullable: false,
			isPk: false,
			description: "订单来源（系统编号）",
			name: "orderSource",
			rawName: "ORDER_SOURCE",
			type: {
				name: "NUMBER",
				length: "3"
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
		downAccountId: {
			nullable: false,
			isPk: false,
			description: "下游账户",
			name: "downAccountId",
			rawName: "DOWN_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		downCompanyId: {
			nullable: false,
			isPk: false,
			description: "下游所属公司",
			name: "downCompanyId",
			rawName: "DOWN_COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
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
		upAccountId: {
			nullable: false,
			isPk: false,
			description: "上游账户",
			name: "upAccountId",
			rawName: "UP_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		upCompanyId: {
			nullable: false,
			isPk: false,
			description: "上游所属公司",
			name: "upCompanyId",
			rawName: "UP_COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		orderFace: {
			nullable: false,
			isPk: false,
			description: "订单面值(权益包价值)",
			name: "orderFace",
			rawName: "ORDER_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		orderAmount: {
			nullable: false,
			isPk: false,
			description: "订单金额(权益包销售金额)",
			name: "orderAmount",
			rawName: "ORDER_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		downDrawUnit: {
			nullable: false,
			isPk: false,
			description: "下游充值量（权益扣除价值量）",
			name: "downDrawUnit",
			rawName: "DOWN_DRAW_UNIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		downDrawFace: {
			nullable: false,
			isPk: false,
			description: "下游扣款面值（产品面值）",
			name: "downDrawFace",
			rawName: "DOWN_DRAW_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		downDrawAmount: {
			nullable: false,
			isPk: false,
			description: "下游扣款金额（权益销售金额）,上下游比例相等",
			name: "downDrawAmount",
			rawName: "DOWN_DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		downRealAmount: {
			nullable: false,
			isPk: false,
			description: "下游实际金额（权益销售金额）",
			name: "downRealAmount",
			rawName: "DOWN_REAL_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		outPutTax: {
			nullable: false,
			isPk: false,
			description: "销项税",
			name: "outPutTax",
			rawName: "OUT_PUT_TAX",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		upDrawUnit: {
			nullable: false,
			isPk: false,
			description: "上游充值量",
			name: "upDrawUnit",
			rawName: "UP_DRAW_UNIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		upDrawFace: {
			nullable: false,
			isPk: false,
			description: "上游扣款面值",
			name: "upDrawFace",
			rawName: "UP_DRAW_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		upDrawAmount: {
			nullable: false,
			isPk: false,
			description: "上游扣款金额",
			name: "upDrawAmount",
			rawName: "UP_DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		upRealAmount: {
			nullable: false,
			isPk: false,
			description: "上游实际金额",
			name: "upRealAmount",
			rawName: "UP_REAL_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		inPutTax: {
			nullable: false,
			isPk: false,
			description: "进项税",
			name: "inPutTax",
			rawName: "IN_PUT_TAX",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		changeTime: {
			nullable: false,
			isPk: false,
			description: "变动时间",
			name: "changeTime",
			rawName: "CHANGE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		changeType: {
			nullable: false,
			isPk: false,
			description: "变更类型:加款2：交易扣款3：交易退款4：提款",
			name: "changeType",
			rawName: "CHANGE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		businessType: {
			nullable: false,
			isPk: false,
			description: "业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		balance: {
			nullable: false,
			isPk: false,
			description: "余额",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		memo: {
			nullable: false,
			isPk: false,
			description: "备注",
			name: "memo",
			rawName: "MEMO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		orderTime: {
			nullable: false,
			isPk: false,
			description: "订单日期(激活时间)",
			name: "orderTime",
			rawName: "ORDER_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		outChangeTime: {
			nullable: false,
			isPk: false,
			description: "资金变动时间（发货完成时间）",
			name: "outChangeTime",
			rawName: "OUT_CHANGE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	}
};

