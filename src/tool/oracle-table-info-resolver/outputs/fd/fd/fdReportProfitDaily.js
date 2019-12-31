exports.fdReportProfitDaily = {
	name: "fdReportProfitDaily",
	rawName: "FD_REPORT_PROFIT_DAILY",
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
		RECHARGE_FEE: {
			nullable: "N",
			isPk: false,
			description: "充值金额",
			name: "rechargeFee",
			rawName: "RECHARGE_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DOWN_REFUND_FEE: {
			nullable: "N",
			isPk: false,
			description: "下游退款",
			name: "downRefundFee",
			rawName: "DOWN_REFUND_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_COST_FEE: {
			nullable: "N",
			isPk: false,
			description: "上游扣款",
			name: "upCostFee",
			rawName: "UP_COST_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_REFUND_FEE: {
			nullable: "N",
			isPk: false,
			description: "上游退款",
			name: "upRefundFee",
			rawName: "UP_REFUND_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SERVICE_FEE: {
			nullable: "N",
			isPk: false,
			description: "手续费",
			name: "serviceFee",
			rawName: "SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PROFITS: {
			nullable: "N",
			isPk: false,
			description: "利润",
			name: "profits",
			rawName: "PROFITS",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SNAP_TIME: {
			nullable: "N",
			isPk: false,
			description: "快照时间",
			name: "snapTime",
			rawName: "SNAP_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	}
};
