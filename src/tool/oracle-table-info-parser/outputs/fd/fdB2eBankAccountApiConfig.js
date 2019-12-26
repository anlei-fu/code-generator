exports.fdB2eBankAccountApiConfig = {
	name: "fdB2eBankAccountApiConfig",
	rawName: "FD_B2E_BANK_ACCOUNT_API_CONFIG",
	columns: {
		configId: {
			nullable: false,
			isPk: false,
			description: "配置编号",
			name: "configId",
			rawName: "CONFIG_ID",
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
		tokenKey: {
			nullable: false,
			isPk: false,
			description: "签名key",
			name: "tokenKey",
			rawName: "TOKEN_KEY",
			type: {
				name: "varchar2",
				length: null
			}
		},
		receiveQueryMq: {
			nullable: false,
			isPk: false,
			description: "下游收款查询mq",
			name: "receiveQueryMq",
			rawName: "RECEIVE_QUERY_MQ",
			type: {
				name: "varchar2",
				length: null
			}
		},
		addMq: {
			nullable: false,
			isPk: false,
			description: "上游加款mq",
			name: "addMq",
			rawName: "ADD_MQ",
			type: {
				name: "varchar2",
				length: null
			}
		},
		addQueryMq: {
			nullable: false,
			isPk: false,
			description: "上游加款查询mq",
			name: "addQueryMq",
			rawName: "ADD_QUERY_MQ",
			type: {
				name: "varchar2",
				length: null
			}
		},
		bankBalanceMq: {
			nullable: false,
			isPk: false,
			description: "银行余额查询mq",
			name: "bankBalanceMq",
			rawName: "BANK_BALANCE_MQ",
			type: {
				name: "varchar2",
				length: null
			}
		},
		merchantNo: {
			nullable: false,
			isPk: false,
			description: "客户账户编号",
			name: "merchantNo",
			rawName: "MERCHANT_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		merchantPassword: {
			nullable: false,
			isPk: false,
			description: "客户账户密码",
			name: "merchantPassword",
			rawName: "MERCHANT_PASSWORD",
			type: {
				name: "varchar2",
				length: null
			}
		},
		userNo: {
			nullable: false,
			isPk: false,
			description: "用户登录账户",
			name: "userNo",
			rawName: "USER_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		userPassword: {
			nullable: false,
			isPk: false,
			description: "登录密码",
			name: "userPassword",
			rawName: "USER_PASSWORD",
			type: {
				name: "varchar2",
				length: null
			}
		},
		currencyCode: {
			nullable: false,
			isPk: false,
			description: "交易货币种类",
			name: "currencyCode",
			rawName: "CURRENCY_CODE",
			type: {
				name: "varchar2",
				length: null
			}
		},
		language: {
			nullable: false,
			isPk: false,
			description: "接口编码语言",
			name: "language",
			rawName: "LANGUAGE",
			type: {
				name: "varchar2",
				length: null
			}
		},
		appId: {
			nullable: false,
			isPk: false,
			description: "应用程序编码",
			name: "appId",
			rawName: "APP_ID",
			type: {
				name: "varchar2",
				length: null
			}
		},
		appVer: {
			nullable: false,
			isPk: false,
			description: "应用程序版本",
			name: "appVer",
			rawName: "APP_VER",
			type: {
				name: "varchar2",
				length: null
			}
		},
		bankAddMq: {
			nullable: false,
			isPk: false,
			description: "上游银企直连加款mq",
			name: "bankAddMq",
			rawName: "BANK_ADD_MQ",
			type: {
				name: "varchar2",
				length: null
			}
		},
		bankAddQueryMq: {
			nullable: false,
			isPk: false,
			description: "上游银企直联加款查询mq",
			name: "bankAddQueryMq",
			rawName: "BANK_ADD_QUERY_MQ",
			type: {
				name: "varchar2",
				length: null
			}
		},
		proxyMerchantNo: {
			nullable: false,
			isPk: false,
			description: "代付商户编号",
			name: "proxyMerchantNo",
			rawName: "PROXY_MERCHANT_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		proxyMerchantPwd: {
			nullable: false,
			isPk: false,
			description: "代付商户密码",
			name: "proxyMerchantPwd",
			rawName: "PROXY_MERCHANT_PWD",
			type: {
				name: "varchar2",
				length: null
			}
		},
		proxyPriMerchantNo: {
			nullable: false,
			isPk: false,
			description: "代付对私商户编号",
			name: "proxyPriMerchantNo",
			rawName: "PROXY_PRI_MERCHANT_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		proxyPriMerchantPwd: {
			nullable: false,
			isPk: false,
			description: "代付对私商户密码",
			name: "proxyPriMerchantPwd",
			rawName: "PROXY_PRI_MERCHANT_PWD",
			type: {
				name: "varchar2",
				length: null
			}
		}
	}
};

