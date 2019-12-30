exports.dkTradeOrderMain = {
	name: "dkTradeOrderMain",
	rawName: "DK_TRADE_ORDER_MAIN",
	columns: {
		DK_ORDER_ID: {
			nullable: "N",
			isPk: true,
			description: "主键",
			name: "dkOrderId",
			rawName: "DK_ORDER_ID",
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
			description: "下游结算账号",
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
		TRADE_ORDER_NO: {
			nullable: "N",
			isPk: false,
			description: "交易系统订单号",
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
			description: "扩展订单号交易系统供",
			name: "extOrderNo",
			rawName: "EXT_ORDER_NO",
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
		CREATE_TIME: {
			nullable: "N",
			isPk: false,
			description: "订单添加时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		ORDER_TIME: {
			nullable: "N",
			isPk: false,
			description: "订单日期(交易系统下单日期)",
			name: "orderTime",
			rawName: "ORDER_TIME",
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
		PROVINCE_NO: {
			nullable: "N",
			isPk: false,
			description: "省份",
			name: "provinceNo",
			rawName: "PROVINCE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CITY_NO: {
			nullable: "N",
			isPk: false,
			description: "城市",
			name: "cityNo",
			rawName: "CITY_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		TOTAL_FACE: {
			nullable: "N",
			isPk: false,
			description: "代扣总面值",
			name: "totalFace",
			rawName: "TOTAL_FACE",
			type: {
				name: "NUMBER",
				length: "18"
			}
		},
		RECHARGE_UNIT: {
			nullable: "N",
			isPk: false,
			description: "代扣总量",
			name: "rechargeUnit",
			rawName: "RECHARGE_UNIT",
			type: {
				name: "NUMBER",
				length: "18"
			}
		},
		RECHARGE_ACCOUNT_NO: {
			nullable: "N",
			isPk: false,
			description: "代扣号码",
			name: "rechargeAccountNo",
			rawName: "RECHARGE_ACCOUNT_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		HAS_UP_TRADE: {
			nullable: "Y",
			isPk: false,
			description: "是否已产生上游结算 0.已产生 1.未产生",
			name: "hasUpTrade",
			rawName: "HAS_UP_TRADE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		DOWN_ORDER_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "下游结算金额",
			name: "downOrderAmount",
			rawName: "DOWN_ORDER_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		RECHARGE_TIMES: {
			nullable: "Y",
			isPk: false,
			description: "代扣次数",
			name: "rechargeTimes",
			rawName: "RECHARGE_TIMES",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

