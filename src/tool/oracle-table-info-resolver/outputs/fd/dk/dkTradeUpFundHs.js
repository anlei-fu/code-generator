exports.dkTradeUpFundHs = {
	name: "dkTradeUpFundHs",
	rawName: "DK_TRADE_UP_FUND_HS",
	columns: {
		RECORD_ID: {
			nullable: "N",
			isPk: true,
			description: "主键",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DK_ORDER_ID: {
			nullable: "N",
			isPk: false,
			description: "记账系统订单号",
			name: "dkOrderId",
			rawName: "DK_ORDER_ID",
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
		ORDER_SOURCE: {
			nullable: "N",
			isPk: false,
			description: "订单来源（系统编号）",
			name: "orderSource",
			rawName: "ORDER_SOURCE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		TRADE_DELIVERY_NO: {
			nullable: "N",
			isPk: false,
			description: "交易系统发货号",
			name: "tradeDeliveryNo",
			rawName: "TRADE_DELIVERY_NO",
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
			description: "下游账户",
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
			description: "下游所属公司",
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
			description: "上游账户",
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
			description: "上游所属公司",
			name: "upCompanyId",
			rawName: "UP_COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DOWN_DRAW_UNIT: {
			nullable: "N",
			isPk: false,
			description: "下游代扣规格",
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
			description: "下游代扣面值",
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
			description: "下游结算金额",
			name: "downDrawAmount",
			rawName: "DOWN_DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DOWN_REAL_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "下游实际结算金额",
			name: "downRealAmount",
			rawName: "DOWN_REAL_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_DRAW_UNIT: {
			nullable: "N",
			isPk: false,
			description: "上游代扣规格",
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
			description: "上游成功代扣面值",
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
			description: "上游结算金额（结算给我们）",
			name: "upDrawAmount",
			rawName: "UP_DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_REAL_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "上游实际结算金额",
			name: "upRealAmount",
			rawName: "UP_REAL_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANGE_TIME: {
			nullable: "N",
			isPk: false,
			description: "变动时间",
			name: "changeTime",
			rawName: "CHANGE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		CHANGE_TYPE: {
			nullable: "N",
			isPk: false,
			description: "变更类型 :结算 2：交易代扣 3：交易撤销",
			name: "changeType",
			rawName: "CHANGE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		BILL_TYPE: {
			nullable: "N",
			isPk: false,
			description: "利润类:前向2-后向",
			name: "billType",
			rawName: "BILL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
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
		BALANCE: {
			nullable: "N",
			isPk: false,
			description: "余额",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PROFITS: {
			nullable: "N",
			isPk: false,
			description: "利润",
			name: "profits",
			rawName: "PROFITS",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DOWN_COMMISSION: {
			nullable: "N",
			isPk: false,
			description: "下游后返佣金",
			name: "downCommission",
			rawName: "DOWN_COMMISSION",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_COMMISSION: {
			nullable: "N",
			isPk: false,
			description: "上游后返佣金",
			name: "upCommission",
			rawName: "UP_COMMISSION",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SETTLE_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "结算金额",
			name: "settleAmount",
			rawName: "SETTLE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SETTLE_BATCH_ID: {
			nullable: "N",
			isPk: false,
			description: "结算批次号",
			name: "settleBatchId",
			rawName: "SETTLE_BATCH_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SETTLE_STATUS: {
			nullable: "N",
			isPk: false,
			description: "结算状:20-等待结算,0-结算成功,10-无需结算",
			name: "settleStatus",
			rawName: "SETTLE_STATUS",
			type: {
				name: "NUMBER",
				length: "10"
			}
		},
		SETTLE_TIME: {
			nullable: "Y",
			isPk: false,
			description: "结算时间",
			name: "settleTime",
			rawName: "SETTLE_TIME",
			type: {
				name: "DATE",
				length: ""
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
		},
		DOWN_SERVICE_FEE: {
			nullable: "N",
			isPk: false,
			description: "下游手续费",
			name: "downServiceFee",
			rawName: "DOWN_SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_SERVICE_FEE: {
			nullable: "N",
			isPk: false,
			description: "上游手续费",
			name: "upServiceFee",
			rawName: "UP_SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ORDER_TIME: {
			nullable: "Y",
			isPk: false,
			description: "订单日期(交易系统下单日期)",
			name: "orderTime",
			rawName: "ORDER_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		TRADE_TIME: {
			nullable: "Y",
			isPk: false,
			description: "交易系统变动时间",
			name: "tradeTime",
			rawName: "TRADE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		CHANNEL_SETTLE_STATUS: {
			nullable: "N",
			isPk: false,
			description: "渠道结算状态，0.成功，1.等待，2.正在，99.无需结算（sp数据）",
			name: "channelSettleStatus",
			rawName: "CHANNEL_SETTLE_STATUS",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		CHANNEL_SETTLE_BATCH_ID: {
			nullable: "N",
			isPk: false,
			description: "渠道结算批次号",
			name: "channelSettleBatchId",
			rawName: "CHANNEL_SETTLE_BATCH_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANNEL_SETTLE_TIME: {
			nullable: "Y",
			isPk: false,
			description: "渠道结算时间",
			name: "channelSettleTime",
			rawName: "CHANNEL_SETTLE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	}
};

