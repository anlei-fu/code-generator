exports.fdReportServiceFee = {
	name: "fdReportServiceFee",
	rawName: "FD_REPORT_SERVICE_FEE",
	columns: {
		recordId: {
			nullable: false,
			isPk: false,
			description: "主键",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		reportMonth: {
			nullable: false,
			isPk: false,
			description: "手续费月份",
			name: "reportMonth",
			rawName: "REPORT_MONTH",
			type: {
				name: "date",
				length: null
			}
		},
		companyId: {
			nullable: false,
			isPk: false,
			description: "公司编号",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		channelNo: {
			nullable: false,
			isPk: false,
			description: "下游渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		serviceFee: {
			nullable: false,
			isPk: false,
			description: "手续费",
			name: "serviceFee",
			rawName: "SERVICE_FEE",
			type: {
				name: "number",
				length: 20
			}
		},
		lastMonth: {
			nullable: false,
			isPk: false,
			description: "补录月份",
			name: "lastMonth",
			rawName: "LAST_MONTH",
			type: {
				name: "date",
				length: null
			}
		},
		lastMsg: {
			nullable: false,
			isPk: false,
			description: "补录说明",
			name: "lastMsg",
			rawName: "LAST_MSG",
			type: {
				name: "varchar2",
				length: null
			}
		},
		lastServiceFee: {
			nullable: false,
			isPk: false,
			description: "补录金额",
			name: "lastServiceFee",
			rawName: "LAST_SERVICE_FEE",
			type: {
				name: "number",
				length: 20
			}
		}
	}
};

