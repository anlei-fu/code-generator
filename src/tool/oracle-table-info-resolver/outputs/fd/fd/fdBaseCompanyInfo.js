exports.fdBaseCompanyInfo = {
	name: "fdBaseCompanyInfo",
	rawName: "FD_BASE_COMPANY_INFO",
	columns: {
		COMPANY_ID: {
			nullable: "N",
			isPk: true,
			description: "公司编号",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		COMPANY_NAME: {
			nullable: "N",
			isPk: false,
			description: "公司名称",
			name: "companyName",
			rawName: "COMPANY_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		INIT_INPUT_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "初始投入资金",
			name: "initInputAmount",
			rawName: "INIT_INPUT_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SORT_NAME: {
			nullable: "N",
			isPk: false,
			description: "简称",
			name: "sortName",
			rawName: "SORT_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		STATUS: {
			nullable: "N",
			isPk: false,
			description: ":有效，1无效",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		}
	}
};

