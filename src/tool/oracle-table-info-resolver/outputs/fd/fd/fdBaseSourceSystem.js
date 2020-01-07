exports.fdBaseSourceSystem = {
	name: "fdBaseSourceSystem",
	rawName: "FD_BASE_SOURCE_SYSTEM",
	columns: {
		sourceSystemId: {
			nullable: false,
			isPk: true,
			description: "主键",
			name: "sourceSystemId",
			rawName: "SOURCE_SYSTEM_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		sourceSystemName: {
			nullable: false,
			isPk: false,
			description: "系统名称",
			name: "sourceSystemName",
			rawName: "SOURCE_SYSTEM_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		text: {
			nullable: true,
			isPk: false,
			description: "显示名称",
			name: "text",
			rawName: "TEXT",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

