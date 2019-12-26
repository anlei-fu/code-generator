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
				name: "number",
				length: 20
			}
		},
		provinceNo: {
			nullable: false,
			isPk: false,
			description: "省份编号",
			name: "provinceNo",
			rawName: "PROVINCE_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		upGroupId: {
			nullable: false,
			isPk: false,
			description: "所属上游收入分组",
			name: "upGroupId",
			rawName: "UP_GROUP_ID",
			type: {
				name: "number",
				length: 20
			}
		}
	}
};

