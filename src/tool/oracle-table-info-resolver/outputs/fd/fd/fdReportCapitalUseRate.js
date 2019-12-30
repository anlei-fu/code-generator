exports.fdReportCapitalUseRate = {
	name: "fdReportCapitalUseRate",
	rawName: "FD_REPORT_CAPITAL_USE_RATE",
	columns: {
		RECORD_ID: {
			nullable: "N",
			isPk: false,
			description: "记录编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SNAP_TIME: {
			nullable: "N",
			isPk: false,
			description: "记录日期",
			name: "snapTime",
			rawName: "SNAP_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		CREATE_TIME: {
			nullable: "N",
			isPk: false,
			description: "创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		COMPANY_ID: {
			nullable: "N",
			isPk: false,
			description: "渠道所属公司",
			name: "companyId",
			rawName: "COMPANY_ID",
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
		ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "支付账户",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
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
		CAPITAL_CLASS: {
			nullable: "N",
			isPk: false,
			description: "渠道资金分类：1.普通话费、2.普通流量、3.特殊话费、4.特殊流量、0.其他渠道",
			name: "capitalClass",
			rawName: "CAPITAL_CLASS",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		ACCOUNT_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "统计时账户余额，早上8点统计",
			name: "accountBalance",
			rawName: "ACCOUNT_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		YESTERDAY_DRAW: {
			nullable: "N",
			isPk: false,
			description: "昨天交易量",
			name: "yesterdayDraw",
			rawName: "YESTERDAY_DRAW",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		BEF_YESTERDAY_DRAW: {
			nullable: "N",
			isPk: false,
			description: "前天交易量",
			name: "befYesterdayDraw",
			rawName: "BEF_YESTERDAY_DRAW",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		THREE_DAYS_AGO_DRAW: {
			nullable: "N",
			isPk: false,
			description: "大前天交易量",
			name: "threeDaysAgoDraw",
			rawName: "THREE_DAYS_AGO_DRAW",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		AVERAGE_DRAW: {
			nullable: "N",
			isPk: false,
			description: "最近三天平均交易量",
			name: "averageDraw",
			rawName: "AVERAGE_DRAW",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		NO_DRAW_DAYS: {
			nullable: "N",
			isPk: false,
			description: "累计无交易天数（余额小于1000且无交易的清零）",
			name: "noDrawDays",
			rawName: "NO_DRAW_DAYS",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SYNC_STATUS: {
			nullable: "N",
			isPk: false,
			description: "同步状态，0、同步完成，1等待同步，2正在同步",
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
			description: "同步批次号",
			name: "syncBatch",
			rawName: "SYNC_BATCH",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

