exports.fdSystemCantonInfo = {
	name: "fdSystemCantonInfo",
	rawName: "FD_SYSTEM_CANTON_INFO",
	columns: {
		CANTON_CODE: {
			nullable: "N",
			isPk: true,
			description: "区域编号",
			name: "cantonCode",
			rawName: "CANTON_CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CHINESE_NAME: {
			nullable: "N",
			isPk: false,
			description: "中文名称",
			name: "chineseName",
			rawName: "CHINESE_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		SPELL: {
			nullable: "N",
			isPk: false,
			description: "英文或全拼",
			name: "spell",
			rawName: "SPELL",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		GRADE: {
			nullable: "N",
			isPk: false,
			description: "行政级别",
			name: "grade",
			rawName: "GRADE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		PARENT: {
			nullable: "N",
			isPk: false,
			description: "父级",
			name: "parent",
			rawName: "PARENT",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		SIMPLE_SPELL: {
			nullable: "N",
			isPk: false,
			description: "简拼",
			name: "simpleSpell",
			rawName: "SIMPLE_SPELL",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		AREA_CODE: {
			nullable: "N",
			isPk: false,
			description: "区号",
			name: "areaCode",
			rawName: "AREA_CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		STANDARD_CODE: {
			nullable: "N",
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

