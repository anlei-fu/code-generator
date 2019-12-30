exports.fdReportZeroBalance = {
	name: "fdReportZeroBalance",
	rawName: "FD_REPORT_ZERO_BALANCE",
	columns: {
		RECORD_ID: {
			nullable: "N",
			isPk: true,
			description: "主键",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		RECORD_DATE: {
			nullable: "N",
			isPk: false,
			description: "报表时间",
			name: "recordDate",
			rawName: "RECORD_DATE",
			type: {
				name: "DATE",
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
		ACCOUNT_TYPE: {
			nullable: "N",
			isPk: false,
			description: "账户类型:上游渠道:下游渠道:银行账户:收款账户:资产账户:非资产账户:倒款账户",
			name: "accountType",
			rawName: "ACCOUNT_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
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
		BALANCE: {
			nullable: "Y",
			isPk: false,
			description: "理论余额",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ACCOUNT_NAME: {
			nullable: "N",
			isPk: false,
			description: "账户名称",
			name: "accountName",
			rawName: "ACCOUNT_NAME",
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
		QUERY_BALANCE: {
			nullable: "Y",
			isPk: false,
			description: "查询余额",
			name: "queryBalance",
			rawName: "QUERY_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANNEL_STATUS: {
			nullable: "N",
			isPk: false,
			description: "渠道状态",
			name: "channelStatus",
			rawName: "CHANNEL_STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		ACCOUNT_STATUS: {
			nullable: "N",
			isPk: false,
			description: "账户状态",
			name: "accountStatus",
			rawName: "ACCOUNT_STATUS",
			type: {
				name: "NUMBER",
				length: "1"
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
		DOWN_FIRST_FACE: {
			nullable: "Y",
			isPk: false,
			description: "下游与上游扣款的时间差造成的差异面值（只有下游渠道记录）",
			name: "downFirstFace",
			rawName: "DOWN_FIRST_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DOWN_FIRST_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "下游与上游扣款的时间差造成的差异金额（只有下游渠道记录）",
			name: "downFirstAmount",
			rawName: "DOWN_FIRST_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CO_ACCOUNT_TYPE: {
			nullable: "Y",
			isPk: false,
			description: "资产账户与非资产账户对应的账户类型",
			name: "coAccountType",
			rawName: "CO_ACCOUNT_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		SYNC_STATUS: {
			nullable: "N",
			isPk: false,
			description: "同步诚实系统状态，0同步完成，1未进行同步，2正在同步，9同步失败",
			name: "syncStatus",
			rawName: "SYNC_STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		SYNC_BATCH: {
			nullable: "N",
			isPk: false,
			description: "数据同步批次号",
			name: "syncBatch",
			rawName: "SYNC_BATCH",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANNEL_SOURCE_SYSTEM: {
			nullable: "Y",
			isPk: false,
			description: "渠道所属系统编号",
			name: "channelSourceSystem",
			rawName: "CHANNEL_SOURCE_SYSTEM",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANNEL_CLASSIF: {
			nullable: "Y",
			isPk: false,
			description: "渠道分类（主要用于上游渠道）",
			name: "channelClassif",
			rawName: "CHANNEL_CLASSIF",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		WARN_BALANCE: {
			nullable: "Y",
			isPk: false,
			description: "上游渠道预警余额/下游渠道授信余额",
			name: "warnBalance",
			rawName: "WARN_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

