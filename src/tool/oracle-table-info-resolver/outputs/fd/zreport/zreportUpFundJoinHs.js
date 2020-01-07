exports.zreportUpFundJoinHs = {
	name: "zreportUpFundJoinHs",
	rawName: "ZREPORT_UP_FUND_JOIN_HS",
	columns: {
		downDrawFace: {
			nullable: true,
			isPk: false,
			description: "",
			name: "downDrawFace",
			rawName: "DOWN_DRAW_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		upDrawUnit: {
			nullable: true,
			isPk: false,
			description: "",
			name: "upDrawUnit",
			rawName: "UP_DRAW_UNIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		changeType: {
			nullable: true,
			isPk: false,
			description: "",
			name: "changeType",
			rawName: "CHANGE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		settleStatus: {
			nullable: true,
			isPk: false,
			description: "",
			name: "settleStatus",
			rawName: "SETTLE_STATUS",
			type: {
				name: "NUMBER",
				length: "10"
			}
		},
		downAccountId: {
			nullable: true,
			isPk: false,
			description: "",
			name: "downAccountId",
			rawName: "DOWN_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		fdOrderId: {
			nullable: true,
			isPk: false,
			description: "",
			name: "fdOrderId",
			rawName: "FD_ORDER_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		changeTime: {
			nullable: true,
			isPk: false,
			description: "",
			name: "changeTime",
			rawName: "CHANGE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		upChannelNo: {
			nullable: true,
			isPk: false,
			description: "",
			name: "upChannelNo",
			rawName: "UP_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		downRealAmount: {
			nullable: true,
			isPk: false,
			description: "",
			name: "downRealAmount",
			rawName: "DOWN_REAL_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		downDrawAmount: {
			nullable: true,
			isPk: false,
			description: "",
			name: "downDrawAmount",
			rawName: "DOWN_DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		upCommission: {
			nullable: true,
			isPk: false,
			description: "",
			name: "upCommission",
			rawName: "UP_COMMISSION",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		tradeDeliveryNo: {
			nullable: true,
			isPk: false,
			description: "",
			name: "tradeDeliveryNo",
			rawName: "TRADE_DELIVERY_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		downCommission: {
			nullable: true,
			isPk: false,
			description: "",
			name: "downCommission",
			rawName: "DOWN_COMMISSION",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		orderSource: {
			nullable: true,
			isPk: false,
			description: "",
			name: "orderSource",
			rawName: "ORDER_SOURCE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		memo: {
			nullable: true,
			isPk: false,
			description: "",
			name: "memo",
			rawName: "MEMO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		downDrawUnit: {
			nullable: true,
			isPk: false,
			description: "",
			name: "downDrawUnit",
			rawName: "DOWN_DRAW_UNIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		balance: {
			nullable: true,
			isPk: false,
			description: "",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		downChannelNo: {
			nullable: true,
			isPk: false,
			description: "",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		provinceNo: {
			nullable: true,
			isPk: false,
			description: "",
			name: "provinceNo",
			rawName: "PROVINCE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		carrierNo: {
			nullable: true,
			isPk: false,
			description: "",
			name: "carrierNo",
			rawName: "CARRIER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		businessType: {
			nullable: true,
			isPk: false,
			description: "",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		upDrawFace: {
			nullable: true,
			isPk: false,
			description: "",
			name: "upDrawFace",
			rawName: "UP_DRAW_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		downCompanyId: {
			nullable: true,
			isPk: false,
			description: "",
			name: "downCompanyId",
			rawName: "DOWN_COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		settleTime: {
			nullable: true,
			isPk: false,
			description: "",
			name: "settleTime",
			rawName: "SETTLE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		profits: {
			nullable: true,
			isPk: false,
			description: "",
			name: "profits",
			rawName: "PROFITS",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		upAccountId: {
			nullable: true,
			isPk: false,
			description: "",
			name: "upAccountId",
			rawName: "UP_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		settleBatchId: {
			nullable: true,
			isPk: false,
			description: "",
			name: "settleBatchId",
			rawName: "SETTLE_BATCH_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		orderTime: {
			nullable: true,
			isPk: false,
			description: "",
			name: "orderTime",
			rawName: "ORDER_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		billType: {
			nullable: true,
			isPk: false,
			description: "",
			name: "billType",
			rawName: "BILL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		upRealAmount: {
			nullable: true,
			isPk: false,
			description: "",
			name: "upRealAmount",
			rawName: "UP_REAL_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		upDrawAmount: {
			nullable: true,
			isPk: false,
			description: "",
			name: "upDrawAmount",
			rawName: "UP_DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		recordId: {
			nullable: true,
			isPk: false,
			description: "",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		upCompanyId: {
			nullable: true,
			isPk: false,
			description: "",
			name: "upCompanyId",
			rawName: "UP_COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		settleAmount: {
			nullable: true,
			isPk: false,
			description: "",
			name: "settleAmount",
			rawName: "SETTLE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		tradeOrderNo: {
			nullable: true,
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

