exports.tempOrder = {
	name: "tempOrder",
	rawName: "TEMP_ORDER",
	columns: {
		TYPE: {
			nullable: false,
			isPk: false,
			description: ": 输入订单, :差异订单",
			name: "type",
			rawName: "TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		ORDER_NO: {
			nullable: true,
			isPk: false,
			description: "",
			name: "orderNo",
			rawName: "ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	},
	description: ""
};

