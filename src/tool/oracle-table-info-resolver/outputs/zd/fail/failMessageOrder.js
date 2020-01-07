exports.failMessageOrder = {
	name: "failMessageOrder",
	rawName: "FAIL_MESSAGE_ORDER",
	columns: {
		sendOrderNo: {
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
		phone: {
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
		dealStatus: {
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
		orderNo: {
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
		createTime: {
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
		message: {
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

