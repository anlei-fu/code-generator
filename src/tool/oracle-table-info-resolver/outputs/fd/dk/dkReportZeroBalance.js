exports.dkReportZeroBalance = {
	name: "dkReportZeroBalance",
	rawName: "DK_REPORT_ZERO_BALANCE",
	columns: {
		recordId: {
			nullable: false,
			isPk: true,
			description: "主键",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		recordDate: {
			nullable: false,
			isPk: false,
			description: "报表时间",
			name: "recordDate",
			rawName: "RECORD_DATE",
			type: {
				name: "DATE",
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
		accountType: {
			nullable: false,
			isPk: false,
			description: "账户类型:上游渠道:下游渠道:银行账户:收款账户:资产账户:非资产账户:倒款账户",
			name: "accountType",
			rawName: "ACCOUNT_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		accountId: {
			nullable: false,
			isPk: false,
			description: "账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		channelNo: {
			nullable: false,
			isPk: false,
			description: "渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		balance: {
			nullable: true,
			isPk: false,
			description: "理论余额",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		accountName: {
			nullable: false,
			isPk: false,
			description: "账户名称",
			name: "accountName",
			rawName: "ACCOUNT_NAME",
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
		queryBalance: {
			nullable: true,
			isPk: false,
			description: "查询余额",
			name: "queryBalance",
			rawName: "QUERY_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		channelStatus: {
			nullable: false,
			isPk: false,
			description: "渠道状态",
			name: "channelStatus",
			rawName: "CHANNEL_STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		accountStatus: {
			nullable: false,
			isPk: false,
			description: "账户状态",
			name: "accountStatus",
			rawName: "ACCOUNT_STATUS",
			type: {
				name: "NUMBER",
				length: "1"
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
		downFirstFace: {
			nullable: true,
			isPk: false,
			description: "下游与上游代扣的时间差造成的差异面值（只有下游渠道记录）",
			name: "downFirstFace",
			rawName: "DOWN_FIRST_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		downFirstAmount: {
			nullable: true,
			isPk: false,
			description: "下游与上游代扣的时间差造成的差异金额（只有下游渠道记录）",
			name: "downFirstAmount",
			rawName: "DOWN_FIRST_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		syncStatus: {
			nullable: false,
			isPk: false,
			description: "同步财务报表状态，0同步完成，1未进行同步，2正在同步，9同步失败",
			name: "syncStatus",
			rawName: "SYNC_STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		channelSourceSystem: {
			nullable: true,
			isPk: false,
			description: "渠道所属系统编号",
			name: "channelSourceSystem",
			rawName: "CHANNEL_SOURCE_SYSTEM",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		channelClassif: {
			nullable: true,
			isPk: false,
			description: "渠道分类（主要用于上游渠道）",
			name: "channelClassif",
			rawName: "CHANNEL_CLASSIF",
			type: {
				name: "NUMBER",
				length: "3"
			}
		}
	}
};

