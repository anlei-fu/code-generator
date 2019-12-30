exports.fdReportBankDaily = {
	name: "fdReportBankDaily",
	rawName: "FD_REPORT_BANK_DAILY",
	columns: {
		RECORD_ID: {
			nullable: "N",
			isPk: false,
			description: "主键",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "实体卡账号编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ADD_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "加款金额",
			name: "addAmount",
			rawName: "ADD_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		MINUS_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "减款金额",
			name: "minusAmount",
			rawName: "MINUS_AMOUNT",
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
		SNAP_TIME: {
			nullable: "N",
			isPk: false,
			description: "日期",
			name: "snapTime",
			rawName: "SNAP_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	}
};

