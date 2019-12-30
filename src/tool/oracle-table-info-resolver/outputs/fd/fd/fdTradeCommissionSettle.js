exports.fdTradeCommissionSettle = {
	name: "fdTradeCommissionSettle",
	rawName: "FD_TRADE_COMMISSION_SETTLE",
	columns: {
		REPORT_ID: {
			nullable: "N",
			isPk: false,
			description: "主键",
			name: "reportId",
			rawName: "REPORT_ID",
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
			description: "渠道类型",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		COMMISSION: {
			nullable: "N",
			isPk: false,
			description: "佣金",
			name: "commission",
			rawName: "COMMISSION",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SETTLE_MONTH: {
			nullable: "N",
			isPk: false,
			description: "佣金的月份",
			name: "settleMonth",
			rawName: "SETTLE_MONTH",
			type: {
				name: "DATE",
				length: ""
			}
		},
		SETTLE_STATUS: {
			nullable: "N",
			isPk: false,
			description: "结算状态",
			name: "settleStatus",
			rawName: "SETTLE_STATUS",
			type: {
				name: "NUMBER",
				length: "3"
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
		HAS_ADJUST: {
			nullable: "N",
			isPk: false,
			description: "是否红冲过",
			name: "hasAdjust",
			rawName: "HAS_ADJUST",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		ADJUST_ID: {
			nullable: "N",
			isPk: false,
			description: "红冲编号",
			name: "adjustId",
			rawName: "ADJUST_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		BANK_BATCH_ID: {
			nullable: "Y",
			isPk: false,
			description: "红冲对应实体卡变动记录编号",
			name: "bankBatchId",
			rawName: "BANK_BATCH_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SETTLE_TYPE: {
			nullable: "N",
			isPk: false,
			description: "结算类型：1佣金结算，2转渠道余额  3.佣金加款",
			name: "settleType",
			rawName: "SETTLE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		COMMI_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "佣金余额",
			name: "commiBalance",
			rawName: "COMMI_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		MEMO: {
			nullable: "Y",
			isPk: false,
			description: "备注",
			name: "memo",
			rawName: "MEMO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

