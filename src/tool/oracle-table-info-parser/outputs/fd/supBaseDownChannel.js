exports.supBaseDownChannel = {
	name: "supBaseDownChannel",
	rawName: "SUP_BASE_DOWN_CHANNEL",
	columns: {
		channelNo: {
			nullable: false,
			isPk: false,
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
				length: 20
			}
		},
		sourceSystemId: {
			nullable: false,
			isPk: false,
			description: "所属系统",
			name: "sourceSystemId",
			rawName: "SOURCE_SYSTEM_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		accountId: {
			nullable: false,
			isPk: false,
			description: "账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
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
				length: 3
			}
		},
		createdBy: {
			nullable: false,
			isPk: false,
			description: "创建人",
			name: "createdBy",
			rawName: "CREATED_BY",
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
		}
	}
};

