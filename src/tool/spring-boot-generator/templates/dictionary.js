exports.SystemDictionary = {
	name: "SystemDictionary",
	rawName: "SYSTEM_DICTIONARY",
	columns: {
		dicId: {
			nullable: false,
			isPk: false,
			description: "字典编号",
			name: "dicId",
			rawName: "DIC_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		name: {
			nullable: false,
			isPk: false,
			description: "字典名称",
			name: "name",
			rawName: "NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		value: {
			nullable: false,
			isPk: false,
			description: "字典值",
			name: "value",
			rawName: "VALUE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		short: {
			nullable: true,
			isPk: false,
			description: "排序",
			name: "short",
			rawName: "SHORT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		type: {
			nullable: false,
			isPk: false,
			description: "类型",
			name: "type",
			rawName: "TYPE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	},
	description: "数据字典"
};

