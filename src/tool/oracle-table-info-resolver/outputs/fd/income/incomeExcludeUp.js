exports.incomeExcludeUp = {
	name: "incomeExcludeUp",
	rawName: "INCOME_EXCLUDE_UP",
	columns: {
		ID: {
			nullable: "N",
			isPk: true,
			description: "编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

