exports.fdVReportSettleSummary = {
	name: "fdVReportSettleSummary",
	rawName: "FD_V_REPORT_SETTLE_SUMMARY",
	columns: {
		channelType: {
			nullable: false,
			isPk: false,
			description: "",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "number",
				length: 1
			}
		},
		snapTime: {
			nullable: false,
			isPk: false,
			description: "",
			name: "snapTime",
			rawName: "SNAP_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		statisticsType: {
			nullable: false,
			isPk: false,
			description: "",
			name: "statisticsType",
			rawName: "STATISTICS_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		channelNo: {
			nullable: false,
			isPk: false,
			description: "",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		lastProfits: {
			nullable: false,
			isPk: false,
			description: "",
			name: "lastProfits",
			rawName: "LAST_PROFITS",
			type: {
				name: "number",
				length: null
			}
		},
		oneWaySeatProfits: {
			nullable: false,
			isPk: false,
			description: "",
			name: "oneWaySeatProfits",
			rawName: "ONE_WAY_SEAT_PROFITS",
			type: {
				name: "number",
				length: null
			}
		},
		realFace: {
			nullable: false,
			isPk: false,
			description: "",
			name: "realFace",
			rawName: "REAL_FACE",
			type: {
				name: "number",
				length: null
			}
		},
		refundDrawAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "refundDrawAmount",
			rawName: "REFUND_DRAW_AMOUNT",
			type: {
				name: "number",
				length: null
			}
		},
		companyId: {
			nullable: false,
			isPk: false,
			description: "",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		drawAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "drawAmount",
			rawName: "DRAW_AMOUNT",
			type: {
				name: "number",
				length: null
			}
		},
		upManyFace: {
			nullable: false,
			isPk: false,
			description: "",
			name: "upManyFace",
			rawName: "UP_MANY_FACE",
			type: {
				name: "number",
				length: null
			}
		},
		totalUnit: {
			nullable: false,
			isPk: false,
			description: "",
			name: "totalUnit",
			rawName: "TOTAL_UNIT",
			type: {
				name: "number",
				length: null
			}
		},
		lastServiceFee: {
			nullable: false,
			isPk: false,
			description: "",
			name: "lastServiceFee",
			rawName: "LAST_SERVICE_FEE",
			type: {
				name: "number",
				length: null
			}
		},
		realDrawAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "realDrawAmount",
			rawName: "REAL_DRAW_AMOUNT",
			type: {
				name: "number",
				length: null
			}
		},
		accountId: {
			nullable: false,
			isPk: false,
			description: "",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		totalFace: {
			nullable: false,
			isPk: false,
			description: "",
			name: "totalFace",
			rawName: "TOTAL_FACE",
			type: {
				name: "number",
				length: null
			}
		},
		oneWayProfits: {
			nullable: false,
			isPk: false,
			description: "",
			name: "oneWayProfits",
			rawName: "ONE_WAY_PROFITS",
			type: {
				name: "number",
				length: null
			}
		},
		channelSourceSystem: {
			nullable: false,
			isPk: false,
			description: "",
			name: "channelSourceSystem",
			rawName: "CHANNEL_SOURCE_SYSTEM",
			type: {
				name: "number",
				length: 20
			}
		},
		realRechargeFace: {
			nullable: false,
			isPk: false,
			description: "",
			name: "realRechargeFace",
			rawName: "REAL_RECHARGE_FACE",
			type: {
				name: "number",
				length: null
			}
		},
		channelName: {
			nullable: false,
			isPk: false,
			description: "",
			name: "channelName",
			rawName: "CHANNEL_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		endCommission: {
			nullable: false,
			isPk: false,
			description: "",
			name: "endCommission",
			rawName: "END_COMMISSION",
			type: {
				name: "number",
				length: null
			}
		},
		refundTotalFace: {
			nullable: false,
			isPk: false,
			description: "",
			name: "refundTotalFace",
			rawName: "REFUND_TOTAL_FACE",
			type: {
				name: "number",
				length: null
			}
		},
		upManyAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "upManyAmount",
			rawName: "UP_MANY_AMOUNT",
			type: {
				name: "number",
				length: null
			}
		}
	}
};

