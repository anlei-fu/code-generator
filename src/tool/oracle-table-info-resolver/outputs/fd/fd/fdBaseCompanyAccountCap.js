exports.fdBaseCompanyAccountCap = {
	name: "fdBaseCompanyAccountCap",
	rawName: "FD_BASE_COMPANY_ACCOUNT_CAP",
	columns: {
		ACCOUNT_ID: {
			nullable: "N",
			isPk: true,
			description: "主键",
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
		COMPANY_ID: {
			nullable: "N",
			isPk: false,
			description: "所属公司账户",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ACCOUNT_TYPE: {
			nullable: "N",
			isPk: false,
			description: "账户类:1.运营投入,2.押金账户,3.保证金账户4.预付费5.短期借贷6.个人借支7毛利账户8.转账退款账户,9.活动专用账户10.手工退款账户12.费用账户",
			name: "accountType",
			rawName: "ACCOUNT_TYPE",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		BALANCE: {
			nullable: "N",
			isPk: false,
			description: "余额(手续费为负债)",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		STATUS: {
			nullable: "N",
			isPk: false,
			description: "状态",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: "1"
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
		},
		USE_TYPE: {
			nullable: "N",
			isPk: false,
			description: "使用类型：1.投入账户（借支、短期为减），2.运营账户",
			name: "useType",
			rawName: "USE_TYPE",
			type: {
				name: "NUMBER",
				length: "2"
			}
		}
	}
};

