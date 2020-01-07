exports.fdTradeCoCapFund = {
	name: "fdTradeCoCapFund",
	rawName: "FD_TRADE_CO_CAP_FUND",
	columns: {
		changeId: {
			nullable: false,
			isPk: true,
			description: "变动编号",
			name: "changeId",
			rawName: "CHANGE_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		accountId: {
			nullable: false,
			isPk: false,
			description: "公司资产账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		changeAmount: {
			nullable: false,
			isPk: false,
			description: "变动金额",
			name: "changeAmount",
			rawName: "CHANGE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		changeType: {
			nullable: false,
			isPk: false,
			description: "变动类型1加款2减款3红冲（负值）",
			name: "changeType",
			rawName: "CHANGE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		balance: {
			nullable: false,
			isPk: false,
			description: "账户余额",
			name: "balance",
			rawName: "BALANCE",
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
		bankBatchId: {
			nullable: true,
			isPk: false,
			description: "实体卡变动批次号处理号（记录转账的出账、入账、手续费）",
			name: "bankBatchId",
			rawName: "BANK_BATCH_ID",
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
		recordNo: {
			nullable: false,
			isPk: false,
			description: "预付款同步编号,转账退款18退款编号",
			name: "recordNo",
			rawName: "RECORD_NO",
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
		fdOrderId: {
			nullable: true,
			isPk: false,
			description: "转账退款订单号",
			name: "fdOrderId",
			rawName: "FD_ORDER_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		transferRefundId: {
			nullable: true,
			isPk: false,
			description: "转账退款退款编号",
			name: "transferRefundId",
			rawName: "TRANSFER_REFUND_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		transferDrawId: {
			nullable: true,
			isPk: false,
			description: "转账退款退款提款编号",
			name: "transferDrawId",
			rawName: "TRANSFER_DRAW_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

