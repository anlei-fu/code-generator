exports.fdBaseBusinessLine = {
	name: "fdBaseBusinessLine",
	rawName: "FD_BASE_BUSINESS_LINE",
	columns: {
		businessId: {
			nullable: false,
			isPk: true,
			description: "主键",
			name: "businessId",
			rawName: "BUSINESS_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		businessName: {
			nullable: false,
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

