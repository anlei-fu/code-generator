exports.dkVReportProfitMonth = {
	name: "dkVReportProfitMonth",
	rawName: "DK_V_REPORT_PROFIT_MONTH",
	columns: {
		platServiceFee: {
			nullable: false,
			isPk: false,
			description: "",
			name: "platServiceFee",
			rawName: "PLAT_SERVICE_FEE",
			type: {
				name: "number",
				length: null
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
		downRefund: {
			nullable: false,
			isPk: false,
			description: "",
			name: "downRefund",
			rawName: "DOWN_REFUND",
			type: {
				name: "number",
				length: null
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
				length: null
			}
		},
		profit: {
			nullable: false,
			isPk: false,
			description: "",
			name: "profit",
			rawName: "PROFIT",
			type: {
				name: "number",
				length: null
			}
		},
		downDraw: {
			nullable: false,
			isPk: false,
			description: "",
			name: "downDraw",
			rawName: "DOWN_DRAW",
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
		lastProfit: {
			nullable: false,
			isPk: false,
			description: "",
			name: "lastProfit",
			rawName: "LAST_PROFIT",
			type: {
				name: "number",
				length: null
			}
		},
		sysCost: {
			nullable: false,
			isPk: false,
			description: "",
			name: "sysCost",
			rawName: "SYS_COST",
			type: {
				name: "number",
				length: null
			}
		},
		downFace: {
			nullable: false,
			isPk: false,
			description: "",
			name: "downFace",
			rawName: "DOWN_FACE",
			type: {
				name: "number",
				length: null
			}
		},
		upRefund: {
			nullable: false,
			isPk: false,
			description: "",
			name: "upRefund",
			rawName: "UP_REFUND",
			type: {
				name: "number",
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
		upDraw: {
			nullable: false,
			isPk: false,
			description: "",
			name: "upDraw",
			rawName: "UP_DRAW",
			type: {
				name: "number",
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
				length: null
			}
		}
	}
};

