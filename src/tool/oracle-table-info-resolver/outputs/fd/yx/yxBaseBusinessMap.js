exports.yxBaseBusinessMap = {
	name: "yxBaseBusinessMap",
	rawName: "YX_BASE_BUSINESS_MAP",
	columns: {
		OUTER_BUSINESS_TYPE: {
			nullable: "N",
			isPk: false,
			description: "外部系统业务类型编号",
			name: "outerBusinessType",
			rawName: "OUTER_BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		BUSINESS_MAP_ID: {
			nullable: "N",
			isPk: false,
			description: "业务类型映射编号",
			name: "businessMapId",
			rawName: "BUSINESS_MAP_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		LOCAL_BUSINESS_TYPE: {
			nullable: "N",
			isPk: false,
			description: "记账系统业务类型编号",
			name: "localBusinessType",
			rawName: "LOCAL_BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		INDUSTRY_TYPE: {
			nullable: "N",
			isPk: false,
			description: "行业类型",
			name: "industryType",
			rawName: "INDUSTRY_TYPE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		OUTER_SYSTEM_NO: {
			nullable: "N",
			isPk: false,
			description: "外部系统编号",
			name: "outerSystemNo",
			rawName: "OUTER_SYSTEM_NO",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

