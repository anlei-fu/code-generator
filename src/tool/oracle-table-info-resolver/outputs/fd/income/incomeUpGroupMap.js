exports.incomeUpGroupMap = {
	name: "incomeUpGroupMap",
	rawName: "INCOME_UP_GROUP_MAP",
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
		provinceNo: {
			nullable: false,
			isPk: false,
			description: "省份编号",
			name: "provinceNo",
			rawName: "PROVINCE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		upGroupId: {
			nullable: false,
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

