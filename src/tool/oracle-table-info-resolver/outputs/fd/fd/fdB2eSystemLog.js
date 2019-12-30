exports.fdB2eSystemLog = {
	name: "fdB2eSystemLog",
	rawName: "FD_B2E_SYSTEM_LOG",
	columns: {
		ID: {
			nullable: "N",
			isPk: true,
			description: "主键",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "账户名称",
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
		LAST_FAIL_TIME: {
			nullable: "N",
			isPk: false,
			description: "上次执行失败时间",
			name: "lastFailTime",
			rawName: "LAST_FAIL_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		FAIL_REASON: {
			nullable: "N",
			isPk: false,
			description: "失败原因",
			name: "failReason",
			rawName: "FAIL_REASON",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

