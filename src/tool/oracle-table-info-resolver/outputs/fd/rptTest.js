exports.rptTest = {
	name: "rptTest",
	rawName: "RPT_TEST",
	columns: {
		profit: {
			nullable: false,
			isPk: false,
			description: "",
			name: "profit",
			rawName: "PROFIT",
			type: {
				name: "number",
				length: 20
			}
		},
		channelNo: {
			nullable: false,
			isPk: false,
			description: "",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		}
	}
};

