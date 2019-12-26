exports.fdTradeOrderMain = {
	name: "fdTradeOrderMain",
	rawName: "FD_TRADE_ORDER_MAIN",
	columns: {
		fdOrderId: {
			nullable: false,
			isPk: true,
			description: "主键",
			name: "fdOrderId",
			rawName: "FD_ORDER_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		downChannelNo: {
			nullable: false,
			isPk: false,
			description: "下游渠道编号",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		downAccountId: {
			nullable: false,
			isPk: false,
			description: "下游扣款账号",
			name: "downAccountId",
			rawName: "DOWN_ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		downCompanyId: {
			nullable: false,
			isPk: false,
			description: "下游公司编号",
			name: "downCompanyId",
			rawName: "DOWN_COMPANY_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		tradeOrderNo: {
			nullable: false,
			isPk: false,
			description: "交易系统订单号",
			name: "tradeOrderNo",
			rawName: "TRADE_ORDER_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		extOrderNo: {
			nullable: false,
			isPk: false,
			description: "扩展订单号交易系统供",
			name: "extOrderNo",
			rawName: "EXT_ORDER_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		orderSource: {
			nullable: false,
			isPk: false,
			description: "订单来源（系统编号）",
			name: "orderSource",
			rawName: "ORDER_SOURCE",
			type: {
				name: "number",
				length: 20
			}
		},
		createTime: {
			nullable: false,
			isPk: false,
			description: "订单添加时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		orderTime: {
			nullable: false,
			isPk: false,
			description: "订单日期(交易系统下单日期)",
			name: "orderTime",
			rawName: "ORDER_TIME",
			type: {
				name: "date",
				length: null
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
		carrierNo: {
			nullable: false,
			isPk: false,
			description: "运营商",
			name: "carrierNo",
			rawName: "CARRIER_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		provinceNo: {
			nullable: false,
			isPk: false,
			description: "省份",
			name: "provinceNo",
			rawName: "PROVINCE_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		cityNo: {
			nullable: false,
			isPk: false,
			description: "城市",
			name: "cityNo",
			rawName: "CITY_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		totalFace: {
			nullable: false,
			isPk: false,
			description: "总面值",
			name: "totalFace",
			rawName: "TOTAL_FACE",
			type: {
				name: "number",
				length: 18
			}
		},
		rechargeUnit: {
			nullable: false,
			isPk: false,
			description: "充值总量",
			name: "rechargeUnit",
			rawName: "RECHARGE_UNIT",
			type: {
				name: "number",
				length: 18
			}
		},
		rechargeAccountNo: {
			nullable: false,
			isPk: false,
			description: "充值号码",
			name: "rechargeAccountNo",
			rawName: "RECHARGE_ACCOUNT_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		hasUpTrade: {
			nullable: false,
			isPk: false,
			description: "是否产生上游扣款 0.已产生 1.未产生",
			name: "hasUpTrade",
			rawName: "HAS_UP_TRADE",
			type: {
				name: "number",
				length: 1
			}
		},
		downOrderAmount: {
			nullable: false,
			isPk: false,
			description: "下游扣款金额",
			name: "downOrderAmount",
			rawName: "DOWN_ORDER_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		}
	}
};

