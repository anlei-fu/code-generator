exports.fdTradeDownManualYc = {
	name: "fdTradeDownManualYc",
	rawName: "FD_TRADE_DOWN_MANUAL_YC",
	columns: {
		recordId: {
			nullable: false,
			isPk: false,
			description: "主键",
			name: "recordId",
			rawName: "RECORD_ID",
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
		accountId: {
			nullable: false,
			isPk: false,
			description: "账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
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
		hasAdjust: {
			nullable: false,
			isPk: false,
			description: "是否红冲过",
			name: "hasAdjust",
			rawName: "HAS_ADJUST",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		addType: {
			nullable: false,
			isPk: false,
			description: "变动类:11-加款+ 12-红冲-  21-扣款平帐加+  22-扣款平帐减-  31-退款平帐加+  32-退款平帐减- 41-余额平帐加+ 42-余额平帐减-",
			name: "addType",
			rawName: "ADD_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		changeAmount: {
			nullable: false,
			isPk: false,
			description: "变动金额,只有红冲的时候为负数",
			name: "changeAmount",
			rawName: "CHANGE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		changeTime: {
			nullable: false,
			isPk: false,
			description: "变动时间",
			name: "changeTime",
			rawName: "CHANGE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		balance: {
			nullable: false,
			isPk: false,
			description: "余额",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		createUser: {
			nullable: true,
			isPk: false,
			description: "创建人",
			name: "createUser",
			rawName: "CREATE_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		bankFundId: {
			nullable: true,
			isPk: false,
			description: "银行资金变动编号(红冲时用)",
			name: "bankFundId",
			rawName: "BANK_FUND_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		partnerAccount: {
			nullable: true,
			isPk: false,
			description: "合作方银行账户",
			name: "partnerAccount",
			rawName: "PARTNER_ACCOUNT",
			type: {
				name: "VARCHAR2",
				length: ""
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
		},
		extRecordNo: {
			nullable: true,
			isPk: false,
			description: "外部加款记录编号",
			name: "extRecordNo",
			rawName: "EXT_RECORD_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		serviceId: {
			nullable: true,
			isPk: false,
			description: "收取手续费的记录的编号(渠道手续费)",
			name: "serviceId",
			rawName: "SERVICE_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		realAmount: {
			nullable: true,
			isPk: false,
			description: "交易平账真实金额",
			name: "realAmount",
			rawName: "REAL_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		businessType: {
			nullable: true,
			isPk: false,
			description: "云充记录业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		billType: {
			nullable: true,
			isPk: false,
			description: "云充记录开票类型",
			name: "billType",
			rawName: "BILL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		dealStatus: {
			nullable: true,
			isPk: false,
			description: "合并平账状态，0已处理，1未处理，2正在处理",
			name: "dealStatus",
			rawName: "DEAL_STATUS",
			type: {
				name: "NUMBER",
				length: "3"
			}
		}
	}
};

