exports.dkTradeDownSettle = {
	name: "dkTradeDownSettle",
	rawName: "DK_TRADE_DOWN_SETTLE",
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
		ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
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
		HAS_ADJUST: {
			nullable: "N",
			isPk: false,
			description: "是否红冲过",
			name: "hasAdjust",
			rawName: "HAS_ADJUST",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		ADD_TYPE: {
			nullable: "N",
			isPk: false,
			description: "变动类:11-结算+ 12-红冲- 21-代扣平帐加+  22-代扣平帐减-  31-退款平帐加+  32-退款平帐减- 41-余额平帐加+ 42-余额平帐减-",
			name: "addType",
			rawName: "ADD_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		CHANGE_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "变动金额,只有红冲的时候为负数",
			name: "changeAmount",
			rawName: "CHANGE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANGE_TIME: {
			nullable: "N",
			isPk: false,
			description: "变动时间",
			name: "changeTime",
			rawName: "CHANGE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		BALANCE: {
			nullable: "N",
			isPk: false,
			description: "余额",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CREATE_USER: {
			nullable: "Y",
			isPk: false,
			description: "创建人",
			name: "createUser",
			rawName: "CREATE_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		BANK_FUND_ID: {
			nullable: "Y",
			isPk: false,
			description: "银行资金变动编号(红冲时用)",
			name: "bankFundId",
			rawName: "BANK_FUND_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PARTNER_ACCOUNT: {
			nullable: "Y",
			isPk: false,
			description: "合作方银行账户",
			name: "partnerAccount",
			rawName: "PARTNER_ACCOUNT",
			type: {
				name: "VARCHAR2",
				length: ""
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
		},
		EXT_RECORD_NO: {
			nullable: "Y",
			isPk: false,
			description: "外部加款记录编号",
			name: "extRecordNo",
			rawName: "EXT_RECORD_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		SERVICE_ID: {
			nullable: "Y",
			isPk: false,
			description: "收取手续费的记录的编号(渠道手续费)",
			name: "serviceId",
			rawName: "SERVICE_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		REAL_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "交易平账真实金额",
			name: "realAmount",
			rawName: "REAL_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

