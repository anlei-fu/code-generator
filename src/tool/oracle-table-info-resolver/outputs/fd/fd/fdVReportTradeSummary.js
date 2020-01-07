exports.fdVReportTradeSummary = {
	name: "fdVReportTradeSummary",
	rawName: "FD_V_REPORT_TRADE_SUMMARY",
	columns: {
		refundFistCommission: {
			nullable: true,
			isPk: false,
			description: "",
			name: "refundFistCommission",
			rawName: "REFUND_FIST_COMMISSION",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		faceAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "faceAmount",
			rawName: "FACE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
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
		drawAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "drawAmount",
			rawName: "DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
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
		lastDrawAmount: {
			nullable: true,
			isPk: false,
			description: "",
			name: "lastDrawAmount",
			rawName: "LAST_DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
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
		},
		refundTotalFace: {
			nullable: false,
			isPk: false,
			description: "",
			name: "refundTotalFace",
			rawName: "REFUND_TOTAL_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		refundDrawAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "refundDrawAmount",
			rawName: "REFUND_DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
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
		lastFirstCommission: {
			nullable: true,
			isPk: false,
			description: "",
			name: "lastFirstCommission",
			rawName: "LAST_FIRST_COMMISSION",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		lastFaceAmount: {
			nullable: true,
			isPk: false,
			description: "",
			name: "lastFaceAmount",
			rawName: "LAST_FACE_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		totalCommission: {
			nullable: true,
			isPk: false,
			description: "",
			name: "totalCommission",
			rawName: "TOTAL_COMMISSION",
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
		fistCommission: {
			nullable: true,
			isPk: false,
			description: "",
			name: "fistCommission",
			rawName: "FIST_COMMISSION",
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
		refundFaceAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "refundFaceAmount",
			rawName: "REFUND_FACE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
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
		totalFace: {
			nullable: false,
			isPk: false,
			description: "",
			name: "totalFace",
			rawName: "TOTAL_FACE",
			type: {
				name: "NUMBER",
				length: "20"
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
		upManyFace: {
			nullable: false,
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

