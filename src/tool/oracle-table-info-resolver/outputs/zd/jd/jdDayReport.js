exports.jdDayReport = {
	name: "jdDayReport",
	rawName: "JD_DAY_REPORT",
	columns: {
		CREATE_TIME: {
			nullable: true,
			isPk: false,
			description: "报表生成时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		STATISTICS_TIME: {
			nullable: true,
			isPk: false,
			description: "统计日期",
			name: "statisticsTime",
			rawName: "STATISTICS_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		PAY_TYPE: {
			nullable: true,
			isPk: false,
			description: "京东支付的子类型",
			name: "payType",
			rawName: "PAY_TYPE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PAY_COUNT: {
			nullable: true,
			isPk: false,
			description: "支付总笔数",
			name: "payCount",
			rawName: "PAY_COUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		PAY_FEE: {
			nullable: true,
			isPk: false,
			description: "支付总金额",
			name: "payFee",
			rawName: "PAY_FEE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		SERVICE_FEE: {
			nullable: true,
			isPk: false,
			description: "总手续费",
			name: "serviceFee",
			rawName: "SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		REFUND_COUNT: {
			nullable: true,
			isPk: false,
			description: "退款笔数",
			name: "refundCount",
			rawName: "REFUND_COUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		COUPON_FEE: {
			nullable: true,
			isPk: false,
			description: "优惠券金额",
			name: "couponFee",
			rawName: "COUPON_FEE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		NEW_USER: {
			nullable: true,
			isPk: false,
			description: "新用户统计",
			name: "newUser",
			rawName: "NEW_USER",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		NUSER_REFUND_COUNT: {
			nullable: true,
			isPk: false,
			description: "新用户退款笔数",
			name: "nuserRefundCount",
			rawName: "NUSER_REFUND_COUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		REFUND_FEE: {
			nullable: true,
			isPk: false,
			description: "退款金额",
			name: "refundFee",
			rawName: "REFUND_FEE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		REFUND_SERVICE_FEE: {
			nullable: true,
			isPk: false,
			description: "退款亏损手续费",
			name: "refundServiceFee",
			rawName: "REFUND_SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		DOWN_CHANNEL: {
			nullable: true,
			isPk: false,
			description: "",
			name: "downChannel",
			rawName: "DOWN_CHANNEL",
			type: {
				name: "NUMBER",
				length: ""
			}
		}
	},
	description: "京东日报统计"
};

