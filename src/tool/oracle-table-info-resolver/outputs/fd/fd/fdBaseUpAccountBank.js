exports.fdBaseUpAccountBank = {
	name: "fdBaseUpAccountBank",
	rawName: "FD_BASE_UP_ACCOUNT_BANK",
	columns: {
		ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "主键(对应上游账户主键)",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TITLE: {
			nullable: "N",
			isPk: false,
			description: "标题(区分银行卡用途)",
			name: "title",
			rawName: "TITLE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CARD_NO: {
			nullable: "N",
			isPk: false,
			description: "银行卡卡号",
			name: "cardNo",
			rawName: "CARD_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CARD_PWD: {
			nullable: "N",
			isPk: false,
			description: "银行卡密码",
			name: "cardPwd",
			rawName: "CARD_PWD",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CARD_HOLDER: {
			nullable: "N",
			isPk: false,
			description: "银行卡持有人",
			name: "cardHolder",
			rawName: "CARD_HOLDER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		BANK_TYPE: {
			nullable: "N",
			isPk: false,
			description: "银行类型",
			name: "bankType",
			rawName: "BANK_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		BANK_NAME: {
			nullable: "N",
			isPk: false,
			description: "银行卡所属银行",
			name: "bankName",
			rawName: "BANK_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		BANK_ADDRESS: {
			nullable: "Y",
			isPk: false,
			description: "开户行",
			name: "bankAddress",
			rawName: "BANK_ADDRESS",
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
		},
		CREATE_TIME: {
			nullable: "N",
			isPk: false,
			description: "创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		CREATE_BY: {
			nullable: "N",
			isPk: false,
			description: "创建人",
			name: "createBy",
			rawName: "CREATE_BY",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

