exports.supTradeDownManual = {
	name: "supTradeDownManual",
	rawName: "SUP_TRADE_DOWN_MANUAL",
	columns: {
		recordId: {
			nullable: false,
			isPk: false,
			description: "记录编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		downChannelNo: {
			nullable: false,
			isPk: false,
			description: "下游渠道编号",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		downAccountId: {
			nullable: false,
			isPk: false,
			description: "下游账户编号",
			name: "downAccountId",
			rawName: "DOWN_ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		hasAdjust: {
			nullable: false,
			isPk: false,
			description: "是否已红冲过",
			name: "hasAdjust",
			rawName: "HAS_ADJUST",
			type: {
				name: "number",
				length: 3
			}
		},
		adjustRecordId: {
			nullable: false,
			isPk: false,
			description: "红冲的记录编号",
			name: "adjustRecordId",
			rawName: "ADJUST_RECORD_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		changeType: {
			nullable: false,
			isPk: false,
			description: "变动类型（加款、加款红冲、提款、提款红冲，余额平账、交易平账）",
			name: "changeType",
			rawName: "CHANGE_TYPE",
			type: {
				name: "number",
				length: 3
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
		bankCardNo: {
			nullable: false,
			isPk: false,
			description: "加款/提款对应银行账户",
			name: "bankCardNo",
			rawName: "BANK_CARD_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		bankRecordId: {
			nullable: false,
			isPk: false,
			description: "加款/提款银行资金变动编号",
			name: "bankRecordId",
			rawName: "BANK_RECORD_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		bankServiceId: {
			nullable: false,
			isPk: false,
			description: "提款银行收取手续费编号",
			name: "bankServiceId",
			rawName: "BANK_SERVICE_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		bankRelateId: {
			nullable: false,
			isPk: false,
			description: "可红冲记录和银行相关记录关联编号",
			name: "bankRelateId",
			rawName: "BANK_RELATE_ID",
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
		createdBy: {
			nullable: false,
			isPk: false,
			description: "创建人",
			name: "createdBy",
			rawName: "CREATED_BY",
			type: {
				name: "varchar2",
				length: null
			}
		}
	}
};

