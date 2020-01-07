exports.fdReportProfitDaily = {
	name: "fdReportProfitDaily",
	rawName: "FD_REPORT_PROFIT_DAILY",
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
		companyId: {
			nullable: false,
			isPk: false,
			description: "公司编号",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		billType: {
			nullable: true,
			isPk: false,
			description: "利润类:1-前向2-后向",
			name: "billType",
			rawName: "BILL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		rechargeFee: {
			nullable: false,
			isPk: false,
			description: "充值金额",
			name: "rechargeFee",
			rawName: "RECHARGE_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		downRefundFee: {
			nullable: false,
			isPk: false,
			description: "下游退款",
			name: "downRefundFee",
			rawName: "DOWN_REFUND_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		upCostFee: {
			nullable: false,
			isPk: false,
			description: "上游扣款",
			name: "upCostFee",
			rawName: "UP_COST_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		upRefundFee: {
			nullable: false,
			isPk: false,
			description: "上游退款",
			name: "upRefundFee",
			rawName: "UP_REFUND_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		serviceFee: {
			nullable: false,
			isPk: false,
			description: "手续费",
			name: "serviceFee",
			rawName: "SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		profits: {
			nullable: false,
			isPk: false,
			description: "利润",
			name: "profits",
			rawName: "PROFITS",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		snapTime: {
			nullable: false,
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

