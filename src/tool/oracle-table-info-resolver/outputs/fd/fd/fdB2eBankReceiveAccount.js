exports.fdB2eBankReceiveAccount = {
	name: "fdB2eBankReceiveAccount",
	rawName: "FD_B2E_BANK_RECEIVE_ACCOUNT",
	columns: {
		CARD_NO: {
			nullable: "N",
			isPk: false,
			description: "银行卡号[来:FD_BANK_ACCOUNT_INFO]",
			name: "cardNo",
			rawName: "CARD_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CARD_NAME: {
			nullable: "Y",
			isPk: false,
			description: "账户名称[来:FD_BANK_ACCOUNT_INFO]",
			name: "cardName",
			rawName: "CARD_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		QUERY_INTERVAL_TIME: {
			nullable: "N",
			isPk: false,
			description: "查询间隔时间",
			name: "queryIntervalTime",
			rawName: "QUERY_INTERVAL_TIME",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		USE_TYPE: {
			nullable: "Y",
			isPk: false,
			description: "用途，下游收款 等",
			name: "useType",
			rawName: "USE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		STATUS: {
			nullable: "N",
			isPk: false,
			description: "账户状态",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		LAST_QUERY_TIME: {
			nullable: "N",
			isPk: false,
			description: "最后查询成功时间",
			name: "lastQueryTime",
			rawName: "LAST_QUERY_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "银行账户编号[FD_BANK_ACCOUNT_INFO.account_id]",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

