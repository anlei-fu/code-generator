exports.fdBaseDownAccount = {
	name: "fdBaseDownAccount",
	rawName: "FD_BASE_DOWN_ACCOUNT",
	columns: {
		accountId: {
			nullable: false,
			isPk: true,
			description: "主键",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		accountName: {
			nullable: false,
			isPk: false,
			description: "账号名称",
			name: "accountName",
			rawName: "ACCOUNT_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		queryBalance: {
			nullable: false,
			isPk: false,
			description: "查询余额",
			name: "queryBalance",
			rawName: "QUERY_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		innerBalance: {
			nullable: false,
			isPk: false,
			description: "理论余额",
			name: "innerBalance",
			rawName: "INNER_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		creditMoney: {
			nullable: false,
			isPk: false,
			description: "授信金额",
			name: "creditMoney",
			rawName: "CREDIT_MONEY",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		status: {
			nullable: false,
			isPk: false,
			description: "状态",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		createdBy: {
			nullable: false,
			isPk: false,
			description: "创建人",
			name: "createdBy",
			rawName: "CREATED_BY",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		createdTime: {
			nullable: false,
			isPk: false,
			description: "创建时间",
			name: "createdTime",
			rawName: "CREATED_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		lastEditUser: {
			nullable: true,
			isPk: false,
			description: "最后更新人",
			name: "lastEditUser",
			rawName: "LAST_EDIT_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		lastEditTime: {
			nullable: true,
			isPk: false,
			description: "最后更新时间",
			name: "lastEditTime",
			rawName: "LAST_EDIT_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		isAutoAdd: {
			nullable: false,
			isPk: false,
			description: "是否自动加款",
			name: "isAutoAdd",
			rawName: "IS_AUTO_ADD",
			type: {
				name: "NUMBER",
				length: "1"
			}
		}
	}
};

