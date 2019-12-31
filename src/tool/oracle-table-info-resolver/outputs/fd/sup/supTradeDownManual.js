exports.supTradeDownManual = {
	name: "supTradeDownManual",
	rawName: "SUP_TRADE_DOWN_MANUAL",
	columns: {
		RECORD_ID: {
			nullable: "N",
			isPk: false,
			description: "记录编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DOWN_CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "下游渠道编号",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		DOWN_ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "下游账户编号",
			name: "downAccountId",
			rawName: "DOWN_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		HAS_ADJUST: {
			nullable: "N",
			isPk: false,
			description: "是否已红冲过",
			name: "hasAdjust",
			rawName: "HAS_ADJUST",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		ADJUST_RECORD_ID: {
			nullable: "N",
			isPk: false,
			description: "红冲的记录编号",
			name: "adjustRecordId",
			rawName: "ADJUST_RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANGE_TYPE: {
			nullable: "N",
			isPk: false,
			description: "变动类型（加款、加款红冲、提款、提款红冲，余额平账、交易平账）",
			name: "changeType",
			rawName: "CHANGE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
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
		BANK_CARD_NO: {
			nullable: "Y",
			isPk: false,
			description: "加款/提款对应银行账户",
			name: "bankCardNo",
			rawName: "BANK_CARD_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		BANK_RECORD_ID: {
			nullable: "Y",
			isPk: false,
			description: "加款/提款银行资金变动编号",
			name: "bankRecordId",
			rawName: "BANK_RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		BANK_SERVICE_ID: {
			nullable: "Y",
			isPk: false,
			description: "提款银行收取手续费编号",
			name: "bankServiceId",
			rawName: "BANK_SERVICE_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		BANK_RELATE_ID: {
			nullable: "Y",
			isPk: false,
			description: "可红冲记录和银行相关记录关联编号",
			name: "bankRelateId",
			rawName: "BANK_RELATE_ID",
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
		CREATED_BY: {
			nullable: "Y",
			isPk: false,
			description: "创建人",
			name: "createdBy",
			rawName: "CREATED_BY",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};
