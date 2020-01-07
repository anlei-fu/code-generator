exports.fdReportAddWarn = {
	name: "fdReportAddWarn",
	rawName: "FD_REPORT_ADD_WARN",
	columns: {
		id: {
			nullable: false,
			isPk: false,
			description: "编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		warnDate: {
			nullable: false,
			isPk: false,
			description: "报警时间",
			name: "warnDate",
			rawName: "WARN_DATE",
			type: {
				name: "DATE",
				length: ""
			}
		},
		channelName: {
			nullable: false,
			isPk: false,
			description: "渠道名称",
			name: "channelName",
			rawName: "CHANNEL_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		eightBalance: {
			nullable: false,
			isPk: false,
			description: "八点余额",
			name: "eightBalance",
			rawName: "EIGHT_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		yesterdayAdd: {
			nullable: false,
			isPk: false,
			description: "昨日加款",
			name: "yesterdayAdd",
			rawName: "YESTERDAY_ADD",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		balanceRatio: {
			nullable: false,
			isPk: false,
			description: "余额占比",
			name: "balanceRatio",
			rawName: "BALANCE_RATIO",
			type: {
				name: "NUMBER",
				length: "20"
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
		}
	}
};

