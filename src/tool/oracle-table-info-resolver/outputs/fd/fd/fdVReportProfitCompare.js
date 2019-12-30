exports.fdVReportProfitCompare = {
	name: "fdVReportProfitCompare",
	rawName: "FD_V_REPORT_PROFIT_COMPARE",
	columns: {
		SOURCE_SYSTEM_ID: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "sourceSystemId",
			rawName: "SOURCE_SYSTEM_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		RV_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "rvAmount",
			rawName: "RV_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		RECORD_DATE: {
			nullable: "N",
			isPk: false,
			description: "",
			name: "recordDate",
			rawName: "RECORD_DATE",
			type: {
				name: "DATE",
				length: ""
			}
		},
		SYSTEM_NAME: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "systemName",
			rawName: "SYSTEM_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PROFIT_DIFFER: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "profitDiffer",
			rawName: "PROFIT_DIFFER",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		JZ_PROFIT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "jzProfit",
			rawName: "JZ_PROFIT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		OUT_PROFIT: {
			nullable: "N",
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

