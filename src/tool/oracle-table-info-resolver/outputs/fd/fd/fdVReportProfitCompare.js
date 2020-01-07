exports.fdVReportProfitCompare = {
	name: "fdVReportProfitCompare",
	rawName: "FD_V_REPORT_PROFIT_COMPARE",
	columns: {
		sourceSystemId: {
			nullable: false,
			isPk: false,
			description: "",
			name: "sourceSystemId",
			rawName: "SOURCE_SYSTEM_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		rvAmount: {
			nullable: true,
			isPk: false,
			description: "",
			name: "rvAmount",
			rawName: "RV_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		recordDate: {
			nullable: false,
			isPk: false,
			description: "",
			name: "recordDate",
			rawName: "RECORD_DATE",
			type: {
				name: "DATE",
				length: ""
			}
		},
		systemName: {
			nullable: true,
			isPk: false,
			description: "",
			name: "systemName",
			rawName: "SYSTEM_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		profitDiffer: {
			nullable: true,
			isPk: false,
			description: "",
			name: "profitDiffer",
			rawName: "PROFIT_DIFFER",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		jzProfit: {
			nullable: true,
			isPk: false,
			description: "",
			name: "jzProfit",
			rawName: "JZ_PROFIT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		outProfit: {
			nullable: false,
			isPk: false,
			description: "",
			name: "outProfit",
			rawName: "OUT_PROFIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

