exports.failMessageOrder = {
	name: "failMessageOrder",
	rawName: "FAIL_MESSAGE_ORDER",
	columns: {
		SEND_ORDER_NO: {
			nullable: true,
			isPk: false,
			description: "",
			name: "sendOrderNo",
			rawName: "SEND_ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PHONE: {
			nullable: false,
			isPk: false,
			description: "",
			name: "phone",
			rawName: "PHONE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		DEAL_STATUS: {
			nullable: false,
			isPk: false,
			description: "",
			name: "dealStatus",
			rawName: "DEAL_STATUS",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		ORDER_NO: {
			nullable: false,
			isPk: false,
			description: "",
			name: "orderNo",
			rawName: "ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CREATE_TIME: {
			nullable: false,
			isPk: false,
			description: "",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		MESSAGE: {
			nullable: false,
			isPk: false,
			description: "",
			name: "message",
			rawName: "MESSAGE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	},
	description: ""
};

