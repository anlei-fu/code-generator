exports.supTradeOrderMain = {
	name: "supTradeOrderMain",
	rawName: "SUP_TRADE_ORDER_MAIN",
	columns: {
		SUP_ORDER_ID: {
			nullable: "N",
			isPk: false,
			description: "记账系统订单号",
			name: "supOrderId",
			rawName: "SUP_ORDER_ID",
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
			description: "下游账户编号",
			name: "downAccountId",
			rawName: "DOWN_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DOWN_COMPANY_ID: {
			nullable: "N",
			isPk: false,
			description: "下游公司编号",
			name: "downCompanyId",
			rawName: "DOWN_COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SOURCE_SYSTEM_ID: {
			nullable: "N",
			isPk: false,
			description: "系统编号",
			name: "sourceSystemId",
			rawName: "SOURCE_SYSTEM_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CREATE_TIME: {
			nullable: "N",
			isPk: false,
			description: "创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		TRADE_ORDER_NO: {
			nullable: "N",
			isPk: false,
			description: "生产系统订单号",
			name: "tradeOrderNo",
			rawName: "TRADE_ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		TRADE_ORDER_TIME: {
			nullable: "N",
			isPk: false,
			description: "生产系统订单时间",
			name: "tradeOrderTime",
			rawName: "TRADE_ORDER_TIME",
			type: {
				name: "DATE",
				length: ""
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
		CARRIER_NO: {
			nullable: "N",
			isPk: false,
			description: "运营商",
			name: "carrierNo",
			rawName: "CARRIER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PROVICE_NO: {
			nullable: "N",
			isPk: false,
			description: "省份编号",
			name: "proviceNo",
			rawName: "PROVICE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CITY_NO: {
			nullable: "N",
			isPk: false,
			description: "城市编号",
			name: "cityNo",
			rawName: "CITY_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ORDER_UNIT: {
			nullable: "N",
			isPk: false,
			description: "订单规格",
			name: "orderUnit",
			rawName: "ORDER_UNIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ORDER_FACE: {
			nullable: "N",
			isPk: false,
			description: "订单面值",
			name: "orderFace",
			rawName: "ORDER_FACE",
			type: {
				name: "NUMBER",
				length: "20"
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
		COMPLETE_FACE: {
			nullable: "N",
			isPk: false,
			description: "完成面值",
			name: "completeFace",
			rawName: "COMPLETE_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		COMPLETE_AMOUNT: {
			nullable: "N",
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

