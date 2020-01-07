exports.yxReportFundDaily = {
	name: "yxReportFundDaily",
	rawName: "YX_REPORT_FUND_DAILY",
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
		reportTime: {
			nullable: false,
			isPk: false,
			description: "报表时间",
			name: "reportTime",
			rawName: "REPORT_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		channelType: {
			nullable: false,
			isPk: false,
			description: "渠道类:1上游渠道,2下游渠道,3代理商",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		channelNo: {
			nullable: false,
			isPk: false,
			description: "渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		changeType: {
			nullable: false,
			isPk: false,
			description: "变更类型:加款,2：交易扣款,3：交易退款,4：提款,:服务费转余额,:服务费结算,1:发行加款,12：发行扣款，13：发行退款",
			name: "changeType",
			rawName: "CHANGE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		dailySumAmount: {
			nullable: false,
			isPk: false,
			description: "变动金额合计",
			name: "dailySumAmount",
			rawName: "DAILY_SUM_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		businessType: {
			nullable: false,
			isPk: false,
			description: "业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		companyId: {
			nullable: false,
			isPk: false,
			description: "公司编号",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

