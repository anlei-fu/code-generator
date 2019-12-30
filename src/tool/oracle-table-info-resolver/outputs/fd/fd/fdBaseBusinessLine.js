exports.fdBaseBusinessLine = {
	name: "fdBaseBusinessLine",
	rawName: "FD_BASE_BUSINESS_LINE",
	columns: {
		BUSINESS_ID: {
			nullable: "N",
			isPk: true,
			description: "主键",
			name: "businessId",
			rawName: "BUSINESS_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		BUSINESS_NAME: {
			nullable: "N",
			isPk: false,
			description: "业务线名称",
			name: "businessName",
			rawName: "BUSINESS_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

