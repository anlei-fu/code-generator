exports.fdBaseCompanyInfo = {
	name: "fdBaseCompanyInfo",
	rawName: "FD_BASE_COMPANY_INFO",
	columns: {
		companyId: {
			nullable: false,
			isPk: true,
			description: "公司编号",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		companyName: {
			nullable: false,
			isPk: false,
			description: "公司名称",
			name: "companyName",
			rawName: "COMPANY_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		initInputAmount: {
			nullable: false,
			isPk: false,
			description: "初始投入资金",
			name: "initInputAmount",
			rawName: "INIT_INPUT_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		sortName: {
			nullable: false,
			isPk: false,
			description: "简称",
			name: "sortName",
			rawName: "SORT_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		status: {
			nullable: false,
			isPk: false,
			description: ":有效，1无效",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "number",
				length: 1
			}
		}
	}
};

