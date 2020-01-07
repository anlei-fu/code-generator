exports.dkVReportSettleSummary = {
	name: "dkVReportSettleSummary",
	rawName: "DK_V_REPORT_SETTLE_SUMMARY",
	columns: {
		statisticsType: {
			nullable: true,
			isPk: false,
			description: "",
			name: "statisticsType",
			rawName: "STATISTICS_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		realDrawAmount: {
			nullable: true,
			isPk: false,
			description: "",
			name: "realDrawAmount",
			rawName: "REAL_DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		realFace: {
			nullable: true,
			isPk: false,
			description: "",
			name: "realFace",
			rawName: "REAL_FACE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		channelSourceSystem: {
			nullable: true,
			isPk: false,
			description: "",
			name: "channelSourceSystem",
			rawName: "CHANNEL_SOURCE_SYSTEM",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		oneWaySeatProfits: {
			nullable: true,
			isPk: false,
			description: "",
			name: "oneWaySeatProfits",
			rawName: "ONE_WAY_SEAT_PROFITS",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		lastProfits: {
			nullable: true,
			isPk: false,
			description: "",
			name: "lastProfits",
			rawName: "LAST_PROFITS",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		realRechargeFace: {
			nullable: true,
			isPk: false,
			description: "",
			name: "realRechargeFace",
			rawName: "REAL_RECHARGE_FACE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		oneWayProfits: {
			nullable: true,
			isPk: false,
			description: "",
			name: "oneWayProfits",
			rawName: "ONE_WAY_PROFITS",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		refundDrawAmount: {
			nullable: true,
			isPk: false,
			description: "",
			name: "refundDrawAmount",
			rawName: "REFUND_DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		companyId: {
			nullable: false,
			isPk: false,
			description: "",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		refundTotalFace: {
			nullable: true,
			isPk: false,
			description: "",
			name: "refundTotalFace",
			rawName: "REFUND_TOTAL_FACE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		channelNo: {
			nullable: false,
			isPk: false,
			description: "",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		endCommission: {
			nullable: true,
			isPk: false,
			description: "",
			name: "endCommission",
			rawName: "END_COMMISSION",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		lastServiceFee: {
			nullable: true,
			isPk: false,
			description: "",
			name: "lastServiceFee",
			rawName: "LAST_SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		totalUnit: {
			nullable: true,
			isPk: false,
			description: "",
			name: "totalUnit",
			rawName: "TOTAL_UNIT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		totalFace: {
			nullable: true,
			isPk: false,
			description: "",
			name: "totalFace",
			rawName: "TOTAL_FACE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		snapTime: {
			nullable: false,
			isPk: false,
			description: "",
			name: "snapTime",
			rawName: "SNAP_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		drawAmount: {
			nullable: true,
			isPk: false,
			description: "",
			name: "drawAmount",
			rawName: "DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		accountId: {
			nullable: false,
			isPk: false,
			description: "",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		channelType: {
			nullable: false,
			isPk: false,
			description: "",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		}
	}
};

