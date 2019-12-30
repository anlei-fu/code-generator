exports.fdBankReportSnap = {
	name: "fdBankReportSnap",
	rawName: "FD_BANK_REPORT_SNAP",
	columns: {
		SNAP_ID: {
			nullable: "N",
			isPk: true,
			description: "主键",
			name: "snapId",
			rawName: "SNAP_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "银行卡账户",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		USE_TYPE: {
			nullable: "N",
			isPk: false,
			description: "用途编号",
			name: "useType",
			rawName: "USE_TYPE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		START_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "期初余额",
			name: "startBalance",
			rawName: "START_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		END_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "期末余额",
			name: "endBalance",
			rawName: "END_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		COLLECTION_FEE: {
			nullable: "N",
			isPk: false,
			description: "本日代收",
			name: "collectionFee",
			rawName: "COLLECTION_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PAY_FEE: {
			nullable: "N",
			isPk: false,
			description: "本日代付",
			name: "payFee",
			rawName: "PAY_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SNAP_TIME: {
			nullable: "N",
			isPk: false,
			description: "快照时间",
			name: "snapTime",
			rawName: "SNAP_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	}
};

