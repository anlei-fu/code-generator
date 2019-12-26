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
				name: "number",
				length: 20
			}
		},
		rvAmount: {
			nullable: false,
			isPk: false,
			description: "",
			name: "rvAmount",
			rawName: "RV_AMOUNT",
			type: {
				name: "number",
				length: null
			}
		},
		recordDate: {
			nullable: false,
			isPk: false,
			description: "",
			name: "recordDate",
			rawName: "RECORD_DATE",
			type: {
				name: "date",
				length: null
			}
		},
		systemName: {
			nullable: false,
			isPk: false,
			description: "",
			name: "systemName",
			rawName: "SYSTEM_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		profitDiffer: {
			nullable: false,
			isPk: false,
			description: "",
			name: "profitDiffer",
			rawName: "PROFIT_DIFFER",
			type: {
				name: "number",
				length: null
			}
		},
		jzProfit: {
			nullable: false,
			isPk: false,
			description: "",
			name: "jzProfit",
			rawName: "JZ_PROFIT",
			type: {
				name: "number",
				length: null
			}
		},
		outProfit: {
			nullable: false,
			isPk: false,
			description: "",
			name: "outProfit",
			rawName: "OUT_PROFIT",
			type: {
				name: "number",
				length: 20
			}
		}
	}
};

