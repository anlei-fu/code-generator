exports.fdBaseDownChannel = {
	name: "fdBaseDownChannel",
	rawName: "FD_BASE_DOWN_CHANNEL",
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
		serviceFee: {
			nullable: false,
			isPk: false,
			description: "手续费率",
			name: "serviceFee",
			rawName: "SERVICE_FEE",
			type: {
				name: "number",
				length: 10
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
		warnType: {
			nullable: false,
			isPk: false,
			description: "报警类:1.单个支付账户不足   2.合计支付账户不足",
			name: "warnType",
			rawName: "WARN_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		commiRule: {
			nullable: false,
			isPk: false,
			description: "佣金规则",
			name: "commiRule",
			rawName: "COMMI_RULE",
			type: {
				name: "varchar2",
				length: null
			}
		},
		needCommi: {
			nullable: false,
			isPk: false,
			description: "是否需要后返佣金0需要，1不需要",
			name: "needCommi",
			rawName: "NEED_COMMI",
			type: {
				name: "number",
				length: 1
			}
		},
		manageUser: {
			nullable: false,
			isPk: false,
			description: "开发/商务/运营",
			name: "manageUser",
			rawName: "MANAGE_USER",
			type: {
				name: "varchar2",
				length: null
			}
		},
		channelCompany: {
			nullable: false,
			isPk: false,
			description: "渠道公司名称",
			name: "channelCompany",
			rawName: "CHANNEL_COMPANY",
			type: {
				name: "varchar2",
				length: null
			}
		},
		autoAdd: {
			nullable: false,
			isPk: false,
			description: "自动加款，0：开启，1：关闭",
			name: "autoAdd",
			rawName: "AUTO_ADD",
			type: {
				name: "number",
				length: 1
			}
		},
		autoAmount: {
			nullable: false,
			isPk: false,
			description: "自动加款金额",
			name: "autoAmount",
			rawName: "AUTO_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		autoAddOnTime: {
			nullable: false,
			isPk: false,
			description: "自动加款开启时间",
			name: "autoAddOnTime",
			rawName: "AUTO_ADD_ON_TIME",
			type: {
				name: "date",
				length: null
			}
		}
	}
};

