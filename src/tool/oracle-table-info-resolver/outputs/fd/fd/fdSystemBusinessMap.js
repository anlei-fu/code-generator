exports.fdSystemBusinessMap = {
	name: "fdSystemBusinessMap",
	rawName: "FD_SYSTEM_BUSINESS_MAP",
	columns: {
		ID: {
			nullable: "N",
			isPk: true,
			description: "主键",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SOURCE_SYSTEM_ID: {
			nullable: "N",
			isPk: false,
			description: "系统id",
			name: "sourceSystemId",
			rawName: "SOURCE_SYSTEM_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
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
		}
	}
};

