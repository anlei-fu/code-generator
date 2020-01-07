exports.orderMainExt = {
	name: "orderMainExt",
	rawName: "ORDER_MAIN_EXT",
	columns: {
		orderNo: {
			nullable: false,
			isPk: false,
			description: "订单号",
			name: "orderNo",
			rawName: "ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		recordId: {
			nullable: false,
			isPk: true,
			description: "记录编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		accountType: {
			nullable: false,
			isPk: false,
			description: "帐号类型",
			name: "accountType",
			rawName: "ACCOUNT_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		payType: {
			nullable: true,
			isPk: false,
			description: "支付类型",
			name: "payType",
			rawName: "PAY_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		payMoney: {
			nullable: false,
			isPk: false,
			description: "支付金额",
			name: "payMoney",
			rawName: "PAY_MONEY",
			type: {
				name: "NUMBER",
				length: "15"
			}
		},
		serviceFee: {
			nullable: false,
			isPk: false,
			description: "手续费",
			name: "serviceFee",
			rawName: "SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: "15"
			}
		},
		createTime: {
			nullable: false,
			isPk: false,
			description: "创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	},
	description: "订单扩张表"
};

