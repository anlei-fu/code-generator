exports.fdBaseCompanyAccountRecv = {
	name: "fdBaseCompanyAccountRecv",
	rawName: "FD_BASE_COMPANY_ACCOUNT_RECV",
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
			description: "账户名称",
			name: "accountName",
			rawName: "ACCOUNT_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		oweCompany: {
			nullable: false,
			isPk: false,
			description: "欠款公司",
			name: "oweCompany",
			rawName: "OWE_COMPANY",
			type: {
				name: "number",
				length: 20
			}
		},
		recvCompany: {
			nullable: false,
			isPk: false,
			description: "收款公司",
			name: "recvCompany",
			rawName: "RECV_COMPANY",
			type: {
				name: "number",
				length: 20
			}
		},
		balance: {
			nullable: false,
			isPk: false,
			description: "账户余额",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		remark: {
			nullable: false,
			isPk: false,
			description: "描述",
			name: "remark",
			rawName: "REMARK",
			type: {
				name: "varchar2",
				length: null
			}
		},
		status: {
			nullable: false,
			isPk: false,
			description: "状态:启用:禁用",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "number",
				length: 1
			}
		},
		lastUpdateTime: {
			nullable: false,
			isPk: false,
			description: "最后更新时间",
			name: "lastUpdateTime",
			rawName: "LAST_UPDATE_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		lastUpdateUser: {
			nullable: false,
			isPk: false,
			description: "最后更新人",
			name: "lastUpdateUser",
			rawName: "LAST_UPDATE_USER",
			type: {
				name: "varchar2",
				length: null
			}
		}
	}
};

