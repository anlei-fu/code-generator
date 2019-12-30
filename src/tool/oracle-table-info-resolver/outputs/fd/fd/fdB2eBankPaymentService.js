exports.fdB2eBankPaymentService = {
	name: "fdB2eBankPaymentService",
	rawName: "FD_B2E_BANK_PAYMENT_SERVICE",
	columns: {
		ID: {
			nullable: "N",
			isPk: false,
			description: "编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		BANK_TYPE: {
			nullable: "N",
			isPk: false,
			description: "银行类型",
			name: "bankType",
			rawName: "BANK_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		PAYMENT_TYPE: {
			nullable: "N",
			isPk: false,
			description: "加款方式",
			name: "paymentType",
			rawName: "PAYMENT_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		MIN_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "收取下限金额",
			name: "minAmount",
			rawName: "MIN_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		MAX_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "收取上限金额",
			name: "maxAmount",
			rawName: "MAX_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SINGLE_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "单笔收取手续费金额（和折扣配合使用）",
			name: "singleAmount",
			rawName: "SINGLE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DISCOUNT: {
			nullable: "N",
			isPk: false,
			description: "单笔收取手续费折扣（和金额配合使用）",
			name: "discount",
			rawName: "DISCOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		MAX_SERVICE_FEE: {
			nullable: "N",
			isPk: false,
			description: "最大手续费(计算的手续费不能超过该值)",
			name: "maxServiceFee",
			rawName: "MAX_SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

