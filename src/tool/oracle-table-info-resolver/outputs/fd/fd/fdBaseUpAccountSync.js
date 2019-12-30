exports.fdBaseUpAccountSync = {
	name: "fdBaseUpAccountSync",
	rawName: "FD_BASE_UP_ACCOUNT_SYNC",
	columns: {
		ID: {
			nullable: "N",
			isPk: false,
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
			description: "账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		NEED_SYNC_ADD: {
			nullable: "N",
			isPk: false,
			description: "是否需要同步加款、提款到18系统",
			name: "needSyncAdd",
			rawName: "NEED_SYNC_ADD",
			type: {
				name: "NUMBER",
				length: "1"
			}
		}
	}
};

