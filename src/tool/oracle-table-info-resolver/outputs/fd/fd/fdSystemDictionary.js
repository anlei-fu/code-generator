exports.fdSystemDictionary = {
	name: "fdSystemDictionary",
	rawName: "FD_SYSTEM_DICTIONARY",
	columns: {
		id: {
			nullable: false,
			isPk: false,
			description: "编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		value: {
			nullable: false,
			isPk: false,
			description: "枚举项的值",
			name: "value",
			rawName: "VALUE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		description: {
			nullable: false,
			isPk: false,
			description: "枚举项的描述[即显示信息]",
			name: "description",
			rawName: "DESCRIPTION",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		belongEnum: {
			nullable: false,
			isPk: false,
			description: "所属枚举",
			name: "belongEnum",
			rawName: "BELONG_ENUM",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		sortId: {
			nullable: false,
			isPk: false,
			description: "枚举内的排序",
			name: "sortId",
			rawName: "SORT_ID",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		groupId: {
			nullable: false,
			isPk: false,
			description: "分组",
			name: "groupId",
			rawName: "GROUP_ID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		belongSystem: {
			nullable: false,
			isPk: false,
			description: "所属系统",
			name: "belongSystem",
			rawName: "BELONG_SYSTEM",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		status: {
			nullable: false,
			isPk: false,
			description: "状态0启用1禁用",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		}
	}
};

