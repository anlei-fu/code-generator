exports.zreportUpFundJoinHs = {
	name: "zreportUpFundJoinHs",
	rawName: "ZREPORT_UP_FUND_JOIN_HS",
	columns: {
		DOWN_DRAW_FACE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "downDrawFace",
			rawName: "DOWN_DRAW_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_DRAW_UNIT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "upDrawUnit",
			rawName: "UP_DRAW_UNIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANGE_TYPE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "changeType",
			rawName: "CHANGE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		SETTLE_STATUS: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "settleStatus",
			rawName: "SETTLE_STATUS",
			type: {
				name: "NUMBER",
				length: "10"
			}
		},
		DOWN_ACCOUNT_ID: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "downAccountId",
			rawName: "DOWN_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		FD_ORDER_ID: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "fdOrderId",
			rawName: "FD_ORDER_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANGE_TIME: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "changeTime",
			rawName: "CHANGE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		UP_CHANNEL_NO: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "upChannelNo",
			rawName: "UP_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		DOWN_REAL_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "downRealAmount",
			rawName: "DOWN_REAL_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DOWN_DRAW_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "downDrawAmount",
			rawName: "DOWN_DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_COMMISSION: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "upCommission",
			rawName: "UP_COMMISSION",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TRADE_DELIVERY_NO: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "tradeDeliveryNo",
			rawName: "TRADE_DELIVERY_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		DOWN_COMMISSION: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "downCommission",
			rawName: "DOWN_COMMISSION",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ORDER_SOURCE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "orderSource",
			rawName: "ORDER_SOURCE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		MEMO: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "memo",
			rawName: "MEMO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		DOWN_DRAW_UNIT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "downDrawUnit",
			rawName: "DOWN_DRAW_UNIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		BALANCE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DOWN_CHANNEL_NO: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PROVINCE_NO: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "provinceNo",
			rawName: "PROVINCE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CARRIER_NO: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "carrierNo",
			rawName: "CARRIER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		BUSINESS_TYPE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		UP_DRAW_FACE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "upDrawFace",
			rawName: "UP_DRAW_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DOWN_COMPANY_ID: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "downCompanyId",
			rawName: "DOWN_COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SETTLE_TIME: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "settleTime",
			rawName: "SETTLE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		PROFITS: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "profits",
			rawName: "PROFITS",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_ACCOUNT_ID: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "upAccountId",
			rawName: "UP_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SETTLE_BATCH_ID: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "settleBatchId",
			rawName: "SETTLE_BATCH_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ORDER_TIME: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "orderTime",
			rawName: "ORDER_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		BILL_TYPE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "billType",
			rawName: "BILL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		UP_REAL_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "upRealAmount",
			rawName: "UP_REAL_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_DRAW_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "upDrawAmount",
			rawName: "UP_DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		RECORD_ID: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_COMPANY_ID: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "upCompanyId",
			rawName: "UP_COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SETTLE_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "settleAmount",
			rawName: "SETTLE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TRADE_ORDER_NO: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "tradeOrderNo",
			rawName: "TRADE_ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

