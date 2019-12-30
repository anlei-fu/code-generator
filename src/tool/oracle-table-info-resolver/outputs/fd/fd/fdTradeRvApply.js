exports.fdTradeRvApply = {
	name: "fdTradeRvApply",
	rawName: "FD_TRADE_RV_APPLY",
	columns: {
		APPLY_ID: {
			nullable: "N",
			isPk: false,
			description: "申请记录编号",
			name: "applyId",
			rawName: "APPLY_ID",
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
			description: "账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CHANNEL_TYPE: {
			nullable: "N",
			isPk: false,
			description: "渠道类型，1上游，2下游",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
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
			description: "前后项信息",
			name: "billType",
			rawName: "BILL_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		DIFFER_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "差异金额",
			name: "differAmount",
			rawName: "DIFFER_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DIFFER_REASON: {
			nullable: "N",
			isPk: false,
			description: "差异原因",
			name: "differReason",
			rawName: "DIFFER_REASON",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		DIFFER_DETAIL: {
			nullable: "Y",
			isPk: false,
			description: "差异详情",
			name: "differDetail",
			rawName: "DIFFER_DETAIL",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		APPLY_TIME: {
			nullable: "N",
			isPk: false,
			description: "申请时间",
			name: "applyTime",
			rawName: "APPLY_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		APPLY_USER: {
			nullable: "N",
			isPk: false,
			description: "申请人",
			name: "applyUser",
			rawName: "APPLY_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		APPLY_STATUS: {
			nullable: "N",
			isPk: false,
			description: "申请所处状态 1提交申请，9作废，0处理完成",
			name: "applyStatus",
			rawName: "APPLY_STATUS",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		DEAL_RV_TYPE: {
			nullable: "Y",
			isPk: false,
			description: "处理平账类型，1交易平账，2余额平账",
			name: "dealRvType",
			rawName: "DEAL_RV_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		DEAL_BUSINESS_TYPE: {
			nullable: "Y",
			isPk: false,
			description: "处理业务类型",
			name: "dealBusinessType",
			rawName: "DEAL_BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		DEAL_BILL_TYPE: {
			nullable: "Y",
			isPk: false,
			description: "处理前后项信息",
			name: "dealBillType",
			rawName: "DEAL_BILL_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		DEAL_TRADE_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "处理平账交易金额",
			name: "dealTradeAmount",
			rawName: "DEAL_TRADE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DEAL_REAL_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "处理平账真实金额",
			name: "dealRealAmount",
			rawName: "DEAL_REAL_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DEAL_TIME: {
			nullable: "Y",
			isPk: false,
			description: "处理时间",
			name: "dealTime",
			rawName: "DEAL_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		DEAL_USER: {
			nullable: "Y",
			isPk: false,
			description: "处理人",
			name: "dealUser",
			rawName: "DEAL_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		DEAL_FLOW_ID: {
			nullable: "Y",
			isPk: false,
			description: "关联平账流水号",
			name: "dealFlowId",
			rawName: "DEAL_FLOW_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DEAL_MEMO: {
			nullable: "Y",
			isPk: false,
			description: "处理备注",
			name: "dealMemo",
			rawName: "DEAL_MEMO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

