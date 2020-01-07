exports.fdReportOutsysProfit = {
	name: "fdReportOutsysProfit",
	rawName: "FD_REPORT_OUTSYS_PROFIT",
	columns: {
		recordId: {
			nullable: false,
			isPk: false,
			description: "主键",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		sourceSystemId: {
			nullable: false,
			isPk: false,
			description: "外部系统编号",
			name: "sourceSystemId",
			rawName: "SOURCE_SYSTEM_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		recordDate: {
			nullable: false,
			isPk: false,
			description: "记录时间",
			name: "recordDate",
			rawName: "RECORD_DATE",
			type: {
				name: "DATE",
				length: ""
			}
		},
		createTime: {
			nullable: false,
			isPk: false,
			description: "创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		profit: {
			nullable: false,
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

