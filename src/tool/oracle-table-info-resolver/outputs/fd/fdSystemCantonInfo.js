exports.fdSystemCantonInfo = {
	name: "fdSystemCantonInfo",
	rawName: "FD_SYSTEM_CANTON_INFO",
	columns: {
		cantonCode: {
			nullable: false,
			isPk: true,
			description: "区域编号",
			name: "cantonCode",
			rawName: "CANTON_CODE",
			type: {
				name: "varchar2",
				length: null
			}
		},
		chineseName: {
			nullable: false,
			isPk: false,
			description: "中文名称",
			name: "chineseName",
			rawName: "CHINESE_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		spell: {
			nullable: false,
			isPk: false,
			description: "英文或全拼",
			name: "spell",
			rawName: "SPELL",
			type: {
				name: "varchar2",
				length: null
			}
		},
		grade: {
			nullable: false,
			isPk: false,
			description: "行政级别",
			name: "grade",
			rawName: "GRADE",
			type: {
				name: "number",
				length: 1
			}
		},
		parent: {
			nullable: false,
			isPk: false,
			description: "父级",
			name: "parent",
			rawName: "PARENT",
			type: {
				name: "varchar2",
				length: null
			}
		},
		simpleSpell: {
			nullable: false,
			isPk: false,
			description: "简拼",
			name: "simpleSpell",
			rawName: "SIMPLE_SPELL",
			type: {
				name: "varchar2",
				length: null
			}
		},
		areaCode: {
			nullable: false,
			isPk: false,
			description: "区号",
			name: "areaCode",
			rawName: "AREA_CODE",
			type: {
				name: "varchar2",
				length: null
			}
		},
		standardCode: {
			nullable: false,
			isPk: false,
			description: "标准行政编码",
			name: "standardCode",
			rawName: "STANDARD_CODE",
			type: {
				name: "number",
				length: 6
			}
		}
	}
};

