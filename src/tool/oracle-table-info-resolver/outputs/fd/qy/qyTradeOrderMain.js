exports.qyTradeOrderMain = {
	name: "qyTradeOrderMain",
	rawName: "QY_TRADE_ORDER_MAIN",
	columns: {
		qyOrderId: {
			nullable: false,
			isPk: false,
			description: "主键",
			name: "qyOrderId",
			rawName: "QY_ORDER_ID",
			type: {
				name: "NUMBER",
				length: "20"
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
			description: "下游扣款账号",
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
			description: "下游公司编号",
			name: "downCompanyId",
			rawName: "DOWN_COMPANY_ID",
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
				length: "20"
			}
		},
		createTime: {
			nullable: false,
			isPk: false,
			description: "订单添加时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		orderTime: {
			nullable: false,
			isPk: false,
			description: "订单日期（激活时间）",
			name: "orderTime",
			rawName: "ORDER_TIME",
			type: {
				name: "DATE",
				length: ""
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
		}
	}
};

