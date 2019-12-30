exports.dkReprotChannelSettle = {
	name: "dkReprotChannelSettle",
	rawName: "DK_REPROT_CHANNEL_SETTLE",
	columns: {
		ID: {
			nullable: "N",
			isPk: false,
			description: "记录编号",
			name: "id",
			rawName: "ID",
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
			description: "渠道类型，1上游渠道，2下游渠道",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		SETTLE_DATA_TIME: {
			nullable: "N",
			isPk: false,
			description: "结算数据日期",
			name: "settleDataTime",
			rawName: "SETTLE_DATA_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		SETTLE_BATCH_ID: {
			nullable: "N",
			isPk: false,
			description: "结算批次号",
			name: "settleBatchId",
			rawName: "SETTLE_BATCH_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SETTLE_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "结算金额",
			name: "settleAmount",
			rawName: "SETTLE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SETTLE_STATUS: {
			nullable: "N",
			isPk: false,
			description: "结算状态，0完成，1等待，2正在，9无需结算",
			name: "settleStatus",
			rawName: "SETTLE_STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		SETTLE_DEAL_ID: {
			nullable: "N",
			isPk: false,
			description: "结算处理编号，红冲用",
			name: "settleDealId",
			rawName: "SETTLE_DEAL_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SETTLE_USER: {
			nullable: "Y",
			isPk: false,
			description: "结算人",
			name: "settleUser",
			rawName: "SETTLE_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		SETTLE_TIME: {
			nullable: "Y",
			isPk: false,
			description: "结算时间",
			name: "settleTime",
			rawName: "SETTLE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		SETTLE_MEMO: {
			nullable: "Y",
			isPk: false,
			description: "结算备注",
			name: "settleMemo",
			rawName: "SETTLE_MEMO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

