exports.fdBankStreamFull = {
	name: "fdBankStreamFull",
	rawName: "FD_BANK_STREAM_FULL",
	columns: {
		bankAccountId: {
			nullable: false,
			isPk: false,
			description: "银行账户编号",
			name: "bankAccountId",
			rawName: "BANK_ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		id: {
			nullable: false,
			isPk: false,
			description: "流水编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "number",
				length: 20
			}
		},
		cardNo: {
			nullable: false,
			isPk: false,
			description: "己方银行账户",
			name: "cardNo",
			rawName: "CARD_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		bankType: {
			nullable: false,
			isPk: false,
			description: "银行类型-1.其它0.财付通1.支付宝2.移动钱包3.19E钱包4.银行账户5.北京银行6.建设银行7.京东8.民生银行9.联通迷你10.交通银行11.财付通企业",
			name: "bankType",
			rawName: "BANK_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		tranDate: {
			nullable: false,
			isPk: false,
			description: "交易时间",
			name: "tranDate",
			rawName: "TRAN_DATE",
			type: {
				name: "date",
				length: null
			}
		},
		tranNo: {
			nullable: false,
			isPk: false,
			description: "柜员交易号",
			name: "tranNo",
			rawName: "TRAN_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		sumTranNo: {
			nullable: false,
			isPk: false,
			description: "总交易流水号",
			name: "sumTranNo",
			rawName: "SUM_TRAN_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		tranAmount: {
			nullable: false,
			isPk: false,
			description: "交易金额",
			name: "tranAmount",
			rawName: "TRAN_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		creditDebitFlag: {
			nullable: false,
			isPk: false,
			description: "借贷标识:借，C：贷",
			name: "creditDebitFlag",
			rawName: "CREDIT_DEBIT_FLAG",
			type: {
				name: "varchar2",
				length: null
			}
		},
		oppAccountNo: {
			nullable: false,
			isPk: false,
			description: "对方账号",
			name: "oppAccountNo",
			rawName: "OPP_ACCOUNT_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		oppAccountName: {
			nullable: false,
			isPk: false,
			description: "对方账户名称",
			name: "oppAccountName",
			rawName: "OPP_ACCOUNT_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		oppOpenBankName: {
			nullable: false,
			isPk: false,
			description: "对方开户行名称",
			name: "oppOpenBankName",
			rawName: "OPP_OPEN_BANK_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		abstract: {
			nullable: false,
			isPk: false,
			description: "附言",
			name: "abstract",
			rawName: "ABSTRACT",
			type: {
				name: "varchar2",
				length: null
			}
		},
		balance: {
			nullable: false,
			isPk: false,
			description: "账户余额",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		hostTranCode: {
			nullable: false,
			isPk: false,
			description: "主机交易码",
			name: "hostTranCode",
			rawName: "HOST_TRAN_CODE",
			type: {
				name: "varchar2",
				length: null
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
		cashTransferFlag: {
			nullable: false,
			isPk: false,
			description: "现转标识 0：现金；1：转帐",
			name: "cashTransferFlag",
			rawName: "CASH_TRANSFER_FLAG",
			type: {
				name: "number",
				length: 2
			}
		}
	}
};

