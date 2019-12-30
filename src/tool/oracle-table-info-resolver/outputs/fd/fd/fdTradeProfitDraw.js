exports.fdTradeProfitDraw = {
	name: "fdTradeProfitDraw",
	rawName: "FD_TRADE_PROFIT_DRAW",
	columns: {
		REPORT_ID: {
			nullable: "N",
			isPk: true,
			description: "主键",
			name: "reportId",
			rawName: "REPORT_ID",
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
		PROFIT: {
			nullable: "N",
			isPk: false,
			description: "提取利润",
			name: "profit",
			rawName: "PROFIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DRAW_MONTH: {
			nullable: "N",
			isPk: false,
			description: "利润的月份",
			name: "drawMonth",
			rawName: "DRAW_MONTH",
			type: {
				name: "DATE",
				length: ""
			}
		},
		DRAW_BILL_TYPE: {
			nullable: "Y",
			isPk: false,
			description: "利润类:1-前向2-后向",
			name: "drawBillType",
			rawName: "DRAW_BILL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		DRAW_STATUS: {
			nullable: "N",
			isPk: false,
			description: "提取状态",
			name: "drawStatus",
			rawName: "DRAW_STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		DRAW_USER: {
			nullable: "Y",
			isPk: false,
			description: "提取人",
			name: "drawUser",
			rawName: "DRAW_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		DRAW_TIME: {
			nullable: "Y",
			isPk: false,
			description: "提取时间",
			name: "drawTime",
			rawName: "DRAW_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		HAS_ADJUST: {
			nullable: "N",
			isPk: false,
			description: "是否红冲过",
			name: "hasAdjust",
			rawName: "HAS_ADJUST",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		ADJUST_ID: {
			nullable: "N",
			isPk: false,
			description: "红冲编号",
			name: "adjustId",
			rawName: "ADJUST_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		BANK_FUND_ID: {
			nullable: "Y",
			isPk: false,
			description: "红冲对应实体卡变动记录编号",
			name: "bankFundId",
			rawName: "BANK_FUND_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

