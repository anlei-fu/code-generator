exports.fdB2ePaymentRecordDetails = {
	name: "fdB2ePaymentRecordDetails",
	rawName: "FD_B2E_PAYMENT_RECORD_DETAILS",
	columns: {
		RECORD_ID: {
			nullable: "N",
			isPk: true,
			description: "记录编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		MAIN_RECORD_ID: {
			nullable: "N",
			isPk: false,
			description: "转账指令",
			name: "mainRecordId",
			rawName: "MAIN_RECORD_ID",
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
		CLIENT_CARD_NO: {
			nullable: "N",
			isPk: false,
			description: "客户账户",
			name: "clientCardNo",
			rawName: "CLIENT_CARD_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CLIENT_HOLDER_NAME: {
			nullable: "N",
			isPk: false,
			description: "客户姓名",
			name: "clientHolderName",
			rawName: "CLIENT_HOLDER_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		IS_SAME_BANK: {
			nullable: "N",
			isPk: false,
			description: "是否跨行，0同行,1跨行",
			name: "isSameBank",
			rawName: "IS_SAME_BANK",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		TOTAL_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "转账金额",
			name: "totalAmount",
			rawName: "TOTAL_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TOTAL_SERVICE_FEE: {
			nullable: "N",
			isPk: false,
			description: "总手续费",
			name: "totalServiceFee",
			rawName: "TOTAL_SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CLIENT_CARD_TYPE: {
			nullable: "N",
			isPk: false,
			description: "收款账户类型：:对公；:对私",
			name: "clientCardType",
			rawName: "CLIENT_CARD_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		CLIENT_BANK_NAME: {
			nullable: "N",
			isPk: false,
			description: "收款人开户行名称",
			name: "clientBankName",
			rawName: "CLIENT_BANK_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CLIENT_BANK_ADDR: {
			nullable: "Y",
			isPk: false,
			description: "收款人开户行地址",
			name: "clientBankAddr",
			rawName: "CLIENT_BANK_ADDR",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CLIENT_BANK_CODE: {
			nullable: "Y",
			isPk: false,
			description: "开户行行号",
			name: "clientBankCode",
			rawName: "CLIENT_BANK_CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CLIENT_AREA_CODE: {
			nullable: "Y",
			isPk: false,
			description: "收款行地区编号",
			name: "clientAreaCode",
			rawName: "CLIENT_AREA_CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		SUBMIT_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "提交金额",
			name: "submitAmount",
			rawName: "SUBMIT_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ARRIVAL_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "到账金额",
			name: "arrivalAmount",
			rawName: "ARRIVAL_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SUBMIT_REMARK: {
			nullable: "Y",
			isPk: false,
			description: "提交摘要",
			name: "submitRemark",
			rawName: "SUBMIT_REMARK",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		SUBMIT_STATUS: {
			nullable: "N",
			isPk: false,
			description: "加款状态1未开始,2等待执行,3正在执行 4 执行完成,0执行成功",
			name: "submitStatus",
			rawName: "SUBMIT_STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		SUBMIT_ERROR_CODE: {
			nullable: "Y",
			isPk: false,
			description: "响应结果码",
			name: "submitErrorCode",
			rawName: "SUBMIT_ERROR_CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		SUBMIT_DEAL_CODE: {
			nullable: "Y",
			isPk: false,
			description: "本地响应结果码",
			name: "submitDealCode",
			rawName: "SUBMIT_DEAL_CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		SUBMIT_ERROR_MSG: {
			nullable: "Y",
			isPk: false,
			description: "提交返回信息",
			name: "submitErrorMsg",
			rawName: "SUBMIT_ERROR_MSG",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		BANK_SERVER_ID: {
			nullable: "Y",
			isPk: false,
			description: "服务器响应成功返回的交易标识",
			name: "bankServerId",
			rawName: "BANK_SERVER_ID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		BANK_ACCOUNT_BALANCE: {
			nullable: "Y",
			isPk: false,
			description: "银行账户余额",
			name: "bankAccountBalance",
			rawName: "BANK_ACCOUNT_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		QUERY_STATUS: {
			nullable: "N",
			isPk: false,
			description: "查询状态1未开始,2等待执行,3正在执行,0执行完成",
			name: "queryStatus",
			rawName: "QUERY_STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		QUERY_TIME: {
			nullable: "Y",
			isPk: false,
			description: "查询时间",
			name: "queryTime",
			rawName: "QUERY_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		NEXT_QUERY_TIME: {
			nullable: "N",
			isPk: false,
			description: "下次查询时间",
			name: "nextQueryTime",
			rawName: "NEXT_QUERY_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		QUERY_ERROR_CODE: {
			nullable: "Y",
			isPk: false,
			description: "查询状态码",
			name: "queryErrorCode",
			rawName: "QUERY_ERROR_CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		QUERY_DEAL_CODE: {
			nullable: "Y",
			isPk: false,
			description: "本地状态码",
			name: "queryDealCode",
			rawName: "QUERY_DEAL_CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		QUERY_ERROR_MSG: {
			nullable: "Y",
			isPk: false,
			description: "查询结果信息",
			name: "queryErrorMsg",
			rawName: "QUERY_ERROR_MSG",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		MANUAL_MSG: {
			nullable: "Y",
			isPk: false,
			description: "人工审核消息",
			name: "manualMsg",
			rawName: "MANUAL_MSG",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		SUBMIT_TIME: {
			nullable: "Y",
			isPk: false,
			description: "提交时间",
			name: "submitTime",
			rawName: "SUBMIT_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	}
};

