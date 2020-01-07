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
				name: "VARCHAR2",
				length: ""
			}
		},
		chineseName: {
			nullable: false,
			isPk: false,
			description: "中文名称",
			name: "chineseName",
			rawName: "CHINESE_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		spell: {
			nullable: false,
			isPk: false,
			description: "英文或全拼",
			name: "spell",
			rawName: "SPELL",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		grade: {
			nullable: false,
			isPk: false,
			description: "行政级别",
			name: "grade",
			rawName: "GRADE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		parent: {
			nullable: false,
			isPk: false,
			description: "父级",
			name: "parent",
			rawName: "PARENT",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		simpleSpell: {
			nullable: false,
			isPk: false,
			description: "简拼",
			name: "simpleSpell",
			rawName: "SIMPLE_SPELL",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		areaCode: {
			nullable: false,
			isPk: false,
			description: "区号",
			name: "areaCode",
			rawName: "AREA_CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		standardCode: {
			nullable: false,
			isPk: false,
			description: "标准行政编码",
			name: "standardCode",
			rawName: "STANDARD_CODE",
			type: {
				name: "NUMBER",
				length: "6"
			}
		}
	}
};

