exports.yxBaseUpAccount = {
	name: "yxBaseUpAccount",
	rawName: "YX_BASE_UP_ACCOUNT",
	columns: {
		accountId: {
			nullable: false,
			isPk: true,
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
			description: "账号名称",
			name: "accountName",
			rawName: "ACCOUNT_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		queryBalance: {
			nullable: false,
			isPk: false,
			description: "查询余额",
			name: "queryBalance",
			rawName: "QUERY_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		innerBalance: {
			nullable: false,
			isPk: false,
			description: "理论余额",
			name: "innerBalance",
			rawName: "INNER_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		createdUser: {
			nullable: false,
			isPk: false,
			description: "创建人",
			name: "createdUser",
			rawName: "CREATED_USER",
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

