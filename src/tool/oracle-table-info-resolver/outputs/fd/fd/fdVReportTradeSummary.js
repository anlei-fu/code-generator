exports.fdVReportTradeSummary = {
	name: "fdVReportTradeSummary",
	rawName: "FD_V_REPORT_TRADE_SUMMARY",
	columns: {
		REFUND_FIST_COMMISSION: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "refundFistCommission",
			rawName: "REFUND_FIST_COMMISSION",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		FACE_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "faceAmount",
			rawName: "FACE_AMOUNT",
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
		DRAW_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "drawAmount",
			rawName: "DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
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
		LAST_DRAW_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "lastDrawAmount",
			rawName: "LAST_DRAW_AMOUNT",
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
		REFUND_TOTAL_FACE: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "refundTotalFace",
			rawName: "REFUND_TOTAL_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		REFUND_DRAW_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "refundDrawAmount",
			rawName: "REFUND_DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		LAST_PROFITS: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "lastProfits",
			rawName: "LAST_PROFITS",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		LAST_FIRST_COMMISSION: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "lastFirstCommission",
			rawName: "LAST_FIRST_COMMISSION",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		LAST_FACE_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "lastFaceAmount",
			rawName: "LAST_FACE_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		TOTAL_COMMISSION: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "totalCommission",
			rawName: "TOTAL_COMMISSION",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		LAST_SERVICE_FEE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "lastServiceFee",
			rawName: "LAST_SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		FIST_COMMISSION: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "fistCommission",
			rawName: "FIST_COMMISSION",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		SNAP_TIME: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "snapTime",
			rawName: "SNAP_TIME",
			type: {
				name: "DATE",
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
		REFUND_FACE_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "refundFaceAmount",
			rawName: "REFUND_FACE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
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
		TOTAL_FACE: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "totalFace",
			rawName: "TOTAL_FACE",
			type: {
				name: "NUMBER",
				length: "20"
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
		UP_MANY_FACE: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "upManyFace",
			rawName: "UP_MANY_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

