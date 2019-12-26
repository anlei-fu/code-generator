exports.zreportUpFundJoinHs = {
	name: "zreportUpFundJoinHs",
	rawName: "ZREPORT_UP_FUND_JOIN_HS",
	columns: {
		downDrawFace: {
			nullable: false,
			isPk: false,
			description: "",
			name: "downDrawFace",
			rawName: "DOWN_DRAW_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		upDrawUnit: {
			nullable: false,
			isPk: false,
			description: "",
			name: "upDrawUnit",
			rawName: "UP_DRAW_UNIT",
			type: {
				name: "number",
				length: 20
			}
		},
		changeType: {
			nullable: false,
			isPk: false,
			description: "",
			name: "changeType",
			rawName: "CHANGE_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		settleStatus: {
			nullable: false,
			isPk: false,
			description: "",
			name: "settleStatus",
			rawName: "SETTLE_STATUS",
			type: {
				name: "number",
				length: 10
			}
		},
		downAccountId: {
			nullable: false,
			isPk: false,
			description: "",
			name: "downAccountId",
			rawName: "DOWN_ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		fdOrderId: {
			nullable: false,
			isPk: false,
			description: "",
			name: "fdOrderId",
			rawName: "FD_ORDER_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		changeTime: {
			nullable: false,
			isPk: false,
			description: "",
			name: "changeTime",
			rawName: "CHANGE_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		upChannelNo: {
			nullable: false,
			isPk: false,
			description: "",
			name: "upChannelNo",
			rawName: "UP_CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		downRealAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "downRealAmount",
			rawName: "DOWN_REAL_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		downDrawAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "downDrawAmount",
			rawName: "DOWN_DRAW_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		upCommission: {
			nullable: false,
			isPk: false,
			description: "",
			name: "upCommission",
			rawName: "UP_COMMISSION",
			type: {
				name: "number",
				length: 20
			}
		},
		tradeDeliveryNo: {
			nullable: false,
			isPk: false,
			description: "",
			name: "tradeDeliveryNo",
			rawName: "TRADE_DELIVERY_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		downCommission: {
			nullable: false,
			isPk: false,
			description: "",
			name: "downCommission",
			rawName: "DOWN_COMMISSION",
			type: {
				name: "number",
				length: 20
			}
		},
		orderSource: {
			nullable: false,
			isPk: false,
			description: "",
			name: "orderSource",
			rawName: "ORDER_SOURCE",
			type: {
				name: "number",
				length: 3
			}
		},
		memo: {
			nullable: false,
			isPk: false,
			description: "",
			name: "memo",
			rawName: "MEMO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		downDrawUnit: {
			nullable: false,
			isPk: false,
			description: "",
			name: "downDrawUnit",
			rawName: "DOWN_DRAW_UNIT",
			type: {
				name: "number",
				length: 20
			}
		},
		balance: {
			nullable: false,
			isPk: false,
			description: "",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		downChannelNo: {
			nullable: false,
			isPk: false,
			description: "",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		provinceNo: {
			nullable: false,
			isPk: false,
			description: "",
			name: "provinceNo",
			rawName: "PROVINCE_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		carrierNo: {
			nullable: false,
			isPk: false,
			description: "",
			name: "carrierNo",
			rawName: "CARRIER_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		businessType: {
			nullable: false,
			isPk: false,
			description: "",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		upDrawFace: {
			nullable: false,
			isPk: false,
			description: "",
			name: "upDrawFace",
			rawName: "UP_DRAW_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		downCompanyId: {
			nullable: false,
			isPk: false,
			description: "",
			name: "downCompanyId",
			rawName: "DOWN_COMPANY_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		settleTime: {
			nullable: false,
			isPk: false,
			description: "",
			name: "settleTime",
			rawName: "SETTLE_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		profits: {
			nullable: false,
			isPk: false,
			description: "",
			name: "profits",
			rawName: "PROFITS",
			type: {
				name: "number",
				length: 20
			}
		},
		upAccountId: {
			nullable: false,
			isPk: false,
			description: "",
			name: "upAccountId",
			rawName: "UP_ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		settleBatchId: {
			nullable: false,
			isPk: false,
			description: "",
			name: "settleBatchId",
			rawName: "SETTLE_BATCH_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		orderTime: {
			nullable: false,
			isPk: false,
			description: "",
			name: "orderTime",
			rawName: "ORDER_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		billType: {
			nullable: false,
			isPk: false,
			description: "",
			name: "billType",
			rawName: "BILL_TYPE",
			type: {
				name: "number",
				length: 1
			}
		},
		upRealAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "upRealAmount",
			rawName: "UP_REAL_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		upDrawAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "upDrawAmount",
			rawName: "UP_DRAW_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		recordId: {
			nullable: false,
			isPk: false,
			description: "",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		upCompanyId: {
			nullable: false,
			isPk: false,
			description: "",
			name: "upCompanyId",
			rawName: "UP_COMPANY_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		settleAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "settleAmount",
			rawName: "SETTLE_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		tradeOrderNo: {
			nullable: false,
			isPk: false,
			description: "",
			name: "tradeOrderNo",
			rawName: "TRADE_ORDER_NO",
			type: {
				name: "varchar2",
				length: null
			}
		}
	}
};

