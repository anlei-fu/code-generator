exports.supTradeUpFundHs = {
	name: "supTradeUpFundHs",
	rawName: "SUP_TRADE_UP_FUND_HS",
	columns: {
		RECORD_ID: {
			nullable: "N",
			isPk: false,
			description: "资金变动编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
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
		TRADE_DELIVERY_NO: {
			nullable: "N",
			isPk: false,
			description: "交易系统发货编号",
			name: "tradeDeliveryNo",
			rawName: "TRADE_DELIVERY_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		TRADE_REFUND_NO: {
			nullable: "N",
			isPk: false,
			description: "生产系统退款编号",
			name: "tradeRefundNo",
			rawName: "TRADE_REFUND_NO",
			type: {
				name: "VARCHAR2",
				length: ""
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
		UP_CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "上游渠道编号",
			name: "upChannelNo",
			rawName: "UP_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		UP_ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "上游账户编号",
			name: "upAccountId",
			rawName: "UP_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_COMPANY_ID: {
			nullable: "N",
			isPk: false,
			description: "上游公司编号",
			name: "upCompanyId",
			rawName: "UP_COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANGE_TYPE: {
			nullable: "N",
			isPk: false,
			description: "变动类型（加款、扣款、退款、提款、号卡转移）",
			name: "changeType",
			rawName: "CHANGE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		CHANGE_TIME: {
			nullable: "N",
			isPk: false,
			description: "资金变动时间",
			name: "changeTime",
			rawName: "CHANGE_TIME",
			type: {
				name: "DATE",
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
		TRADE_CHANGE_TIME: {
			nullable: "N",
			isPk: false,
			description: "生产系统资金变动时间",
			name: "tradeChangeTime",
			rawName: "TRADE_CHANGE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		BILL_TYPE: {
			nullable: "N",
			isPk: false,
			description: "前后项信息",
			name: "billType",
			rawName: "BILL_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
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
		DOWN_DRAW_COUNT: {
			nullable: "N",
			isPk: false,
			description: "下游扣款销卡张数",
			name: "downDrawCount",
			rawName: "DOWN_DRAW_COUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DOWN_DRAW_UNIT: {
			nullable: "N",
			isPk: false,
			description: "下游扣款规格",
			name: "downDrawUnit",
			rawName: "DOWN_DRAW_UNIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DOWN_DRAW_FACE: {
			nullable: "N",
			isPk: false,
			description: "下游扣款面值",
			name: "downDrawFace",
			rawName: "DOWN_DRAW_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DOWN_DRAW_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "下游扣款金额",
			name: "downDrawAmount",
			rawName: "DOWN_DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_DRAW_COUNT: {
			nullable: "N",
			isPk: false,
			description: "上游扣款销卡张数",
			name: "upDrawCount",
			rawName: "UP_DRAW_COUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_DRAW_UNIT: {
			nullable: "N",
			isPk: false,
			description: "上游扣款规格",
			name: "upDrawUnit",
			rawName: "UP_DRAW_UNIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_DRAW_FACE: {
			nullable: "N",
			isPk: false,
			description: "上游扣款面值",
			name: "upDrawFace",
			rawName: "UP_DRAW_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_DRAW_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "上游扣款金额",
			name: "upDrawAmount",
			rawName: "UP_DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		WAY_CHANGE_COUNT: {
			nullable: "N",
			isPk: false,
			description: "在途变动张数",
			name: "wayChangeCount",
			rawName: "WAY_CHANGE_COUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		WAY_CHANGE_FACE: {
			nullable: "N",
			isPk: false,
			description: "在途面值",
			name: "wayChangeFace",
			rawName: "WAY_CHANGE_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		WAY_CHANGE_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "在途变动金额",
			name: "wayChangeAmount",
			rawName: "WAY_CHANGE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PHYSICAL_CHANGE_COUNT: {
			nullable: "N",
			isPk: false,
			description: "实体卡张数",
			name: "physicalChangeCount",
			rawName: "PHYSICAL_CHANGE_COUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PHYSICAL_CHANGE_FACE: {
			nullable: "N",
			isPk: false,
			description: "实体卡面值",
			name: "physicalChangeFace",
			rawName: "PHYSICAL_CHANGE_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PHYSICAL_CHANGE_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "实体卡变动金额",
			name: "physicalChangeAmount",
			rawName: "PHYSICAL_CHANGE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		WAY_COUNT_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "在途卡余额",
			name: "wayCountBalance",
			rawName: "WAY_COUNT_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		WAY_FACE_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "在途面值余额",
			name: "wayFaceBalance",
			rawName: "WAY_FACE_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		WAY_CARD_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "在途余额",
			name: "wayCardBalance",
			rawName: "WAY_CARD_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PHYSICAL_COUNT_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "实体卡张数余额",
			name: "physicalCountBalance",
			rawName: "PHYSICAL_COUNT_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PHYSICAL_FACE_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "实体卡面值余额",
			name: "physicalFaceBalance",
			rawName: "PHYSICAL_FACE_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PHYSICAL_CARD_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "实体卡余额",
			name: "physicalCardBalance",
			rawName: "PHYSICAL_CARD_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ELECTRONIC_COUNT_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "电子卡密张数余额",
			name: "electronicCountBalance",
			rawName: "ELECTRONIC_COUNT_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ELECTRONIC_FACE_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "电子卡密面值余额",
			name: "electronicFaceBalance",
			rawName: "ELECTRONIC_FACE_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ELECTRONIC_CARD_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "电子卡密余额",
			name: "electronicCardBalance",
			rawName: "ELECTRONIC_CARD_BALANCE",
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

