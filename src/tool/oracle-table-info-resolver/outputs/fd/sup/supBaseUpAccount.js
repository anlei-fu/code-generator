exports.supBaseUpAccount = {
	name: "supBaseUpAccount",
	rawName: "SUP_BASE_UP_ACCOUNT",
	columns: {
		ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ACCOUNT_NAME: {
			nullable: "N",
			isPk: false,
			description: "账户名称",
			name: "accountName",
			rawName: "ACCOUNT_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ON_WAY_COUNT: {
			nullable: "N",
			isPk: false,
			description: "在途张数",
			name: "onWayCount",
			rawName: "ON_WAY_COUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ON_WAY_FACE: {
			nullable: "N",
			isPk: false,
			description: "在途面值",
			name: "onWayFace",
			rawName: "ON_WAY_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ON_WAY_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "在途余额",
			name: "onWayBalance",
			rawName: "ON_WAY_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PHYSICAL_CARD_COUNT: {
			nullable: "N",
			isPk: false,
			description: "实体卡张数",
			name: "physicalCardCount",
			rawName: "PHYSICAL_CARD_COUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PHYSICAL_CARD_FACE: {
			nullable: "N",
			isPk: false,
			description: "实体卡面值",
			name: "physicalCardFace",
			rawName: "PHYSICAL_CARD_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PHYSICAL_CARD_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "实体卡余额",
			name: "physicalCardBalance",
			rawName: "PHYSICAL_CARD_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ELECTRONIC_CARD_COUNT: {
			nullable: "N",
			isPk: false,
			description: "电子卡密张数",
			name: "electronicCardCount",
			rawName: "ELECTRONIC_CARD_COUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ELECTRONIC_CARD_FACE: {
			nullable: "N",
			isPk: false,
			description: "电子卡密面值",
			name: "electronicCardFace",
			rawName: "ELECTRONIC_CARD_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ELECTRONIC_CARD_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "电子卡密余额",
			name: "electronicCardBalance",
			rawName: "ELECTRONIC_CARD_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CREATED_BY: {
			nullable: "N",
			isPk: false,
			description: "创建人",
			name: "createdBy",
			rawName: "CREATED_BY",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CREATED_TIME: {
			nullable: "N",
			isPk: false,
			description: "创建时间",
			name: "createdTime",
			rawName: "CREATED_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		LAST_EDIT_USER: {
			nullable: "Y",
			isPk: false,
			description: "最后更新人",
			name: "lastEditUser",
			rawName: "LAST_EDIT_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		LAST_EDIT_TIME: {
			nullable: "Y",
			isPk: false,
			description: "最后更新时间",
			name: "lastEditTime",
			rawName: "LAST_EDIT_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	}
};

