exports.fdB2ePaymentRecordMain = {
	name: "fdB2ePaymentRecordMain",
	rawName: "FD_B2E_PAYMENT_RECORD_MAIN",
	columns: {
		recordId: {
			nullable: false,
			isPk: false,
			description: "记录编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		bankId: {
			nullable: false,
			isPk: false,
			description: "出账银行编号（fd_b2e_bank_payment_account.bank_account_id）",
			name: "bankId",
			rawName: "BANK_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		bankAddTypeId: {
			nullable: false,
			isPk: false,
			description: "银行卡转账(fd_b2e_bank_payment_account.id)",
			name: "bankAddTypeId",
			rawName: "BANK_ADD_TYPE_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		paymentType: {
			nullable: false,
			isPk: false,
			description: "转账类:1.上游渠道加款，2.下游渠道返佣，3.支付押金，4.支付保证金",
			name: "paymentType",
			rawName: "PAYMENT_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		bankCardNo: {
			nullable: false,
			isPk: false,
			description: "付款银行账户",
			name: "bankCardNo",
			rawName: "BANK_CARD_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		bankCardName: {
			nullable: false,
			isPk: false,
			description: "付款账户名称",
			name: "bankCardName",
			rawName: "BANK_CARD_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		recvType: {
			nullable: false,
			isPk: false,
			description: "收款方类型,1上游、2下游、3其它",
			name: "recvType",
			rawName: "RECV_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		channalNo: {
			nullable: true,
			isPk: false,
			description: "渠道编号",
			name: "channalNo",
			rawName: "CHANNAL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		channelAccountId: {
			nullable: true,
			isPk: false,
			description: "渠道账户编号",
			name: "channelAccountId",
			rawName: "CHANNEL_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		createTime: {
			nullable: false,
			isPk: false,
			description: "创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		totalAmount: {
			nullable: false,
			isPk: false,
			description: "总付款金额",
			name: "totalAmount",
			rawName: "TOTAL_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		totalServiceFee: {
			nullable: false,
			isPk: false,
			description: "总需支付的手续费",
			name: "totalServiceFee",
			rawName: "TOTAL_SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		whiteListId: {
			nullable: true,
			isPk: false,
			description: "白名单编号",
			name: "whiteListId",
			rawName: "WHITE_LIST_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		clientReceiveCardNo: {
			nullable: false,
			isPk: false,
			description: "客户收款银行卡编号",
			name: "clientReceiveCardNo",
			rawName: "CLIENT_RECEIVE_CARD_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		subRecordCount: {
			nullable: false,
			isPk: false,
			description: "子记录总条数",
			name: "subRecordCount",
			rawName: "SUB_RECORD_COUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		intSubAmount: {
			nullable: false,
			isPk: false,
			description: "前N-1笔转账金额的单笔金额（(SUB_RECORD_COUNT-1)*INT_SUB_AMOUNT+LAST_SUB_AMOUNT）=TOTAL_AMOUNT",
			name: "intSubAmount",
			rawName: "INT_SUB_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		lastSubAmount: {
			nullable: false,
			isPk: false,
			description: "最后一笔金额（余数）",
			name: "lastSubAmount",
			rawName: "LAST_SUB_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		intSubServiceFee: {
			nullable: false,
			isPk: false,
			description: "前N-1笔手续费的单笔手续费",
			name: "intSubServiceFee",
			rawName: "INT_SUB_SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		lastSubServiceFee: {
			nullable: false,
			isPk: false,
			description: "最后一笔的手续费",
			name: "lastSubServiceFee",
			rawName: "LAST_SUB_SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		submitSuccessAmount: {
			nullable: false,
			isPk: false,
			description: "提交成功金额",
			name: "submitSuccessAmount",
			rawName: "SUBMIT_SUCCESS_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		arrivalSuccessAmount: {
			nullable: false,
			isPk: false,
			description: "成功到账金额",
			name: "arrivalSuccessAmount",
			rawName: "ARRIVAL_SUCCESS_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		arrivalServiceFee: {
			nullable: false,
			isPk: false,
			description: "成功到账的手续费",
			name: "arrivalServiceFee",
			rawName: "ARRIVAL_SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		expireTime: {
			nullable: false,
			isPk: false,
			description: "过期时间",
			name: "expireTime",
			rawName: "EXPIRE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		paymentAuditType: {
			nullable: false,
			isPk: false,
			description: "转账金额审核类型 :运营审核  2：财务审核",
			name: "paymentAuditType",
			rawName: "PAYMENT_AUDIT_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		paymentAuditStatus: {
			nullable: false,
			isPk: false,
			description: "转账金额审核状态，1未开始,2等待执行,3正在执行,0执行完成 9取消",
			name: "paymentAuditStatus",
			rawName: "PAYMENT_AUDIT_STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		paymentAuditUser: {
			nullable: true,
			isPk: false,
			description: "转账金额审核操作人",
			name: "paymentAuditUser",
			rawName: "PAYMENT_AUDIT_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		paymentAuditTime: {
			nullable: true,
			isPk: false,
			description: "转账金额审核操作时间",
			name: "paymentAuditTime",
			rawName: "PAYMENT_AUDIT_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		receivedAuditStatus: {
			nullable: false,
			isPk: false,
			description: "到账审核状态1未开始,2等待执行,3正在执行,0执行完成 9无需处理",
			name: "receivedAuditStatus",
			rawName: "RECEIVED_AUDIT_STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		receivedAuditUser: {
			nullable: true,
			isPk: false,
			description: "到账审核人",
			name: "receivedAuditUser",
			rawName: "RECEIVED_AUDIT_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		receivedAuditTime: {
			nullable: true,
			isPk: false,
			description: "到账审核时间",
			name: "receivedAuditTime",
			rawName: "RECEIVED_AUDIT_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		receivedAuditMemo: {
			nullable: true,
			isPk: false,
			description: "到账审核备注",
			name: "receivedAuditMemo",
			rawName: "RECEIVED_AUDIT_MEMO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		receivedSuccessAmount: {
			nullable: false,
			isPk: false,
			description: "已录入系统的支付金额",
			name: "receivedSuccessAmount",
			rawName: "RECEIVED_SUCCESS_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		receivedSuccessServiceFee: {
			nullable: false,
			isPk: false,
			description: "已录入系统的支付手续费",
			name: "receivedSuccessServiceFee",
			rawName: "RECEIVED_SUCCESS_SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		createType: {
			nullable: false,
			isPk: false,
			description: "1.系统自动创建，2.操作员手工添加",
			name: "createType",
			rawName: "CREATE_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		addMemo: {
			nullable: true,
			isPk: false,
			description: "添加转账记录备注",
			name: "addMemo",
			rawName: "ADD_MEMO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

