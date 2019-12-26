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
				name: "number",
				length: 20
			}
		},
		warnDate: {
			nullable: false,
			isPk: false,
			description: "报警时间",
			name: "warnDate",
			rawName: "WARN_DATE",
			type: {
				name: "date",
				length: null
			}
		},
		channelName: {
			nullable: false,
			isPk: false,
			description: "渠道名称",
			name: "channelName",
			rawName: "CHANNEL_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		eightBalance: {
			nullable: false,
			isPk: false,
			description: "八点余额",
			name: "eightBalance",
			rawName: "EIGHT_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		yesterdayAdd: {
			nullable: false,
			isPk: false,
			description: "昨日加款",
			name: "yesterdayAdd",
			rawName: "YESTERDAY_ADD",
			type: {
				name: "number",
				length: 20
			}
		},
		balanceRatio: {
			nullable: false,
			isPk: false,
			description: "余额占比",
			name: "balanceRatio",
			rawName: "BALANCE_RATIO",
			type: {
				name: "number",
				length: 20
			}
		},
		channelNo: {
			nullable: false,
			isPk: false,
			description: "渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		}
	}
};

