exports.fdB2eBankErrorCode = {
	name: "fdB2eBankErrorCode",
	rawName: "FD_B2E_BANK_ERROR_CODE",
	columns: {
		ID: {
			nullable: "N",
			isPk: false,
			description: "银行子账户",
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
		ERR_CODE_TYPE: {
			nullable: "N",
			isPk: false,
			description: "错误码类型",
			name: "errCodeType",
			rawName: "ERR_CODE_TYPE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ERR_CODE: {
			nullable: "N",
			isPk: false,
			description: "错误码",
			name: "errCode",
			rawName: "ERR_CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		DEAL_CODE: {
			nullable: "N",
			isPk: false,
			description: "处理码，success、fail、unkown",
			name: "dealCode",
			rawName: "DEAL_CODE",
			type: {
				name: "VARCHAR2",
				length: ""
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
		}
	}
};

