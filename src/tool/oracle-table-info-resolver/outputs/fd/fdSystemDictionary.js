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
				name: "number",
				length: 20
			}
		},
		value: {
			nullable: false,
			isPk: false,
			description: "枚举项的值",
			name: "value",
			rawName: "VALUE",
			type: {
				name: "varchar2",
				length: null
			}
		},
		description: {
			nullable: false,
			isPk: false,
			description: "枚举项的描述[即显示信息]",
			name: "description",
			rawName: "DESCRIPTION",
			type: {
				name: "varchar2",
				length: null
			}
		},
		belongEnum: {
			nullable: false,
			isPk: false,
			description: "所属枚举",
			name: "belongEnum",
			rawName: "BELONG_ENUM",
			type: {
				name: "varchar2",
				length: null
			}
		},
		sortId: {
			nullable: false,
			isPk: false,
			description: "枚举内的排序",
			name: "sortId",
			rawName: "SORT_ID",
			type: {
				name: "number",
				length: 2
			}
		},
		groupId: {
			nullable: false,
			isPk: false,
			description: "分组",
			name: "groupId",
			rawName: "GROUP_ID",
			type: {
				name: "varchar2",
				length: null
			}
		},
		belongSystem: {
			nullable: false,
			isPk: false,
			description: "所属系统",
			name: "belongSystem",
			rawName: "BELONG_SYSTEM",
			type: {
				name: "varchar2",
				length: null
			}
		},
		status: {
			nullable: false,
			isPk: false,
			description: "状态0启用1禁用",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "number",
				length: 1
			}
		}
	}
};

