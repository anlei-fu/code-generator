exports.dkReportCommiProfitDaily = {
	name: "dkReportCommiProfitDaily",
	rawName: "DK_REPORT_COMMI_PROFIT_DAILY",
	columns: {
		refundTotalUnit: {
			nullable: false,
			isPk: false,
			description: "退款规格",
			name: "refundTotalUnit",
			rawName: "REFUND_TOTAL_UNIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		refundTotalFace: {
			nullable: false,
			isPk: false,
			description: "退款面值",
			name: "refundTotalFace",
			rawName: "REFUND_TOTAL_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		refundDrawAmount: {
			nullable: false,
			isPk: false,
			description: "退款金额",
			name: "refundDrawAmount",
			rawName: "REFUND_DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		refundRealAmount: {
			nullable: false,
			isPk: false,
			description: "实际退款金额",
			name: "refundRealAmount",
			rawName: "REFUND_REAL_AMOUNT",
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
		serviceFee: {
			nullable: false,
			isPk: false,
			description: "实时扣除佣金(手续费)",
			name: "serviceFee",
			rawName: "SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		refundCommission: {
			nullable: false,
			isPk: false,
			description: "退回佣金",
			name: "refundCommission",
			rawName: "REFUND_COMMISSION",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		refundProfits: {
			nullable: false,
			isPk: false,
			description: "退回利润",
			name: "refundProfits",
			rawName: "REFUND_PROFITS",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		refundServiceFee: {
			nullable: false,
			isPk: false,
			description: "退回实时扣除佣金（手续费）",
			name: "refundServiceFee",
			rawName: "REFUND_SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		snapTime: {
			nullable: false,
			isPk: false,
			description: "快照时间(交易数据日期)",
			name: "snapTime",
			rawName: "SNAP_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		addStatus: {
			nullable: false,
			isPk: false,
			description: "账户加款状态 1.未开始，2.正在加款，0.加款完成，9.加款失败",
			name: "addStatus",
			rawName: "ADD_STATUS",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		statisticsType: {
			nullable: true,
			isPk: false,
			description: "统计类型，7.代扣业务",
			name: "statisticsType",
			rawName: "STATISTICS_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		sysCost: {
			nullable: true,
			isPk: false,
			description: "系统垫付金额(垫付部分是作为系统成本计入的)",
			name: "sysCost",
			rawName: "SYS_COST",
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
		channelName: {
			nullable: true,
			isPk: false,
			description: "渠道名称",
			name: "channelName",
			rawName: "CHANNEL_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		accountName: {
			nullable: true,
			isPk: false,
			description: "支付账户名称",
			name: "accountName",
			rawName: "ACCOUNT_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
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
		recordId: {
			nullable: false,
			isPk: false,
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
		accountId: {
			nullable: false,
			isPk: false,
			description: "支付账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		channelType: {
			nullable: false,
			isPk: false,
			description: "渠道类型1.上游2．下游",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		businessType: {
			nullable: false,
			isPk: false,
			description: "业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		billType: {
			nullable: false,
			isPk: false,
			description: "利润类型，1.前向，2后向",
			name: "billType",
			rawName: "BILL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		totalUnit: {
			nullable: false,
			isPk: false,
			description: "代扣规格",
			name: "totalUnit",
			rawName: "TOTAL_UNIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		totalFace: {
			nullable: false,
			isPk: false,
			description: "代扣面值",
			name: "totalFace",
			rawName: "TOTAL_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		drawAmount: {
			nullable: false,
			isPk: false,
			description: "结算金额 负：千行欠下游/上游欠千行 金额",
			name: "drawAmount",
			rawName: "DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		realAmount: {
			nullable: false,
			isPk: false,
			description: "实际结算的金额 负：欠下游金额",
			name: "realAmount",
			rawName: "REAL_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		commission: {
			nullable: false,
			isPk: false,
			description: "佣金",
			name: "commission",
			rawName: "COMMISSION",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

