exports.fdB2eBankReceiveRecord = {
	name: "fdB2eBankReceiveRecord",
	rawName: "FD_B2E_BANK_RECEIVE_RECORD",
	columns: {
		RECORD_ID: {
			nullable: "N",
			isPk: false,
			description: "记录编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		BANK_ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "银行账户",
			name: "bankAccountId",
			rawName: "BANK_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TASK_ID: {
			nullable: "N",
			isPk: false,
			description: "任务编号",
			name: "taskId",
			rawName: "TASK_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CREATE_TIME: {
			nullable: "N",
			isPk: false,
			description: "创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		RECEIVE_TIME: {
			nullable: "N",
			isPk: false,
			description: "收款时间",
			name: "receiveTime",
			rawName: "RECEIVE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		RECEIVE_NO: {
			nullable: "N",
			isPk: false,
			description: "银行外部收款编号",
			name: "receiveNo",
			rawName: "RECEIVE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		BANK_SVR_SEQ: {
			nullable: "N",
			isPk: false,
			description: "银行交易流水号",
			name: "bankSvrSeq",
			rawName: "BANK_SVR_SEQ",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		BANK_CERT_NO: {
			nullable: "N",
			isPk: false,
			description: "银行凭证号",
			name: "bankCertNo",
			rawName: "BANK_CERT_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		RECEIVE_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "银行收款金额",
			name: "receiveAmount",
			rawName: "RECEIVE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TRADE_TYPE: {
			nullable: "N",
			isPk: false,
			description: "交易类型 :支 2：收",
			name: "tradeType",
			rawName: "TRADE_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		CLIENT_CARD_NO: {
			nullable: "N",
			isPk: false,
			description: "客户银行账号",
			name: "clientCardNo",
			rawName: "CLIENT_CARD_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CLIENT_COMPANY_NAME: {
			nullable: "N",
			isPk: false,
			description: "客户公司名称",
			name: "clientCompanyName",
			rawName: "CLIENT_COMPANY_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CLIENT_BANK_NAME: {
			nullable: "N",
			isPk: false,
			description: "客户开户银行",
			name: "clientBankName",
			rawName: "CLIENT_BANK_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CLIENT_AREA_CODE: {
			nullable: "N",
			isPk: false,
			description: "客户地区编码",
			name: "clientAreaCode",
			rawName: "CLIENT_AREA_CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CLIENT_BANK_ADDRESS: {
			nullable: "N",
			isPk: false,
			description: "客户开户银行地址",
			name: "clientBankAddress",
			rawName: "CLIENT_BANK_ADDRESS",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		MATCH_TYPE: {
			nullable: "N",
			isPk: false,
			description: "匹配渠道方式,1系统自动匹配，2人工匹配",
			name: "matchType",
			rawName: "MATCH_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		DEAL_STATUS: {
			nullable: "N",
			isPk: false,
			description: "交易处理状态：0完成，1未开始，2等待，3正在， 9无需处理",
			name: "dealStatus",
			rawName: "DEAL_STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		CHANNEL_NO: {
			nullable: "Y",
			isPk: false,
			description: "渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CHANNEL_ACCOUNT_ID: {
			nullable: "Y",
			isPk: false,
			description: "渠道账户编号",
			name: "channelAccountId",
			rawName: "CHANNEL_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANNAL_TYPE: {
			nullable: "Y",
			isPk: false,
			description: "渠道类型,1上游渠道、2下游渠道 、9无",
			name: "channalType",
			rawName: "CHANNAL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		RECEIVE_TYPE: {
			nullable: "Y",
			isPk: false,
			description: "交易处理类:1.下游渠道加款，2.上游渠道返佣，3.收取押金，4.收取保证金，5.收取手续费 99无需处理",
			name: "receiveType",
			rawName: "RECEIVE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		SYS_FUND_ID: {
			nullable: "Y",
			isPk: false,
			description: "内部资金变动编号",
			name: "sysFundId",
			rawName: "SYS_FUND_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		BANK_REMARK: {
			nullable: "Y",
			isPk: false,
			description: "银行摘要",
			name: "bankRemark",
			rawName: "BANK_REMARK",
			type: {
				name: "VARCHAR2",
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
		},
		SYS_FLOW_ID: {
			nullable: "Y",
			isPk: false,
			description: "系统流水号",
			name: "sysFlowId",
			rawName: "SYS_FLOW_ID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		APPLY_ID: {
			nullable: "Y",
			isPk: false,
			description: "下游加款申请id编号（处理结束后添加）",
			name: "applyId",
			rawName: "APPLY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

