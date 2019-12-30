exports.fdBaseCompanyAccountRecv = {
	name: "fdBaseCompanyAccountRecv",
	rawName: "FD_BASE_COMPANY_ACCOUNT_RECV",
	columns: {
		ACCOUNT_ID: {
			nullable: "N",
			isPk: true,
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
			description: "账户名称",
			name: "accountName",
			rawName: "ACCOUNT_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		OWE_COMPANY: {
			nullable: "N",
			isPk: false,
			description: "欠款公司",
			name: "oweCompany",
			rawName: "OWE_COMPANY",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		RECV_COMPANY: {
			nullable: "N",
			isPk: false,
			description: "收款公司",
			name: "recvCompany",
			rawName: "RECV_COMPANY",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		BALANCE: {
			nullable: "N",
			isPk: false,
			description: "账户余额",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		REMARK: {
			nullable: "Y",
			isPk: false,
			description: "描述",
			name: "remark",
			rawName: "REMARK",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		STATUS: {
			nullable: "N",
			isPk: false,
			description: "状态:启用:禁用",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		LAST_UPDATE_TIME: {
			nullable: "N",
			isPk: false,
			description: "最后更新时间",
			name: "lastUpdateTime",
			rawName: "LAST_UPDATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		LAST_UPDATE_USER: {
			nullable: "N",
			isPk: false,
			description: "最后更新人",
			name: "lastUpdateUser",
			rawName: "LAST_UPDATE_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

