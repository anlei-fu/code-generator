let fd = {
	fdTradeOrderMainDiffer: {
		name: "fdTradeOrderMainDiffer",
		columns: {
			downFirstFace: {
				column: "downFirstFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游与上游扣款的时间差造成的差异面值(上下游扣款有时间差异时造成，下扣、下退、上扣、上退)"
			},
			downFirstAmount: {
				column: "downFirstAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游与上游扣款的时间差造成的差异金额"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游渠道支付账户编号"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			differId: {
				column: "differId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "记录生成日期"
			},
			fdOrderId: {
				column: "fdOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统订单号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			}
		}
	},
	fdB2eBankReceiveAccount: {
		name: "fdB2eBankReceiveAccount",
		columns: {
			cardNo: {
				column: "cardNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "银行卡号[来:FD_BANK_ACCOUNT_INFO]"
			},
			cardName: {
				column: "cardName",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "账户名称[来:FD_BANK_ACCOUNT_INFO]"
			},
			queryIntervalTime: {
				column: "queryIntervalTime",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "查询间隔时间"
			},
			useType: {
				column: "useType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "用途，下游收款 等"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户状态"
			},
			lastQueryTime: {
				column: "lastQueryTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后查询成功时间"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "银行账户编号[FD_BANK_ACCOUNT_INFO.account_id]"
			}
		}
	},
	fdB2eBankReceiveRecord: {
		name: "fdB2eBankReceiveRecord",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "记录编号"
			},
			bankAccountId: {
				column: "bankAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行账户"
			},
			taskId: {
				column: "taskId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "任务编号"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			receiveTime: {
				column: "receiveTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "收款时间"
			},
			receiveNo: {
				column: "receiveNo",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "银行外部收款编号"
			},
			bankSvrSeq: {
				column: "bankSvrSeq",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "银行交易流水号"
			},
			bankCertNo: {
				column: "bankCertNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "银行凭证号"
			},
			receiveAmount: {
				column: "receiveAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行收款金额"
			},
			tradeType: {
				column: "tradeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易类型 :支 2：收"
			},
			clientCardNo: {
				column: "clientCardNo",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "客户银行账号"
			},
			clientCompanyName: {
				column: "clientCompanyName",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "客户公司名称"
			},
			clientBankName: {
				column: "clientBankName",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "客户开户银行"
			},
			clientAreaCode: {
				column: "clientAreaCode",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "客户地区编码"
			},
			clientBankAddress: {
				column: "clientBankAddress",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "客户开户银行地址"
			},
			matchType: {
				column: "matchType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "匹配渠道方式"
			},
			dealStatus: {
				column: "dealStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易处理状态：0完成，1未开始，2等待，3正在， 9无需处理"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			channelAccountId: {
				column: "channelAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道账户编号"
			},
			channalType: {
				column: "channalType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道类型"
			},
			receiveType: {
				column: "receiveType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易处理类:1.下游渠道加款，2.上游渠道返佣，3.收取押金，4.收取保证金，5.收取手续费 99无需处理"
			},
			sysFundId: {
				column: "sysFundId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "内部资金变动编号"
			},
			bankRemark: {
				column: "bankRemark",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "银行摘要"
			},
			dealUser: {
				column: "dealUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "处理人"
			},
			dealTime: {
				column: "dealTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "处理时间"
			},
			dealMemo: {
				column: "dealMemo",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "处理备注"
			},
			sysFlowId: {
				column: "sysFlowId",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "系统流水号"
			},
			applyId: {
				column: "applyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游加款申请id编号（处理结束后添加）"
			}
		}
	},
	fdB2ePaymentRecordMain: {
		name: "fdB2ePaymentRecordMain",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "记录编号"
			},
			bankId: {
				column: "bankId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "出账银行编号（fd_b2e_bank_payment_account.bank_account_id）"
			},
			bankAddTypeId: {
				column: "bankAddTypeId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行卡转账(fd_b2e_bank_payment_account.id)"
			},
			paymentType: {
				column: "paymentType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "转账类:1.上游渠道加款，2.下游渠道返佣，3.支付押金，4.支付保证金"
			},
			bankCardNo: {
				column: "bankCardNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "付款银行账户"
			},
			bankCardName: {
				column: "bankCardName",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "付款账户名称"
			},
			recvType: {
				column: "recvType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "收款方类型"
			},
			channalNo: {
				column: "channalNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			channelAccountId: {
				column: "channelAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道账户编号"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			totalAmount: {
				column: "totalAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "总付款金额"
			},
			totalServiceFee: {
				column: "totalServiceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "总需支付的手续费"
			},
			whiteListId: {
				column: "whiteListId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "白名单编号"
			},
			clientReceiveCardNo: {
				column: "clientReceiveCardNo",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "客户收款银行卡编号"
			},
			subRecordCount: {
				column: "subRecordCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "子记录总条数"
			},
			intSubAmount: {
				column: "intSubAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "前N-1笔转账金额的单笔金额（(SUB_RECORD_COUNT-1)*INT_SUB_AMOUNT+LAST_SUB_AMOUNT）=TOTAL_AMOUNT"
			},
			lastSubAmount: {
				column: "lastSubAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "最后一笔金额（余数）"
			},
			intSubServiceFee: {
				column: "intSubServiceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "前N-1笔手续费的单笔手续费"
			},
			lastSubServiceFee: {
				column: "lastSubServiceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "最后一笔的手续费"
			},
			submitSuccessAmount: {
				column: "submitSuccessAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "提交成功金额"
			},
			arrivalSuccessAmount: {
				column: "arrivalSuccessAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "成功到账金额"
			},
			arrivalServiceFee: {
				column: "arrivalServiceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "成功到账的手续费"
			},
			expireTime: {
				column: "expireTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "过期时间"
			},
			paymentAuditType: {
				column: "paymentAuditType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "转账金额审核类型 :运营审核  2：财务审核"
			},
			paymentAuditStatus: {
				column: "paymentAuditStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "转账金额审核状态，1未开始"
			},
			paymentAuditUser: {
				column: "paymentAuditUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "转账金额审核操作人"
			},
			paymentAuditTime: {
				column: "paymentAuditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "转账金额审核操作时间"
			},
			receivedAuditStatus: {
				column: "receivedAuditStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "到账审核状态1未开始"
			},
			receivedAuditUser: {
				column: "receivedAuditUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "到账审核人"
			},
			receivedAuditTime: {
				column: "receivedAuditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "到账审核时间"
			},
			receivedAuditMemo: {
				column: "receivedAuditMemo",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "到账审核备注"
			},
			receivedSuccessAmount: {
				column: "receivedSuccessAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "已录入系统的支付金额"
			},
			receivedSuccessServiceFee: {
				column: "receivedSuccessServiceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "已录入系统的支付手续费"
			},
			createType: {
				column: "createType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "1.系统自动创建，2.操作员手工添加"
			},
			addMemo: {
				column: "addMemo",
				dataType: "varchar2",
				dataLength: 1024,
				nullable: false,
				isPk: false,
				description: "添加转账记录备注"
			}
		}
	},
	fdB2eBankPaymentAccount: {
		name: "fdB2eBankPaymentAccount",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "编号"
			},
			bankAccountId: {
				column: "bankAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "加款银行账户"
			},
			bankType: {
				column: "bankType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行类型（民生，中信）"
			},
			bankPaymentType: {
				column: "bankPaymentType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "付款方式，1代付，2、工作日小额网银，3大额网银"
			},
			workDayType: {
				column: "workDayType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "工作日分类(工作日，非工作日，所有)"
			},
			arrivalSuccessTime: {
				column: "arrivalSuccessTime",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "到账时间（分钟），0分钟、30分钟......"
			},
			useStartTime: {
				column: "useStartTime",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "开始使用时间hh24miss"
			},
			useEndTime: {
				column: "useEndTime",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "结束使用时间hh24miss"
			},
			maxAmount: {
				column: "maxAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "单笔最大金额"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "状态，0启用，1禁用"
			},
			sortId: {
				column: "sortId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "使用顺序编号"
			},
			rcvCardType: {
				column: "rcvCardType",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "收款账户类型：0通用"
			},
			isSameBank: {
				column: "isSameBank",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否跨行：0通用"
			}
		}
	},
	dkReportCommiProfitDaily: {
		name: "dkReportCommiProfitDaily",
		columns: {
			refundTotalUnit: {
				column: "refundTotalUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款规格"
			},
			refundTotalFace: {
				column: "refundTotalFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款面值"
			},
			refundDrawAmount: {
				column: "refundDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款金额"
			},
			refundRealAmount: {
				column: "refundRealAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实际退款金额"
			},
			profits: {
				column: "profits",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润"
			},
			serviceFee: {
				column: "serviceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实时扣除佣金(手续费)"
			},
			refundCommission: {
				column: "refundCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退回佣金"
			},
			refundProfits: {
				column: "refundProfits",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退回利润"
			},
			refundServiceFee: {
				column: "refundServiceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退回实时扣除佣金（手续费）"
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "快照时间(交易数据日期)"
			},
			addStatus: {
				column: "addStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户加款状态 1.未开始，2.正在加款，0.加款完成，9.加款失败"
			},
			statisticsType: {
				column: "statisticsType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "统计类型，7.代扣业务"
			},
			sysCost: {
				column: "sysCost",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "系统垫付金额(垫付部分是作为系统成本计入的)"
			},
			syncStatus: {
				column: "syncStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "同步财务报表状态，0同步完成，1未进行同步，2正在同步，9同步失败"
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "渠道名称"
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "支付账户名称"
			},
			channelSourceSystem: {
				column: "channelSourceSystem",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道所属系统编号"
			},
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "公司编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "支付账户编号"
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道类型1.上游2．下游"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润类型，1.前向，2后向"
			},
			totalUnit: {
				column: "totalUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "代扣规格"
			},
			totalFace: {
				column: "totalFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "代扣面值"
			},
			drawAmount: {
				column: "drawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算金额 负：千行欠下游/上游欠千行 金额"
			},
			realAmount: {
				column: "realAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实际结算的金额 负：欠下游金额"
			},
			commission: {
				column: "commission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "佣金"
			}
		}
	},
	undefined: {
		columns: {
			undefined: {}
		}
	},
	dkTradeOrderMainHs: {
		name: "dkTradeOrderMainHs",
		columns: {
			dkOrderId: {
				column: "dkOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款账号"
			},
			downCompanyId: {
				column: "downCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游公司编号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统订单号"
			},
			extOrderNo: {
				column: "extOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "扩展订单号交易系统供"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "订单添加时间"
			},
			orderTime: {
				column: "orderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "订单日期(交易系统下单日期)"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			carrierNo: {
				column: "carrierNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "运营商"
			},
			provinceNo: {
				column: "provinceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "省份"
			},
			cityNo: {
				column: "cityNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "城市"
			},
			totalFace: {
				column: "totalFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "代扣总面值"
			},
			rechargeUnit: {
				column: "rechargeUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "代扣总量"
			},
			rechargeAccountNo: {
				column: "rechargeAccountNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "代扣号码"
			},
			downOrderAmount: {
				column: "downOrderAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游结算金额"
			},
			rechargeTimes: {
				column: "rechargeTimes",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "代扣次数"
			}
		}
	},
	dkTradeDownFundHs: {
		name: "dkTradeDownFundHs",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			dkOrderId: {
				column: "dkOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统订单号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游支付账号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统订单号"
			},
			extOrderNo: {
				column: "extOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "扩展订单号交易系统供"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动创建时间"
			},
			orderTime: {
				column: "orderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "订单日期(交易系统下单日期)"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变更类型 1-结算2-交易代扣3-交易撤销（old=> :加款 2：交易扣款 3：交易退款  : 提款)"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户余额"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 1024,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			serviceFee: {
				column: "serviceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游代扣或交易撤销时产生的手续费"
			},
			tradeTime: {
				column: "tradeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "交易系统变动时间"
			}
		}
	},
	dkTradeUpFundHs: {
		name: "dkTradeUpFundHs",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			dkOrderId: {
				column: "dkOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统订单号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统订单号"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）"
			},
			tradeDeliveryNo: {
				column: "tradeDeliveryNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统发货号"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游账户"
			},
			downCompanyId: {
				column: "downCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游所属公司"
			},
			upChannelNo: {
				column: "upChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游渠道编号"
			},
			upAccountId: {
				column: "upAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游账户"
			},
			upCompanyId: {
				column: "upCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游所属公司"
			},
			downDrawUnit: {
				column: "downDrawUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游代扣规格"
			},
			downDrawFace: {
				column: "downDrawFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游代扣面值"
			},
			downDrawAmount: {
				column: "downDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游结算金额"
			},
			downRealAmount: {
				column: "downRealAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游实际结算金额"
			},
			upDrawUnit: {
				column: "upDrawUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游代扣规格"
			},
			upDrawFace: {
				column: "upDrawFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游成功代扣面值"
			},
			upDrawAmount: {
				column: "upDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游结算金额（结算给我们）"
			},
			upRealAmount: {
				column: "upRealAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游实际结算金额"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变更类型 :结算 2：交易代扣 3：交易撤销"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润类:前向2-后向"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			carrierNo: {
				column: "carrierNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "运营商"
			},
			provinceNo: {
				column: "provinceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "省份"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额"
			},
			profits: {
				column: "profits",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润"
			},
			downCommission: {
				column: "downCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游后返佣金"
			},
			upCommission: {
				column: "upCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游后返佣金"
			},
			settleAmount: {
				column: "settleAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算金额"
			},
			settleBatchId: {
				column: "settleBatchId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算批次号"
			},
			settleStatus: {
				column: "settleStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算状:20-等待结算"
			},
			settleTime: {
				column: "settleTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "结算时间"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 256,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			downServiceFee: {
				column: "downServiceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游手续费"
			},
			upServiceFee: {
				column: "upServiceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游手续费"
			},
			orderTime: {
				column: "orderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "订单日期(交易系统下单日期)"
			},
			tradeTime: {
				column: "tradeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "交易系统变动时间"
			},
			channelSettleStatus: {
				column: "channelSettleStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道结算状态，0.成功，1.等待，2.正在，99.无需结算（sp数据）"
			},
			channelSettleBatchId: {
				column: "channelSettleBatchId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道结算批次号"
			},
			channelSettleTime: {
				column: "channelSettleTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "渠道结算时间"
			}
		}
	},
	dkBaseDownSystemMap: {
		name: "dkBaseDownSystemMap",
		columns: {
			mapId: {
				column: "mapId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			sourceSystemId: {
				column: "sourceSystemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "系统编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			}
		}
	},
	dkBaseUpSystemMap: {
		name: "dkBaseUpSystemMap",
		columns: {
			mapId: {
				column: "mapId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			sourceSystemId: {
				column: "sourceSystemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "系统编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			}
		}
	},
	fdReportChannelHalfhour: {
		name: "fdReportChannelHalfhour",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记录编号"
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道类型（1.上游，2下游）"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "系统编号"
			},
			tradeCount: {
				column: "tradeCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易条数"
			},
			tradeAmount: {
				column: "tradeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易金额"
			},
			collectTime: {
				column: "collectTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "半小时统计开始时间"
			}
		}
	},
	fdB2eUpForecast: {
		name: "fdB2eUpForecast",
		columns: {
			startTime: {
				column: "startTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "预测开始时间"
			},
			endTime: {
				column: "endTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "预测结束时间"
			},
			upChannelNo: {
				column: "upChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游渠道"
			},
			forecastAmount: {
				column: "forecastAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "预测交易量"
			},
			realAmount: {
				column: "realAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实际交易量"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 256,
				nullable: false,
				isPk: false,
				description: "备注"
			}
		}
	},
	dkTradeOrderMainDiffer: {
		name: "dkTradeOrderMainDiffer",
		columns: {
			differId: {
				column: "differId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "记录生成日期"
			},
			dkOrderId: {
				column: "dkOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统订单号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游渠道支付账户编号"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			downFirstFace: {
				column: "downFirstFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游与上游扣款的时间差造成的差异面值(上下游扣款有时间差异时造成，下扣、下退、上扣、上退)"
			},
			downFirstAmount: {
				column: "downFirstAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游与上游扣款的时间差造成的差异金额"
			}
		}
	},
	dkTradeUpFundDiffer: {
		name: "dkTradeUpFundDiffer",
		columns: {
			differId: {
				column: "differId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "记录创建的日期"
			},
			dkOrderId: {
				column: "dkOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统订单号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游渠道支付账户编号"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润类型，1.前向，2后向"
			},
			downAdjustFace: {
				column: "downAdjustFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "统计下游扣款需调整的面值(下游退款造成上游面值比下游多时产生，下退)"
			},
			downAdjustUnit: {
				column: "downAdjustUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "统计下游扣款需调整的规格"
			},
			downAdjustAmount: {
				column: "downAdjustAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "统计下游扣款需调整的金额"
			},
			downAdjustReal: {
				column: "downAdjustReal",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "统计下游扣款需调整的真实扣款"
			},
			upManyFace: {
				column: "upManyFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游多冲的面值(上游面值比下游面值多时产生，上扣、下退、上退)"
			},
			upManyAmount: {
				column: "upManyAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游多冲的金额"
			},
			toFrontFace: {
				column: "toFrontFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "需要由后向转前向的面值(上游退款时，退的多冲数据且与多冲前后向不一致时，后退前为正)"
			},
			toFrontUnit: {
				column: "toFrontUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "需要由后向转前向的规格"
			},
			toFrontAmount: {
				column: "toFrontAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "需要由后向转前向的金额"
			},
			toFrontReal: {
				column: "toFrontReal",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "需要由后向转前向的真实扣款"
			}
		}
	},
	dkTradeRefundSysCost: {
		name: "dkTradeRefundSysCost",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "记录创建的日期"
			},
			dkOrderId: {
				column: "dkOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统订单号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游渠道支付账户编号"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			sysCost: {
				column: "sysCost",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "垫付金额(元)"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易订单号"
			},
			tradeRefundNo: {
				column: "tradeRefundNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "退款单号"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	fdB2eDownWhiteList: {
		name: "fdB2eDownWhiteList",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "编号"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道"
			},
			channelAccountId: {
				column: "channelAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道账户编号"
			},
			bankHolderName: {
				column: "bankHolderName",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "持卡人姓名"
			},
			downHolderCardNo: {
				column: "downHolderCardNo",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "银行卡卡号"
			},
			accountBankName: {
				column: "accountBankName",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "开户行名称"
			},
			accountBankAddress: {
				column: "accountBankAddress",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "开户行地址"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			auditStatus: {
				column: "auditStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "审核状态"
			},
			auditTime: {
				column: "auditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "审核时间"
			},
			bankType: {
				column: "bankType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行类型"
			}
		}
	},
	dkBaseDownChannel: {
		name: "dkBaseDownChannel",
		columns: {
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: true,
				description: "渠道编号"
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "渠道名称"
			},
			serviceFee: {
				column: "serviceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "手续费率"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属公司"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "状态"
			},
			createdBy: {
				column: "createdBy",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			lastEditUser: {
				column: "lastEditUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			},
			commiBalance: {
				column: "commiBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "佣金余额"
			},
			commiRule: {
				column: "commiRule",
				dataType: "varchar2",
				dataLength: 1024,
				nullable: false,
				isPk: false,
				description: "佣金规则"
			},
			needCommi: {
				column: "needCommi",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否需要后返佣金0需要，1不需要"
			},
			classification: {
				column: "classification",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道分类--对应业务类型"
			},
			paymentType: {
				column: "paymentType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "支付分类--1.预付，2.后付"
			},
			warnBalance: {
				column: "warnBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "报警余额"
			},
			warnType: {
				column: "warnType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "报警类:1.单个支付账户不足   2.合计支付账户不足"
			}
		}
	},
	dkBaseUpChannel: {
		name: "dkBaseUpChannel",
		columns: {
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "渠道名称"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "状态"
			},
			serviceFee: {
				column: "serviceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "手续费率"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属公司"
			},
			createdBy: {
				column: "createdBy",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			lastEditUser: {
				column: "lastEditUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			},
			commiBalance: {
				column: "commiBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "佣金余额"
			},
			maxAdd: {
				column: "maxAdd",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算上限提示值"
			},
			minAdd: {
				column: "minAdd",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算下限提示值"
			},
			commiRule: {
				column: "commiRule",
				dataType: "varchar2",
				dataLength: 1024,
				nullable: false,
				isPk: false,
				description: "佣金规则"
			},
			needCommi: {
				column: "needCommi",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否需要后返佣金0需要，1不需要"
			},
			classification: {
				column: "classification",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道分类--对应业务类型"
			},
			paymentType: {
				column: "paymentType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "支付分类--1.预付，2.后付"
			},
			warnBalance: {
				column: "warnBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "报警余额"
			},
			warnType: {
				column: "warnType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "报警类:1.单个支付账户不足   2.合计支付账户不足"
			}
		}
	},
	dkTradeDownFund: {
		name: "dkTradeDownFund",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			dkOrderId: {
				column: "dkOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统订单号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游支付账号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统订单号"
			},
			extOrderNo: {
				column: "extOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "扩展订单号交易系统供"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动创建时间"
			},
			orderTime: {
				column: "orderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "订单日期(交易系统下单日期)"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变更类型 1-结算2-交易代扣3-交易撤销（old=> :加款 2：交易扣款 3：交易退款  : 提款)"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户余额"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 1024,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			serviceFee: {
				column: "serviceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游代扣或交易撤销时产生的手续费"
			},
			tradeTime: {
				column: "tradeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "交易系统变动时间"
			},
			tradeFundNo: {
				column: "tradeFundNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统资金变动编号（收卡用）"
			},
			isSkAdjust: {
				column: "isSkAdjust",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否为收卡二次结算数据"
			},
			channelSettleStatus: {
				column: "channelSettleStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道结算状态，0.成功，1.等待，2.正在，99.无需结算"
			},
			channelSettleBatchId: {
				column: "channelSettleBatchId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道结算批次号"
			},
			channelSettleTime: {
				column: "channelSettleTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "渠道结算时间"
			}
		}
	},
	dkTradeUpFund: {
		name: "dkTradeUpFund",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			dkOrderId: {
				column: "dkOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统订单号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统订单号"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）"
			},
			tradeDeliveryNo: {
				column: "tradeDeliveryNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统发货号"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游账户"
			},
			downCompanyId: {
				column: "downCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游所属公司"
			},
			upChannelNo: {
				column: "upChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游渠道编号"
			},
			upAccountId: {
				column: "upAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游账户"
			},
			upCompanyId: {
				column: "upCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游所属公司"
			},
			downDrawUnit: {
				column: "downDrawUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游代扣规格"
			},
			downDrawFace: {
				column: "downDrawFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游代扣面值"
			},
			downDrawAmount: {
				column: "downDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游结算金额"
			},
			downRealAmount: {
				column: "downRealAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游实际结算金额"
			},
			upDrawUnit: {
				column: "upDrawUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游代扣规格"
			},
			upDrawFace: {
				column: "upDrawFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游成功代扣面值"
			},
			upDrawAmount: {
				column: "upDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游结算金额（结算给我们）"
			},
			upRealAmount: {
				column: "upRealAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游实际结算金额"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变更类型 :结算 2：交易代扣 3：交易撤销"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润类:前向2-后向"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			carrierNo: {
				column: "carrierNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "运营商"
			},
			provinceNo: {
				column: "provinceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "省份"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额"
			},
			profits: {
				column: "profits",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润"
			},
			downCommission: {
				column: "downCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游后返佣金"
			},
			upCommission: {
				column: "upCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游后返佣金"
			},
			settleAmount: {
				column: "settleAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算金额"
			},
			settleBatchId: {
				column: "settleBatchId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算批次号"
			},
			settleStatus: {
				column: "settleStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算状:20-等待结算"
			},
			settleTime: {
				column: "settleTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "结算时间"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			orderTime: {
				column: "orderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "订单日期(交易系统下单日期)"
			},
			tradeTime: {
				column: "tradeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "交易系统变动时间"
			},
			channelSettleStatus: {
				column: "channelSettleStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道结算状态，0.成功，1.等待，2.正在，99.无需结算"
			},
			channelSettleBatchId: {
				column: "channelSettleBatchId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道结算批次号"
			},
			channelSettleTime: {
				column: "channelSettleTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "渠道结算时间"
			}
		}
	},
	dkBaseDownAccount: {
		name: "dkBaseDownAccount",
		columns: {
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "账号名称"
			},
			queryBalance: {
				column: "queryBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "查询余额"
			},
			innerBalance: {
				column: "innerBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "理论余额"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "状态"
			},
			createdBy: {
				column: "createdBy",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			lastEditUser: {
				column: "lastEditUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			}
		}
	},
	dkBaseUpAccount: {
		name: "dkBaseUpAccount",
		columns: {
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "账号名称"
			},
			accountType: {
				column: "accountType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户类型（1.收款账户）"
			},
			queryBalance: {
				column: "queryBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "查询余额"
			},
			innerBalance: {
				column: "innerBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "理论余额"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "状态"
			},
			createdBy: {
				column: "createdBy",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			lastEditUser: {
				column: "lastEditUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			}
		}
	},
	dkBaseDownAccountMap: {
		name: "dkBaseDownAccountMap",
		columns: {
			mapId: {
				column: "mapId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算账号编号"
			},
			isMainChannel: {
				column: "isMainChannel",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否主关系"
			}
		}
	},
	dkBaseUpAccountMap: {
		name: "dkBaseUpAccountMap",
		columns: {
			mapId: {
				column: "mapId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算账号编号"
			},
			isMainChannel: {
				column: "isMainChannel",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否主关系"
			}
		}
	},
	dkTradeDownRefund: {
		name: "dkTradeDownRefund",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游账户编号"
			},
			dkOrderId: {
				column: "dkOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统订单号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统订单号"
			},
			tradeRefundNo: {
				column: "tradeRefundNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统退款号"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）"
			},
			refundTime: {
				column: "refundTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "退款创建时间"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			carrierNo: {
				column: "carrierNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "运营商"
			},
			provinceNo: {
				column: "provinceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "省份"
			},
			refundUnit: {
				column: "refundUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款总量"
			},
			refundFace: {
				column: "refundFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款面值"
			},
			refundAmount: {
				column: "refundAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款金额"
			},
			realRefund: {
				column: "realRefund",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实际金额"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 1024,
				nullable: false,
				isPk: false,
				description: "备注"
			}
		}
	},
	dkTradeUpRefund: {
		name: "dkTradeUpRefund",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			dkOrderId: {
				column: "dkOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "系统订单号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统订单号"
			},
			tradeDeliveryNo: {
				column: "tradeDeliveryNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统发货编号"
			},
			tradeRefundNo: {
				column: "tradeRefundNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统退款编号"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）"
			},
			refundTime: {
				column: "refundTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "退款时间"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润类:1-前向2-后向"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			carrierNo: {
				column: "carrierNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "运营商"
			},
			provinceNo: {
				column: "provinceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "省份"
			},
			refundUnit: {
				column: "refundUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款总量"
			},
			refundFace: {
				column: "refundFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款面值"
			},
			refundAmount: {
				column: "refundAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款金额"
			},
			realRefund: {
				column: "realRefund",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实际金额"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 1024,
				nullable: false,
				isPk: false,
				description: "备注"
			}
		}
	},
	dkTradeDownSettle: {
		name: "dkTradeDownSettle",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			adjustId: {
				column: "adjustId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "红冲编号"
			},
			hasAdjust: {
				column: "hasAdjust",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否红冲过"
			},
			addType: {
				column: "addType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动类:11-结算+ 12-红冲- 21-代扣平帐加+  22-代扣平帐减-  31-退款平帐加+  32-退款平帐减- 41-余额平帐加+ 42-余额平帐减-"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额"
			},
			createUser: {
				column: "createUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			bankFundId: {
				column: "bankFundId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行资金变动编号(红冲时用)"
			},
			partnerAccount: {
				column: "partnerAccount",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "合作方银行账户"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			extRecordNo: {
				column: "extRecordNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "外部加款记录编号"
			},
			serviceId: {
				column: "serviceId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "收取手续费的记录的编号(渠道手续费)"
			},
			realAmount: {
				column: "realAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易平账真实金额"
			}
		}
	},
	dkTradeUpSettle: {
		name: "dkTradeUpSettle",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			adjustId: {
				column: "adjustId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "红冲编号(如果add_type为3"
			},
			manualChangeType: {
				column: "manualChangeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动类:11-结算+ 12-红冲-  21-代扣平帐加+  22-代扣平帐减- 31-退款平帐加+ 32-退款平帐减- 41-余额平帐加+  42-余额平帐减-"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			createUser: {
				column: "createUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			partnerAccount: {
				column: "partnerAccount",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "合作方银行账户"
			},
			hasAdjust: {
				column: "hasAdjust",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否红冲过"
			},
			bankFundId: {
				column: "bankFundId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡资金变动编号id"
			},
			serviceId: {
				column: "serviceId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "收取手续费的记录的编号"
			},
			extRecordNo: {
				column: "extRecordNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游加款外部订单号"
			},
			realAmount: {
				column: "realAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易平账真实金额"
			}
		}
	},
	dkTradeOrderMain: {
		name: "dkTradeOrderMain",
		columns: {
			dkOrderId: {
				column: "dkOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游结算账号"
			},
			downCompanyId: {
				column: "downCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游公司编号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统订单号"
			},
			extOrderNo: {
				column: "extOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "扩展订单号交易系统供"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "订单添加时间"
			},
			orderTime: {
				column: "orderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "订单日期(交易系统下单日期)"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			carrierNo: {
				column: "carrierNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "运营商"
			},
			provinceNo: {
				column: "provinceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "省份"
			},
			cityNo: {
				column: "cityNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "城市"
			},
			totalFace: {
				column: "totalFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "代扣总面值"
			},
			rechargeUnit: {
				column: "rechargeUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "代扣总量"
			},
			rechargeAccountNo: {
				column: "rechargeAccountNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "代扣号码"
			},
			hasUpTrade: {
				column: "hasUpTrade",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否已产生上游结算 0.已产生 1.未产生"
			},
			downOrderAmount: {
				column: "downOrderAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游结算金额"
			},
			rechargeTimes: {
				column: "rechargeTimes",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "代扣次数"
			}
		}
	},
	dkReportZeroBalance: {
		name: "dkReportZeroBalance",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "报表时间"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			accountType: {
				column: "accountType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户类型:上游渠道:下游渠道:银行账户:收款账户:资产账户:非资产账户:倒款账户"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "理论余额"
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "账户名称"
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "渠道名称"
			},
			queryBalance: {
				column: "queryBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "查询余额"
			},
			channelStatus: {
				column: "channelStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道状态"
			},
			accountStatus: {
				column: "accountStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户状态"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属公司"
			},
			downFirstFace: {
				column: "downFirstFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游与上游代扣的时间差造成的差异面值（只有下游渠道记录）"
			},
			downFirstAmount: {
				column: "downFirstAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游与上游代扣的时间差造成的差异金额（只有下游渠道记录）"
			},
			syncStatus: {
				column: "syncStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "同步财务报表状态，0同步完成，1未进行同步，2正在同步，9同步失败"
			},
			channelSourceSystem: {
				column: "channelSourceSystem",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道所属系统编号"
			},
			channelClassif: {
				column: "channelClassif",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道分类（主要用于上游渠道）"
			}
		}
	},
	czthTradeOrder: {
		name: "czthTradeOrder",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "充值特惠交易订单表"
			},
			fdOrderId: {
				column: "fdOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单编号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "生产系统订单号"
			},
			tradeDeliveryNo: {
				column: "tradeDeliveryNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "生产系统发货号"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "系统编号"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游账户编号"
			},
			upChannelNo: {
				column: "upChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游渠道编号"
			},
			upAccountId: {
				column: "upAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游账户编号"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "平台公司编号"
			},
			drawUnit: {
				column: "drawUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "扣款规格"
			},
			drawFace: {
				column: "drawFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "扣款面值"
			},
			drawAmount: {
				column: "drawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "扣款金额"
			},
			serviceRate: {
				column: "serviceRate",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "服务费率（针对上游收取）"
			},
			subsidy: {
				column: "subsidy",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "补贴金额"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动类型"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "前后项信息（1-前项，2后项）"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			carrierNo: {
				column: "carrierNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "运营商"
			},
			provinceNo: {
				column: "provinceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "省份"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 256,
				nullable: false,
				isPk: false,
				description: "备注信息"
			}
		}
	},
	czthTradeOrderHs: {
		name: "czthTradeOrderHs",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "充值特惠交易订单表"
			},
			fdOrderId: {
				column: "fdOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单编号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "生产系统订单号"
			},
			tradeDeliveryNo: {
				column: "tradeDeliveryNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "生产系统发货号"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "系统编号"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游账户编号"
			},
			upChannelNo: {
				column: "upChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游渠道编号"
			},
			upAccountId: {
				column: "upAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游账户编号"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "平台公司编号"
			},
			drawUnit: {
				column: "drawUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "扣款规格"
			},
			drawFace: {
				column: "drawFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "扣款面值"
			},
			drawAmount: {
				column: "drawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "扣款金额"
			},
			serviceRate: {
				column: "serviceRate",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "服务费率（针对上游收取）"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动类型"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "前后项信息（1-前项，2后项）"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			carrierNo: {
				column: "carrierNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "运营商"
			},
			provinceNo: {
				column: "provinceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "省份"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 256,
				nullable: false,
				isPk: false,
				description: "备注信息"
			},
			subsidy: {
				column: "subsidy",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	supBaseDownChannel: {
		name: "supBaseDownChannel",
		columns: {
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: true,
				description: "渠道编号"
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "渠道名称"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属公司"
			},
			sourceSystemId: {
				column: "sourceSystemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属系统"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "状态"
			},
			createdBy: {
				column: "createdBy",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			lastEditUser: {
				column: "lastEditUser",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			}
		}
	},
	supBaseDownAccount: {
		name: "supBaseDownAccount",
		columns: {
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "账户编号"
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "账户名称"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户余额"
			},
			creditAmount: {
				column: "creditAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "授信金额"
			},
			createdBy: {
				column: "createdBy",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			lastEditUser: {
				column: "lastEditUser",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			}
		}
	},
	supTradeOrderMain: {
		name: "supTradeOrderMain",
		columns: {
			supOrderId: {
				column: "supOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "记账系统订单号"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游账户编号"
			},
			downCompanyId: {
				column: "downCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游公司编号"
			},
			sourceSystemId: {
				column: "sourceSystemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "系统编号"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "生产系统订单号"
			},
			tradeOrderTime: {
				column: "tradeOrderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "生产系统订单时间"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			carrierNo: {
				column: "carrierNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "运营商"
			},
			proviceNo: {
				column: "proviceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "省份编号"
			},
			cityNo: {
				column: "cityNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "城市编号"
			},
			orderUnit: {
				column: "orderUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单规格"
			},
			orderFace: {
				column: "orderFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单面值"
			},
			orderAmount: {
				column: "orderAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单金额"
			},
			completeFace: {
				column: "completeFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "完成面值"
			},
			completeAmount: {
				column: "completeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "完成金额"
			}
		}
	},
	supTradeDownFund: {
		name: "supTradeDownFund",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "资金变动编号"
			},
			supOrderId: {
				column: "supOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统订单号"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游账户编号"
			},
			downCompanyId: {
				column: "downCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游公司编号"
			},
			sourceSystemId: {
				column: "sourceSystemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "系统编号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "生产系统订单号"
			},
			tradeRefundNo: {
				column: "tradeRefundNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "生产系统退款编号"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动类型（加款、扣款、退款、提款）"
			},
			changeFace: {
				column: "changeFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动面值"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "资金变动时间"
			},
			tradeOrderTime: {
				column: "tradeOrderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "生产系统订单时间"
			},
			tradeChangeTime: {
				column: "tradeChangeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "生产系统资金变动时间"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户余额"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 256,
				nullable: false,
				isPk: false,
				description: "备注"
			}
		}
	},
	supBaseRelateAddMap: {
		name: "supBaseRelateAddMap",
		columns: {
			mapId: {
				column: "mapId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "关联编号"
			},
			supUpChannelNo: {
				column: "supUpChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "sup上游渠道"
			},
			supDownChannelNo: {
				column: "supDownChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "sup下游渠道"
			},
			proUpChannelNo: {
				column: "proUpChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "生产系统上游渠道（需为千行）"
			}
		}
	},
	supTradeDownFundHs: {
		name: "supTradeDownFundHs",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "资金变动编号"
			},
			supOrderId: {
				column: "supOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统订单号"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游账户编号"
			},
			downCompanyId: {
				column: "downCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游公司编号"
			},
			sourceSystemId: {
				column: "sourceSystemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "系统编号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "生产系统订单号"
			},
			tradeRefundNo: {
				column: "tradeRefundNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "生产系统退款编号"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动类型（加款、扣款、退款、提款）"
			},
			changeFace: {
				column: "changeFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动面值"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "资金变动时间"
			},
			tradeOrderTime: {
				column: "tradeOrderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "生产系统订单时间"
			},
			tradeChangeTime: {
				column: "tradeChangeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "生产系统资金变动时间"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户余额"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 256,
				nullable: false,
				isPk: false,
				description: "备注"
			}
		}
	},
	fdReportCapitalUseRate: {
		name: "fdReportCapitalUseRate",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "记录编号"
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "记录日期"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道所属公司"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "支付账户"
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "渠道名称"
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "账户名称"
			},
			channelStatus: {
				column: "channelStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道状态"
			},
			capitalClass: {
				column: "capitalClass",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道资金分类：1.普通话费、2.普通流量、3.特殊话费、4.特殊流量、0.其他渠道"
			},
			accountBalance: {
				column: "accountBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "统计时账户余额，早上8点统计"
			},
			yesterdayDraw: {
				column: "yesterdayDraw",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "昨天交易量"
			},
			befYesterdayDraw: {
				column: "befYesterdayDraw",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "前天交易量"
			},
			threeDaysAgoDraw: {
				column: "threeDaysAgoDraw",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "大前天交易量"
			},
			averageDraw: {
				column: "averageDraw",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "最近三天平均交易量"
			},
			noDrawDays: {
				column: "noDrawDays",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "累计无交易天数（余额小于1000且无交易的清零）"
			},
			syncStatus: {
				column: "syncStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "同步状态，0、同步完成，1等待同步，2正在同步"
			},
			syncBatch: {
				column: "syncBatch",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "同步批次号"
			}
		}
	},
	fdB2eBankErrorCode: {
		name: "fdB2eBankErrorCode",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行子账户"
			},
			bankType: {
				column: "bankType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行类型"
			},
			errCodeType: {
				column: "errCodeType",
				dataType: "varchar2",
				dataLength: 3,
				nullable: false,
				isPk: false,
				description: "错误码类型"
			},
			errCode: {
				column: "errCode",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "错误码"
			},
			dealCode: {
				column: "dealCode",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "处理码，success、fail、unkown"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "状态，0启用，1禁用"
			}
		}
	},
	fdB2eBankPaymentService: {
		name: "fdB2eBankPaymentService",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "编号"
			},
			bankType: {
				column: "bankType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行类型"
			},
			paymentType: {
				column: "paymentType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "加款方式"
			},
			minAmount: {
				column: "minAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "收取下限金额"
			},
			maxAmount: {
				column: "maxAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "收取上限金额"
			},
			singleAmount: {
				column: "singleAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "单笔收取手续费金额（和折扣配合使用）"
			},
			discount: {
				column: "discount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "单笔收取手续费折扣（和金额配合使用）"
			},
			maxServiceFee: {
				column: "maxServiceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "最大手续费(计算的手续费不能超过该值)"
			}
		}
	},
	fdB2eBankWorkDate: {
		name: "fdB2eBankWorkDate",
		columns: {
			configId: {
				column: "configId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "配置编号"
			},
			workDayType: {
				column: "workDayType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "时间类型"
			},
			configDate: {
				column: "configDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "配置日期"
			}
		}
	},
	fdB2eBankAccountApiConfig: {
		name: "fdB2eBankAccountApiConfig",
		columns: {
			configId: {
				column: "configId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "配置编号"
			},
			bankAccountId: {
				column: "bankAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行账户编号"
			},
			tokenKey: {
				column: "tokenKey",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "签名key"
			},
			receiveQueryMq: {
				column: "receiveQueryMq",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游收款查询mq"
			},
			addMq: {
				column: "addMq",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游加款mq"
			},
			addQueryMq: {
				column: "addQueryMq",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游加款查询mq"
			},
			bankBalanceMq: {
				column: "bankBalanceMq",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "银行余额查询mq"
			},
			merchantNo: {
				column: "merchantNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "客户账户编号"
			},
			merchantPassword: {
				column: "merchantPassword",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "客户账户密码"
			},
			userNo: {
				column: "userNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "用户登录账户"
			},
			userPassword: {
				column: "userPassword",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "登录密码"
			},
			currencyCode: {
				column: "currencyCode",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易货币种类"
			},
			language: {
				column: "language",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "接口编码语言"
			},
			appId: {
				column: "appId",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "应用程序编码"
			},
			appVer: {
				column: "appVer",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "应用程序版本"
			},
			bankAddMq: {
				column: "bankAddMq",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游银企直连加款mq"
			},
			bankAddQueryMq: {
				column: "bankAddQueryMq",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游银企直联加款查询mq"
			},
			proxyMerchantNo: {
				column: "proxyMerchantNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "代付商户编号"
			},
			proxyMerchantPwd: {
				column: "proxyMerchantPwd",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "代付商户密码"
			},
			proxyPriMerchantNo: {
				column: "proxyPriMerchantNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "代付对私商户编号"
			},
			proxyPriMerchantPwd: {
				column: "proxyPriMerchantPwd",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "代付对私商户密码"
			}
		}
	},
	fdB2eBankQueryRecord: {
		name: "fdB2eBankQueryRecord",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			bankAccountId: {
				column: "bankAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行账户编号"
			},
			cardNo: {
				column: "cardNo",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "银行卡号"
			},
			bankAccName: {
				column: "bankAccName",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "银行账户名称"
			},
			bankType: {
				column: "bankType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行类型"
			},
			queryBalance: {
				column: "queryBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "查询余额"
			},
			queryTime: {
				column: "queryTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "查询时间"
			}
		}
	},
	fdTradeOrderMainUn: {
		name: "fdTradeOrderMainUn",
		columns: {
			fdOrderId: {
				column: "fdOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款账号"
			},
			downCompanyId: {
				column: "downCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游公司编号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统订单号"
			},
			extOrderNo: {
				column: "extOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "扩展订单号交易系统供"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "订单添加时间"
			},
			orderTime: {
				column: "orderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "订单日期(交易系统下单日期)"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			totalFace: {
				column: "totalFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "总面值"
			},
			downOrderAmount: {
				column: "downOrderAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游销售金额"
			},
			upPhoneAmount: {
				column: "upPhoneAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游手机成本"
			},
			upBillAmount: {
				column: "upBillAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游预存话费成本"
			},
			downOrderRefund: {
				column: "downOrderRefund",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游销售退款"
			},
			upPhoneRefund: {
				column: "upPhoneRefund",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游手机成本退款"
			},
			upBillRefund: {
				column: "upBillRefund",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游预存话费成本退款"
			},
			userId: {
				column: "userId",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "用户id"
			},
			phoneNo: {
				column: "phoneNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "合约机号码"
			},
			userName: {
				column: "userName",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "用户姓名"
			},
			idCardNo: {
				column: "idCardNo",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "用户身份证号"
			},
			recAddress: {
				column: "recAddress",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "用户收货地址"
			},
			saleUser: {
				column: "saleUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "销售客服"
			},
			hasInvoice: {
				column: "hasInvoice",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否开票，0.已开，1未开"
			}
		}
	},
	fdTradeDownFundHs: {
		name: "fdTradeDownFundHs",
		columns: {
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户余额"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 1024,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			serviceFee: {
				column: "serviceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款退款时产生的手续费"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变更类型   :加款 2：交易扣款 3：交易退款"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额"
			},
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			fdOrderId: {
				column: "fdOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统订单号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游支付账号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统订单号"
			},
			extOrderNo: {
				column: "extOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "扩展订单号交易系统供"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动创建时间"
			},
			orderTime: {
				column: "orderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "订单日期(交易系统下单日期)"
			}
		}
	},
	fdTradeOrderMainHs: {
		name: "fdTradeOrderMainHs",
		columns: {
			fdOrderId: {
				column: "fdOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款账号"
			},
			downCompanyId: {
				column: "downCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游公司编号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统订单号"
			},
			extOrderNo: {
				column: "extOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "扩展订单号交易系统供"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "订单添加时间"
			},
			orderTime: {
				column: "orderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "订单日期(交易系统下单日期)"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			carrierNo: {
				column: "carrierNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "运营商"
			},
			provinceNo: {
				column: "provinceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "省份"
			},
			cityNo: {
				column: "cityNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "城市"
			},
			totalFace: {
				column: "totalFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "总面值"
			},
			rechargeUnit: {
				column: "rechargeUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "充值总量"
			},
			rechargeAccountNo: {
				column: "rechargeAccountNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "充值号码"
			},
			hasUpTrade: {
				column: "hasUpTrade",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否产生上游扣款 0.已产生 1.未产生"
			},
			downOrderAmount: {
				column: "downOrderAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款金额"
			}
		}
	},
	fdTradeUpFundHs: {
		name: "fdTradeUpFundHs",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			fdOrderId: {
				column: "fdOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统订单号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统订单号"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）"
			},
			tradeDeliveryNo: {
				column: "tradeDeliveryNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统发货号"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游账户"
			},
			downCompanyId: {
				column: "downCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游所属公司"
			},
			upChannelNo: {
				column: "upChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游渠道编号"
			},
			upAccountId: {
				column: "upAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游账户"
			},
			upCompanyId: {
				column: "upCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游所属公司"
			},
			downDrawUnit: {
				column: "downDrawUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游充值量"
			},
			downDrawFace: {
				column: "downDrawFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款面值"
			},
			downDrawAmount: {
				column: "downDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款金额"
			},
			downRealAmount: {
				column: "downRealAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游实际金额"
			},
			upDrawUnit: {
				column: "upDrawUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游充值量"
			},
			upDrawFace: {
				column: "upDrawFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游成功面值"
			},
			upDrawAmount: {
				column: "upDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游扣款金额"
			},
			upRealAmount: {
				column: "upRealAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游实际金额"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变更类型 :加款 2：交易扣款 3：交易退款"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润类:前向2-后向"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			carrierNo: {
				column: "carrierNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "运营商"
			},
			provinceNo: {
				column: "provinceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "省份"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额"
			},
			profits: {
				column: "profits",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润"
			},
			downCommission: {
				column: "downCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游后返佣金"
			},
			upCommission: {
				column: "upCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游后返佣金"
			},
			settleAmount: {
				column: "settleAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算金额"
			},
			settleBatchId: {
				column: "settleBatchId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算批次号"
			},
			settleStatus: {
				column: "settleStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算状:20-等待结算"
			},
			settleTime: {
				column: "settleTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "结算时间"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 256,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			downServiceFee: {
				column: "downServiceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游手续费"
			},
			upServiceFee: {
				column: "upServiceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游手续费"
			},
			orderTime: {
				column: "orderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "订单日期(交易系统下单日期)"
			},
			splitProfitStatus: {
				column: "splitProfitStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否分配利润，0已分配"
			},
			outChangeTime: {
				column: "outChangeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "外部系统资金变动时间"
			}
		}
	},
	fdBaseCompanyAccountImp: {
		name: "fdBaseCompanyAccountImp",
		columns: {
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "账号名称"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属公司账户"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额(手续费为负债)"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "状态"
			},
			createdBy: {
				column: "createdBy",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			lastEditUser: {
				column: "lastEditUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			}
		}
	},
	fdBaseDownImpMap: {
		name: "fdBaseDownImpMap",
		columns: {
			mapId: {
				column: "mapId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "倒款账号编号"
			}
		}
	},
	fdTradeCoImpFund: {
		name: "fdTradeCoImpFund",
		columns: {
			changeId: {
				column: "changeId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "公司资产账户编号"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动类型1加款2减款3红冲（负值）"
			},
			useType: {
				column: "useType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "使用类型1.下游加款2.支付宝倒款3.财富通倒款99其他"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户余额"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			adjustId: {
				column: "adjustId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "红冲编号"
			},
			hasAdjust: {
				column: "hasAdjust",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否红冲过"
			},
			bankBatchId: {
				column: "bankBatchId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡变动批次号处理号（记录转账的出账、入账、手续费）"
			},
			partnerAccount: {
				column: "partnerAccount",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "倒款的来源账号或加款的渠道编号"
			},
			createUser: {
				column: "createUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			remark: {
				column: "remark",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "备注"
			}
		}
	},
	fdReportServiceFee: {
		name: "fdReportServiceFee",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			reportMonth: {
				column: "reportMonth",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "手续费月份"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "公司编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			serviceFee: {
				column: "serviceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "手续费"
			},
			lastMonth: {
				column: "lastMonth",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "补录月份"
			},
			lastMsg: {
				column: "lastMsg",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "补录说明"
			},
			lastServiceFee: {
				column: "lastServiceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "补录金额"
			}
		}
	},
	fdBaseUpAccountSync: {
		name: "fdBaseUpAccountSync",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			needSyncAdd: {
				column: "needSyncAdd",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否需要同步加款、提款到18系统"
			}
		}
	},
	dkReprotChannelSettle: {
		name: "dkReprotChannelSettle",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "记录编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道类型，1上游渠道，2下游渠道"
			},
			settleDataTime: {
				column: "settleDataTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "结算数据日期"
			},
			settleBatchId: {
				column: "settleBatchId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算批次号"
			},
			settleAmount: {
				column: "settleAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算金额"
			},
			settleStatus: {
				column: "settleStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算状态，0完成，1等待，2正在，9无需结算"
			},
			settleDealId: {
				column: "settleDealId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算处理编号，红冲用"
			},
			settleUser: {
				column: "settleUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "结算人"
			},
			settleTime: {
				column: "settleTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "结算时间"
			},
			settleMemo: {
				column: "settleMemo",
				dataType: "varchar2",
				dataLength: 1024,
				nullable: false,
				isPk: false,
				description: "结算备注"
			}
		}
	},
	rptMergeInnerChannelMap: {
		name: "rptMergeInnerChannelMap",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "渠道名称"
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道类型"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "公司编号"
			},
			addUser: {
				column: "addUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "添加人"
			},
			addTime: {
				column: "addTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "添加时间"
			}
		}
	},
	fdBaseCompanySettleNew: {
		name: "fdBaseCompanySettleNew",
		columns: {
			configId: {
				column: "configId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "配置编号"
			},
			profitCompanyId: {
				column: "profitCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "获取利润公司编号"
			},
			relatedCompanyId: {
				column: "relatedCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "对应公司编号"
			},
			statisticsType: {
				column: "statisticsType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "统计类型，1.流量数据包，2前向流量充值，3话费、固话，4.加油卡充值，5.Q币、游戏币"
			},
			profitCost: {
				column: "profitCost",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润折扣"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "状态"
			},
			lastUpdateTime: {
				column: "lastUpdateTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			},
			lastUpdateUser: {
				column: "lastUpdateUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			}
		}
	},
	rptMergeReportTradeAdd: {
		name: "rptMergeReportTradeAdd",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			accountType: {
				column: "accountType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户类型:上游渠道:下游渠道:银行账户"
			},
			addSysNo: {
				column: "addSysNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "加款数据所属系统，存储过程中写死"
			},
			addAmount: {
				column: "addAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "加款金额"
			},
			minusAmount: {
				column: "minusAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "加款金额"
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "加款统计时间"
			},
			syncStatus: {
				column: "syncStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "同步状态，0、同步完成，1等待同步，2正在同步"
			},
			syncBatch: {
				column: "syncBatch",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "同步批次号"
			}
		}
	},
	rptMergeReportTradeAddCs: {
		name: "rptMergeReportTradeAddCs",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			accountType: {
				column: "accountType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户类型:上游渠道:下游渠道:银行账户"
			},
			addSysNo: {
				column: "addSysNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "加款数据所属系统，存储过程中写死"
			},
			addAmount: {
				column: "addAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "加款金额"
			},
			minusAmount: {
				column: "minusAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "加款金额"
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "加款统计时间"
			},
			syncStatus: {
				column: "syncStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "同步状态，0、同步完成，1等待同步，2正在同步"
			},
			syncBatch: {
				column: "syncBatch",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "同步批次号"
			}
		}
	},
	rptUnitChannelMap: {
		name: "rptUnitChannelMap",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "渠道名称"
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道类型，1、上游渠道，2下游渠道"
			},
			incomeUnit: {
				column: "incomeUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "收入单元"
			},
			billSplitType: {
				column: "billSplitType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "分账方式，1、不分账，2、比例分账，3、双计分账"
			},
			billSplitRatio: {
				column: "billSplitRatio",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "分账比例"
			},
			sysNo: {
				column: "sysNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道分类：fd直充，dk代扣"
			}
		}
	},
	rptUnitReportTrade: {
		name: "rptUnitReportTrade",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "渠道名称"
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道分类，1、上游渠道，2、下游渠道"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "公司编号"
			},
			sourceSystemId: {
				column: "sourceSystemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "系统编号"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			tradeCount: {
				column: "tradeCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易笔数"
			},
			tradeDebitAmount: {
				column: "tradeDebitAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易扣款金额"
			},
			tradeProfit: {
				column: "tradeProfit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易利润"
			},
			rvAmount: {
				column: "rvAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易平账影响利润的金额"
			},
			sysNo: {
				column: "sysNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "系统编号，fd、直冲，dk、代扣系统"
			},
			isHistoryData: {
				column: "isHistoryData",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否为历史库生成的数据（用来加入唯一索引）"
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "数据快照日期"
			},
			syncStatus: {
				column: "syncStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "同步状态，0、同步完成，1等待同步，2正在同步"
			},
			syncBatch: {
				column: "syncBatch",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "同步批次号"
			}
		}
	},
	rptUnitReportTradeSplit: {
		name: "rptUnitReportTradeSplit",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "渠道名称"
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道分类，1、上游渠道，2、下游渠道"
			},
			incomeUnit: {
				column: "incomeUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "收入单元，对应枚举"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "公司编号"
			},
			sourceSystemId: {
				column: "sourceSystemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "系统编号"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			billSplitType: {
				column: "billSplitType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "分账方式，1、不分账，2、比例分账，3、双计分账"
			},
			billSplitRatio: {
				column: "billSplitRatio",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "分账比例"
			},
			tradeCount: {
				column: "tradeCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易笔数"
			},
			tradeDebitAmount: {
				column: "tradeDebitAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易扣款金额"
			},
			tradeProfit: {
				column: "tradeProfit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易利润"
			},
			rvAmount: {
				column: "rvAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易平账影响利润的金额"
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "数据快照日期"
			}
		}
	},
	incomeChannelMonthTrade: {
		name: "incomeChannelMonthTrade",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "编号"
			},
			tradeMonth: {
				column: "tradeMonth",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "交易日期"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "渠道名称"
			},
			provinceNo: {
				column: "provinceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "所属省份(下游为‘-’)"
			},
			tradeType: {
				column: "tradeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务分类"
			},
			groupId: {
				column: "groupId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "分组"
			},
			groupType: {
				column: "groupType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "分组类型"
			},
			tradeAmount: {
				column: "tradeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易量"
			},
			tradeRvAmount: {
				column: "tradeRvAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易平账金额"
			},
			tradeProfit: {
				column: "tradeProfit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润(包含平账）"
			}
		}
	},
	incomeChannelMonthSum: {
		name: "incomeChannelMonthSum",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "编号"
			},
			tradeMonth: {
				column: "tradeMonth",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "交易日期"
			},
			systemNo: {
				column: "systemNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "所属系统编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "渠道名称"
			},
			provinceNo: {
				column: "provinceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "所属省份(下游为‘-’)"
			},
			tradeType: {
				column: "tradeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务分类"
			},
			groupId: {
				column: "groupId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "分组"
			},
			groupType: {
				column: "groupType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "分组类型"
			},
			tradeAmount: {
				column: "tradeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易量"
			},
			tradeRvAmount: {
				column: "tradeRvAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易平账金额"
			},
			tradeProfit: {
				column: "tradeProfit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润(包含平账）"
			}
		}
	},
	incomeDownUpConfig: {
		name: "incomeDownUpConfig",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "编号"
			},
			upChannelNo: {
				column: "upChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游渠道编号"
			}
		}
	},
	incomeDownUpMonth: {
		name: "incomeDownUpMonth",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "编号"
			},
			tradeMonth: {
				column: "tradeMonth",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "交易月份"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			downChannelName: {
				column: "downChannelName",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "下游渠道名称"
			},
			upChannelNo: {
				column: "upChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游渠道编号"
			},
			upChannelName: {
				column: "upChannelName",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "上游渠道名称"
			},
			downGroupId: {
				column: "downGroupId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游分组"
			},
			tradeAmount: {
				column: "tradeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易金额"
			},
			tradeProfit: {
				column: "tradeProfit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易利润"
			}
		}
	},
	incomeDownUpTrade: {
		name: "incomeDownUpTrade",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "编号"
			},
			tradeDate: {
				column: "tradeDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "交易日期"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			upChannelNo: {
				column: "upChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游渠道编号"
			},
			tradeAmount: {
				column: "tradeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易金额"
			},
			tradeProfit: {
				column: "tradeProfit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易利润"
			}
		}
	},
	czthTradeReport: {
		name: "czthTradeReport",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "交易报表数据编号"
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "报表数据日期"
			},
			sourceSystem: {
				column: "sourceSystem",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道所属系统编号"
			},
			downCompanyId: {
				column: "downCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游公司编号"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游账户编号"
			},
			upCompanyId: {
				column: "upCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游公司编号"
			},
			upChannelNo: {
				column: "upChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游渠道编号"
			},
			upAccountId: {
				column: "upAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游账户编号"
			},
			statisticsType: {
				column: "statisticsType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务分类"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "前后项信息"
			},
			serviceRate: {
				column: "serviceRate",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "服务费率"
			},
			totalUnit: {
				column: "totalUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "扣款总规格"
			},
			totalFace: {
				column: "totalFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "扣款总面值"
			},
			totalDrawAmount: {
				column: "totalDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "扣款总金额"
			},
			refundUnit: {
				column: "refundUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款总规格"
			},
			refundFace: {
				column: "refundFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款面值"
			},
			refundDrawAmount: {
				column: "refundDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款金额"
			},
			totalSubsidy: {
				column: "totalSubsidy",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "总补贴金额"
			},
			refundSubsidy: {
				column: "refundSubsidy",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "总退回补贴金额"
			}
		}
	},
	incomeDownTrade: {
		name: "incomeDownTrade",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "编号"
			},
			tradeDate: {
				column: "tradeDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "交易日期"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			tradeType: {
				column: "tradeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易分类"
			},
			tradeAmount: {
				column: "tradeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易量"
			},
			tradeRvProfit: {
				column: "tradeRvProfit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易平账利润"
			},
			tradeProfit: {
				column: "tradeProfit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润（包含平账）"
			}
		}
	},
	incomeUpTrade: {
		name: "incomeUpTrade",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "编号"
			},
			tradeDate: {
				column: "tradeDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "交易日期"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			provinceNo: {
				column: "provinceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "所属省份"
			},
			tradeType: {
				column: "tradeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务分类"
			},
			tradeAmount: {
				column: "tradeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易量"
			},
			tradeRvProfit: {
				column: "tradeRvProfit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易平账利润"
			},
			tradeProfit: {
				column: "tradeProfit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润（包含平账）"
			}
		}
	},
	czthTradeServiceFee: {
		name: "czthTradeServiceFee",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "编号"
			},
			monthDate: {
				column: "monthDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "月份时间"
			},
			serviceFee: {
				column: "serviceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "手续费"
			}
		}
	},
	fdBankAccountInfo: {
		name: "fdBankAccountInfo",
		columns: {
			createdBy: {
				column: "createdBy",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			lastEditUser: {
				column: "lastEditUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			},
			isB2e: {
				column: "isB2e",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否为银企直联账户"
			},
			provinceNo: {
				column: "provinceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "账户省份编号"
			},
			cityNo: {
				column: "cityNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "账户城市编号"
			},
			queryBalance: {
				column: "queryBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "查询余额"
			},
			queryTime: {
				column: "queryTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "余额查询时间"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			title: {
				column: "title",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "标题"
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "账号名称"
			},
			cardNo: {
				column: "cardNo",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "账户卡号"
			},
			bankType: {
				column: "bankType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行类型-1.其它0.财付通1.支付宝2.移动钱包3.19E钱包4.银行账户5.北京银行6.建设银行7.京东8.民生银行9.联通迷你10.交通银行11.财付通企业"
			},
			assetType: {
				column: "assetType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "1.银行卡 0. 三方平台"
			},
			bankAddress: {
				column: "bankAddress",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "开户行"
			},
			isUseAddAmount: {
				column: "isUseAddAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否用于加款"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属公司"
			},
			remark: {
				column: "remark",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "备注"
			}
		}
	},
	fdBankCashFund: {
		name: "fdBankCashFund",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账号编号"
			},
			adjustId: {
				column: "adjustId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "红冲编号"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属公司"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "时间"
			},
			createdUser: {
				column: "createdUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "1-加款"
			},
			useType: {
				column: "useType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "用途1.上游加款2.下游加款3.转账4.上游佣金结算5.下游佣金结算6.利润提取7.收卡结算"
			},
			hasAdjust: {
				column: "hasAdjust",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否冲正过"
			},
			linkChannelName: {
				column: "linkChannelName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "关联渠道"
			},
			linkAccountName: {
				column: "linkAccountName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "关联账号"
			},
			remark: {
				column: "remark",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			serviceId: {
				column: "serviceId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "流水号记录编号(标记同一操作的几条数据)"
			},
			recordNo: {
				column: "recordNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "外部记录编号，同步时避免重复"
			},
			remarkName: {
				column: "remarkName",
				dataType: "varchar2",
				dataLength: 200,
				nullable: false,
				isPk: false,
				description: "收（付）款账户名称"
			}
		}
	},
	fdBankReportSnap: {
		name: "fdBankReportSnap",
		columns: {
			snapId: {
				column: "snapId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行卡账户"
			},
			useType: {
				column: "useType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "用途编号"
			},
			startBalance: {
				column: "startBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "期初余额"
			},
			endBalance: {
				column: "endBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "期末余额"
			},
			collectionFee: {
				column: "collectionFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "本日代收"
			},
			payFee: {
				column: "payFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "本日代付"
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "快照时间"
			}
		}
	},
	fdBankZeroBalance: {
		name: "fdBankZeroBalance",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			reportTime: {
				column: "reportTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "报表时间"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡编号"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "理论余额"
			},
			queryBalance: {
				column: "queryBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "查询余额"
			}
		}
	},
	fdBaseBusinessLine: {
		name: "fdBaseBusinessLine",
		columns: {
			businessId: {
				column: "businessId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			businessName: {
				column: "businessName",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "业务线名称"
			}
		}
	},
	fdBaseChannelBusinessMap: {
		name: "fdBaseChannelBusinessMap",
		columns: {
			mapId: {
				column: "mapId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			businessId: {
				column: "businessId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务线"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			}
		}
	},
	fdBaseCompanyAccountRecv: {
		name: "fdBaseCompanyAccountRecv",
		columns: {
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "账户名称"
			},
			oweCompany: {
				column: "oweCompany",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "欠款公司"
			},
			recvCompany: {
				column: "recvCompany",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "收款公司"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户余额"
			},
			remark: {
				column: "remark",
				dataType: "varchar2",
				dataLength: 512,
				nullable: false,
				isPk: false,
				description: "描述"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "状态:启用:禁用"
			},
			lastUpdateTime: {
				column: "lastUpdateTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			},
			lastUpdateUser: {
				column: "lastUpdateUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			}
		}
	},
	fdBaseCompanyInfo: {
		name: "fdBaseCompanyInfo",
		columns: {
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "公司编号"
			},
			companyName: {
				column: "companyName",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "公司名称"
			},
			initInputAmount: {
				column: "initInputAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "初始投入资金"
			},
			sortName: {
				column: "sortName",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "简称"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ":有效，1无效"
			}
		}
	},
	fdBaseDownAccountMap: {
		name: "fdBaseDownAccountMap",
		columns: {
			mapId: {
				column: "mapId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账号编号"
			},
			isMainChannel: {
				column: "isMainChannel",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否主关系"
			}
		}
	},
	fdBaseDownChannel: {
		name: "fdBaseDownChannel",
		columns: {
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: true,
				description: "渠道编号"
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "渠道名称"
			},
			serviceFee: {
				column: "serviceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "手续费率"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属公司"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "状态"
			},
			createdBy: {
				column: "createdBy",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			lastEditUser: {
				column: "lastEditUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			},
			commiBalance: {
				column: "commiBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "佣金余额"
			},
			warnBalance: {
				column: "warnBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "报警余额"
			},
			warnType: {
				column: "warnType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "报警类:1.单个支付账户不足   2.合计支付账户不足"
			},
			commiRule: {
				column: "commiRule",
				dataType: "varchar2",
				dataLength: 1024,
				nullable: false,
				isPk: false,
				description: "佣金规则"
			},
			needCommi: {
				column: "needCommi",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否需要后返佣金0需要，1不需要"
			},
			manageUser: {
				column: "manageUser",
				dataType: "varchar2",
				dataLength: 256,
				nullable: false,
				isPk: false,
				description: "开发/商务/运营"
			},
			channelCompany: {
				column: "channelCompany",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "渠道公司名称"
			},
			autoAdd: {
				column: "autoAdd",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "自动加款，0：开启，1：关闭"
			},
			autoAmount: {
				column: "autoAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "自动加款金额"
			},
			autoAddOnTime: {
				column: "autoAddOnTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "自动加款开启时间"
			}
		}
	},
	fdBaseDownSystemMap: {
		name: "fdBaseDownSystemMap",
		columns: {
			mapId: {
				column: "mapId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			sourceSystemId: {
				column: "sourceSystemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "系统编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			}
		}
	},
	fdBaseSourceSystem: {
		name: "fdBaseSourceSystem",
		columns: {
			sourceSystemId: {
				column: "sourceSystemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			sourceSystemName: {
				column: "sourceSystemName",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "系统名称"
			},
			text: {
				column: "text",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "显示名称"
			}
		}
	},
	fdBaseUpAccount: {
		name: "fdBaseUpAccount",
		columns: {
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "账号名称"
			},
			accountType: {
				column: "accountType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户类型（1.系统账户2.支付账户）"
			},
			queryBalance: {
				column: "queryBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "查询余额"
			},
			innerBalance: {
				column: "innerBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "理论余额"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "状态"
			},
			createdBy: {
				column: "createdBy",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			lastEditUser: {
				column: "lastEditUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			},
			isAutoAdd: {
				column: "isAutoAdd",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否自动加款"
			}
		}
	},
	fdBaseUpAccountMap: {
		name: "fdBaseUpAccountMap",
		columns: {
			mapId: {
				column: "mapId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "支付账号编号"
			},
			isMainChannel: {
				column: "isMainChannel",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否主关系"
			}
		}
	},
	fdBaseUpChannel: {
		name: "fdBaseUpChannel",
		columns: {
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "渠道名称"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "状态"
			},
			serviceFee: {
				column: "serviceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "手续费率"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属公司"
			},
			createdBy: {
				column: "createdBy",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			lastEditUser: {
				column: "lastEditUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			},
			commiBalance: {
				column: "commiBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "佣金余额"
			},
			warnBalance: {
				column: "warnBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "报警余额"
			},
			warnType: {
				column: "warnType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "报警类:1.单个支付账户不足   2.合计支付账户不足"
			},
			maxAdd: {
				column: "maxAdd",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "加款上限提示值"
			},
			minAdd: {
				column: "minAdd",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "加款下限提示值"
			},
			commiRule: {
				column: "commiRule",
				dataType: "varchar2",
				dataLength: 1024,
				nullable: false,
				isPk: false,
				description: "佣金规则"
			},
			needCommi: {
				column: "needCommi",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否需要后返佣金0需要，1不需要"
			},
			classification: {
				column: "classification",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道分类--对应业务类型"
			},
			capitalClass: {
				column: "capitalClass",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道资金分类：1.普通话费、2.普通流量、3.特殊话费、4.特殊流量、0.其他渠道"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "开票类:1前向2-后向"
			},
			manageUser: {
				column: "manageUser",
				dataType: "varchar2",
				dataLength: 256,
				nullable: false,
				isPk: false,
				description: "开发/商务/运营"
			},
			canAdd: {
				column: "canAdd",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "允许加款（0允许，1禁止）"
			},
			channelCompany: {
				column: "channelCompany",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "渠道公司名称"
			}
		}
	},
	fdBaseUpSystemMap: {
		name: "fdBaseUpSystemMap",
		columns: {
			mapId: {
				column: "mapId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			sourceSystemId: {
				column: "sourceSystemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "系统编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			}
		}
	},
	fdReportDownDaily: {
		name: "fdReportDownDaily",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			reportTime: {
				column: "reportTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "报表时间"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润类:1-前向2-后向"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			orderCount: {
				column: "orderCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单数量"
			},
			tradeFace: {
				column: "tradeFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易面值"
			},
			tradeUnit: {
				column: "tradeUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易数量"
			},
			costFee: {
				column: "costFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "扣款金额"
			},
			realFee: {
				column: "realFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实际扣款"
			},
			refundFace: {
				column: "refundFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款面值"
			},
			refundUnit: {
				column: "refundUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款数量(M)"
			},
			refundFee: {
				column: "refundFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款金额"
			},
			refundReal: {
				column: "refundReal",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实际退款"
			}
		}
	},
	fdReportUpDaily: {
		name: "fdReportUpDaily",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			reportTime: {
				column: "reportTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "报表时间"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润类:1-前向2-后向"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			orderCount: {
				column: "orderCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单数量"
			},
			tradeFace: {
				column: "tradeFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易面值"
			},
			tradeUnit: {
				column: "tradeUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易数量"
			},
			costFee: {
				column: "costFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "成本金额"
			},
			realFee: {
				column: "realFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实际扣款"
			},
			refundFace: {
				column: "refundFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款面值"
			},
			refundUnit: {
				column: "refundUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款数量(M)"
			},
			refundFee: {
				column: "refundFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款金额"
			},
			refundReal: {
				column: "refundReal",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实际退款"
			}
		}
	},
	fdReprotChannelSnap: {
		name: "fdReprotChannelSnap",
		columns: {
			snapId: {
				column: "snapId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道类型"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润类:1-前向2-后向"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			realCostFee: {
				column: "realCostFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实际账户扣款"
			},
			orderCostFee: {
				column: "orderCostFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下单扣款"
			},
			addAmount: {
				column: "addAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "加款金额"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道余额"
			},
			snapDate: {
				column: "snapDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "快照日期"
			}
		}
	},
	fdTradeCoRecvFund: {
		name: "fdTradeCoRecvFund",
		columns: {
			changeId: {
				column: "changeId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "公司资金账户编号"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动类型1加款2扣款3退款"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户余额"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			hasAdjust: {
				column: "hasAdjust",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否红冲过"
			},
			adjustId: {
				column: "adjustId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "红冲编号"
			},
			bankBatchId: {
				column: "bankBatchId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡变动批次号处理号（记录转账的出账、入账、手续费）"
			},
			handleUser: {
				column: "handleUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "操作人（结算加款时记录）"
			},
			remark: {
				column: "remark",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "备注"
			}
		}
	},
	fdTradeDownFund: {
		name: "fdTradeDownFund",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			fdOrderId: {
				column: "fdOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统订单号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游支付账号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统订单号"
			},
			extOrderNo: {
				column: "extOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "扩展订单号交易系统供"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动创建时间"
			},
			orderTime: {
				column: "orderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "订单日期(交易系统下单日期)"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变更类型  :加款 2：交易扣款 3：交易退款  : 提款"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户余额"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 1024,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			serviceFee: {
				column: "serviceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款退款时产生的手续费"
			}
		}
	},
	fdTradeDownRefund: {
		name: "fdTradeDownRefund",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游账户编号"
			},
			fdOrderId: {
				column: "fdOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统订单号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统订单号"
			},
			tradeRefundNo: {
				column: "tradeRefundNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统退款号"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）"
			},
			refundTime: {
				column: "refundTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "退款创建时间"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			carrierNo: {
				column: "carrierNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "运营商"
			},
			provinceNo: {
				column: "provinceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "省份"
			},
			refundUnit: {
				column: "refundUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款总量"
			},
			refundFace: {
				column: "refundFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款面值"
			},
			refundAmount: {
				column: "refundAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款金额"
			},
			realRefund: {
				column: "realRefund",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实际金额"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 1024,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			hasSynUp: {
				column: "hasSynUp",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否同步上游 0.已同步 1.未同步"
			}
		}
	},
	fdTradeOrderMain: {
		name: "fdTradeOrderMain",
		columns: {
			fdOrderId: {
				column: "fdOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款账号"
			},
			downCompanyId: {
				column: "downCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游公司编号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统订单号"
			},
			extOrderNo: {
				column: "extOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "扩展订单号交易系统供"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "订单添加时间"
			},
			orderTime: {
				column: "orderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "订单日期(交易系统下单日期)"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			carrierNo: {
				column: "carrierNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "运营商"
			},
			provinceNo: {
				column: "provinceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "省份"
			},
			cityNo: {
				column: "cityNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "城市"
			},
			totalFace: {
				column: "totalFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "总面值"
			},
			rechargeUnit: {
				column: "rechargeUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "充值总量"
			},
			rechargeAccountNo: {
				column: "rechargeAccountNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "充值号码"
			},
			hasUpTrade: {
				column: "hasUpTrade",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否产生上游扣款 0.已产生 1.未产生"
			},
			downOrderAmount: {
				column: "downOrderAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款金额"
			}
		}
	},
	fdTradeUpRefund: {
		name: "fdTradeUpRefund",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			fdOrderId: {
				column: "fdOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "系统订单号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统订单号"
			},
			tradeDeliveryNo: {
				column: "tradeDeliveryNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统发货编号"
			},
			tradeRefundNo: {
				column: "tradeRefundNo",
				dataType: "varchar2",
				dataLength: 20,
				nullable: false,
				isPk: false,
				description: "交易系统退款编号"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）"
			},
			refundTime: {
				column: "refundTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "退款时间"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润类:1-前向2-后向"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			carrierNo: {
				column: "carrierNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "运营商"
			},
			provinceNo: {
				column: "provinceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "省份"
			},
			refundUnit: {
				column: "refundUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款总量"
			},
			refundFace: {
				column: "refundFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款面值"
			},
			refundAmount: {
				column: "refundAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款金额"
			},
			realRefund: {
				column: "realRefund",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实际金额"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 1024,
				nullable: false,
				isPk: false,
				description: "备注"
			}
		}
	},
	fdTradeUpManual: {
		name: "fdTradeUpManual",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			adjustId: {
				column: "adjustId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "红冲编号(如果add_type为3"
			},
			manualChangeType: {
				column: "manualChangeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动类:11-加款+ 12-红冲-  21-扣款平帐加+  22-扣款平帐减-   31-退款平帐加+  32-退款平帐减- 41-余额平帐加+  42-余额平帐减-"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			createUser: {
				column: "createUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			partnerAccount: {
				column: "partnerAccount",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "合作方银行账户"
			},
			hasAdjust: {
				column: "hasAdjust",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否红冲过"
			},
			bankFundId: {
				column: "bankFundId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡资金变动编号id"
			},
			serviceId: {
				column: "serviceId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "收取手续费的记录的编号"
			},
			extRecordNo: {
				column: "extRecordNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游加款外部订单号"
			},
			realAmount: {
				column: "realAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易平账真实金额"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			upSyncAddNo: {
				column: "upSyncAddNo",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游同步加款加款记录编号"
			}
		}
	},
	fdSystemLog: {
		name: "fdSystemLog",
		columns: {
			logId: {
				column: "logId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "日志流水号"
			},
			objectName: {
				column: "objectName",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "对象名称"
			},
			errorCode: {
				column: "errorCode",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "错误码"
			},
			errorDesc: {
				column: "errorDesc",
				dataType: "varchar2",
				dataLength: 255,
				nullable: false,
				isPk: false,
				description: "错误信息"
			},
			manualDesc: {
				column: "manualDesc",
				dataType: "varchar2",
				dataLength: 255,
				nullable: false,
				isPk: false,
				description: "人工描述"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "发生时间"
			},
			trace: {
				column: "trace",
				dataType: "varchar2",
				dataLength: 512,
				nullable: false,
				isPk: false,
				description: "异常跟踪"
			},
			errorLevel: {
				column: "errorLevel",
				dataType: "varchar2",
				dataLength: 8,
				nullable: false,
				isPk: false,
				description: "错误级别"
			}
		}
	},
	fdSystemDictionary: {
		name: "fdSystemDictionary",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "编号"
			},
			value: {
				column: "value",
				dataType: "varchar2",
				dataLength: 16,
				nullable: false,
				isPk: false,
				description: "枚举项的值"
			},
			description: {
				column: "description",
				dataType: "varchar2",
				dataLength: 255,
				nullable: false,
				isPk: false,
				description: "枚举项的描述[即显示信息]"
			},
			belongEnum: {
				column: "belongEnum",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "所属枚举"
			},
			sortId: {
				column: "sortId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "枚举内的排序"
			},
			groupId: {
				column: "groupId",
				dataType: "varchar2",
				dataLength: 8,
				nullable: false,
				isPk: false,
				description: "分组"
			},
			belongSystem: {
				column: "belongSystem",
				dataType: "varchar2",
				dataLength: 8,
				nullable: false,
				isPk: false,
				description: "所属系统"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "状态0启用1禁用"
			}
		}
	},
	fdSystemCantonInfo: {
		name: "fdSystemCantonInfo",
		columns: {
			cantonCode: {
				column: "cantonCode",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "区域编号"
			},
			chineseName: {
				column: "chineseName",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "中文名称"
			},
			spell: {
				column: "spell",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "英文或全拼"
			},
			grade: {
				column: "grade",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "行政级别"
			},
			parent: {
				column: "parent",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "父级"
			},
			simpleSpell: {
				column: "simpleSpell",
				dataType: "varchar2",
				dataLength: 8,
				nullable: false,
				isPk: false,
				description: "简拼"
			},
			areaCode: {
				column: "areaCode",
				dataType: "varchar2",
				dataLength: 8,
				nullable: false,
				isPk: false,
				description: "区号"
			},
			standardCode: {
				column: "standardCode",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "标准行政编码"
			}
		}
	},
	fdBaseDownAccount: {
		name: "fdBaseDownAccount",
		columns: {
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "账号名称"
			},
			queryBalance: {
				column: "queryBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "查询余额"
			},
			innerBalance: {
				column: "innerBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "理论余额"
			},
			creditMoney: {
				column: "creditMoney",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "授信金额"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "状态"
			},
			createdBy: {
				column: "createdBy",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			lastEditUser: {
				column: "lastEditUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			},
			isAutoAdd: {
				column: "isAutoAdd",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否自动加款"
			}
		}
	},
	fdBaseCompanySettleConfig: {
		name: "fdBaseCompanySettleConfig",
		columns: {
			configId: {
				column: "configId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "配置编号"
			},
			oweCompany: {
				column: "oweCompany",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "欠款公司"
			},
			recvCompany: {
				column: "recvCompany",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "收款公司"
			},
			upChannelNo: {
				column: "upChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游渠道编号"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			carrierNo: {
				column: "carrierNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "运营商"
			},
			provinceNo: {
				column: "provinceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "省份"
			},
			cityNo: {
				column: "cityNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "地市"
			},
			settleCost: {
				column: "settleCost",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算折扣"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "状态"
			},
			lastUpdateTime: {
				column: "lastUpdateTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			},
			lastUpdateUser: {
				column: "lastUpdateUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			}
		}
	},
	fdTradeUpFund: {
		name: "fdTradeUpFund",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			fdOrderId: {
				column: "fdOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统订单号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统订单号"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）"
			},
			tradeDeliveryNo: {
				column: "tradeDeliveryNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统发货号"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游账户"
			},
			downCompanyId: {
				column: "downCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游所属公司"
			},
			upChannelNo: {
				column: "upChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游渠道编号"
			},
			upAccountId: {
				column: "upAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游账户"
			},
			upCompanyId: {
				column: "upCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游所属公司"
			},
			downDrawUnit: {
				column: "downDrawUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游充值量"
			},
			downDrawFace: {
				column: "downDrawFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款面值"
			},
			downDrawAmount: {
				column: "downDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款金额"
			},
			downRealAmount: {
				column: "downRealAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游实际金额"
			},
			upDrawUnit: {
				column: "upDrawUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游充值量"
			},
			upDrawFace: {
				column: "upDrawFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游成功面值"
			},
			upDrawAmount: {
				column: "upDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游扣款金额"
			},
			upRealAmount: {
				column: "upRealAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游实际金额"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变更类型 :加款 2：交易扣款 3：交易退款"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润类:前向2-后向"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			carrierNo: {
				column: "carrierNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "运营商"
			},
			provinceNo: {
				column: "provinceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "省份"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额"
			},
			profits: {
				column: "profits",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润"
			},
			downCommission: {
				column: "downCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游后返佣金"
			},
			upCommission: {
				column: "upCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游后返佣金"
			},
			settleAmount: {
				column: "settleAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算金额"
			},
			settleBatchId: {
				column: "settleBatchId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算批次号"
			},
			settleStatus: {
				column: "settleStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算状:20-等待结算"
			},
			settleTime: {
				column: "settleTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "结算时间"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			orderTime: {
				column: "orderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "订单日期(交易系统下单日期)"
			},
			splitProfitStatus: {
				column: "splitProfitStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否分配利润，0已分配"
			},
			outChangeTime: {
				column: "outChangeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "外部系统资金变动时间"
			}
		}
	},
	fdTradeDownManual: {
		name: "fdTradeDownManual",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			adjustId: {
				column: "adjustId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "红冲编号"
			},
			hasAdjust: {
				column: "hasAdjust",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否红冲过"
			},
			addType: {
				column: "addType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动类:11-加款+ 12-红冲-  21-扣款平帐加+  22-扣款平帐减-  31-退款平帐加+  32-退款平帐减- 41-余额平帐加+ 42-余额平帐减-"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额"
			},
			createUser: {
				column: "createUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			bankFundId: {
				column: "bankFundId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行资金变动编号(红冲时用)"
			},
			partnerAccount: {
				column: "partnerAccount",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "合作方银行账户"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			extRecordNo: {
				column: "extRecordNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "外部加款记录编号"
			},
			serviceId: {
				column: "serviceId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "收取手续费的记录的编号(渠道手续费)"
			},
			realAmount: {
				column: "realAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易平账真实金额"
			}
		}
	},
	fdBaseUpAccountBank: {
		name: "fdBaseUpAccountBank",
		columns: {
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键(对应上游账户主键)"
			},
			title: {
				column: "title",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "标题(区分银行卡用途)"
			},
			cardNo: {
				column: "cardNo",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "银行卡卡号"
			},
			cardPwd: {
				column: "cardPwd",
				dataType: "varchar2",
				dataLength: 512,
				nullable: false,
				isPk: false,
				description: "银行卡密码"
			},
			cardHolder: {
				column: "cardHolder",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "银行卡持有人"
			},
			bankType: {
				column: "bankType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行类型"
			},
			bankName: {
				column: "bankName",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "银行卡所属银行"
			},
			bankAddress: {
				column: "bankAddress",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "开户行"
			},
			remark: {
				column: "remark",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			createBy: {
				column: "createBy",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			}
		}
	},
	fdBaseCompanyAccountSelf: {
		name: "fdBaseCompanyAccountSelf",
		columns: {
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "账号名称"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属公司账户"
			},
			accountType: {
				column: "accountType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户类:1.汇款手续费账户2.下游已付佣金账户"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额(手续费为负债)"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "状态"
			},
			createdBy: {
				column: "createdBy",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			lastEditUser: {
				column: "lastEditUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			}
		}
	},
	fdTradeCoSelfFund: {
		name: "fdTradeCoSelfFund",
		columns: {
			changeId: {
				column: "changeId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "公司独立资金账户编号"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动类型1加款2减款3红冲"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户余额(手续费为负债)"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			adjustId: {
				column: "adjustId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "红冲编号"
			},
			hasAdjust: {
				column: "hasAdjust",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否红冲过"
			},
			bankBatchId: {
				column: "bankBatchId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡变动批次号处理号（记录转账的出账、入账、手续费）"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			createUser: {
				column: "createUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			}
		}
	},
	fdBaseCompanyAccountCap: {
		name: "fdBaseCompanyAccountCap",
		columns: {
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "账号名称"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属公司账户"
			},
			accountType: {
				column: "accountType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户类:1.运营投入"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额(手续费为负债)"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "状态"
			},
			createdBy: {
				column: "createdBy",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			lastEditUser: {
				column: "lastEditUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			},
			useType: {
				column: "useType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "使用类型：1.投入账户（借支、短期为减），2.运营账户"
			}
		}
	},
	fdTradeCoCapFund: {
		name: "fdTradeCoCapFund",
		columns: {
			changeId: {
				column: "changeId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "公司资产账户编号"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动类型1加款2减款3红冲（负值）"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户余额"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			adjustId: {
				column: "adjustId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "红冲编号"
			},
			hasAdjust: {
				column: "hasAdjust",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否红冲过"
			},
			bankBatchId: {
				column: "bankBatchId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡变动批次号处理号（记录转账的出账、入账、手续费）"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 1024,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			recordNo: {
				column: "recordNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "预付款同步编号"
			},
			createUser: {
				column: "createUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			fdOrderId: {
				column: "fdOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "转账退款订单号"
			},
			transferRefundId: {
				column: "transferRefundId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "转账退款退款编号"
			},
			transferDrawId: {
				column: "transferDrawId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "转账退款退款提款编号"
			}
		}
	},
	fdReportCommissionDaily: {
		name: "fdReportCommissionDaily",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道类型1.上游2．下游"
			},
			commission: {
				column: "commission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "佣金"
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "快照时间"
			}
		}
	},
	fdReportCommissionMonthly: {
		name: "fdReportCommissionMonthly",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道类型1.上游2．下游"
			},
			totalCommission: {
				column: "totalCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "佣金"
			},
			drawCommission: {
				column: "drawCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "提取或支付佣金"
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "月份"
			}
		}
	},
	fdReportProfitDaily: {
		name: "fdReportProfitDaily",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "公司编号"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润类:1-前向2-后向"
			},
			rechargeFee: {
				column: "rechargeFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "充值金额"
			},
			downRefundFee: {
				column: "downRefundFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游退款"
			},
			upCostFee: {
				column: "upCostFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游扣款"
			},
			upRefundFee: {
				column: "upRefundFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游退款"
			},
			serviceFee: {
				column: "serviceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "手续费"
			},
			profits: {
				column: "profits",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润"
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "快照时间"
			}
		}
	},
	fdReportProfitMonthly: {
		name: "fdReportProfitMonthly",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "公司编号"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润类:1-前向2-后向"
			},
			rechargeFee: {
				column: "rechargeFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "充值金额"
			},
			downRefundFee: {
				column: "downRefundFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游退款"
			},
			upCostFee: {
				column: "upCostFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游扣款"
			},
			upRefundFee: {
				column: "upRefundFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游退款"
			},
			serviceFee: {
				column: "serviceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "手续费"
			},
			totalProfits: {
				column: "totalProfits",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "总利润"
			},
			drawProfits: {
				column: "drawProfits",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "已提取利润"
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "月份"
			}
		}
	},
	fdTradeProfitDraw: {
		name: "fdTradeProfitDraw",
		columns: {
			reportId: {
				column: "reportId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "公司编号"
			},
			profit: {
				column: "profit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "提取利润"
			},
			drawMonth: {
				column: "drawMonth",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "利润的月份"
			},
			drawBillType: {
				column: "drawBillType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润类:1-前向2-后向"
			},
			drawStatus: {
				column: "drawStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "提取状态"
			},
			drawUser: {
				column: "drawUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "提取人"
			},
			drawTime: {
				column: "drawTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "提取时间"
			},
			hasAdjust: {
				column: "hasAdjust",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否红冲过"
			},
			adjustId: {
				column: "adjustId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "红冲编号"
			},
			bankFundId: {
				column: "bankFundId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "红冲对应实体卡变动记录编号"
			}
		}
	},
	fdTradeCommissionSettle: {
		name: "fdTradeCommissionSettle",
		columns: {
			reportId: {
				column: "reportId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道类型"
			},
			commission: {
				column: "commission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "佣金"
			},
			settleMonth: {
				column: "settleMonth",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "佣金的月份"
			},
			settleStatus: {
				column: "settleStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算状态"
			},
			settleUser: {
				column: "settleUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "结算人"
			},
			settleTime: {
				column: "settleTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "结算时间"
			},
			hasAdjust: {
				column: "hasAdjust",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否红冲过"
			},
			adjustId: {
				column: "adjustId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "红冲编号"
			},
			bankBatchId: {
				column: "bankBatchId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "红冲对应实体卡变动记录编号"
			},
			settleType: {
				column: "settleType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算类型：1佣金结算，2转渠道余额  3.佣金加款"
			},
			commiBalance: {
				column: "commiBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "佣金余额"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 1024,
				nullable: false,
				isPk: false,
				description: "备注"
			}
		}
	},
	fdTradeProfitFund: {
		name: "fdTradeProfitFund",
		columns: {
			fundId: {
				column: "fundId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键（利润任务相同）"
			},
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "月报表编号"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "公司编号"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润类:1-前向2-后向"
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "月份"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动类型（11总利润加款12总利润平账加款13总利润平账减款21提取利润加款22提取利润红冲）"
			},
			dealCount: {
				column: "dealCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "总利润加款统计条数"
			},
			totalProfitsFund: {
				column: "totalProfitsFund",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "总利润变动金额"
			},
			drawProfitsFund: {
				column: "drawProfitsFund",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "已提取利润变动金额"
			},
			totalProfitsBalance: {
				column: "totalProfitsBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "总利润余额"
			},
			drawProfitsBalance: {
				column: "drawProfitsBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "已提取利润余额"
			},
			coProfitsBalance: {
				column: "coProfitsBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "公司利润余额"
			},
			changeDate: {
				column: "changeDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			}
		}
	},
	fdReportBankDaily: {
		name: "fdReportBankDaily",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡账号编号"
			},
			addAmount: {
				column: "addAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "加款金额"
			},
			minusAmount: {
				column: "minusAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "减款金额"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户余额"
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "日期"
			}
		}
	},
	fdSystemHandleLog: {
		name: "fdSystemHandleLog",
		columns: {
			logId: {
				column: "logId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			handleModule: {
				column: "handleModule",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "操作功能模块"
			},
			handleUser: {
				column: "handleUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "操作人"
			},
			handleTime: {
				column: "handleTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "操作时间"
			},
			handleParams: {
				column: "handleParams",
				dataType: "varchar2",
				dataLength: 256,
				nullable: false,
				isPk: false,
				description: "参数"
			}
		}
	},
	fdTradeBaseJoin: {
		name: "fdTradeBaseJoin",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			joinCode1: {
				column: "joinCode1",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "关联字段1"
			},
			joinCode2: {
				column: "joinCode2",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "关联字段2"
			},
			joinMemo: {
				column: "joinMemo",
				dataType: "varchar2",
				dataLength: 1024,
				nullable: false,
				isPk: false,
				description: "关联备注信息"
			},
			joinType: {
				column: "joinType",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "关联类型 1.上游佣金关联，2下游佣金关联"
			}
		}
	},
	fdReportCommiProfitDaily: {
		name: "fdReportCommiProfitDaily",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "公司编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "支付账户编号"
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道类型1.上游2．下游"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润类型，1.前向，2后向"
			},
			totalUnit: {
				column: "totalUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "充值规格"
			},
			totalFace: {
				column: "totalFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "充值面值"
			},
			drawAmount: {
				column: "drawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "扣款金额"
			},
			realAmount: {
				column: "realAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实际金额"
			},
			commission: {
				column: "commission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "佣金"
			},
			profits: {
				column: "profits",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润"
			},
			serviceFee: {
				column: "serviceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实时扣除佣金(手续费)"
			},
			refundTotalUnit: {
				column: "refundTotalUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款规格"
			},
			refundTotalFace: {
				column: "refundTotalFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款面值"
			},
			refundDrawAmount: {
				column: "refundDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款金额"
			},
			refundRealAmount: {
				column: "refundRealAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实际退款金额"
			},
			refundCommission: {
				column: "refundCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退回佣金"
			},
			refundProfits: {
				column: "refundProfits",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退回利润"
			},
			refundServiceFee: {
				column: "refundServiceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退回实时扣除佣金（手续费）"
			},
			upManyFace: {
				column: "upManyFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游多冲的面值"
			},
			upManyAmount: {
				column: "upManyAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游多冲的金额"
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "快照时间(交易数据日期)"
			},
			addStatus: {
				column: "addStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户加款状态 1.未开始，2.正在扣款，0.扣款完成，9.加款失败"
			},
			statisticsType: {
				column: "statisticsType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "统计类型，1.流量数据包，2前向流量充值，3话费、固话，4.加油卡充值，5.Q币、游戏币"
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "渠道名称"
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "支付账户名称"
			},
			syncStatus: {
				column: "syncStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "同步诚实系统状态，0同步完成，1未进行同步，2正在同步，9同步失败"
			},
			syncBatch: {
				column: "syncBatch",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "数据同步批次号"
			},
			channelSourceSystem: {
				column: "channelSourceSystem",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道所属系统编号"
			}
		}
	},
	fdTradeDifferSummary: {
		name: "fdTradeDifferSummary",
		columns: {
			adjustId: {
				column: "adjustId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "记录时间"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "公司编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游支付账户编号"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			downFirstFace: {
				column: "downFirstFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游与上游扣款的时间差造成的差异面值(上下游扣款有时间差异时造成，下扣、下退、上扣、上退)"
			},
			downFirstAmount: {
				column: "downFirstAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游与上游扣款的时间差造成的差异金额"
			}
		}
	},
	fdTradeUpFundDiffer: {
		name: "fdTradeUpFundDiffer",
		columns: {
			differId: {
				column: "differId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "记录创建的日期"
			},
			fdOrderId: {
				column: "fdOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统订单号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游渠道支付账户编号"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润类型，1.前向，2后向"
			},
			downAdjustFace: {
				column: "downAdjustFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "统计下游扣款需调整的面值(下游退款造成上游面值比下游多时产生，下退)"
			},
			downAdjustUnit: {
				column: "downAdjustUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "统计下游扣款需调整的规格"
			},
			downAdjustAmount: {
				column: "downAdjustAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "统计下游扣款需调整的金额"
			},
			downAdjustReal: {
				column: "downAdjustReal",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "统计下游扣款需调整的真实扣款"
			},
			upManyFace: {
				column: "upManyFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游多冲的面值(上游面值比下游面值多时产生，上扣、下退、上退)"
			},
			upManyAmount: {
				column: "upManyAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游多冲的金额"
			},
			toFrontFace: {
				column: "toFrontFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "需要由后向转前向的面值(上游退款时，退的多冲数据且与多冲前后向不一致时，后退前为正)"
			},
			toFrontUnit: {
				column: "toFrontUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "需要由后向转前向的规格"
			},
			toFrontAmount: {
				column: "toFrontAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "需要由后向转前向的金额"
			},
			toFrontReal: {
				column: "toFrontReal",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "需要由后向转前向的真实扣款"
			}
		}
	},
	fdB2eBankMainCode: {
		name: "fdB2eBankMainCode",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			bankType: {
				column: "bankType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行类型(民生银行，中信银行)"
			},
			interfaceType: {
				column: "interfaceType",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "接口分类"
			},
			recvBankType: {
				column: "recvBankType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "收款银行类型"
			},
			recvBankCode: {
				column: "recvBankCode",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "收款银行对应主行号"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "备注信息"
			}
		}
	},
	fdSystemDownProfitMap: {
		name: "fdSystemDownProfitMap",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道"
			},
			profitRatio: {
				column: "profitRatio",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润分配给下游的比例"
			}
		}
	},
	fdReportCapOffsetChannel: {
		name: "fdReportCapOffsetChannel",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "配置编号"
			},
			channelSystemId: {
				column: "channelSystemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道系统编号"
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道类型，1上游渠道，2下游渠道"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			}
		}
	},
	fdB2eBankZxyjCode: {
		name: "fdB2eBankZxyjCode",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			bankType: {
				column: "bankType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行类型"
			},
			bankGrade: {
				column: "bankGrade",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行等级，0总行，1省分行，2市分行"
			},
			cantonCode: {
				column: "cantonCode",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "地区编码"
			},
			bankCode: {
				column: "bankCode",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "银行编码"
			},
			bankName: {
				column: "bankName",
				dataType: "varchar2",
				dataLength: 126,
				nullable: false,
				isPk: false,
				description: "银行名称"
			}
		}
	},
	fdReportAddWarn: {
		name: "fdReportAddWarn",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "编号"
			},
			warnDate: {
				column: "warnDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "报警时间"
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "渠道名称"
			},
			eightBalance: {
				column: "eightBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "八点余额"
			},
			yesterdayAdd: {
				column: "yesterdayAdd",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "昨日加款"
			},
			balanceRatio: {
				column: "balanceRatio",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额占比"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			}
		}
	},
	fdTradeDownManualYc: {
		name: "fdTradeDownManualYc",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			adjustId: {
				column: "adjustId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "红冲编号"
			},
			hasAdjust: {
				column: "hasAdjust",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否红冲过"
			},
			addType: {
				column: "addType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动类:11-加款+ 12-红冲-  21-扣款平帐加+  22-扣款平帐减-  31-退款平帐加+  32-退款平帐减- 41-余额平帐加+ 42-余额平帐减-"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额"
			},
			createUser: {
				column: "createUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			bankFundId: {
				column: "bankFundId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行资金变动编号(红冲时用)"
			},
			partnerAccount: {
				column: "partnerAccount",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "合作方银行账户"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			extRecordNo: {
				column: "extRecordNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "外部加款记录编号"
			},
			serviceId: {
				column: "serviceId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "收取手续费的记录的编号(渠道手续费)"
			},
			realAmount: {
				column: "realAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易平账真实金额"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "云充记录业务类型"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "云充记录开票类型"
			},
			dealStatus: {
				column: "dealStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "合并平账状态，0已处理，1未处理，2正在处理"
			}
		}
	},
	fdSystemBusinessStatisMap: {
		name: "fdSystemBusinessStatisMap",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			localBusinessType: {
				column: "localBusinessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统业务类型编号"
			},
			statisticsType: {
				column: "statisticsType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "财务渠道分类"
			}
		}
	},
	dkTradeCommissionSettle: {
		name: "dkTradeCommissionSettle",
		columns: {
			reportId: {
				column: "reportId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道类型"
			},
			commission: {
				column: "commission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "佣金"
			},
			settleMonth: {
				column: "settleMonth",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "佣金的月份"
			},
			settleStatus: {
				column: "settleStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算状态"
			},
			settleUser: {
				column: "settleUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "结算人"
			},
			settleTime: {
				column: "settleTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "结算时间"
			},
			hasAdjust: {
				column: "hasAdjust",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否红冲过"
			},
			adjustId: {
				column: "adjustId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "红冲编号"
			},
			bankBatchId: {
				column: "bankBatchId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "红冲对应实体卡变动记录编号"
			},
			settleType: {
				column: "settleType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算类型：1佣金结算，2转渠道余额  3.佣金加款"
			},
			commiBalance: {
				column: "commiBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "佣金余额"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 1024,
				nullable: false,
				isPk: false,
				description: "备注"
			}
		}
	},
	supTradeUpManual: {
		name: "supTradeUpManual",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "记录编号"
			},
			upChannelNo: {
				column: "upChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游渠道编号"
			},
			upAccountId: {
				column: "upAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游渠道账户"
			},
			hasAdjust: {
				column: "hasAdjust",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否已红冲过"
			},
			adjustRecordId: {
				column: "adjustRecordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "红冲的记录编号"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动类型（加款、加款红冲、提款、提款红冲、实体卡收货、电子卡密收货、实体卡转电子卡密、余额平账、交易平账）"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			wayChangeCount: {
				column: "wayChangeCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途变动张数"
			},
			wayChangeFace: {
				column: "wayChangeFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途变动面值"
			},
			wayChangeAmount: {
				column: "wayChangeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途变动金额"
			},
			physicalChangeCount: {
				column: "physicalChangeCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡变动条数"
			},
			physicalChangeFace: {
				column: "physicalChangeFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡变动面值"
			},
			physicalChangeAmount: {
				column: "physicalChangeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡变动金额"
			},
			electronicChangeCount: {
				column: "electronicChangeCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "电子卡密变动条数"
			},
			electronicChangeFace: {
				column: "electronicChangeFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "电子卡密变动面值"
			},
			electronicChangeAmount: {
				column: "electronicChangeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "电子卡密变动金额"
			},
			wayCountBalance: {
				column: "wayCountBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途卡余额"
			},
			wayFaceBalance: {
				column: "wayFaceBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途面值余额"
			},
			wayCardBalance: {
				column: "wayCardBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途账户余额"
			},
			physicalCountBalance: {
				column: "physicalCountBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡张数余额"
			},
			physicalFaceBalance: {
				column: "physicalFaceBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡面值余额"
			},
			physicalCardBalance: {
				column: "physicalCardBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡账户余额"
			},
			electronicCountBalance: {
				column: "electronicCountBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "电子卡密张数余额"
			},
			electronicFaceBalance: {
				column: "electronicFaceBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "电子卡密面值余额"
			},
			electronicCardBalance: {
				column: "electronicCardBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "电子卡密账户余额"
			},
			tradeChangeTime: {
				column: "tradeChangeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "实体卡收货、电子卡密收货、实体卡转电子卡密交易系统时间"
			},
			bankCardNo: {
				column: "bankCardNo",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "加款/提款对应银行账户"
			},
			bankRecordId: {
				column: "bankRecordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "加款/提款银行资金变动编号"
			},
			bankServiceId: {
				column: "bankServiceId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "加款银行收取手续费编号"
			},
			bankRelateId: {
				column: "bankRelateId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "可红冲记录和银行相关记录关联编号"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 256,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			createdBy: {
				column: "createdBy",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "创建人"
			}
		}
	},
	supTradeDownManual: {
		name: "supTradeDownManual",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "记录编号"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游账户编号"
			},
			hasAdjust: {
				column: "hasAdjust",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否已红冲过"
			},
			adjustRecordId: {
				column: "adjustRecordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "红冲的记录编号"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动类型（加款、加款红冲、提款、提款红冲，余额平账、交易平账）"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户余额"
			},
			bankCardNo: {
				column: "bankCardNo",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "加款/提款对应银行账户"
			},
			bankRecordId: {
				column: "bankRecordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "加款/提款银行资金变动编号"
			},
			bankServiceId: {
				column: "bankServiceId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "提款银行收取手续费编号"
			},
			bankRelateId: {
				column: "bankRelateId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "可红冲记录和银行相关记录关联编号"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 256,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			createdBy: {
				column: "createdBy",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "创建人"
			}
		}
	},
	supReportDailyManual: {
		name: "supReportDailyManual",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "记录编号"
			},
			reportDate: {
				column: "reportDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "数据日期"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "公司编号"
			},
			systemId: {
				column: "systemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "系统编号"
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道类型"
			},
			wayChangeCount: {
				column: "wayChangeCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途张数增加数"
			},
			wayChangeFace: {
				column: "wayChangeFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途面值增加数"
			},
			wayChangeAmount: {
				column: "wayChangeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途金额增加数"
			},
			physicalChangeCount: {
				column: "physicalChangeCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡张数增加数"
			},
			physicalChangeFace: {
				column: "physicalChangeFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡面值增加数"
			},
			physicalChangeAmount: {
				column: "physicalChangeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡金额增加数"
			},
			electronicChangeCount: {
				column: "electronicChangeCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "电子卡张数增加数"
			},
			electronicChangeFace: {
				column: "electronicChangeFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "电子卡面值增加数"
			},
			electronicChangeAmount: {
				column: "electronicChangeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "电子卡金额增加数"
			}
		}
	},
	supReportDailyTrade: {
		name: "supReportDailyTrade",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "记录编号"
			},
			reportDate: {
				column: "reportDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "数据日期"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "公司编号"
			},
			systemId: {
				column: "systemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "系统编号"
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道类型"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "前后项信息"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			statisticsType: {
				column: "statisticsType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "财务分类"
			},
			tradeCount: {
				column: "tradeCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "销卡张数"
			},
			tradeUnit: {
				column: "tradeUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易规格"
			},
			tradeFace: {
				column: "tradeFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易面值"
			},
			tradeAmount: {
				column: "tradeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易金额"
			}
		}
	},
	supReportZeroBalance: {
		name: "supReportZeroBalance",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "记录编号"
			},
			zeroDate: {
				column: "zeroDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "零点日期"
			},
			createDate: {
				column: "createDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "收集时间"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "公司编号"
			},
			systemId: {
				column: "systemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "系统编号"
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道类型"
			},
			onWayCount: {
				column: "onWayCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途张数"
			},
			onWayFace: {
				column: "onWayFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途面值"
			},
			onWayBalance: {
				column: "onWayBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途余额"
			},
			physicalCardCount: {
				column: "physicalCardCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡张数"
			},
			physicalCardFace: {
				column: "physicalCardFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡面值"
			},
			physicalCardBalance: {
				column: "physicalCardBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡余额"
			},
			electronicCardCount: {
				column: "electronicCardCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "电子卡密张数"
			},
			electronicCardFace: {
				column: "electronicCardFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "电子卡密面值"
			},
			electronicCardBalance: {
				column: "electronicCardBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "电子卡密余额"
			}
		}
	},
	supTradeOrderMainHs: {
		name: "supTradeOrderMainHs",
		columns: {
			supOrderId: {
				column: "supOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "记账系统订单号"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游账户编号"
			},
			downCompanyId: {
				column: "downCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游公司编号"
			},
			sourceSystemId: {
				column: "sourceSystemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "系统编号"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "生产系统订单号"
			},
			tradeOrderTime: {
				column: "tradeOrderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "生产系统订单时间"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			carrierNo: {
				column: "carrierNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "运营商"
			},
			proviceNo: {
				column: "proviceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "省份编号"
			},
			cityNo: {
				column: "cityNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "城市编号"
			},
			orderUnit: {
				column: "orderUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单规格"
			},
			orderFace: {
				column: "orderFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单面值"
			},
			orderAmount: {
				column: "orderAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单金额"
			},
			completeFace: {
				column: "completeFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "完成面值"
			},
			completeAmount: {
				column: "completeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "完成金额"
			}
		}
	},
	supBaseUpChannel: {
		name: "supBaseUpChannel",
		columns: {
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: true,
				description: "渠道编号"
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 126,
				nullable: false,
				isPk: false,
				description: "渠道名称"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属公司"
			},
			sourceSystemId: {
				column: "sourceSystemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属系统"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "状态"
			},
			warnBalance: {
				column: "warnBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "报警余额"
			},
			createdBy: {
				column: "createdBy",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			lastEditUser: {
				column: "lastEditUser",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			},
			statisticsType: {
				column: "statisticsType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "财务分类"
			}
		}
	},
	supBaseUpAccount: {
		name: "supBaseUpAccount",
		columns: {
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "账户编号"
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "账户名称"
			},
			onWayCount: {
				column: "onWayCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途张数"
			},
			onWayFace: {
				column: "onWayFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途面值"
			},
			onWayBalance: {
				column: "onWayBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途余额"
			},
			physicalCardCount: {
				column: "physicalCardCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡张数"
			},
			physicalCardFace: {
				column: "physicalCardFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡面值"
			},
			physicalCardBalance: {
				column: "physicalCardBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡余额"
			},
			electronicCardCount: {
				column: "electronicCardCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "电子卡密张数"
			},
			electronicCardFace: {
				column: "electronicCardFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "电子卡密面值"
			},
			electronicCardBalance: {
				column: "electronicCardBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "电子卡密余额"
			},
			createdBy: {
				column: "createdBy",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			lastEditUser: {
				column: "lastEditUser",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			}
		}
	},
	supTradeUpFundHs: {
		name: "supTradeUpFundHs",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "资金变动编号"
			},
			supOrderId: {
				column: "supOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统订单号"
			},
			sourceSystemId: {
				column: "sourceSystemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "系统编号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统订单号"
			},
			tradeDeliveryNo: {
				column: "tradeDeliveryNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统发货编号"
			},
			tradeRefundNo: {
				column: "tradeRefundNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "生产系统退款编号"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游账户编号"
			},
			downCompanyId: {
				column: "downCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游公司编号"
			},
			upChannelNo: {
				column: "upChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游渠道编号"
			},
			upAccountId: {
				column: "upAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游账户编号"
			},
			upCompanyId: {
				column: "upCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游公司编号"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动类型（加款、扣款、退款、提款、号卡转移）"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "资金变动时间"
			},
			tradeOrderTime: {
				column: "tradeOrderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "生产系统订单时间"
			},
			tradeChangeTime: {
				column: "tradeChangeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "生产系统资金变动时间"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "前后项信息"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			carrierNo: {
				column: "carrierNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "运营商"
			},
			provinceNo: {
				column: "provinceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "省份"
			},
			cityNo: {
				column: "cityNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "城市"
			},
			downDrawCount: {
				column: "downDrawCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款销卡张数"
			},
			downDrawUnit: {
				column: "downDrawUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款规格"
			},
			downDrawFace: {
				column: "downDrawFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款面值"
			},
			downDrawAmount: {
				column: "downDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款金额"
			},
			upDrawCount: {
				column: "upDrawCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游扣款销卡张数"
			},
			upDrawUnit: {
				column: "upDrawUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游扣款规格"
			},
			upDrawFace: {
				column: "upDrawFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游扣款面值"
			},
			upDrawAmount: {
				column: "upDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游扣款金额"
			},
			wayChangeCount: {
				column: "wayChangeCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途变动张数"
			},
			wayChangeFace: {
				column: "wayChangeFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途面值"
			},
			wayChangeAmount: {
				column: "wayChangeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途变动金额"
			},
			physicalChangeCount: {
				column: "physicalChangeCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡张数"
			},
			physicalChangeFace: {
				column: "physicalChangeFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡面值"
			},
			physicalChangeAmount: {
				column: "physicalChangeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡变动金额"
			},
			wayCountBalance: {
				column: "wayCountBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途卡余额"
			},
			wayFaceBalance: {
				column: "wayFaceBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途面值余额"
			},
			wayCardBalance: {
				column: "wayCardBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途余额"
			},
			physicalCountBalance: {
				column: "physicalCountBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡张数余额"
			},
			physicalFaceBalance: {
				column: "physicalFaceBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡面值余额"
			},
			physicalCardBalance: {
				column: "physicalCardBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡余额"
			},
			electronicCountBalance: {
				column: "electronicCountBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "电子卡密张数余额"
			},
			electronicFaceBalance: {
				column: "electronicFaceBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "电子卡密面值余额"
			},
			electronicCardBalance: {
				column: "electronicCardBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "电子卡密余额"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 256,
				nullable: false,
				isPk: false,
				description: "备注"
			}
		}
	},
	supTradeUpFund: {
		name: "supTradeUpFund",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "资金变动编号"
			},
			supOrderId: {
				column: "supOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统订单号"
			},
			sourceSystemId: {
				column: "sourceSystemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "系统编号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统订单号"
			},
			tradeDeliveryNo: {
				column: "tradeDeliveryNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统发货编号"
			},
			tradeRefundNo: {
				column: "tradeRefundNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "生产系统退款编号"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游账户编号"
			},
			downCompanyId: {
				column: "downCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游公司编号"
			},
			upChannelNo: {
				column: "upChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游渠道编号"
			},
			upAccountId: {
				column: "upAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游账户编号"
			},
			upCompanyId: {
				column: "upCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游公司编号"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动类型（加款、扣款、退款、提款、号卡转移）"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "资金变动时间"
			},
			tradeOrderTime: {
				column: "tradeOrderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "生产系统订单时间"
			},
			tradeChangeTime: {
				column: "tradeChangeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "生产系统资金变动时间"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "前后项信息"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			carrierNo: {
				column: "carrierNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "运营商"
			},
			provinceNo: {
				column: "provinceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "省份"
			},
			cityNo: {
				column: "cityNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "城市"
			},
			downDrawCount: {
				column: "downDrawCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款销卡张数"
			},
			downDrawUnit: {
				column: "downDrawUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款规格"
			},
			downDrawFace: {
				column: "downDrawFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款面值"
			},
			downDrawAmount: {
				column: "downDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款金额"
			},
			upDrawCount: {
				column: "upDrawCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游扣款销卡张数"
			},
			upDrawUnit: {
				column: "upDrawUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游扣款规格"
			},
			upDrawFace: {
				column: "upDrawFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游扣款面值"
			},
			upDrawAmount: {
				column: "upDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游扣款金额"
			},
			wayChangeCount: {
				column: "wayChangeCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途变动张数"
			},
			wayChangeFace: {
				column: "wayChangeFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途面值"
			},
			wayChangeAmount: {
				column: "wayChangeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途变动金额"
			},
			physicalChangeCount: {
				column: "physicalChangeCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡张数"
			},
			physicalChangeFace: {
				column: "physicalChangeFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡面值"
			},
			physicalChangeAmount: {
				column: "physicalChangeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡变动金额"
			},
			wayCountBalance: {
				column: "wayCountBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途卡余额"
			},
			wayFaceBalance: {
				column: "wayFaceBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途面值余额"
			},
			wayCardBalance: {
				column: "wayCardBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "在途余额"
			},
			physicalCountBalance: {
				column: "physicalCountBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡张数余额"
			},
			physicalFaceBalance: {
				column: "physicalFaceBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡面值余额"
			},
			physicalCardBalance: {
				column: "physicalCardBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实体卡余额"
			},
			electronicCountBalance: {
				column: "electronicCountBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "电子卡密张数余额"
			},
			electronicFaceBalance: {
				column: "electronicFaceBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "电子卡密面值余额"
			},
			electronicCardBalance: {
				column: "electronicCardBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "电子卡密余额"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 256,
				nullable: false,
				isPk: false,
				description: "备注"
			}
		}
	},
	fdSystemWarn: {
		name: "fdSystemWarn",
		columns: {
			warnId: {
				column: "warnId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "报警编号"
			},
			uniqId: {
				column: "uniqId",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "唯一标识"
			},
			warnLevel: {
				column: "warnLevel",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "等级"
			},
			warnType: {
				column: "warnType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "类型"
			},
			title: {
				column: "title",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "标题"
			},
			warnDate: {
				column: "warnDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "报警时间"
			},
			content: {
				column: "content",
				dataType: "varchar2",
				dataLength: 256,
				nullable: false,
				isPk: false,
				description: "报警内容"
			},
			syncStatus: {
				column: "syncStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "同步状态 0同步完成  1未同步 2正在同步"
			},
			keyWord: {
				column: "keyWord",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "关键字"
			},
			syncBatchId: {
				column: "syncBatchId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "批次号"
			},
			systemNo: {
				column: "systemNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	fdSystemBusinessInfo: {
		name: "fdSystemBusinessInfo",
		columns: {
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型编码"
			},
			businessTypeName: {
				column: "businessTypeName",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "业务类型名称"
			}
		}
	},
	fdReportZeroBalance: {
		name: "fdReportZeroBalance",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "报表时间"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			accountType: {
				column: "accountType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户类型:上游渠道:下游渠道:银行账户:收款账户:资产账户:非资产账户:倒款账户"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "理论余额"
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "账户名称"
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "渠道名称"
			},
			queryBalance: {
				column: "queryBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "查询余额"
			},
			channelStatus: {
				column: "channelStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道状态"
			},
			accountStatus: {
				column: "accountStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户状态"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属公司"
			},
			downFirstFace: {
				column: "downFirstFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游与上游扣款的时间差造成的差异面值（只有下游渠道记录）"
			},
			downFirstAmount: {
				column: "downFirstAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游与上游扣款的时间差造成的差异金额（只有下游渠道记录）"
			},
			coAccountType: {
				column: "coAccountType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "资产账户与非资产账户对应的账户类型"
			},
			syncStatus: {
				column: "syncStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "同步诚实系统状态，0同步完成，1未进行同步，2正在同步，9同步失败"
			},
			syncBatch: {
				column: "syncBatch",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "数据同步批次号"
			},
			channelSourceSystem: {
				column: "channelSourceSystem",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道所属系统编号"
			},
			channelClassif: {
				column: "channelClassif",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道分类（主要用于上游渠道）"
			},
			warnBalance: {
				column: "warnBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游渠道预警余额/下游渠道授信余额"
			}
		}
	},
	fdBaseDownUpMap: {
		name: "fdBaseDownUpMap",
		columns: {
			mapId: {
				column: "mapId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道"
			},
			upChannelNo: {
				column: "upChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游渠道"
			}
		}
	},
	fdB2eBankTask: {
		name: "fdB2eBankTask",
		columns: {
			taskId: {
				column: "taskId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "任务编号"
			},
			taskType: {
				column: "taskType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "任务类型"
			},
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记录编号（上游加款、上游加款查询）"
			},
			mqName: {
				column: "mqName",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "任务mq标识"
			},
			taskStatus: {
				column: "taskStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "任务状态"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			content: {
				column: "content",
				dataType: "varchar2",
				dataLength: 1024,
				nullable: false,
				isPk: false,
				description: "任务参数"
			},
			batchId: {
				column: "batchId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "批次号"
			},
			timeoutTime: {
				column: "timeoutTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "超时时间"
			}
		}
	},
	incomeUpGroupMap: {
		name: "incomeUpGroupMap",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "编号"
			},
			provinceNo: {
				column: "provinceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "省份编号"
			},
			upGroupId: {
				column: "upGroupId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属上游收入分组"
			}
		}
	},
	incomeFlowTask: {
		name: "incomeFlowTask",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "任务编号"
			},
			flowName: {
				column: "flowName",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "流程名称"
			},
			flowMq: {
				column: "flowMq",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "流程mq"
			},
			flowSort: {
				column: "flowSort",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "流程排序"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "任务创建时间"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "任务状态，1未开始，2正在执行，0执行成功，9执行失败"
			},
			flowLink: {
				column: "flowLink",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "流程环节，1中间环节，0终结环节"
			},
			flowBatchId: {
				column: "flowBatchId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "流程批次号"
			},
			completeTime: {
				column: "completeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "流程完成时间"
			}
		}
	},
	incomeFlowConfig: {
		name: "incomeFlowConfig",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "配置编号"
			},
			flowName: {
				column: "flowName",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "流程名称"
			},
			flowMq: {
				column: "flowMq",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "流程mq"
			},
			flowSort: {
				column: "flowSort",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "流程排序"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "状态，0启用，1禁用"
			},
			flowParams: {
				column: "flowParams",
				dataType: "varchar2",
				dataLength: 256,
				nullable: false,
				isPk: false,
				description: "流程固定参数，a=1"
			}
		}
	},
	incomeExcludeUp: {
		name: "incomeExcludeUp",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			}
		}
	},
	incomeDownGroupMap: {
		name: "incomeDownGroupMap",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			downGroupId: {
				column: "downGroupId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属下游收入分组"
			},
			syncStatus: {
				column: "syncStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "同步状态，0已同步，1未同步"
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "渠道名称"
			}
		}
	},
	fdB2eBankPaymentCodeMap: {
		name: "fdB2eBankPaymentCodeMap",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			bankPaymentType: {
				column: "bankPaymentType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行支付方式"
			},
			codeType: {
				column: "codeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "编码类型1.付款类，2付款结果查询"
			},
			code: {
				column: "code",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "银行接口编码"
			},
			remark: {
				column: "remark",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "备注说明"
			}
		}
	},
	fdReportCommiProfitRedo: {
		name: "fdReportCommiProfitRedo",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "公司编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "支付账户编号"
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道类型1.上游2．下游"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润类型，1.前向，2后向"
			},
			totalUnit: {
				column: "totalUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "充值规格"
			},
			totalFace: {
				column: "totalFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "充值面值"
			},
			drawAmount: {
				column: "drawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "扣款金额"
			},
			realAmount: {
				column: "realAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实际金额"
			},
			commission: {
				column: "commission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "佣金"
			},
			profits: {
				column: "profits",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润"
			},
			serviceFee: {
				column: "serviceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实时扣除佣金(手续费)"
			},
			refundTotalUnit: {
				column: "refundTotalUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款规格"
			},
			refundTotalFace: {
				column: "refundTotalFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款面值"
			},
			refundDrawAmount: {
				column: "refundDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退款金额"
			},
			refundRealAmount: {
				column: "refundRealAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实际退款金额"
			},
			refundCommission: {
				column: "refundCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退回佣金"
			},
			refundProfits: {
				column: "refundProfits",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退回利润"
			},
			refundServiceFee: {
				column: "refundServiceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "退回实时扣除佣金（手续费）"
			},
			upManyFace: {
				column: "upManyFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游多冲的面值"
			},
			upManyAmount: {
				column: "upManyAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游多冲的金额"
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "快照时间(交易数据日期)"
			},
			addStatus: {
				column: "addStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户加款状态 1.未开始，2.正在扣款，0.扣款完成，9.加款失败"
			},
			statisticsType: {
				column: "statisticsType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "统计类型，1.流量数据包，2前向流量充值，3话费、固话，4.加油卡充值，5.Q币、游戏币"
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "渠道名称"
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "支付账户名称"
			},
			syncStatus: {
				column: "syncStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "同步诚实系统状态，0同步完成，1未进行同步，2正在同步，9同步失败"
			},
			syncBatch: {
				column: "syncBatch",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "数据同步批次号"
			},
			channelSourceSystem: {
				column: "channelSourceSystem",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道所属系统编号"
			}
		}
	},
	fdB2ePaymentRecordDetails: {
		name: "fdB2ePaymentRecordDetails",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记录编号"
			},
			mainRecordId: {
				column: "mainRecordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "转账指令"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			clientCardNo: {
				column: "clientCardNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "客户账户"
			},
			clientHolderName: {
				column: "clientHolderName",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "客户姓名"
			},
			isSameBank: {
				column: "isSameBank",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否跨行，0同行"
			},
			totalAmount: {
				column: "totalAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "转账金额"
			},
			totalServiceFee: {
				column: "totalServiceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "总手续费"
			},
			clientCardType: {
				column: "clientCardType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "收款账户类型：:对公；:对私"
			},
			clientBankName: {
				column: "clientBankName",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "收款人开户行名称"
			},
			clientBankAddr: {
				column: "clientBankAddr",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "收款人开户行地址"
			},
			clientBankCode: {
				column: "clientBankCode",
				dataType: "varchar2",
				dataLength: 12,
				nullable: false,
				isPk: false,
				description: "开户行行号"
			},
			clientAreaCode: {
				column: "clientAreaCode",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "收款行地区编号"
			},
			submitAmount: {
				column: "submitAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "提交金额"
			},
			arrivalAmount: {
				column: "arrivalAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "到账金额"
			},
			submitRemark: {
				column: "submitRemark",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "提交摘要"
			},
			submitStatus: {
				column: "submitStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "加款状态1未开始"
			},
			submitErrorCode: {
				column: "submitErrorCode",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "响应结果码"
			},
			submitDealCode: {
				column: "submitDealCode",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "本地响应结果码"
			},
			submitErrorMsg: {
				column: "submitErrorMsg",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "提交返回信息"
			},
			bankServerId: {
				column: "bankServerId",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "服务器响应成功返回的交易标识"
			},
			bankAccountBalance: {
				column: "bankAccountBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行账户余额"
			},
			queryStatus: {
				column: "queryStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "查询状态1未开始"
			},
			queryTime: {
				column: "queryTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "查询时间"
			},
			nextQueryTime: {
				column: "nextQueryTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "下次查询时间"
			},
			queryErrorCode: {
				column: "queryErrorCode",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "查询状态码"
			},
			queryDealCode: {
				column: "queryDealCode",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "本地状态码"
			},
			queryErrorMsg: {
				column: "queryErrorMsg",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "查询结果信息"
			},
			manualMsg: {
				column: "manualMsg",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "人工审核消息"
			},
			submitTime: {
				column: "submitTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "提交时间"
			}
		}
	},
	fdB2eUpWhiteList: {
		name: "fdB2eUpWhiteList",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游渠道"
			},
			channelAccountId: {
				column: "channelAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道账户编号"
			},
			bankHolderName: {
				column: "bankHolderName",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "持卡人姓名"
			},
			holderCardNo: {
				column: "holderCardNo",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "银行账户(卡号)"
			},
			mainBankCode: {
				column: "mainBankCode",
				dataType: "varchar2",
				dataLength: 12,
				nullable: false,
				isPk: false,
				description: "开户行主行行号（网银互联用）"
			},
			branchBankCode: {
				column: "branchBankCode",
				dataType: "varchar2",
				dataLength: 12,
				nullable: false,
				isPk: false,
				description: "开户行支行行号（大小额用）"
			},
			bankType: {
				column: "bankType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行类型(民生银行，中信银行)"
			},
			rcvCardType: {
				column: "rcvCardType",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "收款账户类型：:对公；:对私"
			},
			accountBankName: {
				column: "accountBankName",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "开户行名称(xxxx支行)"
			},
			provinceNo: {
				column: "provinceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "账户省份编号"
			},
			cityNo: {
				column: "cityNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "城市编号"
			},
			areaCode: {
				column: "areaCode",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "收款行地区编号(?)"
			},
			auditStatus: {
				column: "auditStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "审核状态"
			},
			auditTime: {
				column: "auditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "审核时间"
			},
			sortId: {
				column: "sortId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "白名单优先等级，越大越优先"
			},
			companyBank: {
				column: "companyBank",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "白名单支持的银行（建行/中信/民生）"
			}
		}
	},
	supBaseProUpScope: {
		name: "supBaseProUpScope",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "限定编号"
			},
			proUpChannelNo: {
				column: "proUpChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "生产系统限定上游渠道"
			}
		}
	},
	fdTradeRvApply: {
		name: "fdTradeRvApply",
		columns: {
			applyId: {
				column: "applyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "申请记录编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "varchar2",
				dataLength: 20,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道类型，1上游，2下游"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "前后项信息"
			},
			differAmount: {
				column: "differAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "差异金额"
			},
			differReason: {
				column: "differReason",
				dataType: "varchar2",
				dataLength: 1024,
				nullable: false,
				isPk: false,
				description: "差异原因"
			},
			differDetail: {
				column: "differDetail",
				dataType: "varchar2",
				dataLength: 3072,
				nullable: false,
				isPk: false,
				description: "差异详情"
			},
			applyTime: {
				column: "applyTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "申请时间"
			},
			applyUser: {
				column: "applyUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "申请人"
			},
			applyStatus: {
				column: "applyStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "申请所处状态 1提交申请，9作废，0处理完成"
			},
			dealRvType: {
				column: "dealRvType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "处理平账类型，1交易平账，2余额平账"
			},
			dealBusinessType: {
				column: "dealBusinessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "处理业务类型"
			},
			dealBillType: {
				column: "dealBillType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "处理前后项信息"
			},
			dealTradeAmount: {
				column: "dealTradeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "处理平账交易金额"
			},
			dealRealAmount: {
				column: "dealRealAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "处理平账真实金额"
			},
			dealTime: {
				column: "dealTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "处理时间"
			},
			dealUser: {
				column: "dealUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "处理人"
			},
			dealFlowId: {
				column: "dealFlowId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "关联平账流水号"
			},
			dealMemo: {
				column: "dealMemo",
				dataType: "varchar2",
				dataLength: 256,
				nullable: false,
				isPk: false,
				description: "处理备注"
			}
		}
	},
	fdB2eUpChannelConfig: {
		name: "fdB2eUpChannelConfig",
		columns: {
			typeId: {
				column: "typeId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "规则编号"
			},
			dateRangeType: {
				column: "dateRangeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "时间范围类型0.高峰期，1正常时期"
			},
			upChannelNo: {
				column: "upChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游渠道"
			},
			amountCalcType: {
				column: "amountCalcType",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "转账计算方法"
			},
			calcTypeMemo: {
				column: "calcTypeMemo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "方法备注"
			},
			warnBalance: {
				column: "warnBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "预警余额"
			},
			maxChannelBalance: {
				column: "maxChannelBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "最大渠道余额(加款后余额不能超过此余额)"
			},
			minAddAmount: {
				column: "minAddAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "最小加款金额"
			},
			maxDayAddAmount: {
				column: "maxDayAddAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "最大单日加款金额"
			},
			addDurationHour: {
				column: "addDurationHour",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "加款金额能持续扣款的小时数"
			},
			auditStatus: {
				column: "auditStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "审核状态"
			},
			channelAccountId: {
				column: "channelAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道账户"
			}
		}
	},
	fdB2eSystemLog: {
		name: "fdB2eSystemLog",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户名称"
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "账户名称"
			},
			lastFailTime: {
				column: "lastFailTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "上次执行失败时间"
			},
			failReason: {
				column: "failReason",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "失败原因"
			}
		}
	},
	fdSystemBusinessMap: {
		name: "fdSystemBusinessMap",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			sourceSystemId: {
				column: "sourceSystemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "系统id"
			},
			outerBusinessType: {
				column: "outerBusinessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "外部系统业务类型编号"
			},
			localBusinessType: {
				column: "localBusinessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统业务类型编号"
			}
		}
	},
	fdTradeActivityMain: {
		name: "fdTradeActivityMain",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			channelAccountId: {
				column: "channelAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游渠道账户编号"
			},
			activityName: {
				column: "activityName",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "活动名称"
			},
			activityContent: {
				column: "activityContent",
				dataType: "varchar2",
				dataLength: 1024,
				nullable: false,
				isPk: false,
				description: "活动内容"
			},
			activityInputAmount: {
				column: "activityInputAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "活动初始投入金额"
			},
			hasClosed: {
				column: "hasClosed",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "活动已近结束，0已经结束，1还未结束"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "活动创建时间"
			},
			createUser: {
				column: "createUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "活动创建人"
			},
			closeTime: {
				column: "closeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "活动结束时间"
			},
			closeUser: {
				column: "closeUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "活动结束人"
			},
			activityType: {
				column: "activityType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "活动类型，1.预付活动，2.垫付活动"
			},
			activityReturnAmount: {
				column: "activityReturnAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "活动回笼资金"
			}
		}
	},
	fdTradeActivityDetails: {
		name: "fdTradeActivityDetails",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			activityId: {
				column: "activityId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "活动编号"
			},
			tradeRecordNo: {
				column: "tradeRecordNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统记录编号"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统业务类型"
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易类型，1前向，2后向"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "活动变动类型，1预付款，2增加后返利润，3减少后返利润"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			changeUser: {
				column: "changeUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "变动人"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 256,
				nullable: false,
				isPk: false,
				description: "备注信息"
			}
		}
	},
	fdReportBalanceDiffer: {
		name: "fdReportBalanceDiffer",
		columns: {
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			accountType: {
				column: "accountType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户类型：1、上游渠道账户，2、下游渠道账户"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			balanceDifference: {
				column: "balanceDifference",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额差异"
			},
			noteTime: {
				column: "noteTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "记录时间"
			},
			noteUser: {
				column: "noteUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "记录人"
			}
		}
	},
	fdTradeCoCapFundJfb: {
		name: "fdTradeCoCapFundJfb",
		columns: {
			changeId: {
				column: "changeId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "变动编号，和fd_trade_co_cap_fund对应"
			},
			tradeMonth: {
				column: "tradeMonth",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "积分交易月份"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易下游渠道"
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易下游渠道账户"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			settleStatus: {
				column: "settleStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "开票结算状态 0.已结算，1等待结算，9无需结算"
			}
		}
	},
	fdReportOutsysProfit: {
		name: "fdReportOutsysProfit",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			sourceSystemId: {
				column: "sourceSystemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "外部系统编号"
			},
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "记录时间"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			profit: {
				column: "profit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "利润数据"
			}
		}
	},
	yxBaseBusinessMap: {
		name: "yxBaseBusinessMap",
		columns: {
			outerBusinessType: {
				column: "outerBusinessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "外部系统业务类型编号"
			},
			businessMapId: {
				column: "businessMapId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "业务类型映射编号"
			},
			localBusinessType: {
				column: "localBusinessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统业务类型编号"
			},
			industryType: {
				column: "industryType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "行业类型"
			},
			outerSystemNo: {
				column: "outerSystemNo",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "外部系统编号"
			}
		}
	},
	yxBaseAgent: {
		name: "yxBaseAgent",
		columns: {
			agentId: {
				column: "agentId",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: true,
				description: "代理人编号"
			},
			agentName: {
				column: "agentName",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "代理人名称"
			},
			agentType: {
				column: "agentType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "代理人类型:个人代理人"
			},
			certificateNo: {
				column: "certificateNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "身份证/纳税识别号"
			},
			mobile: {
				column: "mobile",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "手机号码"
			},
			provinceNo: {
				column: "provinceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "省份"
			},
			companyNature: {
				column: "companyNature",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "公司性质:有限责任公司"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "公司编号"
			},
			taxpayerSize: {
				column: "taxpayerSize",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "纳税人规模:一般纳税人"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "状态"
			},
			createdUser: {
				column: "createdUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			lastEditUser: {
				column: "lastEditUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道"
			},
			outAgentId: {
				column: "outAgentId",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统代理人编号"
			},
			groupAgent: {
				column: "groupAgent",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ":是组合代理人，1：普通代理人"
			},
			groupCount: {
				column: "groupCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "组合数量"
			}
		}
	},
	yxTradeExpense: {
		name: "yxTradeExpense",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			yxOrderId: {
				column: "yxOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统订单号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统订单号"
			},
			tradeExpenseNo: {
				column: "tradeExpenseNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统费用编号"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）"
			},
			expenseType: {
				column: "expenseType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "费用类型1：快递费，21：销券收益"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道"
			},
			upChannelNo: {
				column: "upChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游渠道"
			},
			agentId: {
				column: "agentId",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "代理人编号"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "费用金额"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			orderTime: {
				column: "orderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "交易系统订单时间"
			},
			outChangeTime: {
				column: "outChangeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "交易系统变动时间"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "费用账号id"
			},
			orderAmount: {
				column: "orderAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单金额"
			},
			incomeType: {
				column: "incomeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "收入类型：1：支出，2：收入"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 200,
				nullable: false,
				isPk: false,
				description: "备注"
			}
		}
	},
	yxTradeAgentFund: {
		name: "yxTradeAgentFund",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			upFundId: {
				column: "upFundId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游资金变动编号，退款时为下游资金变动编号"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			upChannelNo: {
				column: "upChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游渠道编号"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）"
			},
			agentId: {
				column: "agentId",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "代理人编号"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变更类型:加款2：交易扣款3：交易退款4：提款"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			yxTradeOrderNo: {
				column: "yxTradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "外部系统订单编号"
			},
			yxOrderId: {
				column: "yxOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单编号"
			}
		}
	},
	yxTradeUpManual: {
		name: "yxTradeUpManual",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			adjustId: {
				column: "adjustId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "红冲编号"
			},
			hasAdjust: {
				column: "hasAdjust",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否红冲过"
			},
			addType: {
				column: "addType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动类:1: 加款+;1: 红冲加款-;1: 提款+;1: 红冲提款-;2: 扣款平账加+;2: 扣款平账减-;3: 退款平账加+;3: 退款平账减-;4: 余额平账加+;4: 余额平账减-;5: 手续费加+;5: 手续费红冲+;6: 交易平账;"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额"
			},
			realAmount: {
				column: "realAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易平账真实金额"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额"
			},
			createUser: {
				column: "createUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			bankFundId: {
				column: "bankFundId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行资金变动编号（红冲是使用）"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			extRecordNo: {
				column: "extRecordNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "外部加款记录编号"
			},
			handlingFeeId: {
				column: "handlingFeeId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "收取手续费的记录编号"
			}
		}
	},
	yxTradeUpFund: {
		name: "yxTradeUpFund",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "上游变动编号"
			},
			yxOrderId: {
				column: "yxOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统订单号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统订单号"
			},
			tradeDeliveryNo: {
				column: "tradeDeliveryNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统发货号"
			},
			extDeliveryNo: {
				column: "extDeliveryNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "扩展发货编号"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游账户"
			},
			downCompanyId: {
				column: "downCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游所属公司"
			},
			upChannelNo: {
				column: "upChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游渠道编号"
			},
			upAccountId: {
				column: "upAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游账户"
			},
			upCompanyId: {
				column: "upCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游所属公司"
			},
			agentId: {
				column: "agentId",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "代理人编号"
			},
			downDrawUnit: {
				column: "downDrawUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游充值量（计算值）"
			},
			downDrawFace: {
				column: "downDrawFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款面值（计算值）"
			},
			downDrawAmount: {
				column: "downDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款金额（计算值）(用户支付金额)"
			},
			downRealAmount: {
				column: "downRealAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游实际金额（计算值）"
			},
			dowmHandlingFee: {
				column: "dowmHandlingFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游手续费（计算值）"
			},
			downAgencyFee: {
				column: "downAgencyFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游代理费（计算值）"
			},
			upDrawUnit: {
				column: "upDrawUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游充值量"
			},
			upDrawFace: {
				column: "upDrawFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游扣款面值"
			},
			upDrawAmount: {
				column: "upDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游扣款金额"
			},
			upRealAmount: {
				column: "upRealAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游实际金额"
			},
			upServieFee: {
				column: "upServieFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游服务费"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变更类型:加款2：交易扣款3：交易退款4：提款:服务费转余额:服务费结算"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			carrierNo: {
				column: "carrierNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "运营商"
			},
			provinceNo: {
				column: "provinceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "省份"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			orderTime: {
				column: "orderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "订单日期(交易系统下单日期)"
			},
			outChangeTime: {
				column: "outChangeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "资金变动时间（交易系统）"
			},
			refundOrderNo: {
				column: "refundOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "退款编号"
			},
			incomeAmount: {
				column: "incomeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "收益金额"
			},
			couponAmount: {
				column: "couponAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "优惠券金额"
			}
		}
	},
	yxTradeOrderMain: {
		name: "yxTradeOrderMain",
		columns: {
			yxOrderId: {
				column: "yxOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款账号"
			},
			downCompanyId: {
				column: "downCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游公司编号"
			},
			agentId: {
				column: "agentId",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "代理人编号"
			},
			agentType: {
				column: "agentType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "代理人类型"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统订单号"
			},
			extOrderNo: {
				column: "extOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "扩展订单号交易系统供"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "订单添加时间"
			},
			orderTime: {
				column: "orderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "订单日期（交易系统下单日期）"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			orderFace: {
				column: "orderFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "成交面值"
			},
			orderAmount: {
				column: "orderAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "代收金额（用户支付金额）"
			},
			agencyFee: {
				column: "agencyFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "代理人酬金（代理费）"
			},
			handlingFee: {
				column: "handlingFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "三方平台手续费"
			},
			successFace: {
				column: "successFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "成功面值"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后修改时间"
			},
			incomeAmount: {
				column: "incomeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "收益金额"
			},
			realAmount: {
				column: "realAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "实际扣款金额"
			},
			couponAmount: {
				column: "couponAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "优惠券金额"
			}
		}
	},
	yxTradeDownManual: {
		name: "yxTradeDownManual",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			adjustId: {
				column: "adjustId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "红冲编号"
			},
			hasAdjust: {
				column: "hasAdjust",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否红冲过"
			},
			addType: {
				column: "addType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动类:1: 加款+;1: 红冲加款-;1: 提款+;1: 红冲提款-;2: 扣款平账加+;2: 扣款平账减-;3: 退款平账加+;3: 退款平账减-;4: 余额平账加+;4: 余额平账减-;5: 手续费加+;5: 手续费红冲+;6: 交易平账;71：发行加款"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额"
			},
			realAmount: {
				column: "realAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易平账真实金额"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额"
			},
			createUser: {
				column: "createUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			bankFundId: {
				column: "bankFundId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行资金变动编号（红冲是使用）"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			extRecordNo: {
				column: "extRecordNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "外部加款记录编号"
			},
			handlingFeeId: {
				column: "handlingFeeId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "收取手续费的记录编号"
			}
		}
	},
	yxTradeDownFund: {
		name: "yxTradeDownFund",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "下游变动编号"
			},
			yxOrderId: {
				column: "yxOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统订单号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统订单号"
			},
			extOrderNo: {
				column: "extOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "扩展订单号交易系统供"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 20,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游支付账号"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动创建时间"
			},
			orderTime: {
				column: "orderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "订单日期(交易系统下单日期)"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变更类型:加款2：交易扣款3：交易退款:提款"
			},
			payAmount: {
				column: "payAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "用户支付金额"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户余额"
			},
			handlingFee: {
				column: "handlingFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "手续费（handling_fee=pay_Amount-Change_amount-INCOME_AMOUNT）"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 1024,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			changeFace: {
				column: "changeFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动面值"
			},
			orderFace: {
				column: "orderFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单面值"
			},
			refundOrderId: {
				column: "refundOrderId",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "退款编号"
			},
			incomeAmount: {
				column: "incomeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "收益金额"
			},
			couponAmount: {
				column: "couponAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "优惠券金额"
			}
		}
	},
	yxTradeAgentManual: {
		name: "yxTradeAgentManual",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			agentId: {
				column: "agentId",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "代理人编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			adjustId: {
				column: "adjustId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "红冲编号"
			},
			hasAdjust: {
				column: "hasAdjust",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否红冲过"
			},
			addType: {
				column: "addType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动类:1: 加款+;1: 红冲加款-;1: 提款+;1: 红冲提款-;2: 扣款平账加+;2: 扣款平账减-;3: 退款平账加+;3: 退款平账减-;4: 余额平账加+;4: 余额平账减-;5: 手续费加+;5: 手续费红冲+;6: 交易平账;"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额"
			},
			bankFundId: {
				column: "bankFundId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行资金变动编号（红冲是使用）"
			},
			extRecordNo: {
				column: "extRecordNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "外部加款记录编号"
			},
			handlingFeeId: {
				column: "handlingFeeId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "收取手续费的记录编号"
			},
			createUser: {
				column: "createUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "备注"
			}
		}
	},
	yxReportZeroBalance: {
		name: "yxReportZeroBalance",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			reportTime: {
				column: "reportTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "报表时间"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			accountType: {
				column: "accountType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户类型1：上游渠道2：下游渠道3：银行账户4：服务费账户5：代理人账户，6：发行成本账户，7：发行收入账户"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道（代理人）编号"
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道（代理人）名称"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "理论余额"
			},
			queryBalance: {
				column: "queryBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "查询余额"
			},
			channelStatus: {
				column: "channelStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道状态"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属公司"
			},
			channelSourceSystem: {
				column: "channelSourceSystem",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道所属系统编号"
			},
			downFirstFace: {
				column: "downFirstFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游与上游扣款的时间差造成的差异面值（只有下游渠道记录）"
			},
			downFirstAmount: {
				column: "downFirstAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游与上游扣款的时间差造成的差异金额（只有下游渠道记录）"
			}
		}
	},
	yxReportDaily: {
		name: "yxReportDaily",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			reportTime: {
				column: "reportTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "报表时间"
			},
			upChannelNo: {
				column: "upChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游渠道编号（商家）"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号（营销渠道）"
			},
			agentId: {
				column: "agentId",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "代理人编号"
			},
			upDrawFace: {
				column: "upDrawFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游扣款面值"
			},
			upDrawAmount: {
				column: "upDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游扣款金额"
			},
			orderCount: {
				column: "orderCount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单数量"
			},
			servieFee: {
				column: "servieFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "应结算商家服务费"
			},
			agencyFee: {
				column: "agencyFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "代理人酬金（代理费）"
			},
			handlingFee: {
				column: "handlingFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "三方平台手续费"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			downDrawFace: {
				column: "downDrawFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款面值"
			},
			downDrawAmount: {
				column: "downDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款金额"
			},
			incomeAmount: {
				column: "incomeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "收益金额"
			},
			downRealAmount: {
				column: "downRealAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游实际金额"
			},
			upRealAmount: {
				column: "upRealAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游实际金额"
			},
			downCouponAmount: {
				column: "downCouponAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "优惠券金额"
			},
			issue: {
				column: "issue",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "发行扣款标志：0：普通扣款，1：发行扣款"
			}
		}
	},
	yxBaseUpChannel: {
		name: "yxBaseUpChannel",
		columns: {
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道名称"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属公司"
			},
			sourceSystemId: {
				column: "sourceSystemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属系统编号"
			},
			warnBalance: {
				column: "warnBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "报警余额"
			},
			commiBalance: {
				column: "commiBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "佣金余额"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "状态"
			},
			createdUser: {
				column: "createdUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			lastEditUser: {
				column: "lastEditUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			},
			serviceBalance: {
				column: "serviceBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "服务费余额"
			},
			issueBalance: {
				column: "issueBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "发行成本余额"
			}
		}
	},
	yxBaseUpAccount: {
		name: "yxBaseUpAccount",
		columns: {
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "账号名称"
			},
			queryBalance: {
				column: "queryBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "查询余额"
			},
			innerBalance: {
				column: "innerBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "理论余额"
			},
			createdUser: {
				column: "createdUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			lastEditUser: {
				column: "lastEditUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			}
		}
	},
	yxBaseDownChannel: {
		name: "yxBaseDownChannel",
		columns: {
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "渠道名称"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属公司"
			},
			sourceSystemId: {
				column: "sourceSystemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属系统编号"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "状态"
			},
			channelClass: {
				column: "channelClass",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道类型1：自有渠道2：银行渠道3：行业渠道"
			},
			commiBalance: {
				column: "commiBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "佣金余额"
			},
			warnBalance: {
				column: "warnBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "报警余额"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游账户id"
			},
			createdUser: {
				column: "createdUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			lastEditUser: {
				column: "lastEditUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			},
			issueBalance: {
				column: "issueBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "发行收入余额"
			}
		}
	},
	yxBaseDownAccount: {
		name: "yxBaseDownAccount",
		columns: {
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "账号名称"
			},
			queryBalance: {
				column: "queryBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "查询余额"
			},
			innerBalance: {
				column: "innerBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "理论余额"
			},
			creditMoney: {
				column: "creditMoney",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "授信金额"
			},
			createdUser: {
				column: "createdUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			lastEditUser: {
				column: "lastEditUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			}
		}
	},
	yxReportFundDaily: {
		name: "yxReportFundDaily",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			reportTime: {
				column: "reportTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "报表时间"
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道类:1上游渠道"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变更类型:加款"
			},
			dailySumAmount: {
				column: "dailySumAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额合计"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "公司编号"
			}
		}
	},
	yxTradeUpFundDiffer: {
		name: "yxTradeUpFundDiffer",
		columns: {
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "记录生成日期"
			},
			differId: {
				column: "differId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			yxOrderId: {
				column: "yxOrderId",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "记账系统订单编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游渠道支付账号编号"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			downAdjustFace: {
				column: "downAdjustFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "统计下游扣款需要调整的面值（下游退款造成上游面值比下游多时产生，下退）"
			},
			downAdjustUnit: {
				column: "downAdjustUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "统计下游扣款需要调整的规格"
			},
			downAdjustAmount: {
				column: "downAdjustAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "统计下游扣款需要调整的金额"
			},
			downAdjustReal: {
				column: "downAdjustReal",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "统计下游扣款需要调整的真实扣款"
			},
			upManyFace: {
				column: "upManyFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游多充的面值（上游面值比下游面值多时产生，上扣、下退、上退）"
			},
			upManyAmount: {
				column: "upManyAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游多充的金额"
			},
			downAdjustIncome: {
				column: "downAdjustIncome",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "统计下游收入需要调整的金额"
			}
		}
	},
	yxTradeOrderMainDiffer: {
		name: "yxTradeOrderMainDiffer",
		columns: {
			differId: {
				column: "differId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "主键"
			},
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "记录生成日期"
			},
			yxOrderId: {
				column: "yxOrderId",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "记账系统订单编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游渠道支付账号编号"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			downFirstFace: {
				column: "downFirstFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游与上游扣款的时间差造成的差异面值（上下游扣款有时间差异造成，下扣、下退、上扣、上退）"
			},
			downFirstAmount: {
				column: "downFirstAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游与上游扣款的时间差造成的差异金额"
			},
			downFirstIncome: {
				column: "downFirstIncome",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游与上游扣款的时间造差成的收入差异"
			}
		}
	},
	yxThreePartyAccount: {
		name: "yxThreePartyAccount",
		columns: {
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "账户名称"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "三方账户编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			agentId: {
				column: "agentId",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "代理商编号"
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道类型:上游;:下游"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额"
			},
			accountType: {
				column: "accountType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户类:1支出;:收入"
			},
			creditAmount: {
				column: "creditAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "授信金额"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "状态0-启用1-禁用"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			createUser: {
				column: "createUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			updateTime: {
				column: "updateTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "修改时间"
			},
			updateUser: {
				column: "updateUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "更新人"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "公司编号"
			},
			systemId: {
				column: "systemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "系统编号"
			}
		}
	},
	yxTradeAgencyAssigned: {
		name: "yxTradeAgencyAssigned",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "编号"
			},
			yxOrderId: {
				column: "yxOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统订单号"
			},
			agentId: {
				column: "agentId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "单代理人编号"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）"
			},
			agentFee: {
				column: "agentFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "单代理人代理费"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "2：扣款，3：退款"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			settleStatus: {
				column: "settleStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "结算状态"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "备注"
			}
		}
	},
	fdBaseCoAccountName: {
		name: "fdBaseCoAccountName",
		columns: {
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道账户编号"
			},
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "编号"
			},
			coAccountName: {
				column: "coAccountName",
				dataType: "varchar2",
				dataLength: 200,
				nullable: false,
				isPk: false,
				description: "收付款账户名称"
			},
			coAccountType: {
				column: "coAccountType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户类型：1：上游，2：下游"
			},
			createdUser: {
				column: "createdUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			lastEditUser: {
				column: "lastEditUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			}
		}
	},
	fdBankStreamFull: {
		name: "fdBankStreamFull",
		columns: {
			bankAccountId: {
				column: "bankAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行账户编号"
			},
			id: {
				column: "id",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "流水编号"
			},
			cardNo: {
				column: "cardNo",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "己方银行账户"
			},
			bankType: {
				column: "bankType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行类型-1.其它0.财付通1.支付宝2.移动钱包3.19E钱包4.银行账户5.北京银行6.建设银行7.京东8.民生银行9.联通迷你10.交通银行11.财付通企业"
			},
			tranDate: {
				column: "tranDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "交易时间"
			},
			tranNo: {
				column: "tranNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "柜员交易号"
			},
			sumTranNo: {
				column: "sumTranNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "总交易流水号"
			},
			tranAmount: {
				column: "tranAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易金额"
			},
			creditDebitFlag: {
				column: "creditDebitFlag",
				dataType: "varchar2",
				dataLength: 3,
				nullable: false,
				isPk: false,
				description: "借贷标识:借，C：贷"
			},
			oppAccountNo: {
				column: "oppAccountNo",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "对方账号"
			},
			oppAccountName: {
				column: "oppAccountName",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "对方账户名称"
			},
			oppOpenBankName: {
				column: "oppOpenBankName",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "对方开户行名称"
			},
			abstract: {
				column: "abstract",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "附言"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户余额"
			},
			hostTranCode: {
				column: "hostTranCode",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "主机交易码"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			cashTransferFlag: {
				column: "cashTransferFlag",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "现转标识 0：现金；1：转帐"
			}
		}
	},
	fdTradeDownAddApply: {
		name: "fdTradeDownAddApply",
		columns: {
			applyId: {
				column: "applyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: "申请编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道账户编号"
			},
			addAmount: {
				column: "addAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "申请加款金额"
			},
			applyAccountNo: {
				column: "applyAccountNo",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: "客户打款账号"
			},
			bankType: {
				column: "bankType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行类型-1.其它0.财付通1.支付宝2.移动钱包3.19E钱包4.银行账户5.北京银行6.建设银行7.京东8.民生银行9.联通迷你10.交通银行11.财付通企业"
			},
			applyAccountName: {
				column: "applyAccountName",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "客户账户名称"
			},
			applyOpenBankName: {
				column: "applyOpenBankName",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "客户开户行名称"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "处理状态0：处理完成，10：未处理，20：处理中，90：处理失败"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "申请时间"
			},
			createUser: {
				column: "createUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "申请人"
			},
			payTime: {
				column: "payTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "付款时间"
			},
			tranNo: {
				column: "tranNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "柜员交易号（处理成功添加）"
			},
			handleTime: {
				column: "handleTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "处理时间（处理后添加）"
			},
			errorMsg: {
				column: "errorMsg",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "错误消息（处理失败后添加）"
			},
			auditUser: {
				column: "auditUser",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "处理人"
			},
			flowStatus: {
				column: "flowStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "流水状态修改  0：已修改，10：未修改 ，20：修改中，90：失败"
			},
			auditMemo: {
				column: "auditMemo",
				dataType: "varchar2",
				dataLength: 200,
				nullable: false,
				isPk: false,
				description: "处理备注"
			},
			bankAccountId: {
				column: "bankAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "收款银行id"
			},
			reciveTime: {
				column: "reciveTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "收款时间"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 200,
				nullable: false,
				isPk: false,
				description: "加款申请备注"
			}
		}
	},
	supZoreBalanceDiffer: {
		name: "supZoreBalanceDiffer",
		columns: {
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "调整金额"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			}
		}
	},
	qyTradeUpManual: {
		name: "qyTradeUpManual",
		columns: {
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			adjustId: {
				column: "adjustId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "红冲编号"
			},
			hasAdjust: {
				column: "hasAdjust",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否红冲过"
			},
			addType: {
				column: "addType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动类:10-加款11-提款12-红冲21-余额平帐22-交易平帐"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额"
			},
			realAmount: {
				column: "realAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易平账真实金额"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额"
			},
			createUser: {
				column: "createUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			bankFundId: {
				column: "bankFundId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行资金变动编号（红冲是使用）"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			extRecordNo: {
				column: "extRecordNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "外部加款记录编号"
			},
			handlingFeeId: {
				column: "handlingFeeId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "收取手续费的记录编号"
			}
		}
	},
	qyTradeUpFundDiffer: {
		name: "qyTradeUpFundDiffer",
		columns: {
			differId: {
				column: "differId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "记录生成日期"
			},
			qyOrderId: {
				column: "qyOrderId",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "记账系统订单编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游渠道支付账号编号"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			downAdjustFace: {
				column: "downAdjustFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "统计下游扣款需要调整的面值（下游退款造成上游面值比下游多时产生，下退）"
			},
			downAdjustUnit: {
				column: "downAdjustUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "统计下游扣款需要调整的规格"
			},
			downAdjustAmount: {
				column: "downAdjustAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "统计下游扣款需要调整的金额"
			},
			downAdjustReal: {
				column: "downAdjustReal",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "统计下游扣款需要调整的真实扣款"
			},
			upManyFace: {
				column: "upManyFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游多充的面值（上游面值比下游面值多时产生，上扣、下退、上退）"
			},
			upManyAmount: {
				column: "upManyAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游多充的金额"
			}
		}
	},
	qyTradeUpFund: {
		name: "qyTradeUpFund",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游变动编号"
			},
			qyOrderId: {
				column: "qyOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统订单号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统订单号(激活编号)"
			},
			tradeDeliveryNo: {
				column: "tradeDeliveryNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统发货号(上游发货编号)"
			},
			extDeliveryNo: {
				column: "extDeliveryNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "扩展发货编号(下游订单号)"
			},
			extOrderNo: {
				column: "extOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "扩展订单号交易(权益卡号)"
			},
			extContractNo: {
				column: "extContractNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "扩展号(合同编号)"
			},
			extUseNo: {
				column: "extUseNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "扩展号(权益卡使用编号)"
			},
			productName: {
				column: "productName",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "权益包名称"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游账户"
			},
			downCompanyId: {
				column: "downCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游所属公司"
			},
			upChannelNo: {
				column: "upChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游渠道编号"
			},
			upAccountId: {
				column: "upAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游账户"
			},
			upCompanyId: {
				column: "upCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游所属公司"
			},
			orderFace: {
				column: "orderFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单面值(权益包价值)"
			},
			orderAmount: {
				column: "orderAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单金额(权益包销售金额)"
			},
			downDrawUnit: {
				column: "downDrawUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游充值量（权益扣除价值量）"
			},
			downDrawFace: {
				column: "downDrawFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款面值（产品面值）"
			},
			downDrawAmount: {
				column: "downDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款金额（权益销售金额）"
			},
			downRealAmount: {
				column: "downRealAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游实际金额（权益销售金额）"
			},
			outPutTax: {
				column: "outPutTax",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "销项税"
			},
			upDrawUnit: {
				column: "upDrawUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游充值量"
			},
			upDrawFace: {
				column: "upDrawFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游扣款面值"
			},
			upDrawAmount: {
				column: "upDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游扣款金额"
			},
			upRealAmount: {
				column: "upRealAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游实际金额"
			},
			inPutTax: {
				column: "inPutTax",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "进项税"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变更类型:加款2：交易扣款3：交易退款4：提款"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			orderTime: {
				column: "orderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "订单日期(激活时间)"
			},
			outChangeTime: {
				column: "outChangeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "资金变动时间（发货完成时间）"
			}
		}
	},
	qyTradeOrderMainDiffer: {
		name: "qyTradeOrderMainDiffer",
		columns: {
			differId: {
				column: "differId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "记录生成日期"
			},
			qyOrderId: {
				column: "qyOrderId",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "记账系统订单编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游渠道支付账号编号"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			downFirstFace: {
				column: "downFirstFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游与上游扣款的时间差造成的差异面值（上下游扣款有时间差异造成，下扣、下退、上扣、上退）"
			},
			downFirstAmount: {
				column: "downFirstAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游与上游扣款的时间差造成的差异金额"
			}
		}
	},
	qyTradeOrderMain: {
		name: "qyTradeOrderMain",
		columns: {
			qyOrderId: {
				column: "qyOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款账号"
			},
			downCompanyId: {
				column: "downCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游公司编号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统订单号(激活编号)"
			},
			extOrderNo: {
				column: "extOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "扩展订单号交易(权益卡号)"
			},
			extContractNo: {
				column: "extContractNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "扩展号(合同编号)"
			},
			productName: {
				column: "productName",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "权益包名称"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "订单添加时间"
			},
			orderTime: {
				column: "orderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "订单日期（激活时间）"
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "业务类型"
			},
			orderFace: {
				column: "orderFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单面值(权益包价值)"
			},
			orderAmount: {
				column: "orderAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单金额(权益包销售金额)"
			}
		}
	},
	qyTradeDownManual: {
		name: "qyTradeDownManual",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			adjustId: {
				column: "adjustId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "红冲编号"
			},
			hasAdjust: {
				column: "hasAdjust",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "是否红冲过"
			},
			addType: {
				column: "addType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动类:10-加款11-提款12-红冲21-余额平帐22-交易平帐"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额"
			},
			realAmount: {
				column: "realAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "交易平账真实金额"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动时间"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "余额"
			},
			createUser: {
				column: "createUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			bankFundId: {
				column: "bankFundId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "银行资金变动编号（红冲是使用）"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: "备注"
			},
			extRecordNo: {
				column: "extRecordNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "外部加款记录编号"
			},
			handlingFeeId: {
				column: "handlingFeeId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "收取手续费的记录编号"
			}
		}
	},
	qyTradeDownFund: {
		name: "qyTradeDownFund",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游变动编号"
			},
			qyOrderId: {
				column: "qyOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "记账系统订单号"
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "交易系统订单号(激活编号)"
			},
			extOrderNo: {
				column: "extOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "扩展订单号交易(权益卡号)"
			},
			extContractNo: {
				column: "extContractNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "扩展号(合同编号)"
			},
			productName: {
				column: "productName",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "权益包名称"
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 20,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游支付账号"
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "变动创建时间"
			},
			orderTime: {
				column: "orderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "订单日期(激活时间)"
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变更类型:加款2：交易扣款3：交易退款:提款"
			},
			orderAmount: {
				column: "orderAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单金额"
			},
			changeAmount: {
				column: "changeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动金额(销售金额)"
			},
			orderFace: {
				column: "orderFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "订单面值(权益包价值)"
			},
			changeFace: {
				column: "changeFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "变动面值"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户余额"
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 1024,
				nullable: false,
				isPk: false,
				description: "备注"
			}
		}
	},
	qyReportZeroBalance: {
		name: "qyReportZeroBalance",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			reportTime: {
				column: "reportTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "报表时间"
			},
			createTime: {
				column: "createTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			accountType: {
				column: "accountType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户类型1：上游渠道2：下游渠道3：银行账户4：服务费账户5：代理人账户"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道（代理人）编号"
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道（代理人）名称"
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "理论余额"
			},
			queryBalance: {
				column: "queryBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "查询余额"
			},
			channelStatus: {
				column: "channelStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道状态"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属公司"
			},
			channelSourceSystem: {
				column: "channelSourceSystem",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "渠道所属系统编号"
			},
			downFirstAmount: {
				column: "downFirstAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游与上游扣款的时间差造成的差异金额（只有下游渠道记录）"
			},
			warnBalance: {
				column: "warnBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "告警余额"
			},
			downFirstFace: {
				column: "downFirstFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游与上游扣款的时间差造成的差异面值（只有下游渠道记录）"
			}
		}
	},
	qyReportDaily: {
		name: "qyReportDaily",
		columns: {
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "主键"
			},
			reportTime: {
				column: "reportTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "报表时间"
			},
			upChannelNo: {
				column: "upChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "上游渠道编号"
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "下游渠道编号"
			},
			orderFace: {
				column: "orderFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "成交面值(权益包价值)"
			},
			orderAmount: {
				column: "orderAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "代收金额(权益包销售额)"
			},
			extOrderNo: {
				column: "extOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "权益卡号"
			},
			productName: {
				column: "productName",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "权益包名称"
			},
			downDrawFace: {
				column: "downDrawFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款没面值(领取权益)"
			},
			downDrawAmount: {
				column: "downDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游扣款金额(领取权益)"
			},
			upDrawFace: {
				column: "upDrawFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游扣款没面值(领取权益)"
			},
			upDrawAmount: {
				column: "upDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "上游扣款金额(领取权益)"
			},
			outPutTax: {
				column: "outPutTax",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "销项税"
			},
			inPutTax: {
				column: "inPutTax",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "进项税"
			}
		}
	},
	qyBaseUpChannel: {
		name: "qyBaseUpChannel",
		columns: {
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道名称"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属公司"
			},
			sourceSystemId: {
				column: "sourceSystemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属系统编号"
			},
			warnBalance: {
				column: "warnBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "报警余额"
			},
			commiBalance: {
				column: "commiBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "佣金余额"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "状态"
			},
			createdUser: {
				column: "createdUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			lastEditUser: {
				column: "lastEditUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			}
		}
	},
	qyBaseUpAccount: {
		name: "qyBaseUpAccount",
		columns: {
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "账号名称"
			},
			queryBalance: {
				column: "queryBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "查询余额"
			},
			innerBalance: {
				column: "innerBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "理论余额"
			},
			createdUser: {
				column: "createdUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			lastEditUser: {
				column: "lastEditUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			}
		}
	},
	qyBaseDownChannel: {
		name: "qyBaseDownChannel",
		columns: {
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "渠道编号"
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "渠道名称"
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属公司"
			},
			sourceSystemId: {
				column: "sourceSystemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "所属系统编号"
			},
			status: {
				column: "status",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "状态"
			},
			commiBalance: {
				column: "commiBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "佣金余额"
			},
			warnBalance: {
				column: "warnBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "报警余额"
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "下游账户id"
			},
			createdUser: {
				column: "createdUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			lastEditUser: {
				column: "lastEditUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			}
		}
	},
	qyBaseDownAccount: {
		name: "qyBaseDownAccount",
		columns: {
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "账户编号"
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: "账号名称"
			},
			queryBalance: {
				column: "queryBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "查询余额"
			},
			innerBalance: {
				column: "innerBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "理论余额"
			},
			creditMoney: {
				column: "creditMoney",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: "授信金额"
			},
			createdUser: {
				column: "createdUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "创建人"
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "创建时间"
			},
			lastEditUser: {
				column: "lastEditUser",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: "最后更新人"
			},
			lastEditTime: {
				column: "lastEditTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: "最后更新时间"
			}
		}
	},
	dkVReportChannelDaily: {
		name: "dkVReportChannelDaily",
		columns: {
			accountType: {
				column: "accountType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			queryBalance: {
				column: "queryBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			endBalance: {
				column: "endBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			},
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: ""
			},
			addAmount: {
				column: "addAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			balanceDifference: {
				column: "balanceDifference",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelStatus: {
				column: "channelStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelSourceSystem: {
				column: "channelSourceSystem",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: ""
			},
			beginBalance: {
				column: "beginBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			drawAmount: {
				column: "drawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	fdVReportSummaryMonth: {
		name: "fdVReportSummaryMonth",
		columns: {
			realFace: {
				column: "realFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: ""
			},
			refundDrawAmount: {
				column: "refundDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upManyAmount: {
				column: "upManyAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			refundTotalFace: {
				column: "refundTotalFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			},
			oneWaySeatProfits: {
				column: "oneWaySeatProfits",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			drawAmount: {
				column: "drawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			realDrawAmount: {
				column: "realDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			oneWayProfits: {
				column: "oneWayProfits",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			totalFace: {
				column: "totalFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			realRechargeFace: {
				column: "realRechargeFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelSourceSystem: {
				column: "channelSourceSystem",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upManyFace: {
				column: "upManyFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			statisticsType: {
				column: "statisticsType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			endCommission: {
				column: "endCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			totalUnit: {
				column: "totalUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			lastServiceFee: {
				column: "lastServiceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	fdVReportDownchannelDaily: {
		name: "fdVReportDownchannelDaily",
		columns: {
			allAmount: {
				column: "allAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downPay: {
				column: "downPay",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downIncomeAmount: {
				column: "downIncomeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			allDown: {
				column: "allDown",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downPayAmount: {
				column: "downPayAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downIncome: {
				column: "downIncome",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelStatus: {
				column: "channelStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	newVMonthStartZbalance: {
		name: "newVMonthStartZbalance",
		columns: {
			accountType: {
				column: "accountType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			queryBalance: {
				column: "queryBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountStatus: {
				column: "accountStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			},
			warnBalance: {
				column: "warnBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelStatus: {
				column: "channelStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	dkVReportProfitDaily: {
		name: "dkVReportProfitDaily",
		columns: {
			downFace: {
				column: "downFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downCommission: {
				column: "downCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			profit: {
				column: "profit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			statisticsType: {
				column: "statisticsType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			sysCost: {
				column: "sysCost",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelSourceSystem: {
				column: "channelSourceSystem",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upDraw: {
				column: "upDraw",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upRefund: {
				column: "upRefund",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			platServiceFee: {
				column: "platServiceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downDraw: {
				column: "downDraw",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downRefund: {
				column: "downRefund",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			lastProfit: {
				column: "lastProfit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upCommission: {
				column: "upCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	fdVReportUpchannelDaily: {
		name: "fdVReportUpchannelDaily",
		columns: {
			channelClassif: {
				column: "channelClassif",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			allUp: {
				column: "allUp",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upIncomeAmount: {
				column: "upIncomeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upPay: {
				column: "upPay",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			allAmount: {
				column: "allAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upPayAmount: {
				column: "upPayAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelStatus: {
				column: "channelStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upIncome: {
				column: "upIncome",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	fdVReportProfitDaily2: {
		name: "fdVReportProfitDaily2",
		columns: {
			platServiceFee: {
				column: "platServiceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upRefund: {
				column: "upRefund",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downRefund: {
				column: "downRefund",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upCommission: {
				column: "upCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			profit: {
				column: "profit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downFace: {
				column: "downFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downDraw: {
				column: "downDraw",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			lastProfit: {
				column: "lastProfit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downCommission: {
				column: "downCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upDraw: {
				column: "upDraw",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	fdVReportProfitDaily: {
		name: "fdVReportProfitDaily",
		columns: {
			platServiceFee: {
				column: "platServiceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upRefund: {
				column: "upRefund",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downRefund: {
				column: "downRefund",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			profit: {
				column: "profit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upDraw: {
				column: "upDraw",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			statisticsType: {
				column: "statisticsType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downFace: {
				column: "downFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			lastProfit: {
				column: "lastProfit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downCommission: {
				column: "downCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downDraw: {
				column: "downDraw",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upCommission: {
				column: "upCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	dkVReportSettleSummary: {
		name: "dkVReportSettleSummary",
		columns: {
			statisticsType: {
				column: "statisticsType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			realDrawAmount: {
				column: "realDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			realFace: {
				column: "realFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelSourceSystem: {
				column: "channelSourceSystem",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			oneWaySeatProfits: {
				column: "oneWaySeatProfits",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			lastProfits: {
				column: "lastProfits",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			realRechargeFace: {
				column: "realRechargeFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			oneWayProfits: {
				column: "oneWayProfits",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			refundDrawAmount: {
				column: "refundDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			refundTotalFace: {
				column: "refundTotalFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			},
			endCommission: {
				column: "endCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			lastServiceFee: {
				column: "lastServiceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			totalUnit: {
				column: "totalUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			totalFace: {
				column: "totalFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			drawAmount: {
				column: "drawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	fdVReportSettleSummary: {
		name: "fdVReportSettleSummary",
		columns: {
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			statisticsType: {
				column: "statisticsType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			},
			lastProfits: {
				column: "lastProfits",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			oneWaySeatProfits: {
				column: "oneWaySeatProfits",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			realFace: {
				column: "realFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			refundDrawAmount: {
				column: "refundDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			drawAmount: {
				column: "drawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upManyFace: {
				column: "upManyFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			totalUnit: {
				column: "totalUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			lastServiceFee: {
				column: "lastServiceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			realDrawAmount: {
				column: "realDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			totalFace: {
				column: "totalFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			oneWayProfits: {
				column: "oneWayProfits",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelSourceSystem: {
				column: "channelSourceSystem",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			realRechargeFace: {
				column: "realRechargeFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: ""
			},
			endCommission: {
				column: "endCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			refundTotalFace: {
				column: "refundTotalFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upManyAmount: {
				column: "upManyAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	dkVReportSummaryMonth: {
		name: "dkVReportSummaryMonth",
		columns: {
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			realDrawAmount: {
				column: "realDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			realRechargeFace: {
				column: "realRechargeFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			},
			totalFace: {
				column: "totalFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			endCommission: {
				column: "endCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			refundTotalFace: {
				column: "refundTotalFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			statisticsType: {
				column: "statisticsType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			drawAmount: {
				column: "drawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			oneWayProfits: {
				column: "oneWayProfits",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			realFace: {
				column: "realFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			refundDrawAmount: {
				column: "refundDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelSourceSystem: {
				column: "channelSourceSystem",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			oneWaySeatProfits: {
				column: "oneWaySeatProfits",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			totalUnit: {
				column: "totalUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	fdVBaseBankChange: {
		name: "fdVBaseBankChange",
		columns: {
			addAmount: {
				column: "addAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			minusAmount: {
				column: "minusAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 8,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	fdVReportProfitMonth: {
		name: "fdVReportProfitMonth",
		columns: {
			upRefund: {
				column: "upRefund",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downCommission: {
				column: "downCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upCommission: {
				column: "upCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 8,
				nullable: false,
				isPk: false,
				description: ""
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downRefund: {
				column: "downRefund",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			platServiceFee: {
				column: "platServiceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upDraw: {
				column: "upDraw",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downDraw: {
				column: "downDraw",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			profit: {
				column: "profit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			lastProfit: {
				column: "lastProfit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			statisticsType: {
				column: "statisticsType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downFace: {
				column: "downFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	fdVReportTradeSummary: {
		name: "fdVReportTradeSummary",
		columns: {
			refundFistCommission: {
				column: "refundFistCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			faceAmount: {
				column: "faceAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			totalUnit: {
				column: "totalUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			realFace: {
				column: "realFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			drawAmount: {
				column: "drawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			},
			lastDrawAmount: {
				column: "lastDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			refundTotalFace: {
				column: "refundTotalFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			refundDrawAmount: {
				column: "refundDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			lastProfits: {
				column: "lastProfits",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			lastFirstCommission: {
				column: "lastFirstCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			lastFaceAmount: {
				column: "lastFaceAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			totalCommission: {
				column: "totalCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			lastServiceFee: {
				column: "lastServiceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			fistCommission: {
				column: "fistCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			refundFaceAmount: {
				column: "refundFaceAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			endCommission: {
				column: "endCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			statisticsType: {
				column: "statisticsType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			totalFace: {
				column: "totalFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upManyFace: {
				column: "upManyFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	zreportUpFundJoinHs: {
		name: "zreportUpFundJoinHs",
		columns: {
			downDrawFace: {
				column: "downDrawFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upDrawUnit: {
				column: "upDrawUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			changeType: {
				column: "changeType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			settleStatus: {
				column: "settleStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downAccountId: {
				column: "downAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			fdOrderId: {
				column: "fdOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			changeTime: {
				column: "changeTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			upChannelNo: {
				column: "upChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			},
			downRealAmount: {
				column: "downRealAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downDrawAmount: {
				column: "downDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upCommission: {
				column: "upCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			tradeDeliveryNo: {
				column: "tradeDeliveryNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			},
			downCommission: {
				column: "downCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			orderSource: {
				column: "orderSource",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			memo: {
				column: "memo",
				dataType: "varchar2",
				dataLength: 256,
				nullable: false,
				isPk: false,
				description: ""
			},
			downDrawUnit: {
				column: "downDrawUnit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downChannelNo: {
				column: "downChannelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			},
			provinceNo: {
				column: "provinceNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			},
			carrierNo: {
				column: "carrierNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upDrawFace: {
				column: "upDrawFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downCompanyId: {
				column: "downCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			settleTime: {
				column: "settleTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			profits: {
				column: "profits",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upAccountId: {
				column: "upAccountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			settleBatchId: {
				column: "settleBatchId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			orderTime: {
				column: "orderTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			billType: {
				column: "billType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upRealAmount: {
				column: "upRealAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upDrawAmount: {
				column: "upDrawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upCompanyId: {
				column: "upCompanyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			settleAmount: {
				column: "settleAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			tradeOrderNo: {
				column: "tradeOrderNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	dkVReportBankDaily: {
		name: "dkVReportBankDaily",
		columns: {
			minusAmount: {
				column: "minusAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			startBalance: {
				column: "startBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: ""
			},
			endBalance: {
				column: "endBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			addAmount: {
				column: "addAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	fdVReportOperatingRate: {
		name: "fdVReportOperatingRate",
		columns: {
			upFeePay: {
				column: "upFeePay",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downAllPay: {
				column: "downAllPay",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			drawAll: {
				column: "drawAll",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upAll: {
				column: "upAll",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upAllPay: {
				column: "upAllPay",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upFee: {
				column: "upFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upFlowPay: {
				column: "upFlowPay",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 8,
				nullable: false,
				isPk: false,
				description: ""
			},
			upFlow: {
				column: "upFlow",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			bankBalance: {
				column: "bankBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			drawFee: {
				column: "drawFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downAllRate: {
				column: "downAllRate",
				dataType: "varchar2",
				dataLength: 18,
				nullable: false,
				isPk: false,
				description: ""
			},
			todayTradeRate: {
				column: "todayTradeRate",
				dataType: "varchar2",
				dataLength: 18,
				nullable: false,
				isPk: false,
				description: ""
			},
			upDownAllPay: {
				column: "upDownAllPay",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			opeBalance: {
				column: "opeBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			addAll: {
				column: "addAll",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			addFee: {
				column: "addFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upOtherPay: {
				column: "upOtherPay",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			addFlow: {
				column: "addFlow",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			addOther: {
				column: "addOther",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downAll: {
				column: "downAll",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			time: {
				column: "time",
				dataType: "date",
				dataLength: 8,
				nullable: false,
				isPk: false,
				description: ""
			},
			upFeeRate: {
				column: "upFeeRate",
				dataType: "varchar2",
				dataLength: 18,
				nullable: false,
				isPk: false,
				description: ""
			},
			drawFlow: {
				column: "drawFlow",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upFlowRate: {
				column: "upFlowRate",
				dataType: "varchar2",
				dataLength: 18,
				nullable: false,
				isPk: false,
				description: ""
			},
			companyid: {
				column: "companyid",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upOther: {
				column: "upOther",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			drawOther: {
				column: "drawOther",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upOtherRate: {
				column: "upOtherRate",
				dataType: "varchar2",
				dataLength: 18,
				nullable: false,
				isPk: false,
				description: ""
			},
			upDownAll: {
				column: "upDownAll",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	adviceAmountWorkEnd: {
		name: "adviceAmountWorkEnd",
		columns: {
			halfAmount: {
				column: "halfAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			},
			twoDiff: {
				column: "twoDiff",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			twoAmount: {
				column: "twoAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			twelveDiff: {
				column: "twelveDiff",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			twelveAmount: {
				column: "twelveAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			adviceTwelve: {
				column: "adviceTwelve",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			innerBalance: {
				column: "innerBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			adviceTwo: {
				column: "adviceTwo",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	fdVReportBankDaily1: {
		name: "fdVReportBankDaily1",
		columns: {
			minusAmount: {
				column: "minusAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			addAmount: {
				column: "addAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: ""
			},
			startBalance: {
				column: "startBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			endBalance: {
				column: "endBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	fdVReportChannelDaily1: {
		name: "fdVReportChannelDaily1",
		columns: {
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: ""
			},
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			balanceDifference: {
				column: "balanceDifference",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: ""
			},
			beginBalance: {
				column: "beginBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			endBalance: {
				column: "endBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountType: {
				column: "accountType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			},
			queryBalance: {
				column: "queryBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelStatus: {
				column: "channelStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			addAmount: {
				column: "addAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			drawAmount: {
				column: "drawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	fdTradeTimeDiffer: {
		name: "fdTradeTimeDiffer",
		columns: {
			downFirstFace: {
				column: "downFirstFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			fdOrderId: {
				column: "fdOrderId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			},
			businessType: {
				column: "businessType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			differId: {
				column: "differId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downFirstAmount: {
				column: "downFirstAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	fdVReportBankDaily: {
		name: "fdVReportBankDaily",
		columns: {
			addAmount: {
				column: "addAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			endBalance: {
				column: "endBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			minusAmount: {
				column: "minusAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			startBalance: {
				column: "startBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	fdVReportProfitCompare: {
		name: "fdVReportProfitCompare",
		columns: {
			sourceSystemId: {
				column: "sourceSystemId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			rvAmount: {
				column: "rvAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			systemName: {
				column: "systemName",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: ""
			},
			profitDiffer: {
				column: "profitDiffer",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			jzProfit: {
				column: "jzProfit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			outProfit: {
				column: "outProfit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	dkVReportProfitMonth: {
		name: "dkVReportProfitMonth",
		columns: {
			platServiceFee: {
				column: "platServiceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 8,
				nullable: false,
				isPk: false,
				description: ""
			},
			downRefund: {
				column: "downRefund",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upCommission: {
				column: "upCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			profit: {
				column: "profit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downDraw: {
				column: "downDraw",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelSourceSystem: {
				column: "channelSourceSystem",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			lastProfit: {
				column: "lastProfit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			sysCost: {
				column: "sysCost",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downFace: {
				column: "downFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upRefund: {
				column: "upRefund",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			statisticsType: {
				column: "statisticsType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upDraw: {
				column: "upDraw",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downCommission: {
				column: "downCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	adviceAmountWorkMiddle: {
		name: "adviceAmountWorkMiddle",
		columns: {
			twelveAmount: {
				column: "twelveAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			twoDiff: {
				column: "twoDiff",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			twoAmount: {
				column: "twoAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			twelveDiff: {
				column: "twelveDiff",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			},
			innerBalance: {
				column: "innerBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			adviceTwelve: {
				column: "adviceTwelve",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			adviceTwo: {
				column: "adviceTwo",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			halfAmount: {
				column: "halfAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	fdVReportChannelDaily: {
		name: "fdVReportChannelDaily",
		columns: {
			channelStatus: {
				column: "channelStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			balanceDifference: {
				column: "balanceDifference",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			},
			beginBalance: {
				column: "beginBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: ""
			},
			queryBalance: {
				column: "queryBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountType: {
				column: "accountType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			addAmount: {
				column: "addAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			drawAmount: {
				column: "drawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: ""
			},
			warnBalance: {
				column: "warnBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			endBalance: {
				column: "endBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	dkVReportDownchannelDaily: {
		name: "dkVReportDownchannelDaily",
		columns: {
			allDown: {
				column: "allDown",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downPayAmount: {
				column: "downPayAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountStatus: {
				column: "accountStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			allAmount: {
				column: "allAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downPay: {
				column: "downPay",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			downIncome: {
				column: "downIncome",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downIncomeAmount: {
				column: "downIncomeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	fdVReportSystemCap: {
		name: "fdVReportSystemCap",
		columns: {
			bond: {
				column: "bond",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			profitUndraw: {
				column: "profitUndraw",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upCommission: {
				column: "upCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downBalance: {
				column: "downBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			recvBalance: {
				column: "recvBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			deposit: {
				column: "deposit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			bankBalance: {
				column: "bankBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			shortBorrow: {
				column: "shortBorrow",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upBalance: {
				column: "upBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			companyName: {
				column: "companyName",
				dataType: "varchar2",
				dataLength: 128,
				nullable: false,
				isPk: false,
				description: ""
			},
			initInputAmount: {
				column: "initInputAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			borrow: {
				column: "borrow",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downCommission: {
				column: "downCommission",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			serviceFee: {
				column: "serviceFee",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	dkVReportUpchannelDaily: {
		name: "dkVReportUpchannelDaily",
		columns: {
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			allAmount: {
				column: "allAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			allUp: {
				column: "allUp",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upPay: {
				column: "upPay",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upPayAmount: {
				column: "upPayAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upIncome: {
				column: "upIncome",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountStatus: {
				column: "accountStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			upIncomeAmount: {
				column: "upIncomeAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	tblGlobalParam: {
		name: "tblGlobalParam",
		columns: {
			timeVal: {
				column: "timeVal",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			numberVal: {
				column: "numberVal",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			paramDesc: {
				column: "paramDesc",
				dataType: "varchar2",
				dataLength: 200,
				nullable: false,
				isPk: false,
				description: ""
			},
			stringVal: {
				column: "stringVal",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: ""
			},
			paramName: {
				column: "paramName",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	fdReportZeroBalanceCs: {
		name: "fdReportZeroBalanceCs",
		columns: {
			downFirstFace: {
				column: "downFirstFace",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			syncStatus: {
				column: "syncStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			syncBatch: {
				column: "syncBatch",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			recordDate: {
				column: "recordDate",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountType: {
				column: "accountType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			downFirstAmount: {
				column: "downFirstAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelStatus: {
				column: "channelStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountName: {
				column: "accountName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: ""
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountStatus: {
				column: "accountStatus",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			},
			balance: {
				column: "balance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			createdTime: {
				column: "createdTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			recordId: {
				column: "recordId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: true,
				description: ""
			},
			queryBalance: {
				column: "queryBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	tblProcLog: {
		name: "tblProcLog",
		columns: {
			errCode: {
				column: "errCode",
				dataType: "varchar2",
				dataLength: 10,
				nullable: false,
				isPk: false,
				description: ""
			},
			errTrace: {
				column: "errTrace",
				dataType: "varchar2",
				dataLength: 200,
				nullable: false,
				isPk: false,
				description: ""
			},
			status: {
				column: "status",
				dataType: "varchar2",
				dataLength: 2,
				nullable: false,
				isPk: false,
				description: ""
			},
			startTime: {
				column: "startTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			procName: {
				column: "procName",
				dataType: "varchar2",
				dataLength: 64,
				nullable: false,
				isPk: false,
				description: ""
			},
			logTime: {
				column: "logTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			userMark: {
				column: "userMark",
				dataType: "varchar2",
				dataLength: 200,
				nullable: false,
				isPk: false,
				description: ""
			},
			errDesc: {
				column: "errDesc",
				dataType: "varchar2",
				dataLength: 200,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	adviceAmountWorkHead: {
		name: "adviceAmountWorkHead",
		columns: {
			twelveDiff: {
				column: "twelveDiff",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			halfAmount: {
				column: "halfAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			},
			adviceTwo: {
				column: "adviceTwo",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			twoDiff: {
				column: "twoDiff",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelName: {
				column: "channelName",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: ""
			},
			twoAmount: {
				column: "twoAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			innerBalance: {
				column: "innerBalance",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			twelveAmount: {
				column: "twelveAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			adviceTwelve: {
				column: "adviceTwelve",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	courses: {
		name: "courses",
		columns: {
			cno: {
				column: "cno",
				dataType: "varchar2",
				dataLength: 5,
				nullable: false,
				isPk: false,
				description: ""
			},
			tno: {
				column: "tno",
				dataType: "varchar2",
				dataLength: 10,
				nullable: false,
				isPk: false,
				description: ""
			},
			cname: {
				column: "cname",
				dataType: "varchar2",
				dataLength: 10,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	newVMonthAdd: {
		name: "newVMonthAdd",
		columns: {
			accountType: {
				column: "accountType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			sumAddAmount: {
				column: "sumAddAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			minusAmount: {
				column: "minusAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			snapMonth: {
				column: "snapMonth",
				dataType: "date",
				dataLength: 8,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			},
			addAmount: {
				column: "addAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	newVMonthDraw: {
		name: "newVMonthDraw",
		columns: {
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			drawAmount: {
				column: "drawAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			snapMonth: {
				column: "snapMonth",
				dataType: "date",
				dataLength: 8,
				nullable: false,
				isPk: false,
				description: ""
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	students: {
		name: "students",
		columns: {
			sname: {
				column: "sname",
				dataType: "varchar2",
				dataLength: 4,
				nullable: false,
				isPk: false,
				description: ""
			},
			class: {
				column: "class",
				dataType: "varchar2",
				dataLength: 5,
				nullable: false,
				isPk: false,
				description: ""
			},
			sno: {
				column: "sno",
				dataType: "varchar2",
				dataLength: 3,
				nullable: false,
				isPk: false,
				description: ""
			},
			sbirthday: {
				column: "sbirthday",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			ssex: {
				column: "ssex",
				dataType: "varchar2",
				dataLength: 2,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	scores: {
		name: "scores",
		columns: {
			degree: {
				column: "degree",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			cno: {
				column: "cno",
				dataType: "varchar2",
				dataLength: 5,
				nullable: false,
				isPk: false,
				description: ""
			},
			sno: {
				column: "sno",
				dataType: "varchar2",
				dataLength: 3,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	zTest: {
		name: "zTest",
		columns: {
			a10: {
				column: "a10",
				dataType: "varchar2",
				dataLength: 40,
				nullable: false,
				isPk: false,
				description: ""
			},
			a7: {
				column: "a7",
				dataType: "varchar2",
				dataLength: 40,
				nullable: false,
				isPk: false,
				description: ""
			},
			a8: {
				column: "a8",
				dataType: "varchar2",
				dataLength: 40,
				nullable: false,
				isPk: false,
				description: ""
			},
			a2: {
				column: "a2",
				dataType: "varchar2",
				dataLength: 40,
				nullable: false,
				isPk: false,
				description: ""
			},
			a11: {
				column: "a11",
				dataType: "varchar2",
				dataLength: 40,
				nullable: false,
				isPk: false,
				description: ""
			},
			a14: {
				column: "a14",
				dataType: "varchar2",
				dataLength: 40,
				nullable: false,
				isPk: false,
				description: ""
			},
			a5: {
				column: "a5",
				dataType: "varchar2",
				dataLength: 100,
				nullable: false,
				isPk: false,
				description: ""
			},
			a15: {
				column: "a15",
				dataType: "varchar2",
				dataLength: 40,
				nullable: false,
				isPk: false,
				description: ""
			},
			a4: {
				column: "a4",
				dataType: "varchar2",
				dataLength: 40,
				nullable: false,
				isPk: false,
				description: ""
			},
			a6: {
				column: "a6",
				dataType: "varchar2",
				dataLength: 40,
				nullable: false,
				isPk: false,
				description: ""
			},
			a1: {
				column: "a1",
				dataType: "varchar2",
				dataLength: 40,
				nullable: false,
				isPk: false,
				description: ""
			},
			a12: {
				column: "a12",
				dataType: "varchar2",
				dataLength: 40,
				nullable: false,
				isPk: false,
				description: ""
			},
			a9: {
				column: "a9",
				dataType: "varchar2",
				dataLength: 40,
				nullable: false,
				isPk: false,
				description: ""
			},
			a3: {
				column: "a3",
				dataType: "varchar2",
				dataLength: 40,
				nullable: false,
				isPk: false,
				description: ""
			},
			a13: {
				column: "a13",
				dataType: "varchar2",
				dataLength: 40,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	dkVBaseChannelAdd: {
		name: "dkVBaseChannelAdd",
		columns: {
			accountType: {
				column: "accountType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			addAmount: {
				column: "addAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	fdVBaseChannelAdd: {
		name: "fdVBaseChannelAdd",
		columns: {
			addAmount: {
				column: "addAmount",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountType: {
				column: "accountType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			snapTime: {
				column: "snapTime",
				dataType: "date",
				dataLength: 7,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	newVChannelRunDate: {
		name: "newVChannelRunDate",
		columns: {
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			},
			tradeRange: {
				column: "tradeRange",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			companyId: {
				column: "companyId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			accountId: {
				column: "accountId",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelType: {
				column: "channelType",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	},
	rptTest: {
		name: "rptTest",
		columns: {
			profit: {
				column: "profit",
				dataType: "number",
				dataLength: 22,
				nullable: false,
				isPk: false,
				description: ""
			},
			channelNo: {
				column: "channelNo",
				dataType: "varchar2",
				dataLength: 32,
				nullable: false,
				isPk: false,
				description: ""
			}
		}
	}
};

