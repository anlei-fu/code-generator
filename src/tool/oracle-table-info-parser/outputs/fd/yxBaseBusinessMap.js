exports.yxBaseBusinessMap = {
	name: "yxBaseBusinessMap",
	rawName: "YX_BASE_BUSINESS_MAP",
	columns: {
		outerBusinessType: {
			nullable: false,
			isPk: false,
			description: "外部系统业务类型编号",
			name: "outerBusinessType",
			rawName: "OUTER_BUSINESS_TYPE",
			type: {
				name: "number",
				length: 20
			}
		},
		businessMapId: {
			nullable: false,
			isPk: false,
			description: "业务类型映射编号",
			name: "businessMapId",
			rawName: "BUSINESS_MAP_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		localBusinessType: {
			nullable: false,
			isPk: false,
			description: "记账系统业务类型编号",
			name: "localBusinessType",
			rawName: "LOCAL_BUSINESS_TYPE",
			type: {
				name: "number",
				length: 20
			}
		},
		industryType: {
			nullable: false,
			isPk: false,
			description: "行业类型",
			name: "industryType",
			rawName: "INDUSTRY_TYPE",
			type: {
				name: "number",
				length: 20
			}
		},
		outerSystemNo: {
			nullable: false,
			isPk: false,
			description: "外部系统编号",
			name: "outerSystemNo",
			rawName: "OUTER_SYSTEM_NO",
			type: {
				name: "number",
				length: 20
			}
		}
	}
};

