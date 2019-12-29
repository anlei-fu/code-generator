exports.fdB2eBankReceiveRecord = {
	name: "fdB2eBankReceiveRecord",
	rawName: "FD_B2E_BANK_RECEIVE_RECORD",
	columns: {
		recordId: {
			nullable: false,
			isPk: false,
			description: "记录编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		bankAccountId: {
			nullable: false,
			isPk: false,
			description: "银行账户",
			name: "bankAccountId",
			rawName: "BANK_ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		taskId: {
			nullable: false,
			isPk: false,
			description: "任务编号",
			name: "taskId",
			rawName: "TASK_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		createTime: {
			nullable: false,
			isPk: false,
			description: "创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		receiveTime: {
			nullable: false,
			isPk: false,
			description: "收款时间",
			name: "receiveTime",
			rawName: "RECEIVE_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		receiveNo: {
			nullable: false,
			isPk: false,
			description: "银行外部收款编号",
			name: "receiveNo",
			rawName: "RECEIVE_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		bankSvrSeq: {
			nullable: false,
			isPk: false,
			description: "银行交易流水号",
			name: "bankSvrSeq",
			rawName: "BANK_SVR_SEQ",
			type: {
				name: "varchar2",
				length: null
			}
		},
		bankCertNo: {
			nullable: false,
			isPk: false,
			description: "银行凭证号",
			name: "bankCertNo",
			rawName: "BANK_CERT_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		receiveAmount: {
			nullable: false,
			isPk: false,
			description: "银行收款金额",
			name: "receiveAmount",
			rawName: "RECEIVE_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		tradeType: {
			nullable: false,
			isPk: false,
			description: "交易类型 :支 2：收",
			name: "tradeType",
			rawName: "TRADE_TYPE",
			type: {
				name: "number",
				length: 1
			}
		},
		clientCardNo: {
			nullable: false,
			isPk: false,
			description: "客户银行账号",
			name: "clientCardNo",
			rawName: "CLIENT_CARD_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		clientCompanyName: {
			nullable: false,
			isPk: false,
			description: "客户公司名称",
			name: "clientCompanyName",
			rawName: "CLIENT_COMPANY_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		clientBankName: {
			nullable: false,
			isPk: false,
			description: "客户开户银行",
			name: "clientBankName",
			rawName: "CLIENT_BANK_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		clientAreaCode: {
			nullable: false,
			isPk: false,
			description: "客户地区编码",
			name: "clientAreaCode",
			rawName: "CLIENT_AREA_CODE",
			type: {
				name: "varchar2",
				length: null
			}
		},
		clientBankAddress: {
			nullable: false,
			isPk: false,
			description: "客户开户银行地址",
			name: "clientBankAddress",
			rawName: "CLIENT_BANK_ADDRESS",
			type: {
				name: "varchar2",
				length: null
			}
		},
		matchType: {
			nullable: false,
			isPk: false,
			description: "匹配渠道方式",
			name: "matchType",
			rawName: "MATCH_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		dealStatus: {
			nullable: false,
			isPk: false,
			description: "交易处理状态：0完成，1未开始，2等待，3正在， 9无需处理",
			name: "dealStatus",
			rawName: "DEAL_STATUS",
			type: {
				name: "number",
				length: 1
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
		channelAccountId: {
			nullable: false,
			isPk: false,
			description: "渠道账户编号",
			name: "channelAccountId",
			rawName: "CHANNEL_ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		channalType: {
			nullable: false,
			isPk: false,
			description: "渠道类型",
			name: "channalType",
			rawName: "CHANNAL_TYPE",
			type: {
				name: "number",
				length: 1
			}
		},
		receiveType: {
			nullable: false,
			isPk: false,
			description: "交易处理类:1.下游渠道加款，2.上游渠道返佣，3.收取押金，4.收取保证金，5.收取手续费 99无需处理",
			name: "receiveType",
			rawName: "RECEIVE_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		sysFundId: {
			nullable: false,
			isPk: false,
			description: "内部资金变动编号",
			name: "sysFundId",
			rawName: "SYS_FUND_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		bankRemark: {
			nullable: false,
			isPk: false,
			description: "银行摘要",
			name: "bankRemark",
			rawName: "BANK_REMARK",
			type: {
				name: "varchar2",
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
		},
		sysFlowId: {
			nullable: false,
			isPk: false,
			description: "系统流水号",
			name: "sysFlowId",
			rawName: "SYS_FLOW_ID",
			type: {
				name: "varchar2",
				length: null
			}
		},
		applyId: {
			nullable: false,
			isPk: false,
			description: "下游加款申请id编号（处理结束后添加）",
			name: "applyId",
			rawName: "APPLY_ID",
			type: {
				name: "number",
				length: 20
			}
		}
	}
};

