exports.dkTradeUpSettle = {
	name: "dkTradeUpSettle",
	rawName: "DK_TRADE_UP_SETTLE",
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
			description: "红冲编号(如果add_type为3,该列不允许为空",
			name: "adjustId",
			rawName: "ADJUST_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		manualChangeType: {
			nullable: false,
			isPk: false,
			description: "变动类:11-结算+ 12-红冲-  21-代扣平帐加+  22-代扣平帐减- 31-退款平帐加+ 32-退款平帐减- 41-余额平帐加+  42-余额平帐减-",
			name: "manualChangeType",
			rawName: "MANUAL_CHANGE_TYPE",
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
		bankFundId: {
			nullable: true,
			isPk: false,
			description: "实体卡资金变动编号id,方便红冲",
			name: "bankFundId",
			rawName: "BANK_FUND_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		serviceId: {
			nullable: true,
			isPk: false,
			description: "收取手续费的记录的编号",
			name: "serviceId",
			rawName: "SERVICE_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		extRecordNo: {
			nullable: true,
			isPk: false,
			description: "上游加款外部订单号",
			name: "extRecordNo",
			rawName: "EXT_RECORD_NO",
			type: {
				name: "VARCHAR2",
				length: ""
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
		}
	}
};

