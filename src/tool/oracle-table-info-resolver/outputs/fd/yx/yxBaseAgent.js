exports.yxBaseAgent = {
	name: "yxBaseAgent",
	rawName: "YX_BASE_AGENT",
	columns: {
		AGENT_ID: {
			nullable: "N",
			isPk: false,
			description: "代理人编号",
			name: "agentId",
			rawName: "AGENT_ID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		AGENT_NAME: {
			nullable: "N",
			isPk: false,
			description: "代理人名称",
			name: "agentName",
			rawName: "AGENT_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		AGENT_TYPE: {
			nullable: "N",
			isPk: false,
			description: "代理人类型:个人代理人,:企业代理人",
			name: "agentType",
			rawName: "AGENT_TYPE",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		CERTIFICATE_NO: {
			nullable: "N",
			isPk: false,
			description: "身份证/纳税识别号",
			name: "certificateNo",
			rawName: "CERTIFICATE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		MOBILE: {
			nullable: "N",
			isPk: false,
			description: "手机号码",
			name: "mobile",
			rawName: "MOBILE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PROVINCE_NO: {
			nullable: "N",
			isPk: false,
			description: "省份",
			name: "provinceNo",
			rawName: "PROVINCE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		COMPANY_NATURE: {
			nullable: "N",
			isPk: false,
			description: "公司性质:有限责任公司,:股份有限公司,:个体商户,:合伙企业",
			name: "companyNature",
			rawName: "COMPANY_NATURE",
			type: {
				name: "NUMBER",
				length: "10"
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
				length: "3"
			}
		},
		TAXPAYER_SIZE: {
			nullable: "N",
			isPk: false,
			description: "纳税人规模:一般纳税人,2小规模纳税人",
			name: "taxpayerSize",
			rawName: "TAXPAYER_SIZE",
			type: {
				name: "NUMBER",
				length: "2"
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
		},
		DOWN_CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "下游渠道",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		OUT_AGENT_ID: {
			nullable: "N",
			isPk: false,
			description: "交易系统代理人编号",
			name: "outAgentId",
			rawName: "OUT_AGENT_ID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		GROUP_AGENT: {
			nullable: "Y",
			isPk: false,
			description: ":是组合代理人，1：普通代理人",
			name: "groupAgent",
			rawName: "GROUP_AGENT",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		GROUP_COUNT: {
			nullable: "Y",
			isPk: false,
			description: "组合数量",
			name: "groupCount",
			rawName: "GROUP_COUNT",
			type: {
				name: "NUMBER",
				length: "3"
			}
		}
	}
};

