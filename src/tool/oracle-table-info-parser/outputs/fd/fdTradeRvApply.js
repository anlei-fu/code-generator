exports.fdTradeRvApply = {
	name: "fdTradeRvApply",
	rawName: "FD_TRADE_RV_APPLY",
	columns: {
		applyId: {
			nullable: false,
			isPk: false,
			description: "申请记录编号",
			name: "applyId",
			rawName: "APPLY_ID",
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
			description: "账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "varchar2",
				length: null
			}
		},
		channelType: {
			nullable: false,
			isPk: false,
			description: "渠道类型，1上游，2下游",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		businessType: {
			nullable: false,
			isPk: false,
			description: "业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		billType: {
			nullable: false,
			isPk: false,
			description: "前后项信息",
			name: "billType",
			rawName: "BILL_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		differAmount: {
			nullable: false,
			isPk: false,
			description: "差异金额",
			name: "differAmount",
			rawName: "DIFFER_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		differReason: {
			nullable: false,
			isPk: false,
			description: "差异原因",
			name: "differReason",
			rawName: "DIFFER_REASON",
			type: {
				name: "varchar2",
				length: null
			}
		},
		differDetail: {
			nullable: false,
			isPk: false,
			description: "差异详情",
			name: "differDetail",
			rawName: "DIFFER_DETAIL",
			type: {
				name: "varchar2",
				length: null
			}
		},
		applyTime: {
			nullable: false,
			isPk: false,
			description: "申请时间",
			name: "applyTime",
			rawName: "APPLY_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		applyUser: {
			nullable: false,
			isPk: false,
			description: "申请人",
			name: "applyUser",
			rawName: "APPLY_USER",
			type: {
				name: "varchar2",
				length: null
			}
		},
		applyStatus: {
			nullable: false,
			isPk: false,
			description: "申请所处状态 1提交申请，9作废，0处理完成",
			name: "applyStatus",
			rawName: "APPLY_STATUS",
			type: {
				name: "number",
				length: 3
			}
		},
		dealRvType: {
			nullable: false,
			isPk: false,
			description: "处理平账类型，1交易平账，2余额平账",
			name: "dealRvType",
			rawName: "DEAL_RV_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		dealBusinessType: {
			nullable: false,
			isPk: false,
			description: "处理业务类型",
			name: "dealBusinessType",
			rawName: "DEAL_BUSINESS_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		dealBillType: {
			nullable: false,
			isPk: false,
			description: "处理前后项信息",
			name: "dealBillType",
			rawName: "DEAL_BILL_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		dealTradeAmount: {
			nullable: false,
			isPk: false,
			description: "处理平账交易金额",
			name: "dealTradeAmount",
			rawName: "DEAL_TRADE_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		dealRealAmount: {
			nullable: false,
			isPk: false,
			description: "处理平账真实金额",
			name: "dealRealAmount",
			rawName: "DEAL_REAL_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		dealTime: {
			nullable: false,
			isPk: false,
			description: "处理时间",
			name: "dealTime",
			rawName: "DEAL_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		dealUser: {
			nullable: false,
			isPk: false,
			description: "处理人",
			name: "dealUser",
			rawName: "DEAL_USER",
			type: {
				name: "varchar2",
				length: null
			}
		},
		dealFlowId: {
			nullable: false,
			isPk: false,
			description: "关联平账流水号",
			name: "dealFlowId",
			rawName: "DEAL_FLOW_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		dealMemo: {
			nullable: false,
			isPk: false,
			description: "处理备注",
			name: "dealMemo",
			rawName: "DEAL_MEMO",
			type: {
				name: "varchar2",
				length: null
			}
		}
	}
};

