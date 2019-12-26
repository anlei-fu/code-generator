exports.fdReportZeroBalance = {
	name: "fdReportZeroBalance",
	rawName: "FD_REPORT_ZERO_BALANCE",
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
		recordDate: {
			nullable: false,
			isPk: false,
			description: "报表时间",
			name: "recordDate",
			rawName: "RECORD_DATE",
			type: {
				name: "date",
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
		accountType: {
			nullable: false,
			isPk: false,
			description: "账户类型:上游渠道:下游渠道:银行账户:收款账户:资产账户:非资产账户:倒款账户",
			name: "accountType",
			rawName: "ACCOUNT_TYPE",
			type: {
				name: "number",
				length: 3
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
		balance: {
			nullable: false,
			isPk: false,
			description: "理论余额",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		accountName: {
			nullable: false,
			isPk: false,
			description: "账户名称",
			name: "accountName",
			rawName: "ACCOUNT_NAME",
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
		queryBalance: {
			nullable: false,
			isPk: false,
			description: "查询余额",
			name: "queryBalance",
			rawName: "QUERY_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		channelStatus: {
			nullable: false,
			isPk: false,
			description: "渠道状态",
			name: "channelStatus",
			rawName: "CHANNEL_STATUS",
			type: {
				name: "number",
				length: 1
			}
		},
		accountStatus: {
			nullable: false,
			isPk: false,
			description: "账户状态",
			name: "accountStatus",
			rawName: "ACCOUNT_STATUS",
			type: {
				name: "number",
				length: 1
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
		downFirstFace: {
			nullable: false,
			isPk: false,
			description: "下游与上游扣款的时间差造成的差异面值（只有下游渠道记录）",
			name: "downFirstFace",
			rawName: "DOWN_FIRST_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		downFirstAmount: {
			nullable: false,
			isPk: false,
			description: "下游与上游扣款的时间差造成的差异金额（只有下游渠道记录）",
			name: "downFirstAmount",
			rawName: "DOWN_FIRST_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		coAccountType: {
			nullable: false,
			isPk: false,
			description: "资产账户与非资产账户对应的账户类型",
			name: "coAccountType",
			rawName: "CO_ACCOUNT_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		syncStatus: {
			nullable: false,
			isPk: false,
			description: "同步诚实系统状态，0同步完成，1未进行同步，2正在同步，9同步失败",
			name: "syncStatus",
			rawName: "SYNC_STATUS",
			type: {
				name: "number",
				length: 1
			}
		},
		syncBatch: {
			nullable: false,
			isPk: false,
			description: "数据同步批次号",
			name: "syncBatch",
			rawName: "SYNC_BATCH",
			type: {
				name: "number",
				length: 20
			}
		},
		channelSourceSystem: {
			nullable: false,
			isPk: false,
			description: "渠道所属系统编号",
			name: "channelSourceSystem",
			rawName: "CHANNEL_SOURCE_SYSTEM",
			type: {
				name: "number",
				length: 20
			}
		},
		channelClassif: {
			nullable: false,
			isPk: false,
			description: "渠道分类（主要用于上游渠道）",
			name: "channelClassif",
			rawName: "CHANNEL_CLASSIF",
			type: {
				name: "number",
				length: 3
			}
		},
		warnBalance: {
			nullable: false,
			isPk: false,
			description: "上游渠道预警余额/下游渠道授信余额",
			name: "warnBalance",
			rawName: "WARN_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		}
	}
};

