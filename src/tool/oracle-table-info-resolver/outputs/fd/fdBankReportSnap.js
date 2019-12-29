exports.fdBankReportSnap = {
	name: "fdBankReportSnap",
	rawName: "FD_BANK_REPORT_SNAP",
	columns: {
		snapId: {
			nullable: false,
			isPk: true,
			description: "主键",
			name: "snapId",
			rawName: "SNAP_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		accountId: {
			nullable: false,
			isPk: false,
			description: "银行卡账户",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		useType: {
			nullable: false,
			isPk: false,
			description: "用途编号",
			name: "useType",
			rawName: "USE_TYPE",
			type: {
				name: "number",
				length: 20
			}
		},
		startBalance: {
			nullable: false,
			isPk: false,
			description: "期初余额",
			name: "startBalance",
			rawName: "START_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		endBalance: {
			nullable: false,
			isPk: false,
			description: "期末余额",
			name: "endBalance",
			rawName: "END_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		collectionFee: {
			nullable: false,
			isPk: false,
			description: "本日代收",
			name: "collectionFee",
			rawName: "COLLECTION_FEE",
			type: {
				name: "number",
				length: 20
			}
		},
		payFee: {
			nullable: false,
			isPk: false,
			description: "本日代付",
			name: "payFee",
			rawName: "PAY_FEE",
			type: {
				name: "number",
				length: 20
			}
		},
		snapTime: {
			nullable: false,
			isPk: false,
			description: "快照时间",
			name: "snapTime",
			rawName: "SNAP_TIME",
			type: {
				name: "date",
				length: null
			}
		}
	}
};

