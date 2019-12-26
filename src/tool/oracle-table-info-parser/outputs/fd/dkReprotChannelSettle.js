exports.dkReprotChannelSettle = {
	name: "dkReprotChannelSettle",
	rawName: "DK_REPROT_CHANNEL_SETTLE",
	columns: {
		id: {
			nullable: false,
			isPk: false,
			description: "记录编号",
			name: "id",
			rawName: "ID",
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
		},
		channelType: {
			nullable: false,
			isPk: false,
			description: "渠道类型，1上游渠道，2下游渠道",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "number",
				length: 1
			}
		},
		settleDataTime: {
			nullable: false,
			isPk: false,
			description: "结算数据日期",
			name: "settleDataTime",
			rawName: "SETTLE_DATA_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		settleBatchId: {
			nullable: false,
			isPk: false,
			description: "结算批次号",
			name: "settleBatchId",
			rawName: "SETTLE_BATCH_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		settleAmount: {
			nullable: false,
			isPk: false,
			description: "结算金额",
			name: "settleAmount",
			rawName: "SETTLE_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		settleStatus: {
			nullable: false,
			isPk: false,
			description: "结算状态，0完成，1等待，2正在，9无需结算",
			name: "settleStatus",
			rawName: "SETTLE_STATUS",
			type: {
				name: "number",
				length: 1
			}
		},
		settleDealId: {
			nullable: false,
			isPk: false,
			description: "结算处理编号，红冲用",
			name: "settleDealId",
			rawName: "SETTLE_DEAL_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		settleUser: {
			nullable: false,
			isPk: false,
			description: "结算人",
			name: "settleUser",
			rawName: "SETTLE_USER",
			type: {
				name: "varchar2",
				length: null
			}
		},
		settleTime: {
			nullable: false,
			isPk: false,
			description: "结算时间",
			name: "settleTime",
			rawName: "SETTLE_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		settleMemo: {
			nullable: false,
			isPk: false,
			description: "结算备注",
			name: "settleMemo",
			rawName: "SETTLE_MEMO",
			type: {
				name: "varchar2",
				length: null
			}
		}
	}
};

