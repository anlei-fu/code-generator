exports.paymentBillMatch = {
	name: "paymentBillMatch",
	rawName: "PAYMENT_BILL_MATCH",
	columns: {
		id: {
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
		orderNo: {
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
		appid: {
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
		orderTime: {
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
		orderPrice: {
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
		receipt: {
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
		status: {
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
		serverFee: {
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
		finishTime: {
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
		taskId: {
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
		billDate: {
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
		statusLab: {
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

