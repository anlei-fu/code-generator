exports.fdReportAddWarn = {
	name: "fdReportAddWarn",
	rawName: "FD_REPORT_ADD_WARN",
	columns: {
		ID: {
			nullable: "N",
			isPk: false,
			description: "编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		WARN_DATE: {
			nullable: "N",
			isPk: false,
			description: "报警时间",
			name: "warnDate",
			rawName: "WARN_DATE",
			type: {
				name: "DATE",
				length: ""
			}
		},
		CHANNEL_NAME: {
			nullable: "N",
			isPk: false,
			description: "渠道名称",
			name: "channelName",
			rawName: "CHANNEL_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		EIGHT_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "八点余额",
			name: "eightBalance",
			rawName: "EIGHT_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		YESTERDAY_ADD: {
			nullable: "N",
			isPk: false,
			description: "昨日加款",
			name: "yesterdayAdd",
			rawName: "YESTERDAY_ADD",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		BALANCE_RATIO: {
			nullable: "N",
			isPk: false,
			description: "余额占比",
			name: "balanceRatio",
			rawName: "BALANCE_RATIO",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANNEL_NO: {
			nullable: "N",
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

