exports.fdB2eBankQueryRecord = {
	name: "fdB2eBankQueryRecord",
	rawName: "FD_B2E_BANK_QUERY_RECORD",
	columns: {
		recordId: {
			nullable: false,
			isPk: false,
			description: "主键",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		bankAccountId: {
			nullable: false,
			isPk: false,
			description: "银行账户编号",
			name: "bankAccountId",
			rawName: "BANK_ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		cardNo: {
			nullable: false,
			isPk: false,
			description: "银行卡号",
			name: "cardNo",
			rawName: "CARD_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		bankAccName: {
			nullable: false,
			isPk: false,
			description: "银行账户名称",
			name: "bankAccName",
			rawName: "BANK_ACC_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		bankType: {
			nullable: false,
			isPk: false,
			description: "银行类型",
			name: "bankType",
			rawName: "BANK_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		queryBalance: {
			nullable: false,
			isPk: false,
			description: "查询余额",
			name: "queryBalance",
			rawName: "QUERY_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		queryTime: {
			nullable: false,
			isPk: false,
			description: "查询时间",
			name: "queryTime",
			rawName: "QUERY_TIME",
			type: {
				name: "date",
				length: null
			}
		}
	}
};

