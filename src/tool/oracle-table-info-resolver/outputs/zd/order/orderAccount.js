exports.orderAccount = {
	name: "orderAccount",
	rawName: "ORDER_ACCOUNT",
	columns: {
		DOWN_CHANNEL_NO: {
			nullable: true,
			isPk: false,
			description: "渠道编号",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ACCOUNT_NO: {
			nullable: true,
			isPk: false,
			description: "账户名",
			name: "accountNo",
			rawName: "ACCOUNT_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CREATED_TIME: {
			nullable: true,
			isPk: false,
			description: "创建时间",
			name: "createdTime",
			rawName: "CREATED_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	},
	description: "订单用户表"
};

