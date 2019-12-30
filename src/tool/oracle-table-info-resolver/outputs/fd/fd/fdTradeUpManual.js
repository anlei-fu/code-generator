exports.fdTradeUpManual = {
	name: "fdTradeUpManual",
	rawName: "FD_TRADE_UP_MANUAL",
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
			description: "红冲编号(如果add_type为3,该列不允许为空)",
			name: "adjustId",
			rawName: "ADJUST_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		MANUAL_CHANGE_TYPE: {
			nullable: "N",
			isPk: false,
			description: "变动类:11-加款+ 12-红冲-  21-扣款平帐加+  22-扣款平帐减-   31-退款平帐加+  32-退款平帐减- 41-余额平帐加+  42-余额平帐减-",
			name: "manualChangeType",
			rawName: "MANUAL_CHANGE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
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
		BANK_FUND_ID: {
			nullable: "Y",
			isPk: false,
			description: "实体卡资金变动编号id,方便红冲",
			name: "bankFundId",
			rawName: "BANK_FUND_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SERVICE_ID: {
			nullable: "Y",
			isPk: false,
			description: "收取手续费的记录的编号",
			name: "serviceId",
			rawName: "SERVICE_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		EXT_RECORD_NO: {
			nullable: "Y",
			isPk: false,
			description: "上游加款外部订单号",
			name: "extRecordNo",
			rawName: "EXT_RECORD_NO",
			type: {
				name: "VARCHAR2",
				length: ""
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
		UP_SYNC_ADD_NO: {
			nullable: "Y",
			isPk: false,
			description: "上游同步加款加款记录编号",
			name: "upSyncAddNo",
			rawName: "UP_SYNC_ADD_NO",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

