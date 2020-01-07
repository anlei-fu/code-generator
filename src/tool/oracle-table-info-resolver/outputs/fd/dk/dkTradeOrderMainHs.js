exports.dkTradeOrderMainHs = {
	name: "dkTradeOrderMainHs",
	rawName: "DK_TRADE_ORDER_MAIN_HS",
	columns: {
		dkOrderId: {
			nullable: false,
			isPk: false,
			description: "主键",
			name: "dkOrderId",
			rawName: "DK_ORDER_ID",
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
			description: "交易系统订单号",
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
			description: "扩展订单号交易系统供",
			name: "extOrderNo",
			rawName: "EXT_ORDER_NO",
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
			description: "订单日期(交易系统下单日期)",
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
		provinceNo: {
			nullable: false,
			isPk: false,
			description: "省份",
			name: "provinceNo",
			rawName: "PROVINCE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		cityNo: {
			nullable: false,
			isPk: false,
			description: "城市",
			name: "cityNo",
			rawName: "CITY_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		totalFace: {
			nullable: false,
			isPk: false,
			description: "代扣总面值",
			name: "totalFace",
			rawName: "TOTAL_FACE",
			type: {
				name: "NUMBER",
				length: "18"
			}
		},
		rechargeUnit: {
			nullable: false,
			isPk: false,
			description: "代扣总量",
			name: "rechargeUnit",
			rawName: "RECHARGE_UNIT",
			type: {
				name: "NUMBER",
				length: "18"
			}
		},
		rechargeAccountNo: {
			nullable: false,
			isPk: false,
			description: "代扣号码",
			name: "rechargeAccountNo",
			rawName: "RECHARGE_ACCOUNT_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		downOrderAmount: {
			nullable: true,
			isPk: false,
			description: "下游结算金额",
			name: "downOrderAmount",
			rawName: "DOWN_ORDER_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		rechargeTimes: {
			nullable: true,
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

