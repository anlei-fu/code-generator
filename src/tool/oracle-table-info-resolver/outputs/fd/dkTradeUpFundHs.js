exports.dkTradeUpFundHs = {
	name: "dkTradeUpFundHs",
	rawName: "DK_TRADE_UP_FUND_HS",
	columns: {
		recordId: {
			nullable: false,
			isPk: true,
			description: "主键",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		dkOrderId: {
			nullable: false,
			isPk: false,
			description: "记账系统订单号",
			name: "dkOrderId",
			rawName: "DK_ORDER_ID",
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
		orderSource: {
			nullable: false,
			isPk: false,
			description: "订单来源（系统编号）",
			name: "orderSource",
			rawName: "ORDER_SOURCE",
			type: {
				name: "number",
				length: 3
			}
		},
		tradeDeliveryNo: {
			nullable: false,
			isPk: false,
			description: "交易系统发货号",
			name: "tradeDeliveryNo",
			rawName: "TRADE_DELIVERY_NO",
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
			description: "下游账户",
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
			description: "下游所属公司",
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
			description: "上游账户",
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
			description: "上游所属公司",
			name: "upCompanyId",
			rawName: "UP_COMPANY_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		downDrawUnit: {
			nullable: false,
			isPk: false,
			description: "下游代扣规格",
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
			description: "下游代扣面值",
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
			description: "下游结算金额",
			name: "downDrawAmount",
			rawName: "DOWN_DRAW_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		downRealAmount: {
			nullable: false,
			isPk: false,
			description: "下游实际结算金额",
			name: "downRealAmount",
			rawName: "DOWN_REAL_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		upDrawUnit: {
			nullable: false,
			isPk: false,
			description: "上游代扣规格",
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
			description: "上游成功代扣面值",
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
			description: "上游结算金额（结算给我们）",
			name: "upDrawAmount",
			rawName: "UP_DRAW_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		upRealAmount: {
			nullable: false,
			isPk: false,
			description: "上游实际结算金额",
			name: "upRealAmount",
			rawName: "UP_REAL_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		changeTime: {
			nullable: false,
			isPk: false,
			description: "变动时间",
			name: "changeTime",
			rawName: "CHANGE_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		changeType: {
			nullable: false,
			isPk: false,
			description: "变更类型 :结算 2：交易代扣 3：交易撤销",
			name: "changeType",
			rawName: "CHANGE_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		billType: {
			nullable: false,
			isPk: false,
			description: "利润类:前向2-后向",
			name: "billType",
			rawName: "BILL_TYPE",
			type: {
				name: "number",
				length: 1
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
		balance: {
			nullable: false,
			isPk: false,
			description: "余额",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		profits: {
			nullable: false,
			isPk: false,
			description: "利润",
			name: "profits",
			rawName: "PROFITS",
			type: {
				name: "number",
				length: 20
			}
		},
		downCommission: {
			nullable: false,
			isPk: false,
			description: "下游后返佣金",
			name: "downCommission",
			rawName: "DOWN_COMMISSION",
			type: {
				name: "number",
				length: 20
			}
		},
		upCommission: {
			nullable: false,
			isPk: false,
			description: "上游后返佣金",
			name: "upCommission",
			rawName: "UP_COMMISSION",
			type: {
				name: "number",
				length: 20
			}
		},
		settleAmount: {
			nullable: false,
			isPk: false,
			description: "结算金额",
			name: "settleAmount",
			rawName: "SETTLE_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		settleBatchId: {
			nullable: false,
			isPk: false,
			description: "结算批次号",
			name: "settleBatchId",
			rawName: "SETTLE_BATCH_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		settleStatus: {
			nullable: false,
			isPk: false,
			description: "结算状:20-等待结算",
			name: "settleStatus",
			rawName: "SETTLE_STATUS",
			type: {
				name: "number",
				length: 10
			}
		},
		settleTime: {
			nullable: false,
			isPk: false,
			description: "结算时间",
			name: "settleTime",
			rawName: "SETTLE_TIME",
			type: {
				name: "date",
				length: null
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
		},
		downServiceFee: {
			nullable: false,
			isPk: false,
			description: "下游手续费",
			name: "downServiceFee",
			rawName: "DOWN_SERVICE_FEE",
			type: {
				name: "number",
				length: 20
			}
		},
		upServiceFee: {
			nullable: false,
			isPk: false,
			description: "上游手续费",
			name: "upServiceFee",
			rawName: "UP_SERVICE_FEE",
			type: {
				name: "number",
				length: 20
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
		tradeTime: {
			nullable: false,
			isPk: false,
			description: "交易系统变动时间",
			name: "tradeTime",
			rawName: "TRADE_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		channelSettleStatus: {
			nullable: false,
			isPk: false,
			description: "渠道结算状态，0.成功，1.等待，2.正在，99.无需结算（sp数据）",
			name: "channelSettleStatus",
			rawName: "CHANNEL_SETTLE_STATUS",
			type: {
				name: "number",
				length: 3
			}
		},
		channelSettleBatchId: {
			nullable: false,
			isPk: false,
			description: "渠道结算批次号",
			name: "channelSettleBatchId",
			rawName: "CHANNEL_SETTLE_BATCH_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		channelSettleTime: {
			nullable: false,
			isPk: false,
			description: "渠道结算时间",
			name: "channelSettleTime",
			rawName: "CHANNEL_SETTLE_TIME",
			type: {
				name: "date",
				length: null
			}
		}
	}
};

