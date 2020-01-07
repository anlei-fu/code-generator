exports.fdBaseCompanyAccountSelf = {
	name: "fdBaseCompanyAccountSelf",
	rawName: "FD_BASE_COMPANY_ACCOUNT_SELF",
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
		companyId: {
			nullable: false,
			isPk: false,
			description: "所属公司账户",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		accountType: {
			nullable: false,
			isPk: false,
			description: "账户类:1.汇款手续费账户2.下游已付佣金账户,3.上游已收佣金4.毛利已提账户",
			name: "accountType",
			rawName: "ACCOUNT_TYPE",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		balance: {
			nullable: false,
			isPk: false,
			description: "余额(手续费为负债)",
			name: "balance",
			rawName: "BALANCE",
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
		}
	}
};

