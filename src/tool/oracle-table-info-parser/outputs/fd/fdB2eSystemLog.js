exports.fdB2eSystemLog = {
	name: "fdB2eSystemLog",
	rawName: "FD_B2E_SYSTEM_LOG",
	columns: {
		id: {
			nullable: false,
			isPk: true,
			description: "主键",
			name: "id",
			rawName: "ID",
			type: {
				name: "number",
				length: 20
			}
		},
		accountId: {
			nullable: false,
			isPk: false,
			description: "账户名称",
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
		lastFailTime: {
			nullable: false,
			isPk: false,
			description: "上次执行失败时间",
			name: "lastFailTime",
			rawName: "LAST_FAIL_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		failReason: {
			nullable: false,
			isPk: false,
			description: "失败原因",
			name: "failReason",
			rawName: "FAIL_REASON",
			type: {
				name: "varchar2",
				length: null
			}
		}
	}
};

