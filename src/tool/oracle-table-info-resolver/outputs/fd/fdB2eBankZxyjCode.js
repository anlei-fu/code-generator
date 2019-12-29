exports.fdB2eBankZxyjCode = {
	name: "fdB2eBankZxyjCode",
	rawName: "FD_B2E_BANK_ZXYJ_CODE",
	columns: {
		id: {
			nullable: false,
			isPk: false,
			description: "主键",
			name: "id",
			rawName: "ID",
			type: {
				name: "number",
				length: 20
			}
		},
		bankType: {
			nullable: false,
			isPk: false,
			description: "银行类型",
			name: "bankType",
			rawName: "BANK_TYPE",
			type: {
				name: "number",
				length: 20
			}
		},
		bankGrade: {
			nullable: false,
			isPk: false,
			description: "银行等级，0总行，1省分行，2市分行",
			name: "bankGrade",
			rawName: "BANK_GRADE",
			type: {
				name: "number",
				length: 3
			}
		},
		cantonCode: {
			nullable: false,
			isPk: false,
			description: "地区编码",
			name: "cantonCode",
			rawName: "CANTON_CODE",
			type: {
				name: "varchar2",
				length: null
			}
		},
		bankCode: {
			nullable: false,
			isPk: false,
			description: "银行编码",
			name: "bankCode",
			rawName: "BANK_CODE",
			type: {
				name: "varchar2",
				length: null
			}
		},
		bankName: {
			nullable: false,
			isPk: false,
			description: "银行名称",
			name: "bankName",
			rawName: "BANK_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		}
	}
};

