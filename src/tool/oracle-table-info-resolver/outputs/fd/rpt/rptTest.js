exports.rptTest = {
	name: "rptTest",
	rawName: "RPT_TEST",
	columns: {
		PROFIT: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "profit",
			rawName: "PROFIT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANNEL_NO: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

