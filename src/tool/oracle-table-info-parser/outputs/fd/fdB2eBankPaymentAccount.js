exports.fdB2eBankPaymentAccount = {
	name: "fdB2eBankPaymentAccount",
	rawName: "FD_B2E_BANK_PAYMENT_ACCOUNT",
	columns: {
		id: {
			nullable: false,
			isPk: true,
			description: "编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "number",
				length: 20
			}
		},
		bankAccountId: {
			nullable: false,
			isPk: false,
			description: "加款银行账户",
			name: "bankAccountId",
			rawName: "BANK_ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		bankType: {
			nullable: false,
			isPk: false,
			description: "银行类型（民生，中信）",
			name: "bankType",
			rawName: "BANK_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		bankPaymentType: {
			nullable: false,
			isPk: false,
			description: "付款方式，1代付，2、工作日小额网银，3大额网银",
			name: "bankPaymentType",
			rawName: "BANK_PAYMENT_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		workDayType: {
			nullable: false,
			isPk: false,
			description: "工作日分类(工作日，非工作日，所有)",
			name: "workDayType",
			rawName: "WORK_DAY_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		arrivalSuccessTime: {
			nullable: false,
			isPk: false,
			description: "到账时间（分钟），0分钟、30分钟......",
			name: "arrivalSuccessTime",
			rawName: "ARRIVAL_SUCCESS_TIME",
			type: {
				name: "number",
				length: 20
			}
		},
		useStartTime: {
			nullable: false,
			isPk: false,
			description: "开始使用时间hh24miss",
			name: "useStartTime",
			rawName: "USE_START_TIME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		useEndTime: {
			nullable: false,
			isPk: false,
			description: "结束使用时间hh24miss",
			name: "useEndTime",
			rawName: "USE_END_TIME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		maxAmount: {
			nullable: false,
			isPk: false,
			description: "单笔最大金额",
			name: "maxAmount",
			rawName: "MAX_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		status: {
			nullable: false,
			isPk: false,
			description: "状态，0启用，1禁用",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "number",
				length: 1
			}
		},
		sortId: {
			nullable: false,
			isPk: false,
			description: "使用顺序编号",
			name: "sortId",
			rawName: "SORT_ID",
			type: {
				name: "number",
				length: 2
			}
		},
		rcvCardType: {
			nullable: false,
			isPk: false,
			description: "收款账户类型：0通用",
			name: "rcvCardType",
			rawName: "RCV_CARD_TYPE",
			type: {
				name: "varchar2",
				length: null
			}
		},
		isSameBank: {
			nullable: false,
			isPk: false,
			description: "是否跨行：0通用",
			name: "isSameBank",
			rawName: "IS_SAME_BANK",
			type: {
				name: "number",
				length: 1
			}
		}
	}
};

