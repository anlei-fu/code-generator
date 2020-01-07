exports.czthTradeOrder = {
	name: "czthTradeOrder",
	rawName: "CZTH_TRADE_ORDER",
	columns: {
		recordId: {
			nullable: false,
			isPk: false,
			description: "充值特惠交易订单表",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		fdOrderId: {
			nullable: false,
			isPk: false,
			description: "订单编号",
			name: "fdOrderId",
			rawName: "FD_ORDER_ID",
			type: {
				name: "NUMBER",
				length: "20"
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
		tradeDeliveryNo: {
			nullable: false,
			isPk: false,
			description: "生产系统发货号",
			name: "tradeDeliveryNo",
			rawName: "TRADE_DELIVERY_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		orderSource: {
			nullable: false,
			isPk: false,
			description: "系统编号",
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
			description: "下游账户编号",
			name: "downAccountId",
			rawName: "DOWN_ACCOUNT_ID",
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
			description: "上游账户编号",
			name: "upAccountId",
			rawName: "UP_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		companyId: {
			nullable: false,
			isPk: false,
			description: "平台公司编号",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		drawUnit: {
			nullable: false,
			isPk: false,
			description: "扣款规格",
			name: "drawUnit",
			rawName: "DRAW_UNIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		drawFace: {
			nullable: false,
			isPk: false,
			description: "扣款面值",
			name: "drawFace",
			rawName: "DRAW_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		drawAmount: {
			nullable: false,
			isPk: false,
			description: "扣款金额",
			name: "drawAmount",
			rawName: "DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		serviceRate: {
			nullable: false,
			isPk: false,
			description: "服务费率（针对上游收取）",
			name: "serviceRate",
			rawName: "SERVICE_RATE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		subsidy: {
			nullable: false,
			isPk: false,
			description: "补贴金额",
			name: "subsidy",
			rawName: "SUBSIDY",
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
			description: "变动类型",
			name: "changeType",
			rawName: "CHANGE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		billType: {
			nullable: false,
			isPk: false,
			description: "前后项信息（1-前项，2后项）",
			name: "billType",
			rawName: "BILL_TYPE",
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
		memo: {
			nullable: true,
			isPk: false,
			description: "备注信息",
			name: "memo",
			rawName: "MEMO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

