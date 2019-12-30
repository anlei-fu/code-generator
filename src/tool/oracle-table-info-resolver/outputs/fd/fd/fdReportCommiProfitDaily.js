exports.fdReportCommiProfitDaily = {
	name: "fdReportCommiProfitDaily",
	rawName: "FD_REPORT_COMMI_PROFIT_DAILY",
	columns: {
		RECORD_ID: {
			nullable: "N",
			isPk: false,
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
			description: "支付账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANNEL_TYPE: {
			nullable: "N",
			isPk: false,
			description: "渠道类型1.上游2．下游",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		BUSINESS_TYPE: {
			nullable: "N",
			isPk: false,
			description: "业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		BILL_TYPE: {
			nullable: "N",
			isPk: false,
			description: "利润类型，1.前向，2后向",
			name: "billType",
			rawName: "BILL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		TOTAL_UNIT: {
			nullable: "N",
			isPk: false,
			description: "充值规格",
			name: "totalUnit",
			rawName: "TOTAL_UNIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TOTAL_FACE: {
			nullable: "N",
			isPk: false,
			description: "充值面值",
			name: "totalFace",
			rawName: "TOTAL_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DRAW_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "扣款金额",
			name: "drawAmount",
			rawName: "DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		REAL_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "实际金额",
			name: "realAmount",
			rawName: "REAL_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		COMMISSION: {
			nullable: "N",
			isPk: false,
			description: "佣金",
			name: "commission",
			rawName: "COMMISSION",
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
		SERVICE_FEE: {
			nullable: "N",
			isPk: false,
			description: "实时扣除佣金(手续费)",
			name: "serviceFee",
			rawName: "SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		REFUND_TOTAL_UNIT: {
			nullable: "N",
			isPk: false,
			description: "退款规格",
			name: "refundTotalUnit",
			rawName: "REFUND_TOTAL_UNIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		REFUND_TOTAL_FACE: {
			nullable: "N",
			isPk: false,
			description: "退款面值",
			name: "refundTotalFace",
			rawName: "REFUND_TOTAL_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		REFUND_DRAW_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "退款金额",
			name: "refundDrawAmount",
			rawName: "REFUND_DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		REFUND_REAL_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "实际退款金额",
			name: "refundRealAmount",
			rawName: "REFUND_REAL_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		REFUND_COMMISSION: {
			nullable: "N",
			isPk: false,
			description: "退回佣金",
			name: "refundCommission",
			rawName: "REFUND_COMMISSION",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		REFUND_PROFITS: {
			nullable: "N",
			isPk: false,
			description: "退回利润",
			name: "refundProfits",
			rawName: "REFUND_PROFITS",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		REFUND_SERVICE_FEE: {
			nullable: "N",
			isPk: false,
			description: "退回实时扣除佣金（手续费）",
			name: "refundServiceFee",
			rawName: "REFUND_SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_MANY_FACE: {
			nullable: "N",
			isPk: false,
			description: "上游多冲的面值",
			name: "upManyFace",
			rawName: "UP_MANY_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_MANY_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "上游多冲的金额",
			name: "upManyAmount",
			rawName: "UP_MANY_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SNAP_TIME: {
			nullable: "N",
			isPk: false,
			description: "快照时间(交易数据日期)",
			name: "snapTime",
			rawName: "SNAP_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		ADD_STATUS: {
			nullable: "N",
			isPk: false,
			description: "账户加款状态 1.未开始，2.正在扣款，0.扣款完成，9.加款失败",
			name: "addStatus",
			rawName: "ADD_STATUS",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		STATISTICS_TYPE: {
			nullable: "Y",
			isPk: false,
			description: "统计类型，1.流量数据包，2前向流量充值，3话费、固话，4.加油卡充值，5.Q币、游戏币",
			name: "statisticsType",
			rawName: "STATISTICS_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		CHANNEL_NAME: {
			nullable: "Y",
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
			nullable: "Y",
			isPk: false,
			description: "支付账户名称",
			name: "accountName",
			rawName: "ACCOUNT_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
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
		}
	}
};

