exports.fdTradeProfitDraw = {
	name: "fdTradeProfitDraw",
	rawName: "FD_TRADE_PROFIT_DRAW",
	columns: {
		reportId: {
			nullable: false,
			isPk: true,
			description: "主键",
			name: "reportId",
			rawName: "REPORT_ID",
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
		profit: {
			nullable: false,
			isPk: false,
			description: "提取利润",
			name: "profit",
			rawName: "PROFIT",
			type: {
				name: "number",
				length: 20
			}
		},
		drawMonth: {
			nullable: false,
			isPk: false,
			description: "利润的月份",
			name: "drawMonth",
			rawName: "DRAW_MONTH",
			type: {
				name: "date",
				length: null
			}
		},
		drawBillType: {
			nullable: false,
			isPk: false,
			description: "利润类:1-前向2-后向",
			name: "drawBillType",
			rawName: "DRAW_BILL_TYPE",
			type: {
				name: "number",
				length: 1
			}
		},
		drawStatus: {
			nullable: false,
			isPk: false,
			description: "提取状态",
			name: "drawStatus",
			rawName: "DRAW_STATUS",
			type: {
				name: "number",
				length: 1
			}
		},
		drawUser: {
			nullable: false,
			isPk: false,
			description: "提取人",
			name: "drawUser",
			rawName: "DRAW_USER",
			type: {
				name: "varchar2",
				length: null
			}
		},
		drawTime: {
			nullable: false,
			isPk: false,
			description: "提取时间",
			name: "drawTime",
			rawName: "DRAW_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		hasAdjust: {
			nullable: false,
			isPk: false,
			description: "是否红冲过",
			name: "hasAdjust",
			rawName: "HAS_ADJUST",
			type: {
				name: "number",
				length: 1
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
		bankFundId: {
			nullable: false,
			isPk: false,
			description: "红冲对应实体卡变动记录编号",
			name: "bankFundId",
			rawName: "BANK_FUND_ID",
			type: {
				name: "number",
				length: 20
			}
		}
	}
};

