exports.supTradeOrderMainHs = {
	name: "supTradeOrderMainHs",
	rawName: "SUP_TRADE_ORDER_MAIN_HS",
	columns: {
		supOrderId: {
			nullable: false,
			isPk: false,
			description: "记账系统订单号",
			name: "supOrderId",
			rawName: "SUP_ORDER_ID",
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
			description: "下游账户编号",
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
		sourceSystemId: {
			nullable: false,
			isPk: false,
			description: "系统编号",
			name: "sourceSystemId",
			rawName: "SOURCE_SYSTEM_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		createTime: {
			nullable: false,
			isPk: false,
			description: "创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		tradeOrderNo: {
			nullable: false,
			isPk: false,
			description: "生产系统订单号",
			name: "tradeOrderNo",
			rawName: "TRADE_ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		tradeOrderTime: {
			nullable: false,
			isPk: false,
			description: "生产系统订单时间",
			name: "tradeOrderTime",
			rawName: "TRADE_ORDER_TIME",
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
		carrierNo: {
			nullable: false,
			isPk: false,
			description: "运营商",
			name: "carrierNo",
			rawName: "CARRIER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		proviceNo: {
			nullable: false,
			isPk: false,
			description: "省份编号",
			name: "proviceNo",
			rawName: "PROVICE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		cityNo: {
			nullable: false,
			isPk: false,
			description: "城市编号",
			name: "cityNo",
			rawName: "CITY_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		orderUnit: {
			nullable: false,
			isPk: false,
			description: "订单规格",
			name: "orderUnit",
			rawName: "ORDER_UNIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		orderFace: {
			nullable: false,
			isPk: false,
			description: "订单面值",
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
			description: "订单金额",
			name: "orderAmount",
			rawName: "ORDER_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		completeFace: {
			nullable: false,
			isPk: false,
			description: "完成面值",
			name: "completeFace",
			rawName: "COMPLETE_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		completeAmount: {
			nullable: false,
			isPk: false,
			description: "完成金额",
			name: "completeAmount",
			rawName: "COMPLETE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

