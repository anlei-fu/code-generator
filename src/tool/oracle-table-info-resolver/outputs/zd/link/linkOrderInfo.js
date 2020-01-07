exports.linkOrderInfo = {
	name: "linkOrderInfo",
	rawName: "LINK_ORDER_INFO",
	columns: {
		requestId: {
			nullable: true,
			isPk: false,
			description: "请求编号",
			name: "requestId",
			rawName: "REQUEST_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		linkId: {
			nullable: true,
			isPk: false,
			description: "链接ID",
			name: "linkId",
			rawName: "LINK_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		phoneNo: {
			nullable: true,
			isPk: false,
			description: "手机号码",
			name: "phoneNo",
			rawName: "PHONE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		requestTime: {
			nullable: true,
			isPk: false,
			description: "请求时间",
			name: "requestTime",
			rawName: "REQUEST_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	},
	description: "链接请求记录"
};
