exports.supBaseProUpScope = {
	name: "supBaseProUpScope",
	rawName: "SUP_BASE_PRO_UP_SCOPE",
	columns: {
		ID: {
			nullable: "N",
			isPk: false,
			description: "限定编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PRO_UP_CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "生产系统限定上游渠道",
			name: "proUpChannelNo",
			rawName: "PRO_UP_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

