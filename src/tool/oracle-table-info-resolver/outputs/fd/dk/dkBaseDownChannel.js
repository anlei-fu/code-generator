exports.dkBaseDownChannel = {
	name: "dkBaseDownChannel",
	rawName: "DK_BASE_DOWN_CHANNEL",
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
		CLASSIFICATION: {
			nullable: "N",
			isPk: false,
			description: "渠道分类--对应业务类型",
			name: "classification",
			rawName: "CLASSIFICATION",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		PAYMENT_TYPE: {
			nullable: "N",
			isPk: false,
			description: "支付分类--1.预付，2.后付",
			name: "paymentType",
			rawName: "PAYMENT_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
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
		}
	}
};

