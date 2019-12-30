exports.fdReportServiceFee = {
	name: "fdReportServiceFee",
	rawName: "FD_REPORT_SERVICE_FEE",
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
		REPORT_MONTH: {
			nullable: "N",
			isPk: false,
			description: "手续费月份",
			name: "reportMonth",
			rawName: "REPORT_MONTH",
			type: {
				name: "DATE",
				length: ""
			}
		},
		COMPANY_ID: {
			nullable: "N",
			isPk: false,
			description: "公司编号",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "下游渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		SERVICE_FEE: {
			nullable: "N",
			isPk: false,
			description: "手续费",
			name: "serviceFee",
			rawName: "SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		LAST_MONTH: {
			nullable: "Y",
			isPk: false,
			description: "补录月份",
			name: "lastMonth",
			rawName: "LAST_MONTH",
			type: {
				name: "DATE",
				length: ""
			}
		},
		LAST_MSG: {
			nullable: "Y",
			isPk: false,
			description: "补录说明",
			name: "lastMsg",
			rawName: "LAST_MSG",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		LAST_SERVICE_FEE: {
			nullable: "N",
			isPk: false,
			description: "补录金额",
			name: "lastServiceFee",
			rawName: "LAST_SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

