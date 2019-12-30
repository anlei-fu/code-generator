exports.incomeUpGroupMap = {
	name: "incomeUpGroupMap",
	rawName: "INCOME_UP_GROUP_MAP",
	columns: {
		ID: {
			nullable: "N",
			isPk: false,
			description: "编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PROVINCE_NO: {
			nullable: "N",
			isPk: false,
			description: "省份编号",
			name: "provinceNo",
			rawName: "PROVINCE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		UP_GROUP_ID: {
			nullable: "N",
			isPk: false,
			description: "所属上游收入分组",
			name: "upGroupId",
			rawName: "UP_GROUP_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

