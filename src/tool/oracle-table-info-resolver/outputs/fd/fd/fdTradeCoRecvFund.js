exports.fdTradeCoRecvFund = {
	name: "fdTradeCoRecvFund",
	rawName: "FD_TRADE_CO_RECV_FUND",
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
			description: "公司资金账户编号",
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
			description: "变动类型1加款2扣款3退款",
			name: "changeType",
			rawName: "CHANGE_TYPE",
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
			description: "实体卡变动批次号处理号（记录转账的出账、入账、手续费）",
			name: "bankBatchId",
			rawName: "BANK_BATCH_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		HANDLE_USER: {
			nullable: "Y",
			isPk: false,
			description: "操作人（结算加款时记录）",
			name: "handleUser",
			rawName: "HANDLE_USER",
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

