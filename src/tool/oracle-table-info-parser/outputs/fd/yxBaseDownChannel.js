exports.yxBaseDownChannel = {
	name: "yxBaseDownChannel",
	rawName: "YX_BASE_DOWN_CHANNEL",
	columns: {
		channelNo: {
			nullable: false,
			isPk: true,
			description: "渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		channelName: {
			nullable: false,
			isPk: false,
			description: "渠道名称",
			name: "channelName",
			rawName: "CHANNEL_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		companyId: {
			nullable: false,
			isPk: false,
			description: "所属公司",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "number",
				length: 3
			}
		},
		sourceSystemId: {
			nullable: false,
			isPk: false,
			description: "所属系统编号",
			name: "sourceSystemId",
			rawName: "SOURCE_SYSTEM_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		status: {
			nullable: false,
			isPk: false,
			description: "状态",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "number",
				length: 1
			}
		},
		channelClass: {
			nullable: false,
			isPk: false,
			description: "渠道类型1：自有渠道2：银行渠道3：行业渠道",
			name: "channelClass",
			rawName: "CHANNEL_CLASS",
			type: {
				name: "number",
				length: 3
			}
		},
		commiBalance: {
			nullable: false,
			isPk: false,
			description: "佣金余额",
			name: "commiBalance",
			rawName: "COMMI_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		warnBalance: {
			nullable: false,
			isPk: false,
			description: "报警余额",
			name: "warnBalance",
			rawName: "WARN_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		accountId: {
			nullable: false,
			isPk: false,
			description: "下游账户id",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		createdUser: {
			nullable: false,
			isPk: false,
			description: "创建人",
			name: "createdUser",
			rawName: "CREATED_USER",
			type: {
				name: "varchar2",
				length: null
			}
		},
		createdTime: {
			nullable: false,
			isPk: false,
			description: "创建时间",
			name: "createdTime",
			rawName: "CREATED_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		lastEditUser: {
			nullable: false,
			isPk: false,
			description: "最后更新人",
			name: "lastEditUser",
			rawName: "LAST_EDIT_USER",
			type: {
				name: "varchar2",
				length: null
			}
		},
		lastEditTime: {
			nullable: false,
			isPk: false,
			description: "最后更新时间",
			name: "lastEditTime",
			rawName: "LAST_EDIT_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		issueBalance: {
			nullable: false,
			isPk: false,
			description: "发行收入余额",
			name: "issueBalance",
			rawName: "ISSUE_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		}
	}
};

