exports.fdTradeCoImpFund = {
	name: "fdTradeCoImpFund",
	rawName: "FD_TRADE_CO_IMP_FUND",
	columns: {
		CHANGE_ID: {
			nullable: "N",
			isPk: true,
			description: "变动编号",
			name: "changeId",
			rawName: "CHANGE_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "公司资产账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANGE_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "变动金额",
			name: "changeAmount",
			rawName: "CHANGE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANGE_TYPE: {
			nullable: "N",
			isPk: false,
			description: "变动类型1加款2减款3红冲（负值）",
			name: "changeType",
			rawName: "CHANGE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		USE_TYPE: {
			nullable: "N",
			isPk: false,
			description: "使用类型1.下游加款2.支付宝倒款3.财富通倒款99其他",
			name: "useType",
			rawName: "USE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		BALANCE: {
			nullable: "N",
			isPk: false,
			description: "账户余额",
			name: "balance",
			rawName: "BALANCE",
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
		BANK_BATCH_ID: {
			nullable: "Y",
			isPk: false,
			description: "实体卡变动批次号处理号（记录转账的出账、入账、手续费）",
			name: "bankBatchId",
			rawName: "BANK_BATCH_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PARTNER_ACCOUNT: {
			nullable: "Y",
			isPk: false,
			description: "倒款的来源账号或加款的渠道编号",
			name: "partnerAccount",
			rawName: "PARTNER_ACCOUNT",
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
		REMARK: {
			nullable: "Y",
			isPk: false,
			description: "备注",
			name: "remark",
			rawName: "REMARK",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

