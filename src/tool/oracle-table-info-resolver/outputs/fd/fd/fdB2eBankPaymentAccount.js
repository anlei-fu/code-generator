exports.fdB2eBankPaymentAccount = {
	name: "fdB2eBankPaymentAccount",
	rawName: "FD_B2E_BANK_PAYMENT_ACCOUNT",
	columns: {
		ID: {
			nullable: "N",
			isPk: true,
			description: "编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		BANK_ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "加款银行账户",
			name: "bankAccountId",
			rawName: "BANK_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		BANK_TYPE: {
			nullable: "N",
			isPk: false,
			description: "银行类型（民生，中信）",
			name: "bankType",
			rawName: "BANK_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		BANK_PAYMENT_TYPE: {
			nullable: "N",
			isPk: false,
			description: "付款方式，1代付，2、工作日小额网银，3大额网银",
			name: "bankPaymentType",
			rawName: "BANK_PAYMENT_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		WORK_DAY_TYPE: {
			nullable: "N",
			isPk: false,
			description: "工作日分类(工作日，非工作日，所有)",
			name: "workDayType",
			rawName: "WORK_DAY_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		ARRIVAL_SUCCESS_TIME: {
			nullable: "N",
			isPk: false,
			description: "到账时间（分钟），0分钟、30分钟......",
			name: "arrivalSuccessTime",
			rawName: "ARRIVAL_SUCCESS_TIME",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		USE_START_TIME: {
			nullable: "N",
			isPk: false,
			description: "开始使用时间hh24miss",
			name: "useStartTime",
			rawName: "USE_START_TIME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		USE_END_TIME: {
			nullable: "N",
			isPk: false,
			description: "结束使用时间hh24miss",
			name: "useEndTime",
			rawName: "USE_END_TIME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		MAX_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "单笔最大金额",
			name: "maxAmount",
			rawName: "MAX_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		STATUS: {
			nullable: "N",
			isPk: false,
			description: "状态，0启用，1禁用",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		SORT_ID: {
			nullable: "N",
			isPk: false,
			description: "使用顺序编号",
			name: "sortId",
			rawName: "SORT_ID",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		RCV_CARD_TYPE: {
			nullable: "N",
			isPk: false,
			description: "收款账户类型：0通用,:对公；:对私",
			name: "rcvCardType",
			rawName: "RCV_CARD_TYPE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		IS_SAME_BANK: {
			nullable: "N",
			isPk: false,
			description: "是否跨行：0通用,1同行,2跨行",
			name: "isSameBank",
			rawName: "IS_SAME_BANK",
			type: {
				name: "NUMBER",
				length: "1"
			}
		}
	}
};
