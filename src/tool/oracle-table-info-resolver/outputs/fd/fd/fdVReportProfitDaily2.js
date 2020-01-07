exports.fdVReportProfitDaily2 = {
	name: "fdVReportProfitDaily2",
	rawName: "FD_V_REPORT_PROFIT_DAILY2",
	columns: {
		platServiceFee: {
			nullable: true,
			isPk: false,
			description: "",
			name: "platServiceFee",
			rawName: "PLAT_SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		upRefund: {
			nullable: true,
			isPk: false,
			description: "",
			name: "upRefund",
			rawName: "UP_REFUND",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		downRefund: {
			nullable: true,
			isPk: false,
			description: "",
			name: "downRefund",
			rawName: "DOWN_REFUND",
			type: {
				name: "NUMBER",
				length: ""
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
		profit: {
			nullable: true,
			isPk: false,
			description: "",
			name: "profit",
			rawName: "PROFIT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		downFace: {
			nullable: true,
			isPk: false,
			description: "",
			name: "downFace",
			rawName: "DOWN_FACE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		downDraw: {
			nullable: true,
			isPk: false,
			description: "",
			name: "downDraw",
			rawName: "DOWN_DRAW",
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
		lastProfit: {
			nullable: true,
			isPk: false,
			description: "",
			name: "lastProfit",
			rawName: "LAST_PROFIT",
			type: {
				name: "NUMBER",
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
				length: ""
			}
		},
		upDraw: {
			nullable: true,
			isPk: false,
			description: "",
			name: "upDraw",
			rawName: "UP_DRAW",
			type: {
				name: "NUMBER",
				length: ""
			}
		}
	}
};

