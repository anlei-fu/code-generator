exports.fdB2eBankZxyjCode = {
	name: "fdB2eBankZxyjCode",
	rawName: "FD_B2E_BANK_ZXYJ_CODE",
	columns: {
		ID: {
			nullable: "N",
			isPk: false,
			description: "主键",
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
				length: "20"
			}
		},
		BANK_GRADE: {
			nullable: "N",
			isPk: false,
			description: "银行等级，0总行，1省分行，2市分行",
			name: "bankGrade",
			rawName: "BANK_GRADE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		CANTON_CODE: {
			nullable: "N",
			isPk: false,
			description: "地区编码",
			name: "cantonCode",
			rawName: "CANTON_CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		BANK_CODE: {
			nullable: "N",
			isPk: false,
			description: "银行编码",
			name: "bankCode",
			rawName: "BANK_CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		BANK_NAME: {
			nullable: "N",
			isPk: false,
			description: "银行名称",
			name: "bankName",
			rawName: "BANK_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

