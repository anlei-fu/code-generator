exports.fdSystemBusinessMap = {
	name: "fdSystemBusinessMap",
	rawName: "FD_SYSTEM_BUSINESS_MAP",
	columns: {
		id: {
			nullable: false,
			isPk: true,
			description: "主键",
			name: "id",
			rawName: "ID",
			type: {
				name: "number",
				length: 20
			}
		},
		sourceSystemId: {
			nullable: false,
			isPk: false,
			description: "系统id",
			name: "sourceSystemId",
			rawName: "SOURCE_SYSTEM_ID",
			type: {
				name: "number",
				length: 20
			}
		},
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
		}
	}
};

