exports.qyBaseDownAccount = {
	name: "qyBaseDownAccount",
	rawName: "QY_BASE_DOWN_ACCOUNT",
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
			description: "账号名称",
			name: "accountName",
			rawName: "ACCOUNT_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		QUERY_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "查询余额",
			name: "queryBalance",
			rawName: "QUERY_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		INNER_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "理论余额",
			name: "innerBalance",
			rawName: "INNER_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CREDIT_MONEY: {
			nullable: "N",
			isPk: false,
			description: "授信金额",
			name: "creditMoney",
			rawName: "CREDIT_MONEY",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CREATED_USER: {
			nullable: "N",
			isPk: false,
			description: "创建人",
			name: "createdUser",
			rawName: "CREATED_USER",
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
