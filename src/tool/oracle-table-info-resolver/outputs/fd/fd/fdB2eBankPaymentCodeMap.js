exports.fdB2eBankPaymentCodeMap = {
	name: "fdB2eBankPaymentCodeMap",
	rawName: "FD_B2E_BANK_PAYMENT_CODE_MAP",
	columns: {
		id: {
			nullable: false,
			isPk: false,
			description: "主键",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		bankPaymentType: {
			nullable: false,
			isPk: false,
			description: "银行支付方式",
			name: "bankPaymentType",
			rawName: "BANK_PAYMENT_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		codeType: {
			nullable: false,
			isPk: false,
			description: "编码类型1.付款类，2付款结果查询",
			name: "codeType",
			rawName: "CODE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		code: {
			nullable: false,
			isPk: false,
			description: "银行接口编码",
			name: "code",
			rawName: "CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		remark: {
			nullable: true,
			isPk: false,
			description: "备注说明",
			name: "remark",
			rawName: "REMARK",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

