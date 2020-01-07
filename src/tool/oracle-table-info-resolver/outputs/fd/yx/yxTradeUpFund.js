exports.yxTradeUpFund = {
	name: "yxTradeUpFund",
	rawName: "YX_TRADE_UP_FUND",
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
		yxOrderId: {
			nullable: false,
			isPk: false,
			description: "记账系统订单号",
			name: "yxOrderId",
			rawName: "YX_ORDER_ID",
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
		tradeDeliveryNo: {
			nullable: false,
			isPk: false,
			description: "交易系统发货号",
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
			description: "扩展发货编号",
			name: "extDeliveryNo",
			rawName: "EXT_DELIVERY_NO",
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
		agentId: {
			nullable: false,
			isPk: false,
			description: "代理人编号",
			name: "agentId",
			rawName: "AGENT_ID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		downDrawUnit: {
			nullable: false,
			isPk: false,
			description: "下游充值量（计算值）",
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
			description: "下游扣款面值（计算值）",
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
			description: "下游扣款金额（计算值）(用户支付金额)",
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
			description: "下游实际金额（计算值）",
			name: "downRealAmount",
			rawName: "DOWN_REAL_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		dowmHandlingFee: {
			nullable: false,
			isPk: false,
			description: "下游手续费（计算值）",
			name: "dowmHandlingFee",
			rawName: "DOWM_HANDLING_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		downAgencyFee: {
			nullable: false,
			isPk: false,
			description: "下游代理费（计算值）",
			name: "downAgencyFee",
			rawName: "DOWN_AGENCY_FEE",
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
		upServieFee: {
			nullable: false,
			isPk: false,
			description: "上游服务费",
			name: "upServieFee",
			rawName: "UP_SERVIE_FEE",
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
			description: "变更类型:加款2：交易扣款3：交易退款4：提款:服务费转余额:服务费结算,1:发行加款,12：发行扣款，13：发行退款",
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
			nullable: true,
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
			description: "订单日期(交易系统下单日期)",
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
			description: "资金变动时间（交易系统）",
			name: "outChangeTime",
			rawName: "OUT_CHANGE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		refundOrderNo: {
			nullable: true,
			isPk: false,
			description: "退款编号",
			name: "refundOrderNo",
			rawName: "REFUND_ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		incomeAmount: {
			nullable: true,
			isPk: false,
			description: "收益金额",
			name: "incomeAmount",
			rawName: "INCOME_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		couponAmount: {
			nullable: true,
			isPk: false,
			description: "优惠券金额",
			name: "couponAmount",
			rawName: "COUPON_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

