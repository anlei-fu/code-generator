exports.fdTradeUpFundHs = {
	name: "fdTradeUpFundHs",
	rawName: "FD_TRADE_UP_FUND_HS",
	columns: {
		recordId: {
			nullable: false,
			isPk: true,
			description: "主键",
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
			description: "记账系统订单号",
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
			description: "交易系统订单号",
			name: "tradeOrderNo",
			rawName: "TRADE_ORDER_NO",
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
		downDrawUnit: {
			nullable: false,
			isPk: false,
			description: "下游充值量",
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
			description: "下游扣款面值",
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
			description: "下游扣款金额",
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
			description: "下游实际金额",
			name: "downRealAmount",
			rawName: "DOWN_REAL_AMOUNT",
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
			description: "上游成功面值",
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
			description: "变更类型 :加款 2：交易扣款 3：交易退款",
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
			description: "利润类:前向2-后向",
			name: "billType",
			rawName: "BILL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
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
		profits: {
			nullable: false,
			isPk: false,
			description: "利润",
			name: "profits",
			rawName: "PROFITS",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		downCommission: {
			nullable: false,
			isPk: false,
			description: "下游后返佣金",
			name: "downCommission",
			rawName: "DOWN_COMMISSION",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		upCommission: {
			nullable: false,
			isPk: false,
			description: "上游后返佣金",
			name: "upCommission",
			rawName: "UP_COMMISSION",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		settleAmount: {
			nullable: true,
			isPk: false,
			description: "结算金额",
			name: "settleAmount",
			rawName: "SETTLE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		settleBatchId: {
			nullable: false,
			isPk: false,
			description: "结算批次号",
			name: "settleBatchId",
			rawName: "SETTLE_BATCH_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		settleStatus: {
			nullable: false,
			isPk: false,
			description: "结算状:20-等待结算,0-结算成功,10-无需结算",
			name: "settleStatus",
			rawName: "SETTLE_STATUS",
			type: {
				name: "NUMBER",
				length: "10"
			}
		},
		settleTime: {
			nullable: true,
			isPk: false,
			description: "结算时间",
			name: "settleTime",
			rawName: "SETTLE_TIME",
			type: {
				name: "DATE",
				length: ""
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
		downServiceFee: {
			nullable: false,
			isPk: false,
			description: "下游手续费",
			name: "downServiceFee",
			rawName: "DOWN_SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		upServiceFee: {
			nullable: false,
			isPk: false,
			description: "上游手续费",
			name: "upServiceFee",
			rawName: "UP_SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		orderTime: {
			nullable: true,
			isPk: false,
			description: "订单日期(交易系统下单日期)",
			name: "orderTime",
			rawName: "ORDER_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		splitProfitStatus: {
			nullable: true,
			isPk: false,
			description: "是否分配利润，0已分配",
			name: "splitProfitStatus",
			rawName: "SPLIT_PROFIT_STATUS",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		outChangeTime: {
			nullable: true,
			isPk: false,
			description: "外部系统资金变动时间",
			name: "outChangeTime",
			rawName: "OUT_CHANGE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	}
};

