exports.fdBankAccountInfo = {
	name: "fdBankAccountInfo",
	rawName: "FD_BANK_ACCOUNT_INFO",
	columns: {
		CREATED_BY: {
			nullable: "N",
			isPk: false,
			description: "创建人",
			name: "createdBy",
			rawName: "CREATED_BY",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CREATED_TIME: {
			nullable: "N",
			isPk: false,
			description: "创建时间",
			name: "createdTime",
			rawName: "CREATED_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		LAST_EDIT_USER: {
			nullable: "Y",
			isPk: false,
			description: "最后更新人",
			name: "lastEditUser",
			rawName: "LAST_EDIT_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		LAST_EDIT_TIME: {
			nullable: "Y",
			isPk: false,
			description: "最后更新时间",
			name: "lastEditTime",
			rawName: "LAST_EDIT_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		IS_B2E: {
			nullable: "N",
			isPk: false,
			description: "是否为银企直联账户",
			name: "isB2e",
			rawName: "IS_B2E",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		PROVINCE_NO: {
			nullable: "N",
			isPk: false,
			description: "账户省份编号",
			name: "provinceNo",
			rawName: "PROVINCE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CITY_NO: {
			nullable: "N",
			isPk: false,
			description: "账户城市编号",
			name: "cityNo",
			rawName: "CITY_NO",
			type: {
				name: "VARCHAR2",
				length: ""
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
			description: "余额查询时间",
			name: "queryTime",
			rawName: "QUERY_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		ACCOUNT_ID: {
			nullable: "N",
			isPk: true,
			description: "主键",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TITLE: {
			nullable: "N",
			isPk: false,
			description: "标题",
			name: "title",
			rawName: "TITLE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ACCOUNT_NAME: {
			nullable: "N",
			isPk: false,
			description: "账号名称",
			name: "accountName",
			rawName: "ACCOUNT_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CARD_NO: {
			nullable: "N",
			isPk: false,
			description: "账户卡号",
			name: "cardNo",
			rawName: "CARD_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		BANK_TYPE: {
			nullable: "N",
			isPk: false,
			description: "银行类型-1.其它0.财付通1.支付宝2.移动钱包3.19E钱包4.银行账户5.北京银行6.建设银行7.京东8.民生银行9.联通迷你10.交通银行11.财付通企业",
			name: "bankType",
			rawName: "BANK_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		ASSET_TYPE: {
			nullable: "N",
			isPk: false,
			description: "1.银行卡 0. 三方平台",
			name: "assetType",
			rawName: "ASSET_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		BANK_ADDRESS: {
			nullable: "Y",
			isPk: false,
			description: "开户行",
			name: "bankAddress",
			rawName: "BANK_ADDRESS",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		IS_USE_ADD_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "是否用于加款",
			name: "isUseAddAmount",
			rawName: "IS_USE_ADD_AMOUNT",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		BALANCE: {
			nullable: "N",
			isPk: false,
			description: "余额",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		COMPANY_ID: {
			nullable: "N",
			isPk: false,
			description: "所属公司",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		REMARK: {
			nullable: "Y",
			isPk: false,
			description: "备注",
			name: "remark",
			rawName: "REMARK",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

