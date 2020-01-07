exports.fdSystemBusinessInfo = {
	name: "fdSystemBusinessInfo",
	rawName: "FD_SYSTEM_BUSINESS_INFO",
	columns: {
		businessType: {
			nullable: false,
			isPk: false,
			description: "业务类型编码",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		businessTypeName: {
			nullable: false,
			isPk: false,
			description: "业务类型名称",
			name: "businessTypeName",
			rawName: "BUSINESS_TYPE_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

