exports.fdReportCapitalUseRate = {
	name: "fdReportCapitalUseRate",
	rawName: "FD_REPORT_CAPITAL_USE_RATE",
	columns: {
		recordId: {
			nullable: false,
			isPk: false,
			description: "记录编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		snapTime: {
			nullable: false,
			isPk: false,
			description: "记录日期",
			name: "snapTime",
			rawName: "SNAP_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		createTime: {
			nullable: false,
			isPk: false,
			description: "创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		companyId: {
			nullable: false,
			isPk: false,
			description: "渠道所属公司",
			name: "companyId",
			rawName: "COMPANY_ID",
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
		accountId: {
			nullable: false,
			isPk: false,
			description: "支付账户",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
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
		accountBalance: {
			nullable: false,
			isPk: false,
			description: "统计时账户余额，早上8点统计",
			name: "accountBalance",
			rawName: "ACCOUNT_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		yesterdayDraw: {
			nullable: false,
			isPk: false,
			description: "昨天交易量",
			name: "yesterdayDraw",
			rawName: "YESTERDAY_DRAW",
			type: {
				name: "number",
				length: 20
			}
		},
		befYesterdayDraw: {
			nullable: false,
			isPk: false,
			description: "前天交易量",
			name: "befYesterdayDraw",
			rawName: "BEF_YESTERDAY_DRAW",
			type: {
				name: "number",
				length: 20
			}
		},
		threeDaysAgoDraw: {
			nullable: false,
			isPk: false,
			description: "大前天交易量",
			name: "threeDaysAgoDraw",
			rawName: "THREE_DAYS_AGO_DRAW",
			type: {
				name: "number",
				length: 20
			}
		},
		averageDraw: {
			nullable: false,
			isPk: false,
			description: "最近三天平均交易量",
			name: "averageDraw",
			rawName: "AVERAGE_DRAW",
			type: {
				name: "number",
				length: 20
			}
		},
		noDrawDays: {
			nullable: false,
			isPk: false,
			description: "累计无交易天数（余额小于1000且无交易的清零）",
			name: "noDrawDays",
			rawName: "NO_DRAW_DAYS",
			type: {
				name: "number",
				length: 20
			}
		},
		syncStatus: {
			nullable: false,
			isPk: false,
			description: "同步状态，0、同步完成，1等待同步，2正在同步",
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
			description: "同步批次号",
			name: "syncBatch",
			rawName: "SYNC_BATCH",
			type: {
				name: "number",
				length: 20
			}
		}
	}
};

