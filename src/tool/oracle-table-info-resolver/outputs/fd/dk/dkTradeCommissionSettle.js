exports.dkTradeCommissionSettle = {
	name: "dkTradeCommissionSettle",
	rawName: "DK_TRADE_COMMISSION_SETTLE",
	columns: {
		reportId: {
			nullable: false,
			isPk: false,
			description: "主键",
			name: "reportId",
			rawName: "REPORT_ID",
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
			description: "渠道类型",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		commission: {
			nullable: false,
			isPk: false,
			description: "佣金",
			name: "commission",
			rawName: "COMMISSION",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		settleMonth: {
			nullable: false,
			isPk: false,
			description: "佣金的月份",
			name: "settleMonth",
			rawName: "SETTLE_MONTH",
			type: {
				name: "DATE",
				length: ""
			}
		},
		settleStatus: {
			nullable: false,
			isPk: false,
			description: "结算状态",
			name: "settleStatus",
			rawName: "SETTLE_STATUS",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		settleUser: {
			nullable: true,
			isPk: false,
			description: "结算人",
			name: "settleUser",
			rawName: "SETTLE_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		settleTime: {
			nullable: true,
			isPk: false,
			description: "结算时间",
			name: "settleTime",
			rawName: "SETTLE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		hasAdjust: {
			nullable: false,
			isPk: false,
			description: "是否红冲过",
			name: "hasAdjust",
			rawName: "HAS_ADJUST",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		adjustId: {
			nullable: false,
			isPk: false,
			description: "红冲编号",
			name: "adjustId",
			rawName: "ADJUST_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		bankBatchId: {
			nullable: true,
			isPk: false,
			description: "红冲对应实体卡变动记录编号",
			name: "bankBatchId",
			rawName: "BANK_BATCH_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		settleType: {
			nullable: false,
			isPk: false,
			description: "结算类型：1佣金结算，2转渠道余额  3.佣金加款",
			name: "settleType",
			rawName: "SETTLE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		commiBalance: {
			nullable: false,
			isPk: false,
			description: "佣金余额",
			name: "commiBalance",
			rawName: "COMMI_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		memo: {
			nullable: true,
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

