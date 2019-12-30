exports.fdSystemBusinessStatisMap = {
	name: "fdSystemBusinessStatisMap",
	rawName: "FD_SYSTEM_BUSINESS_STATIS_MAP",
	columns: {
		ID: {
			nullable: "N",
			isPk: false,
			description: "主键",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		LOCAL_BUSINESS_TYPE: {
			nullable: "N",
			isPk: false,
			description: "记账系统业务类型编号",
			name: "localBusinessType",
			rawName: "LOCAL_BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		STATISTICS_TYPE: {
			nullable: "N",
			isPk: false,
			description: "财务渠道分类",
			name: "statisticsType",
			rawName: "STATISTICS_TYPE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

