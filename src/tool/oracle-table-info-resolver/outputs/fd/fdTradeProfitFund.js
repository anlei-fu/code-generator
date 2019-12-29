exports.fdTradeProfitFund = {
	name: "fdTradeProfitFund",
	rawName: "FD_TRADE_PROFIT_FUND",
	columns: {
		fundId: {
			nullable: false,
			isPk: false,
			description: "主键（利润任务相同）",
			name: "fundId",
			rawName: "FUND_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		recordId: {
			nullable: false,
			isPk: false,
			description: "月报表编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		companyId: {
			nullable: false,
			isPk: false,
			description: "公司编号",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		billType: {
			nullable: false,
			isPk: false,
			description: "利润类:1-前向2-后向",
			name: "billType",
			rawName: "BILL_TYPE",
			type: {
				name: "number",
				length: 1
			}
		},
		snapTime: {
			nullable: false,
			isPk: false,
			description: "月份",
			name: "snapTime",
			rawName: "SNAP_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		changeType: {
			nullable: false,
			isPk: false,
			description: "变动类型（11总利润加款12总利润平账加款13总利润平账减款21提取利润加款22提取利润红冲）",
			name: "changeType",
			rawName: "CHANGE_TYPE",
			type: {
				name: "number",
				length: 2
			}
		},
		dealCount: {
			nullable: false,
			isPk: false,
			description: "总利润加款统计条数",
			name: "dealCount",
			rawName: "DEAL_COUNT",
			type: {
				name: "number",
				length: 10
			}
		},
		totalProfitsFund: {
			nullable: false,
			isPk: false,
			description: "总利润变动金额",
			name: "totalProfitsFund",
			rawName: "TOTAL_PROFITS_FUND",
			type: {
				name: "number",
				length: 20
			}
		},
		drawProfitsFund: {
			nullable: false,
			isPk: false,
			description: "已提取利润变动金额",
			name: "drawProfitsFund",
			rawName: "DRAW_PROFITS_FUND",
			type: {
				name: "number",
				length: 20
			}
		},
		totalProfitsBalance: {
			nullable: false,
			isPk: false,
			description: "总利润余额",
			name: "totalProfitsBalance",
			rawName: "TOTAL_PROFITS_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		drawProfitsBalance: {
			nullable: false,
			isPk: false,
			description: "已提取利润余额",
			name: "drawProfitsBalance",
			rawName: "DRAW_PROFITS_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		coProfitsBalance: {
			nullable: false,
			isPk: false,
			description: "公司利润余额",
			name: "coProfitsBalance",
			rawName: "CO_PROFITS_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		changeDate: {
			nullable: false,
			isPk: false,
			description: "变动时间",
			name: "changeDate",
			rawName: "CHANGE_DATE",
			type: {
				name: "date",
				length: null
			}
		}
	}
};

