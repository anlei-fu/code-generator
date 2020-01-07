exports.fdReportCommissionMonthly = {
	name: "fdReportCommissionMonthly",
	rawName: "FD_REPORT_COMMISSION_MONTHLY",
	columns: {
		recordId: {
			nullable: false,
			isPk: true,
			description: "主键",
			name: "recordId",
			rawName: "RECORD_ID",
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
		},
		channelType: {
			nullable: false,
			isPk: false,
			description: "渠道类型1.上游2．下游",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		totalCommission: {
			nullable: false,
			isPk: false,
			description: "佣金",
			name: "totalCommission",
			rawName: "TOTAL_COMMISSION",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		drawCommission: {
			nullable: false,
			isPk: false,
			description: "提取或支付佣金",
			name: "drawCommission",
			rawName: "DRAW_COMMISSION",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		snapTime: {
			nullable: false,
			isPk: false,
			description: "月份",
			name: "snapTime",
			rawName: "SNAP_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	}
};

