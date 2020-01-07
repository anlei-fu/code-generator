exports.yxThreePartyAccount = {
	name: "yxThreePartyAccount",
	rawName: "YX_THREE_PARTY_ACCOUNT",
	columns: {
		accountName: {
			nullable: false,
			isPk: false,
			description: "账户名称",
			name: "accountName",
			rawName: "ACCOUNT_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		accountId: {
			nullable: false,
			isPk: false,
			description: "三方账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		channelNo: {
			nullable: false,
			isPk: false,
			description: "渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		agentId: {
			nullable: false,
			isPk: false,
			description: "代理商编号",
			name: "agentId",
			rawName: "AGENT_ID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		channelType: {
			nullable: false,
			isPk: false,
			description: "渠道类型:上游;:下游",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		balance: {
			nullable: false,
			isPk: false,
			description: "余额",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		accountType: {
			nullable: false,
			isPk: false,
			description: "账户类:1支出;:收入",
			name: "accountType",
			rawName: "ACCOUNT_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		creditAmount: {
			nullable: false,
			isPk: false,
			description: "授信金额",
			name: "creditAmount",
			rawName: "CREDIT_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		status: {
			nullable: false,
			isPk: false,
			description: "状态0-启用1-禁用",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		createTime: {
			nullable: false,
			isPk: false,
			description: "创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		createUser: {
			nullable: false,
			isPk: false,
			description: "创建人",
			name: "createUser",
			rawName: "CREATE_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		updateTime: {
			nullable: true,
			isPk: false,
			description: "修改时间",
			name: "updateTime",
			rawName: "UPDATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		updateUser: {
			nullable: true,
			isPk: false,
			description: "更新人",
			name: "updateUser",
			rawName: "UPDATE_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		companyId: {
			nullable: false,
			isPk: false,
			description: "公司编号",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		systemId: {
			nullable: true,
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

