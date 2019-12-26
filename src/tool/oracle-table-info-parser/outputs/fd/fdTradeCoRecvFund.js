exports.fdTradeCoRecvFund = {
	name: "fdTradeCoRecvFund",
	rawName: "FD_TRADE_CO_RECV_FUND",
	columns: {
		changeId: {
			nullable: false,
			isPk: true,
			description: "变动编号",
			name: "changeId",
			rawName: "CHANGE_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		accountId: {
			nullable: false,
			isPk: false,
			description: "公司资金账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
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
		changeType: {
			nullable: false,
			isPk: false,
			description: "变动类型1加款2扣款3退款",
			name: "changeType",
			rawName: "CHANGE_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		balance: {
			nullable: false,
			isPk: false,
			description: "账户余额",
			name: "balance",
			rawName: "BALANCE",
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
		bankBatchId: {
			nullable: false,
			isPk: false,
			description: "实体卡变动批次号处理号（记录转账的出账、入账、手续费）",
			name: "bankBatchId",
			rawName: "BANK_BATCH_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		handleUser: {
			nullable: false,
			isPk: false,
			description: "操作人（结算加款时记录）",
			name: "handleUser",
			rawName: "HANDLE_USER",
			type: {
				name: "varchar2",
				length: null
			}
		},
		remark: {
			nullable: false,
			isPk: false,
			description: "备注",
			name: "remark",
			rawName: "REMARK",
			type: {
				name: "varchar2",
				length: null
			}
		}
	}
};

