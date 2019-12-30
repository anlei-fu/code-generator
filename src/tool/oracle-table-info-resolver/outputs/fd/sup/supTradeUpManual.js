exports.supTradeUpManual = {
	name: "supTradeUpManual",
	rawName: "SUP_TRADE_UP_MANUAL",
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
		UP_CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "上游渠道编号",
			name: "upChannelNo",
			rawName: "UP_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		UP_ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "上游渠道账户",
			name: "upAccountId",
			rawName: "UP_ACCOUNT_ID",
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
			description: "变动类型（加款、加款红冲、提款、提款红冲、实体卡收货、电子卡密收货、实体卡转电子卡密、余额平账、交易平账）",
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
		WAY_CHANGE_COUNT: {
			nullable: "N",
			isPk: false,
			description: "在途变动张数",
			name: "wayChangeCount",
			rawName: "WAY_CHANGE_COUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		WAY_CHANGE_FACE: {
			nullable: "N",
			isPk: false,
			description: "在途变动面值",
			name: "wayChangeFace",
			rawName: "WAY_CHANGE_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		WAY_CHANGE_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "在途变动金额",
			name: "wayChangeAmount",
			rawName: "WAY_CHANGE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PHYSICAL_CHANGE_COUNT: {
			nullable: "N",
			isPk: false,
			description: "实体卡变动条数",
			name: "physicalChangeCount",
			rawName: "PHYSICAL_CHANGE_COUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PHYSICAL_CHANGE_FACE: {
			nullable: "N",
			isPk: false,
			description: "实体卡变动面值",
			name: "physicalChangeFace",
			rawName: "PHYSICAL_CHANGE_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PHYSICAL_CHANGE_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "实体卡变动金额",
			name: "physicalChangeAmount",
			rawName: "PHYSICAL_CHANGE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ELECTRONIC_CHANGE_COUNT: {
			nullable: "N",
			isPk: false,
			description: "电子卡密变动条数",
			name: "electronicChangeCount",
			rawName: "ELECTRONIC_CHANGE_COUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ELECTRONIC_CHANGE_FACE: {
			nullable: "N",
			isPk: false,
			description: "电子卡密变动面值",
			name: "electronicChangeFace",
			rawName: "ELECTRONIC_CHANGE_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ELECTRONIC_CHANGE_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "电子卡密变动金额",
			name: "electronicChangeAmount",
			rawName: "ELECTRONIC_CHANGE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		WAY_COUNT_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "在途卡余额",
			name: "wayCountBalance",
			rawName: "WAY_COUNT_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		WAY_FACE_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "在途面值余额",
			name: "wayFaceBalance",
			rawName: "WAY_FACE_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		WAY_CARD_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "在途账户余额",
			name: "wayCardBalance",
			rawName: "WAY_CARD_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PHYSICAL_COUNT_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "实体卡张数余额",
			name: "physicalCountBalance",
			rawName: "PHYSICAL_COUNT_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PHYSICAL_FACE_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "实体卡面值余额",
			name: "physicalFaceBalance",
			rawName: "PHYSICAL_FACE_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PHYSICAL_CARD_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "实体卡账户余额",
			name: "physicalCardBalance",
			rawName: "PHYSICAL_CARD_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ELECTRONIC_COUNT_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "电子卡密张数余额",
			name: "electronicCountBalance",
			rawName: "ELECTRONIC_COUNT_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ELECTRONIC_FACE_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "电子卡密面值余额",
			name: "electronicFaceBalance",
			rawName: "ELECTRONIC_FACE_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ELECTRONIC_CARD_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "电子卡密账户余额",
			name: "electronicCardBalance",
			rawName: "ELECTRONIC_CARD_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TRADE_CHANGE_TIME: {
			nullable: "Y",
			isPk: false,
			description: "实体卡收货、电子卡密收货、实体卡转电子卡密交易系统时间",
			name: "tradeChangeTime",
			rawName: "TRADE_CHANGE_TIME",
			type: {
				name: "DATE",
				length: ""
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
			description: "加款银行收取手续费编号",
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

