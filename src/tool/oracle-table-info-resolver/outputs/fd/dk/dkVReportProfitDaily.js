exports.dkVReportProfitDaily = {
	name: "dkVReportProfitDaily",
	rawName: "DK_V_REPORT_PROFIT_DAILY",
	columns: {
		DOWN_FACE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "downFace",
			rawName: "DOWN_FACE",
			type: {
				name: "NUMBER",
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
				length: ""
			}
		},
		PROFIT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "profit",
			rawName: "PROFIT",
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
		SYS_COST: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "sysCost",
			rawName: "SYS_COST",
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
		UP_DRAW: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "upDraw",
			rawName: "UP_DRAW",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		UP_REFUND: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "upRefund",
			rawName: "UP_REFUND",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		PLAT_SERVICE_FEE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "platServiceFee",
			rawName: "PLAT_SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		DOWN_DRAW: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "downDraw",
			rawName: "DOWN_DRAW",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		DOWN_REFUND: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "downRefund",
			rawName: "DOWN_REFUND",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		LAST_PROFIT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "lastProfit",
			rawName: "LAST_PROFIT",
			type: {
				name: "NUMBER",
				length: ""
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
				length: ""
			}
		}
	}
};

