exports.supBaseUpAccount = {
	name: "supBaseUpAccount",
	rawName: "SUP_BASE_UP_ACCOUNT",
	columns: {
		accountId: {
			nullable: false,
			isPk: false,
			description: "账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		accountName: {
			nullable: false,
			isPk: false,
			description: "账户名称",
			name: "accountName",
			rawName: "ACCOUNT_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		onWayCount: {
			nullable: false,
			isPk: false,
			description: "在途张数",
			name: "onWayCount",
			rawName: "ON_WAY_COUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		onWayFace: {
			nullable: false,
			isPk: false,
			description: "在途面值",
			name: "onWayFace",
			rawName: "ON_WAY_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		onWayBalance: {
			nullable: false,
			isPk: false,
			description: "在途余额",
			name: "onWayBalance",
			rawName: "ON_WAY_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		physicalCardCount: {
			nullable: false,
			isPk: false,
			description: "实体卡张数",
			name: "physicalCardCount",
			rawName: "PHYSICAL_CARD_COUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		physicalCardFace: {
			nullable: false,
			isPk: false,
			description: "实体卡面值",
			name: "physicalCardFace",
			rawName: "PHYSICAL_CARD_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		physicalCardBalance: {
			nullable: false,
			isPk: false,
			description: "实体卡余额",
			name: "physicalCardBalance",
			rawName: "PHYSICAL_CARD_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		electronicCardCount: {
			nullable: false,
			isPk: false,
			description: "电子卡密张数",
			name: "electronicCardCount",
			rawName: "ELECTRONIC_CARD_COUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		electronicCardFace: {
			nullable: false,
			isPk: false,
			description: "电子卡密面值",
			name: "electronicCardFace",
			rawName: "ELECTRONIC_CARD_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		electronicCardBalance: {
			nullable: false,
			isPk: false,
			description: "电子卡密余额",
			name: "electronicCardBalance",
			rawName: "ELECTRONIC_CARD_BALANCE",
			type: {
				name: "number",
				length: 20
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
		},
		createdTime: {
			nullable: false,
			isPk: false,
			description: "创建时间",
			name: "createdTime",
			rawName: "CREATED_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		lastEditUser: {
			nullable: false,
			isPk: false,
			description: "最后更新人",
			name: "lastEditUser",
			rawName: "LAST_EDIT_USER",
			type: {
				name: "varchar2",
				length: null
			}
		},
		lastEditTime: {
			nullable: false,
			isPk: false,
			description: "最后更新时间",
			name: "lastEditTime",
			rawName: "LAST_EDIT_TIME",
			type: {
				name: "date",
				length: null
			}
		}
	}
};

