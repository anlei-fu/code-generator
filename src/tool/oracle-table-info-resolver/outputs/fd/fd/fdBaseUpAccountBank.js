exports.fdBaseUpAccountBank = {
	name: "fdBaseUpAccountBank",
	rawName: "FD_BASE_UP_ACCOUNT_BANK",
	columns: {
		accountId: {
			nullable: false,
			isPk: false,
			description: "主键(对应上游账户主键)",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		title: {
			nullable: false,
			isPk: false,
			description: "标题(区分银行卡用途)",
			name: "title",
			rawName: "TITLE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		cardNo: {
			nullable: false,
			isPk: false,
			description: "银行卡卡号",
			name: "cardNo",
			rawName: "CARD_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		cardPwd: {
			nullable: false,
			isPk: false,
			description: "银行卡密码",
			name: "cardPwd",
			rawName: "CARD_PWD",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		cardHolder: {
			nullable: false,
			isPk: false,
			description: "银行卡持有人",
			name: "cardHolder",
			rawName: "CARD_HOLDER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		bankType: {
			nullable: false,
			isPk: false,
			description: "银行类型",
			name: "bankType",
			rawName: "BANK_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		bankName: {
			nullable: false,
			isPk: false,
			description: "银行卡所属银行",
			name: "bankName",
			rawName: "BANK_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		bankAddress: {
			nullable: true,
			isPk: false,
			description: "开户行",
			name: "bankAddress",
			rawName: "BANK_ADDRESS",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		remark: {
			nullable: true,
			isPk: false,
			description: "备注",
			name: "remark",
			rawName: "REMARK",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		createTime: {
			nullable: false,
			isPk: false,
			description: "创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		createBy: {
			nullable: false,
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

