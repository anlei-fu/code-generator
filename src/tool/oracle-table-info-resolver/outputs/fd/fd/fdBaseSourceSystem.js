exports.fdBaseSourceSystem = {
	name: "fdBaseSourceSystem",
	rawName: "FD_BASE_SOURCE_SYSTEM",
	columns: {
		SOURCE_SYSTEM_ID: {
			nullable: "N",
			isPk: true,
			description: "主键",
			name: "sourceSystemId",
			rawName: "SOURCE_SYSTEM_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SOURCE_SYSTEM_NAME: {
			nullable: "N",
			isPk: false,
			description: "系统名称",
			name: "sourceSystemName",
			rawName: "SOURCE_SYSTEM_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		TEXT: {
			nullable: "Y",
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

