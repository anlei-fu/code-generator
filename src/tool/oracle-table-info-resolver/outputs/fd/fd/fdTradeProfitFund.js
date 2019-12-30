exports.fdTradeProfitFund = {
	name: "fdTradeProfitFund",
	rawName: "FD_TRADE_PROFIT_FUND",
	columns: {
		FUND_ID: {
			nullable: "N",
			isPk: false,
			description: "主键（利润任务相同）",
			name: "fundId",
			rawName: "FUND_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		RECORD_ID: {
			nullable: "N",
			isPk: false,
			description: "月报表编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
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
				length: "20"
			}
		},
		BILL_TYPE: {
			nullable: "Y",
			isPk: false,
			description: "利润类:1-前向2-后向",
			name: "billType",
			rawName: "BILL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		SNAP_TIME: {
			nullable: "N",
			isPk: false,
			description: "月份",
			name: "snapTime",
			rawName: "SNAP_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		CHANGE_TYPE: {
			nullable: "N",
			isPk: false,
			description: "变动类型（11总利润加款12总利润平账加款13总利润平账减款21提取利润加款22提取利润红冲）",
			name: "changeType",
			rawName: "CHANGE_TYPE",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		DEAL_COUNT: {
			nullable: "N",
			isPk: false,
			description: "总利润加款统计条数",
			name: "dealCount",
			rawName: "DEAL_COUNT",
			type: {
				name: "NUMBER",
				length: "10"
			}
		},
		TOTAL_PROFITS_FUND: {
			nullable: "N",
			isPk: false,
			description: "总利润变动金额",
			name: "totalProfitsFund",
			rawName: "TOTAL_PROFITS_FUND",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DRAW_PROFITS_FUND: {
			nullable: "N",
			isPk: false,
			description: "已提取利润变动金额",
			name: "drawProfitsFund",
			rawName: "DRAW_PROFITS_FUND",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TOTAL_PROFITS_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "总利润余额",
			name: "totalProfitsBalance",
			rawName: "TOTAL_PROFITS_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DRAW_PROFITS_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "已提取利润余额",
			name: "drawProfitsBalance",
			rawName: "DRAW_PROFITS_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CO_PROFITS_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "公司利润余额",
			name: "coProfitsBalance",
			rawName: "CO_PROFITS_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANGE_DATE: {
			nullable: "N",
			isPk: false,
			description: "变动时间",
			name: "changeDate",
			rawName: "CHANGE_DATE",
			type: {
				name: "DATE",
				length: ""
			}
		}
	}
};

