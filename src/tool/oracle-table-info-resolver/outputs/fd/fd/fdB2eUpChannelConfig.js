exports.fdB2eUpChannelConfig = {
	name: "fdB2eUpChannelConfig",
	rawName: "FD_B2E_UP_CHANNEL_CONFIG",
	columns: {
		typeId: {
			nullable: false,
			isPk: false,
			description: "规则编号",
			name: "typeId",
			rawName: "TYPE_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		dateRangeType: {
			nullable: false,
			isPk: false,
			description: "时间范围类型0.高峰期，1正常时期",
			name: "dateRangeType",
			rawName: "DATE_RANGE_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		upChannelNo: {
			nullable: false,
			isPk: false,
			description: "上游渠道",
			name: "upChannelNo",
			rawName: "UP_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		amountCalcType: {
			nullable: false,
			isPk: false,
			description: "转账计算方法",
			name: "amountCalcType",
			rawName: "AMOUNT_CALC_TYPE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		calcTypeMemo: {
			nullable: true,
			isPk: false,
			description: "方法备注",
			name: "calcTypeMemo",
			rawName: "CALC_TYPE_MEMO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		warnBalance: {
			nullable: false,
			isPk: false,
			description: "预警余额",
			name: "warnBalance",
			rawName: "WARN_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		maxChannelBalance: {
			nullable: false,
			isPk: false,
			description: "最大渠道余额(加款后余额不能超过此余额)",
			name: "maxChannelBalance",
			rawName: "MAX_CHANNEL_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		minAddAmount: {
			nullable: false,
			isPk: false,
			description: "最小加款金额",
			name: "minAddAmount",
			rawName: "MIN_ADD_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		maxDayAddAmount: {
			nullable: false,
			isPk: false,
			description: "最大单日加款金额",
			name: "maxDayAddAmount",
			rawName: "MAX_DAY_ADD_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		addDurationHour: {
			nullable: false,
			isPk: false,
			description: "加款金额能持续扣款的小时数",
			name: "addDurationHour",
			rawName: "ADD_DURATION_HOUR",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		auditStatus: {
			nullable: false,
			isPk: false,
			description: "审核状态",
			name: "auditStatus",
			rawName: "AUDIT_STATUS",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		channelAccountId: {
			nullable: false,
			isPk: false,
			description: "渠道账户",
			name: "channelAccountId",
			rawName: "CHANNEL_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

