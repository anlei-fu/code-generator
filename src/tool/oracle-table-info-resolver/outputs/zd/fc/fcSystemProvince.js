exports.fcSystemProvince = {
	name: "fcSystemProvince",
	rawName: "FC_SYSTEM_PROVINCE",
	columns: {
		provinceNo: {
			nullable: false,
			isPk: false,
			description: "省编号",
			name: "provinceNo",
			rawName: "PROVINCE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		provinceName: {
			nullable: false,
			isPk: false,
			description: "名称",
			name: "provinceName",
			rawName: "PROVINCE_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		status: {
			nullable: false,
			isPk: false,
			description: "状态",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: "1"
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
		}
	},
	description: "省份表"
};

