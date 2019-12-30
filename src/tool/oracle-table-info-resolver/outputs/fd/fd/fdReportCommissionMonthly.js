exports.fdReportCommissionMonthly = {
	name: "fdReportCommissionMonthly",
	rawName: "FD_REPORT_COMMISSION_MONTHLY",
	columns: {
		RECORD_ID: {
			nullable: "N",
			isPk: true,
			description: "主键",
			name: "recordId",
			rawName: "RECORD_ID",
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
		},
		CHANNEL_TYPE: {
			nullable: "N",
			isPk: false,
			description: "渠道类型1.上游2．下游",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		TOTAL_COMMISSION: {
			nullable: "N",
			isPk: false,
			description: "佣金",
			name: "totalCommission",
			rawName: "TOTAL_COMMISSION",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DRAW_COMMISSION: {
			nullable: "N",
			isPk: false,
			description: "提取或支付佣金",
			name: "drawCommission",
			rawName: "DRAW_COMMISSION",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SNAP_TIME: {
			nullable: "N",
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

