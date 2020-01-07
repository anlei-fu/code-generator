exports.dkBaseUpChannel = {
	name: "dkBaseUpChannel",
	rawName: "DK_BASE_UP_CHANNEL",
	columns: {
		channelNo: {
			nullable: false,
			isPk: true,
			description: "渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		channelName: {
			nullable: false,
			isPk: false,
			description: "渠道名称",
			name: "channelName",
			rawName: "CHANNEL_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		status: {
			nullable: false,
			isPk: false,
			description: "状态",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		serviceFee: {
			nullable: false,
			isPk: false,
			description: "手续费率",
			name: "serviceFee",
			rawName: "SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: "10"
			}
		},
		companyId: {
			nullable: false,
			isPk: false,
			description: "所属公司",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		createdBy: {
			nullable: false,
			isPk: false,
			description: "创建人",
			name: "createdBy",
			rawName: "CREATED_BY",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		createdTime: {
			nullable: false,
			isPk: false,
			description: "创建时间",
			name: "createdTime",
			rawName: "CREATED_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		lastEditUser: {
			nullable: true,
			isPk: false,
			description: "最后更新人",
			name: "lastEditUser",
			rawName: "LAST_EDIT_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		lastEditTime: {
			nullable: true,
			isPk: false,
			description: "最后更新时间",
			name: "lastEditTime",
			rawName: "LAST_EDIT_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		commiBalance: {
			nullable: false,
			isPk: false,
			description: "佣金余额",
			name: "commiBalance",
			rawName: "COMMI_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		maxAdd: {
			nullable: false,
			isPk: false,
			description: "结算上限提示值",
			name: "maxAdd",
			rawName: "MAX_ADD",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		minAdd: {
			nullable: false,
			isPk: false,
			description: "结算下限提示值",
			name: "minAdd",
			rawName: "MIN_ADD",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		commiRule: {
			nullable: true,
			isPk: false,
			description: "佣金规则",
			name: "commiRule",
			rawName: "COMMI_RULE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		needCommi: {
			nullable: false,
			isPk: false,
			description: "是否需要后返佣金0需要，1不需要",
			name: "needCommi",
			rawName: "NEED_COMMI",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		classification: {
			nullable: false,
			isPk: false,
			description: "渠道分类--对应业务类型,1.sp代扣系统，2.sup收卡系统",
			name: "classification",
			rawName: "CLASSIFICATION",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		paymentType: {
			nullable: false,
			isPk: false,
			description: "支付分类--1.预付，2.后付",
			name: "paymentType",
			rawName: "PAYMENT_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		warnBalance: {
			nullable: false,
			isPk: false,
			description: "报警余额",
			name: "warnBalance",
			rawName: "WARN_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		warnType: {
			nullable: false,
			isPk: false,
			description: "报警类:1.单个支付账户不足   2.合计支付账户不足",
			name: "warnType",
			rawName: "WARN_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		}
	}
};

