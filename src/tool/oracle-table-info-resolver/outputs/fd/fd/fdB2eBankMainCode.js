exports.fdB2eBankMainCode = {
	name: "fdB2eBankMainCode",
	rawName: "FD_B2E_BANK_MAIN_CODE",
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
		bankType: {
			nullable: false,
			isPk: false,
			description: "银行类型(民生银行，中信银行)",
			name: "bankType",
			rawName: "BANK_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		interfaceType: {
			nullable: false,
			isPk: false,
			description: "接口分类",
			name: "interfaceType",
			rawName: "INTERFACE_TYPE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		recvBankType: {
			nullable: false,
			isPk: false,
			description: "收款银行类型",
			name: "recvBankType",
			rawName: "RECV_BANK_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		recvBankCode: {
			nullable: false,
			isPk: false,
			description: "收款银行对应主行号",
			name: "recvBankCode",
			rawName: "RECV_BANK_CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		memo: {
			nullable: true,
			isPk: false,
			description: "备注信息",
			name: "memo",
			rawName: "MEMO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

