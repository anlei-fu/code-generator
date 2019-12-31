exports.fdTradeDownAddApply = {
	name: "fdTradeDownAddApply",
	rawName: "FD_TRADE_DOWN_ADD_APPLY",
	columns: {
		APPLY_ID: {
			nullable: "N",
			isPk: false,
			description: "申请编号",
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
			description: "渠道账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ADD_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "申请加款金额",
			name: "addAmount",
			rawName: "ADD_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		APPLY_ACCOUNT_NO: {
			nullable: "N",
			isPk: false,
			description: "客户打款账号",
			name: "applyAccountNo",
			rawName: "APPLY_ACCOUNT_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		BANK_TYPE: {
			nullable: "N",
			isPk: false,
			description: "银行类型-1.其它0.财付通1.支付宝2.移动钱包3.19E钱包4.银行账户5.北京银行6.建设银行7.京东8.民生银行9.联通迷你10.交通银行11.财付通企业",
			name: "bankType",
			rawName: "BANK_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		APPLY_ACCOUNT_NAME: {
			nullable: "N",
			isPk: false,
			description: "客户账户名称",
			name: "applyAccountName",
			rawName: "APPLY_ACCOUNT_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		APPLY_OPEN_BANK_NAME: {
			nullable: "N",
			isPk: false,
			description: "客户开户行名称",
			name: "applyOpenBankName",
			rawName: "APPLY_OPEN_BANK_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		STATUS: {
			nullable: "N",
			isPk: false,
			description: "处理状态0：处理完成，10：未处理，20：处理中，90：处理失败",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		CREATE_TIME: {
			nullable: "N",
			isPk: false,
			description: "申请时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		CREATE_USER: {
			nullable: "N",
			isPk: false,
			description: "申请人",
			name: "createUser",
			rawName: "CREATE_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PAY_TIME: {
			nullable: "N",
			isPk: false,
			description: "付款时间",
			name: "payTime",
			rawName: "PAY_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		TRAN_NO: {
			nullable: "Y",
			isPk: false,
			description: "柜员交易号（处理成功添加）",
			name: "tranNo",
			rawName: "TRAN_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		HANDLE_TIME: {
			nullable: "Y",
			isPk: false,
			description: "处理时间（处理后添加）",
			name: "handleTime",
			rawName: "HANDLE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		ERROR_MSG: {
			nullable: "Y",
			isPk: false,
			description: "错误消息（处理失败后添加）",
			name: "errorMsg",
			rawName: "ERROR_MSG",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		AUDIT_USER: {
			nullable: "Y",
			isPk: false,
			description: "处理人",
			name: "auditUser",
			rawName: "AUDIT_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		FLOW_STATUS: {
			nullable: "N",
			isPk: false,
			description: "流水状态修改  0：已修改，10：未修改 ，20：修改中，90：失败",
			name: "flowStatus",
			rawName: "FLOW_STATUS",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		AUDIT_MEMO: {
			nullable: "Y",
			isPk: false,
			description: "处理备注",
			name: "auditMemo",
			rawName: "AUDIT_MEMO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		BANK_ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "收款银行id",
			name: "bankAccountId",
			rawName: "BANK_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		RECIVE_TIME: {
			nullable: "Y",
			isPk: false,
			description: "收款时间",
			name: "reciveTime",
			rawName: "RECIVE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		MEMO: {
			nullable: "Y",
			isPk: false,
			description: "加款申请备注",
			name: "memo",
			rawName: "MEMO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};
