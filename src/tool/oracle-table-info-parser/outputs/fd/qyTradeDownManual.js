exports.qyTradeDownManual = {
	name: "qyTradeDownManual",
	rawName: "QY_TRADE_DOWN_MANUAL",
	columns: {
		recordId: {
			nullable: false,
			isPk: false,
			description: "编号",
			name: "recordId",
			rawName: "RECORD_ID",
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
		accountId: {
			nullable: false,
			isPk: false,
			description: "账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "number",
				length: 30
			}
		},
		adjustId: {
			nullable: false,
			isPk: false,
			description: "红冲编号",
			name: "adjustId",
			rawName: "ADJUST_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		hasAdjust: {
			nullable: false,
			isPk: false,
			description: "是否红冲过",
			name: "hasAdjust",
			rawName: "HAS_ADJUST",
			type: {
				name: "number",
				length: 1
			}
		},
		addType: {
			nullable: false,
			isPk: false,
			description: "变动类型:10-加款11-提款12-红冲21-余额平帐22-交易平帐",
			name: "addType",
			rawName: "ADD_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		changeAmount: {
			nullable: false,
			isPk: false,
			description: "变动金额",
			name: "changeAmount",
			rawName: "CHANGE_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		realAmount: {
			nullable: false,
			isPk: false,
			description: "交易平账真实金额",
			name: "realAmount",
			rawName: "REAL_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		changeTime: {
			nullable: false,
			isPk: false,
			description: "变动时间",
			name: "changeTime",
			rawName: "CHANGE_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		balance: {
			nullable: false,
			isPk: false,
			description: "余额",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		createUser: {
			nullable: false,
			isPk: false,
			description: "创建人",
			name: "createUser",
			rawName: "CREATE_USER",
			type: {
				name: "varchar2",
				length: null
			}
		},
		bankFundId: {
			nullable: false,
			isPk: false,
			description: "银行资金变动编号（红冲是使用）",
			name: "bankFundId",
			rawName: "BANK_FUND_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		memo: {
			nullable: false,
			isPk: false,
			description: "备注",
			name: "memo",
			rawName: "MEMO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		extRecordNo: {
			nullable: false,
			isPk: false,
			description: "外部加款记录编号",
			name: "extRecordNo",
			rawName: "EXT_RECORD_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		handlingFeeId: {
			nullable: false,
			isPk: false,
			description: "收取手续费的记录编号",
			name: "handlingFeeId",
			rawName: "HANDLING_FEE_ID",
			type: {
				name: "number",
				length: 20
			}
		}
	}
};

