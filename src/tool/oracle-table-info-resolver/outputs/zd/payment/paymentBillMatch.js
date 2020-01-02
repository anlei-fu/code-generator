exports.paymentBillMatch = {
	name: "paymentBillMatch",
	rawName: "PAYMENT_BILL_MATCH",
	columns: {
		ID: {
			nullable: false,
			isPk: false,
			description: "编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		ORDER_NO: {
			nullable: true,
			isPk: false,
			description: "订单号 (交易与退款)",
			name: "orderNo",
			rawName: "ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		APPID: {
			nullable: true,
			isPk: false,
			description: "商户账号",
			name: "appid",
			rawName: "APPID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ORDER_TIME: {
			nullable: true,
			isPk: false,
			description: "订单时间",
			name: "orderTime",
			rawName: "ORDER_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		ORDER_PRICE: {
			nullable: true,
			isPk: false,
			description: "订单金额",
			name: "orderPrice",
			rawName: "ORDER_PRICE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		RECEIPT: {
			nullable: true,
			isPk: false,
			description: "实际收款",
			name: "receipt",
			rawName: "RECEIPT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		STATUS: {
			nullable: true,
			isPk: false,
			description: "订单状态",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		SERVER_FEE: {
			nullable: true,
			isPk: false,
			description: "手续费",
			name: "serverFee",
			rawName: "SERVER_FEE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		FINISH_TIME: {
			nullable: true,
			isPk: false,
			description: "完成时间",
			name: "finishTime",
			rawName: "FINISH_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		TASK_ID: {
			nullable: true,
			isPk: false,
			description: "下载任务id",
			name: "taskId",
			rawName: "TASK_ID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		BILL_DATE: {
			nullable: true,
			isPk: false,
			description: "账单日期",
			name: "billDate",
			rawName: "BILL_DATE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PAY_TYPE: {
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
		STATUS_LAB: {
			nullable: true,
			isPk: false,
			description: "",
			name: "statusLab",
			rawName: "STATUS_LAB",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	},
	description: "支付对账表"
};

