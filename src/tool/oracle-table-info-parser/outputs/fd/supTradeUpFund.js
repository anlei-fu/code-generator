exports.supTradeUpFund = {
	name: "supTradeUpFund",
	rawName: "SUP_TRADE_UP_FUND",
	columns: {
		recordId: {
			nullable: false,
			isPk: false,
			description: "资金变动编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		supOrderId: {
			nullable: false,
			isPk: false,
			description: "记账系统订单号",
			name: "supOrderId",
			rawName: "SUP_ORDER_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		sourceSystemId: {
			nullable: false,
			isPk: false,
			description: "系统编号",
			name: "sourceSystemId",
			rawName: "SOURCE_SYSTEM_ID",
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
		tradeDeliveryNo: {
			nullable: false,
			isPk: false,
			description: "交易系统发货编号",
			name: "tradeDeliveryNo",
			rawName: "TRADE_DELIVERY_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		tradeRefundNo: {
			nullable: false,
			isPk: false,
			description: "生产系统退款编号",
			name: "tradeRefundNo",
			rawName: "TRADE_REFUND_NO",
			type: {
				name: "varchar2",
				length: null
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
			description: "下游账户编号",
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
		upChannelNo: {
			nullable: false,
			isPk: false,
			description: "上游渠道编号",
			name: "upChannelNo",
			rawName: "UP_CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		upAccountId: {
			nullable: false,
			isPk: false,
			description: "上游账户编号",
			name: "upAccountId",
			rawName: "UP_ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		upCompanyId: {
			nullable: false,
			isPk: false,
			description: "上游公司编号",
			name: "upCompanyId",
			rawName: "UP_COMPANY_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		changeType: {
			nullable: false,
			isPk: false,
			description: "变动类型（加款、扣款、退款、提款、号卡转移）",
			name: "changeType",
			rawName: "CHANGE_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		changeTime: {
			nullable: false,
			isPk: false,
			description: "资金变动时间",
			name: "changeTime",
			rawName: "CHANGE_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		tradeOrderTime: {
			nullable: false,
			isPk: false,
			description: "生产系统订单时间",
			name: "tradeOrderTime",
			rawName: "TRADE_ORDER_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		tradeChangeTime: {
			nullable: false,
			isPk: false,
			description: "生产系统资金变动时间",
			name: "tradeChangeTime",
			rawName: "TRADE_CHANGE_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		billType: {
			nullable: false,
			isPk: false,
			description: "前后项信息",
			name: "billType",
			rawName: "BILL_TYPE",
			type: {
				name: "number",
				length: 3
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
		downDrawCount: {
			nullable: false,
			isPk: false,
			description: "下游扣款销卡张数",
			name: "downDrawCount",
			rawName: "DOWN_DRAW_COUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		downDrawUnit: {
			nullable: false,
			isPk: false,
			description: "下游扣款规格",
			name: "downDrawUnit",
			rawName: "DOWN_DRAW_UNIT",
			type: {
				name: "number",
				length: 20
			}
		},
		downDrawFace: {
			nullable: false,
			isPk: false,
			description: "下游扣款面值",
			name: "downDrawFace",
			rawName: "DOWN_DRAW_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		downDrawAmount: {
			nullable: false,
			isPk: false,
			description: "下游扣款金额",
			name: "downDrawAmount",
			rawName: "DOWN_DRAW_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		upDrawCount: {
			nullable: false,
			isPk: false,
			description: "上游扣款销卡张数",
			name: "upDrawCount",
			rawName: "UP_DRAW_COUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		upDrawUnit: {
			nullable: false,
			isPk: false,
			description: "上游扣款规格",
			name: "upDrawUnit",
			rawName: "UP_DRAW_UNIT",
			type: {
				name: "number",
				length: 20
			}
		},
		upDrawFace: {
			nullable: false,
			isPk: false,
			description: "上游扣款面值",
			name: "upDrawFace",
			rawName: "UP_DRAW_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		upDrawAmount: {
			nullable: false,
			isPk: false,
			description: "上游扣款金额",
			name: "upDrawAmount",
			rawName: "UP_DRAW_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		wayChangeCount: {
			nullable: false,
			isPk: false,
			description: "在途变动张数",
			name: "wayChangeCount",
			rawName: "WAY_CHANGE_COUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		wayChangeFace: {
			nullable: false,
			isPk: false,
			description: "在途面值",
			name: "wayChangeFace",
			rawName: "WAY_CHANGE_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		wayChangeAmount: {
			nullable: false,
			isPk: false,
			description: "在途变动金额",
			name: "wayChangeAmount",
			rawName: "WAY_CHANGE_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		physicalChangeCount: {
			nullable: false,
			isPk: false,
			description: "实体卡张数",
			name: "physicalChangeCount",
			rawName: "PHYSICAL_CHANGE_COUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		physicalChangeFace: {
			nullable: false,
			isPk: false,
			description: "实体卡面值",
			name: "physicalChangeFace",
			rawName: "PHYSICAL_CHANGE_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		physicalChangeAmount: {
			nullable: false,
			isPk: false,
			description: "实体卡变动金额",
			name: "physicalChangeAmount",
			rawName: "PHYSICAL_CHANGE_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		wayCountBalance: {
			nullable: false,
			isPk: false,
			description: "在途卡余额",
			name: "wayCountBalance",
			rawName: "WAY_COUNT_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		wayFaceBalance: {
			nullable: false,
			isPk: false,
			description: "在途面值余额",
			name: "wayFaceBalance",
			rawName: "WAY_FACE_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		wayCardBalance: {
			nullable: false,
			isPk: false,
			description: "在途余额",
			name: "wayCardBalance",
			rawName: "WAY_CARD_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		physicalCountBalance: {
			nullable: false,
			isPk: false,
			description: "实体卡张数余额",
			name: "physicalCountBalance",
			rawName: "PHYSICAL_COUNT_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		physicalFaceBalance: {
			nullable: false,
			isPk: false,
			description: "实体卡面值余额",
			name: "physicalFaceBalance",
			rawName: "PHYSICAL_FACE_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		physicalCardBalance: {
			nullable: false,
			isPk: false,
			description: "实体卡余额",
			name: "physicalCardBalance",
			rawName: "PHYSICAL_CARD_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		electronicCountBalance: {
			nullable: false,
			isPk: false,
			description: "电子卡密张数余额",
			name: "electronicCountBalance",
			rawName: "ELECTRONIC_COUNT_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		electronicFaceBalance: {
			nullable: false,
			isPk: false,
			description: "电子卡密面值余额",
			name: "electronicFaceBalance",
			rawName: "ELECTRONIC_FACE_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		electronicCardBalance: {
			nullable: false,
			isPk: false,
			description: "电子卡密余额",
			name: "electronicCardBalance",
			rawName: "ELECTRONIC_CARD_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		memo: {
			nullable: false,
			isPk: false,
			description: "备注",
			name: "memo",
			rawName: "MEMO",
			type: {
				name: "varchar2",
				length: null
			}
		}
	}
};

