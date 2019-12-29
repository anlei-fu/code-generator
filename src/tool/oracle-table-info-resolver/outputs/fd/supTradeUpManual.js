exports.supTradeUpManual = {
	name: "supTradeUpManual",
	rawName: "SUP_TRADE_UP_MANUAL",
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
		upChannelNo: {
			nullable: false,
			isPk: false,
			description: "上游渠道编号",
			name: "upChannelNo",
			rawName: "UP_CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		upAccountId: {
			nullable: false,
			isPk: false,
			description: "上游渠道账户",
			name: "upAccountId",
			rawName: "UP_ACCOUNT_ID",
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
			description: "变动类型（加款、加款红冲、提款、提款红冲、实体卡收货、电子卡密收货、实体卡转电子卡密、余额平账、交易平账）",
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
		wayChangeCount: {
			nullable: false,
			isPk: false,
			description: "在途变动张数",
			name: "wayChangeCount",
			rawName: "WAY_CHANGE_COUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		wayChangeFace: {
			nullable: false,
			isPk: false,
			description: "在途变动面值",
			name: "wayChangeFace",
			rawName: "WAY_CHANGE_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		wayChangeAmount: {
			nullable: false,
			isPk: false,
			description: "在途变动金额",
			name: "wayChangeAmount",
			rawName: "WAY_CHANGE_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		physicalChangeCount: {
			nullable: false,
			isPk: false,
			description: "实体卡变动条数",
			name: "physicalChangeCount",
			rawName: "PHYSICAL_CHANGE_COUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		physicalChangeFace: {
			nullable: false,
			isPk: false,
			description: "实体卡变动面值",
			name: "physicalChangeFace",
			rawName: "PHYSICAL_CHANGE_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		physicalChangeAmount: {
			nullable: false,
			isPk: false,
			description: "实体卡变动金额",
			name: "physicalChangeAmount",
			rawName: "PHYSICAL_CHANGE_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		electronicChangeCount: {
			nullable: false,
			isPk: false,
			description: "电子卡密变动条数",
			name: "electronicChangeCount",
			rawName: "ELECTRONIC_CHANGE_COUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		electronicChangeFace: {
			nullable: false,
			isPk: false,
			description: "电子卡密变动面值",
			name: "electronicChangeFace",
			rawName: "ELECTRONIC_CHANGE_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		electronicChangeAmount: {
			nullable: false,
			isPk: false,
			description: "电子卡密变动金额",
			name: "electronicChangeAmount",
			rawName: "ELECTRONIC_CHANGE_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		wayCountBalance: {
			nullable: false,
			isPk: false,
			description: "在途卡余额",
			name: "wayCountBalance",
			rawName: "WAY_COUNT_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		wayFaceBalance: {
			nullable: false,
			isPk: false,
			description: "在途面值余额",
			name: "wayFaceBalance",
			rawName: "WAY_FACE_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		wayCardBalance: {
			nullable: false,
			isPk: false,
			description: "在途账户余额",
			name: "wayCardBalance",
			rawName: "WAY_CARD_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		physicalCountBalance: {
			nullable: false,
			isPk: false,
			description: "实体卡张数余额",
			name: "physicalCountBalance",
			rawName: "PHYSICAL_COUNT_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		physicalFaceBalance: {
			nullable: false,
			isPk: false,
			description: "实体卡面值余额",
			name: "physicalFaceBalance",
			rawName: "PHYSICAL_FACE_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		physicalCardBalance: {
			nullable: false,
			isPk: false,
			description: "实体卡账户余额",
			name: "physicalCardBalance",
			rawName: "PHYSICAL_CARD_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		electronicCountBalance: {
			nullable: false,
			isPk: false,
			description: "电子卡密张数余额",
			name: "electronicCountBalance",
			rawName: "ELECTRONIC_COUNT_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		electronicFaceBalance: {
			nullable: false,
			isPk: false,
			description: "电子卡密面值余额",
			name: "electronicFaceBalance",
			rawName: "ELECTRONIC_FACE_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		electronicCardBalance: {
			nullable: false,
			isPk: false,
			description: "电子卡密账户余额",
			name: "electronicCardBalance",
			rawName: "ELECTRONIC_CARD_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		tradeChangeTime: {
			nullable: false,
			isPk: false,
			description: "实体卡收货、电子卡密收货、实体卡转电子卡密交易系统时间",
			name: "tradeChangeTime",
			rawName: "TRADE_CHANGE_TIME",
			type: {
				name: "date",
				length: null
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
			description: "加款银行收取手续费编号",
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

