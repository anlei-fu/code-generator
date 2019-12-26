exports.fdBaseUpChannel = {
	name: "fdBaseUpChannel",
	rawName: "FD_BASE_UP_CHANNEL",
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
		maxAdd: {
			nullable: false,
			isPk: false,
			description: "加款上限提示值",
			name: "maxAdd",
			rawName: "MAX_ADD",
			type: {
				name: "number",
				length: 20
			}
		},
		minAdd: {
			nullable: false,
			isPk: false,
			description: "加款下限提示值",
			name: "minAdd",
			rawName: "MIN_ADD",
			type: {
				name: "number",
				length: 20
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
		classification: {
			nullable: false,
			isPk: false,
			description: "渠道分类--对应业务类型",
			name: "classification",
			rawName: "CLASSIFICATION",
			type: {
				name: "number",
				length: 3
			}
		},
		capitalClass: {
			nullable: false,
			isPk: false,
			description: "渠道资金分类：1.普通话费、2.普通流量、3.特殊话费、4.特殊流量、0.其他渠道",
			name: "capitalClass",
			rawName: "CAPITAL_CLASS",
			type: {
				name: "number",
				length: 3
			}
		},
		billType: {
			nullable: false,
			isPk: false,
			description: "开票类:1前向2-后向",
			name: "billType",
			rawName: "BILL_TYPE",
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
		canAdd: {
			nullable: false,
			isPk: false,
			description: "允许加款（0允许，1禁止）",
			name: "canAdd",
			rawName: "CAN_ADD",
			type: {
				name: "number",
				length: 3
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
		}
	}
};

