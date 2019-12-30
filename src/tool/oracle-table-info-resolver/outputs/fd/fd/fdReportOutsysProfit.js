exports.fdReportOutsysProfit = {
	name: "fdReportOutsysProfit",
	rawName: "FD_REPORT_OUTSYS_PROFIT",
	columns: {
		RECORD_ID: {
			nullable: "N",
			isPk: false,
			description: "主键",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SOURCE_SYSTEM_ID: {
			nullable: "N",
			isPk: false,
			description: "外部系统编号",
			name: "sourceSystemId",
			rawName: "SOURCE_SYSTEM_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		RECORD_DATE: {
			nullable: "N",
			isPk: false,
			description: "记录时间",
			name: "recordDate",
			rawName: "RECORD_DATE",
			type: {
				name: "DATE",
				length: ""
			}
		},
		CREATE_TIME: {
			nullable: "N",
			isPk: false,
			description: "创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		PROFIT: {
			nullable: "N",
			isPk: false,
			description: "利润数据",
			name: "profit",
			rawName: "PROFIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

