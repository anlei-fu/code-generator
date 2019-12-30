exports.qyBaseUpChannel = {
	name: "qyBaseUpChannel",
	rawName: "QY_BASE_UP_CHANNEL",
	columns: {
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
		CHANNEL_NAME: {
			nullable: "N",
			isPk: false,
			description: "渠道名称",
			name: "channelName",
			rawName: "CHANNEL_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
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
		SOURCE_SYSTEM_ID: {
			nullable: "N",
			isPk: false,
			description: "所属系统编号",
			name: "sourceSystemId",
			rawName: "SOURCE_SYSTEM_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		WARN_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "报警余额",
			name: "warnBalance",
			rawName: "WARN_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		COMMI_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "佣金余额",
			name: "commiBalance",
			rawName: "COMMI_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		STATUS: {
			nullable: "N",
			isPk: false,
			description: "状态",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		CREATED_USER: {
			nullable: "N",
			isPk: false,
			description: "创建人",
			name: "createdUser",
			rawName: "CREATED_USER",
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
		}
	}
};

