exports.yxThreePartyAccount = {
	name: "yxThreePartyAccount",
	rawName: "YX_THREE_PARTY_ACCOUNT",
	columns: {
		ACCOUNT_NAME: {
			nullable: "N",
			isPk: false,
			description: "账户名称",
			name: "accountName",
			rawName: "ACCOUNT_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "三方账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		AGENT_ID: {
			nullable: "N",
			isPk: false,
			description: "代理商编号",
			name: "agentId",
			rawName: "AGENT_ID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CHANNEL_TYPE: {
			nullable: "N",
			isPk: false,
			description: "渠道类型:上游;:下游",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
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
		ACCOUNT_TYPE: {
			nullable: "N",
			isPk: false,
			description: "账户类:1支出;:收入",
			name: "accountType",
			rawName: "ACCOUNT_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		CREDIT_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "授信金额",
			name: "creditAmount",
			rawName: "CREDIT_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		STATUS: {
			nullable: "N",
			isPk: false,
			description: "状态0-启用1-禁用",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		CREATE_TIME: {
			nullable: "N",
			isPk: false,
			description: "创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		CREATE_USER: {
			nullable: "N",
			isPk: false,
			description: "创建人",
			name: "createUser",
			rawName: "CREATE_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		UPDATE_TIME: {
			nullable: "Y",
			isPk: false,
			description: "修改时间",
			name: "updateTime",
			rawName: "UPDATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		UPDATE_USER: {
			nullable: "Y",
			isPk: false,
			description: "更新人",
			name: "updateUser",
			rawName: "UPDATE_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		COMPANY_ID: {
			nullable: "N",
			isPk: false,
			description: "公司编号",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		SYSTEM_ID: {
			nullable: "Y",
			isPk: false,
			description: "系统编号",
			name: "systemId",
			rawName: "SYSTEM_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		}
	}
};

