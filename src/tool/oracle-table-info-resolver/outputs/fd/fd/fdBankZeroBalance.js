exports.fdBankZeroBalance = {
	name: "fdBankZeroBalance",
	rawName: "FD_BANK_ZERO_BALANCE",
	columns: {
		recordId: {
			nullable: false,
			isPk: true,
			description: "主键",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		reportTime: {
			nullable: false,
			isPk: false,
			description: "报表时间",
			name: "reportTime",
			rawName: "REPORT_TIME",
			type: {
				name: "DATE",
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
		accountId: {
			nullable: false,
			isPk: false,
			description: "实体卡编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		balance: {
			nullable: false,
			isPk: false,
			description: "理论余额",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
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
		}
	}
};

