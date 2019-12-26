exports.fdBaseCoAccountName = {
	name: "fdBaseCoAccountName",
	rawName: "FD_BASE_CO_ACCOUNT_NAME",
	columns: {
		accountId: {
			nullable: false,
			isPk: false,
			description: "渠道账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		id: {
			nullable: false,
			isPk: false,
			description: "编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "number",
				length: 20
			}
		},
		coAccountName: {
			nullable: false,
			isPk: false,
			description: "收付款账户名称",
			name: "coAccountName",
			rawName: "CO_ACCOUNT_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		coAccountType: {
			nullable: false,
			isPk: false,
			description: "账户类型：1：上游，2：下游",
			name: "coAccountType",
			rawName: "CO_ACCOUNT_TYPE",
			type: {
				name: "number",
				length: 3
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

