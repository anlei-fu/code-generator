exports.fdBankCashFund = {
	name: "fdBankCashFund",
	rawName: "FD_BANK_CASH_FUND",
	columns: {
		recordId: {
			nullable: false,
			isPk: true,
			description: "主键",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		accountId: {
			nullable: false,
			isPk: false,
			description: "账号编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		adjustId: {
			nullable: false,
			isPk: false,
			description: "红冲编号",
			name: "adjustId",
			rawName: "ADJUST_ID",
			type: {
				name: "number",
				length: 20
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
		changeAmount: {
			nullable: false,
			isPk: false,
			description: "变动金额",
			name: "changeAmount",
			rawName: "CHANGE_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		balance: {
			nullable: false,
			isPk: false,
			description: "余额",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		changeTime: {
			nullable: false,
			isPk: false,
			description: "时间",
			name: "changeTime",
			rawName: "CHANGE_TIME",
			type: {
				name: "date",
				length: null
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
		changeType: {
			nullable: false,
			isPk: false,
			description: "1-加款",
			name: "changeType",
			rawName: "CHANGE_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		useType: {
			nullable: false,
			isPk: false,
			description: "用途1.上游加款2.下游加款3.转账4.上游佣金结算5.下游佣金结算6.利润提取7.收卡结算",
			name: "useType",
			rawName: "USE_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		hasAdjust: {
			nullable: false,
			isPk: false,
			description: "是否冲正过",
			name: "hasAdjust",
			rawName: "HAS_ADJUST",
			type: {
				name: "number",
				length: 1
			}
		},
		linkChannelName: {
			nullable: false,
			isPk: false,
			description: "关联渠道",
			name: "linkChannelName",
			rawName: "LINK_CHANNEL_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		linkAccountName: {
			nullable: false,
			isPk: false,
			description: "关联账号",
			name: "linkAccountName",
			rawName: "LINK_ACCOUNT_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		remark: {
			nullable: false,
			isPk: false,
			description: "备注",
			name: "remark",
			rawName: "REMARK",
			type: {
				name: "varchar2",
				length: null
			}
		},
		serviceId: {
			nullable: false,
			isPk: false,
			description: "流水号记录编号(标记同一操作的几条数据)",
			name: "serviceId",
			rawName: "SERVICE_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		recordNo: {
			nullable: false,
			isPk: false,
			description: "外部记录编号，同步时避免重复",
			name: "recordNo",
			rawName: "RECORD_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		remarkName: {
			nullable: false,
			isPk: false,
			description: "收（付）款账户名称",
			name: "remarkName",
			rawName: "REMARK_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		}
	}
};

