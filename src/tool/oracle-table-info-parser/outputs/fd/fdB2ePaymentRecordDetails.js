exports.fdB2ePaymentRecordDetails = {
	name: "fdB2ePaymentRecordDetails",
	rawName: "FD_B2E_PAYMENT_RECORD_DETAILS",
	columns: {
		recordId: {
			nullable: false,
			isPk: true,
			description: "记录编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		mainRecordId: {
			nullable: false,
			isPk: false,
			description: "转账指令",
			name: "mainRecordId",
			rawName: "MAIN_RECORD_ID",
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
		clientCardNo: {
			nullable: false,
			isPk: false,
			description: "客户账户",
			name: "clientCardNo",
			rawName: "CLIENT_CARD_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		clientHolderName: {
			nullable: false,
			isPk: false,
			description: "客户姓名",
			name: "clientHolderName",
			rawName: "CLIENT_HOLDER_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		isSameBank: {
			nullable: false,
			isPk: false,
			description: "是否跨行，0同行",
			name: "isSameBank",
			rawName: "IS_SAME_BANK",
			type: {
				name: "number",
				length: 1
			}
		},
		totalAmount: {
			nullable: false,
			isPk: false,
			description: "转账金额",
			name: "totalAmount",
			rawName: "TOTAL_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		totalServiceFee: {
			nullable: false,
			isPk: false,
			description: "总手续费",
			name: "totalServiceFee",
			rawName: "TOTAL_SERVICE_FEE",
			type: {
				name: "number",
				length: 20
			}
		},
		clientCardType: {
			nullable: false,
			isPk: false,
			description: "收款账户类型：:对公；:对私",
			name: "clientCardType",
			rawName: "CLIENT_CARD_TYPE",
			type: {
				name: "number",
				length: 1
			}
		},
		clientBankName: {
			nullable: false,
			isPk: false,
			description: "收款人开户行名称",
			name: "clientBankName",
			rawName: "CLIENT_BANK_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		clientBankAddr: {
			nullable: false,
			isPk: false,
			description: "收款人开户行地址",
			name: "clientBankAddr",
			rawName: "CLIENT_BANK_ADDR",
			type: {
				name: "varchar2",
				length: null
			}
		},
		clientBankCode: {
			nullable: false,
			isPk: false,
			description: "开户行行号",
			name: "clientBankCode",
			rawName: "CLIENT_BANK_CODE",
			type: {
				name: "varchar2",
				length: null
			}
		},
		clientAreaCode: {
			nullable: false,
			isPk: false,
			description: "收款行地区编号",
			name: "clientAreaCode",
			rawName: "CLIENT_AREA_CODE",
			type: {
				name: "varchar2",
				length: null
			}
		},
		submitAmount: {
			nullable: false,
			isPk: false,
			description: "提交金额",
			name: "submitAmount",
			rawName: "SUBMIT_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		arrivalAmount: {
			nullable: false,
			isPk: false,
			description: "到账金额",
			name: "arrivalAmount",
			rawName: "ARRIVAL_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		submitRemark: {
			nullable: false,
			isPk: false,
			description: "提交摘要",
			name: "submitRemark",
			rawName: "SUBMIT_REMARK",
			type: {
				name: "varchar2",
				length: null
			}
		},
		submitStatus: {
			nullable: false,
			isPk: false,
			description: "加款状态1未开始",
			name: "submitStatus",
			rawName: "SUBMIT_STATUS",
			type: {
				name: "number",
				length: 1
			}
		},
		submitErrorCode: {
			nullable: false,
			isPk: false,
			description: "响应结果码",
			name: "submitErrorCode",
			rawName: "SUBMIT_ERROR_CODE",
			type: {
				name: "varchar2",
				length: null
			}
		},
		submitDealCode: {
			nullable: false,
			isPk: false,
			description: "本地响应结果码",
			name: "submitDealCode",
			rawName: "SUBMIT_DEAL_CODE",
			type: {
				name: "varchar2",
				length: null
			}
		},
		submitErrorMsg: {
			nullable: false,
			isPk: false,
			description: "提交返回信息",
			name: "submitErrorMsg",
			rawName: "SUBMIT_ERROR_MSG",
			type: {
				name: "varchar2",
				length: null
			}
		},
		bankServerId: {
			nullable: false,
			isPk: false,
			description: "服务器响应成功返回的交易标识",
			name: "bankServerId",
			rawName: "BANK_SERVER_ID",
			type: {
				name: "varchar2",
				length: null
			}
		},
		bankAccountBalance: {
			nullable: false,
			isPk: false,
			description: "银行账户余额",
			name: "bankAccountBalance",
			rawName: "BANK_ACCOUNT_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		queryStatus: {
			nullable: false,
			isPk: false,
			description: "查询状态1未开始",
			name: "queryStatus",
			rawName: "QUERY_STATUS",
			type: {
				name: "number",
				length: 1
			}
		},
		queryTime: {
			nullable: false,
			isPk: false,
			description: "查询时间",
			name: "queryTime",
			rawName: "QUERY_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		nextQueryTime: {
			nullable: false,
			isPk: false,
			description: "下次查询时间",
			name: "nextQueryTime",
			rawName: "NEXT_QUERY_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		queryErrorCode: {
			nullable: false,
			isPk: false,
			description: "查询状态码",
			name: "queryErrorCode",
			rawName: "QUERY_ERROR_CODE",
			type: {
				name: "varchar2",
				length: null
			}
		},
		queryDealCode: {
			nullable: false,
			isPk: false,
			description: "本地状态码",
			name: "queryDealCode",
			rawName: "QUERY_DEAL_CODE",
			type: {
				name: "varchar2",
				length: null
			}
		},
		queryErrorMsg: {
			nullable: false,
			isPk: false,
			description: "查询结果信息",
			name: "queryErrorMsg",
			rawName: "QUERY_ERROR_MSG",
			type: {
				name: "varchar2",
				length: null
			}
		},
		manualMsg: {
			nullable: false,
			isPk: false,
			description: "人工审核消息",
			name: "manualMsg",
			rawName: "MANUAL_MSG",
			type: {
				name: "varchar2",
				length: null
			}
		},
		submitTime: {
			nullable: false,
			isPk: false,
			description: "提交时间",
			name: "submitTime",
			rawName: "SUBMIT_TIME",
			type: {
				name: "date",
				length: null
			}
		}
	}
};

