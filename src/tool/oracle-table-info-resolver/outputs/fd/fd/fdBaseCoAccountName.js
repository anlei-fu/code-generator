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
				name: "NUMBER",
				length: "20"
			}
		},
		id: {
			nullable: false,
			isPk: false,
			description: "编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		coAccountName: {
			nullable: false,
			isPk: false,
			description: "收付款账户名称",
			name: "coAccountName",
			rawName: "CO_ACCOUNT_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		coAccountType: {
			nullable: false,
			isPk: false,
			description: "账户类型：1：上游，2：下游,:公司间结算账户,:押金账户,:手续费账户,:佣金账户,:SUP上游,:sp账户，:收卡业务，10：权益管理",
			name: "coAccountType",
			rawName: "CO_ACCOUNT_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		createdUser: {
			nullable: false,
			isPk: false,
			description: "创建人",
			name: "createdUser",
			rawName: "CREATED_USER",
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
		}
	}
};

