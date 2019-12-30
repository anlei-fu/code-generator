exports.fdBaseDownChannel = {
	name: "fdBaseDownChannel",
	rawName: "FD_BASE_DOWN_CHANNEL",
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
		SERVICE_FEE: {
			nullable: "N",
			isPk: false,
			description: "手续费率",
			name: "serviceFee",
			rawName: "SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: "10"
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
		WARN_TYPE: {
			nullable: "N",
			isPk: false,
			description: "报警类:1.单个支付账户不足   2.合计支付账户不足",
			name: "warnType",
			rawName: "WARN_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		COMMI_RULE: {
			nullable: "Y",
			isPk: false,
			description: "佣金规则",
			name: "commiRule",
			rawName: "COMMI_RULE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		NEED_COMMI: {
			nullable: "N",
			isPk: false,
			description: "是否需要后返佣金0需要，1不需要",
			name: "needCommi",
			rawName: "NEED_COMMI",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		MANAGE_USER: {
			nullable: "Y",
			isPk: false,
			description: "开发/商务/运营",
			name: "manageUser",
			rawName: "MANAGE_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CHANNEL_COMPANY: {
			nullable: "Y",
			isPk: false,
			description: "渠道公司名称",
			name: "channelCompany",
			rawName: "CHANNEL_COMPANY",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		AUTO_ADD: {
			nullable: "Y",
			isPk: false,
			description: "自动加款，0：开启，1：关闭",
			name: "autoAdd",
			rawName: "AUTO_ADD",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		AUTO_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "自动加款金额",
			name: "autoAmount",
			rawName: "AUTO_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		AUTO_ADD_ON_TIME: {
			nullable: "Y",
			isPk: false,
			description: "自动加款开启时间",
			name: "autoAddOnTime",
			rawName: "AUTO_ADD_ON_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	}
};

