exports.fdB2eBankAccountApiConfig = {
	name: "fdB2eBankAccountApiConfig",
	rawName: "FD_B2E_BANK_ACCOUNT_API_CONFIG",
	columns: {
		CONFIG_ID: {
			nullable: "N",
			isPk: false,
			description: "配置编号",
			name: "configId",
			rawName: "CONFIG_ID",
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
		TOKEN_KEY: {
			nullable: "N",
			isPk: false,
			description: "签名key",
			name: "tokenKey",
			rawName: "TOKEN_KEY",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		RECEIVE_QUERY_MQ: {
			nullable: "N",
			isPk: false,
			description: "下游收款查询mq",
			name: "receiveQueryMq",
			rawName: "RECEIVE_QUERY_MQ",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ADD_MQ: {
			nullable: "N",
			isPk: false,
			description: "上游加款mq",
			name: "addMq",
			rawName: "ADD_MQ",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ADD_QUERY_MQ: {
			nullable: "N",
			isPk: false,
			description: "上游加款查询mq",
			name: "addQueryMq",
			rawName: "ADD_QUERY_MQ",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		BANK_BALANCE_MQ: {
			nullable: "N",
			isPk: false,
			description: "银行余额查询mq",
			name: "bankBalanceMq",
			rawName: "BANK_BALANCE_MQ",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		MERCHANT_NO: {
			nullable: "N",
			isPk: false,
			description: "客户账户编号,对应client_id",
			name: "merchantNo",
			rawName: "MERCHANT_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		MERCHANT_PASSWORD: {
			nullable: "N",
			isPk: false,
			description: "客户账户密码",
			name: "merchantPassword",
			rawName: "MERCHANT_PASSWORD",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		USER_NO: {
			nullable: "N",
			isPk: false,
			description: "用户登录账户,对应user_id",
			name: "userNo",
			rawName: "USER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		USER_PASSWORD: {
			nullable: "N",
			isPk: false,
			description: "登录密码,对应user_pswd",
			name: "userPassword",
			rawName: "USER_PASSWORD",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CURRENCY_CODE: {
			nullable: "N",
			isPk: false,
			description: "交易货币种类",
			name: "currencyCode",
			rawName: "CURRENCY_CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		LANGUAGE: {
			nullable: "N",
			isPk: false,
			description: "接口编码语言",
			name: "language",
			rawName: "LANGUAGE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		APP_ID: {
			nullable: "N",
			isPk: false,
			description: "应用程序编码",
			name: "appId",
			rawName: "APP_ID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		APP_VER: {
			nullable: "N",
			isPk: false,
			description: "应用程序版本",
			name: "appVer",
			rawName: "APP_VER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		BANK_ADD_MQ: {
			nullable: "N",
			isPk: false,
			description: "上游银企直连加款mq",
			name: "bankAddMq",
			rawName: "BANK_ADD_MQ",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		BANK_ADD_QUERY_MQ: {
			nullable: "N",
			isPk: false,
			description: "上游银企直联加款查询mq",
			name: "bankAddQueryMq",
			rawName: "BANK_ADD_QUERY_MQ",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PROXY_MERCHANT_NO: {
			nullable: "Y",
			isPk: false,
			description: "代付商户编号",
			name: "proxyMerchantNo",
			rawName: "PROXY_MERCHANT_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PROXY_MERCHANT_PWD: {
			nullable: "Y",
			isPk: false,
			description: "代付商户密码",
			name: "proxyMerchantPwd",
			rawName: "PROXY_MERCHANT_PWD",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PROXY_PRI_MERCHANT_NO: {
			nullable: "Y",
			isPk: false,
			description: "代付对私商户编号",
			name: "proxyPriMerchantNo",
			rawName: "PROXY_PRI_MERCHANT_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PROXY_PRI_MERCHANT_PWD: {
			nullable: "Y",
			isPk: false,
			description: "代付对私商户密码",
			name: "proxyPriMerchantPwd",
			rawName: "PROXY_PRI_MERCHANT_PWD",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

