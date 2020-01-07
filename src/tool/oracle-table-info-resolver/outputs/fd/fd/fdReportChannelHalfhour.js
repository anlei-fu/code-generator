exports.fdReportChannelHalfhour = {
	name: "fdReportChannelHalfhour",
	rawName: "FD_REPORT_CHANNEL_HALFHOUR",
	columns: {
		recordId: {
			nullable: false,
			isPk: true,
			description: "记录编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		channelType: {
			nullable: false,
			isPk: false,
			description: "渠道类型（1.上游，2下游）",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
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
		orderSource: {
			nullable: false,
			isPk: false,
			description: "系统编号",
			name: "orderSource",
			rawName: "ORDER_SOURCE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		tradeCount: {
			nullable: false,
			isPk: false,
			description: "交易条数",
			name: "tradeCount",
			rawName: "TRADE_COUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		tradeAmount: {
			nullable: false,
			isPk: false,
			description: "交易金额",
			name: "tradeAmount",
			rawName: "TRADE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		collectTime: {
			nullable: false,
			isPk: false,
			description: "半小时统计开始时间",
			name: "collectTime",
			rawName: "COLLECT_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	}
};

