exports.fdB2eBankQueryRecord = {
	name: "fdB2eBankQueryRecord",
	rawName: "FD_B2E_BANK_QUERY_RECORD",
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
		BANK_ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "银行账户编号",
			name: "bankAccountId",
			rawName: "BANK_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CARD_NO: {
			nullable: "N",
			isPk: false,
			description: "银行卡号",
			name: "cardNo",
			rawName: "CARD_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		BANK_ACC_NAME: {
			nullable: "N",
			isPk: false,
			description: "银行账户名称",
			name: "bankAccName",
			rawName: "BANK_ACC_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		BANK_TYPE: {
			nullable: "N",
			isPk: false,
			description: "银行类型",
			name: "bankType",
			rawName: "BANK_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		QUERY_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "查询余额",
			name: "queryBalance",
			rawName: "QUERY_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		QUERY_TIME: {
			nullable: "N",
			isPk: false,
			description: "查询时间",
			name: "queryTime",
			rawName: "QUERY_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	}
};

