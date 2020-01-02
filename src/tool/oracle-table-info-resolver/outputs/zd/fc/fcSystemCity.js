exports.fcSystemCity = {
	name: "fcSystemCity",
	rawName: "FC_SYSTEM_CITY",
	columns: {
		CITY_NO: {
			nullable: false,
			isPk: false,
			description: "市编号",
			name: "cityNo",
			rawName: "CITY_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CITY_NAME: {
			nullable: true,
			isPk: false,
			description: "名称",
			name: "cityName",
			rawName: "CITY_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		STATUS: {
			nullable: true,
			isPk: false,
			description: "状态",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		PROVINCE_NO: {
			nullable: true,
			isPk: false,
			description: "省id",
			name: "provinceNo",
			rawName: "PROVINCE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CODE: {
			nullable: true,
			isPk: false,
			description: "",
			name: "code",
			rawName: "CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	},
	description: "城市表"
};

