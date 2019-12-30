exports.dkVReportSummaryMonth = {
	name: "dkVReportSummaryMonth",
	rawName: "DK_V_REPORT_SUMMARY_MONTH",
	columns: {
		SNAP_TIME: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "snapTime",
			rawName: "SNAP_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		REAL_DRAW_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "realDrawAmount",
			rawName: "REAL_DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		REAL_RECHARGE_FACE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "realRechargeFace",
			rawName: "REAL_RECHARGE_FACE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		TOTAL_FACE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "totalFace",
			rawName: "TOTAL_FACE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		CHANNEL_TYPE: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		END_COMMISSION: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "endCommission",
			rawName: "END_COMMISSION",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		REFUND_TOTAL_FACE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "refundTotalFace",
			rawName: "REFUND_TOTAL_FACE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		STATISTICS_TYPE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "statisticsType",
			rawName: "STATISTICS_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		DRAW_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "drawAmount",
			rawName: "DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		ONE_WAY_PROFITS: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "oneWayProfits",
			rawName: "ONE_WAY_PROFITS",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		REAL_FACE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "realFace",
			rawName: "REAL_FACE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		REFUND_DRAW_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "refundDrawAmount",
			rawName: "REFUND_DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		CHANNEL_SOURCE_SYSTEM: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "channelSourceSystem",
			rawName: "CHANNEL_SOURCE_SYSTEM",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ONE_WAY_SEAT_PROFITS: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "oneWaySeatProfits",
			rawName: "ONE_WAY_SEAT_PROFITS",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		COMPANY_ID: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TOTAL_UNIT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "totalUnit",
			rawName: "TOTAL_UNIT",
			type: {
				name: "NUMBER",
				length: ""
			}
		}
	}
};

