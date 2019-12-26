exports.fdTradeOrderMainUn = {
	name: "fdTradeOrderMainUn",
	rawName: "FD_TRADE_ORDER_MAIN_UN",
	columns: {
		fdOrderId: {
			nullable: false,
			isPk: false,
			description: "主键",
			name: "fdOrderId",
			rawName: "FD_ORDER_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		downChannelNo: {
			nullable: false,
			isPk: false,
			description: "下游渠道编号",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		downAccountId: {
			nullable: false,
			isPk: false,
			description: "下游扣款账号",
			name: "downAccountId",
			rawName: "DOWN_ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		downCompanyId: {
			nullable: false,
			isPk: false,
			description: "下游公司编号",
			name: "downCompanyId",
			rawName: "DOWN_COMPANY_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		tradeOrderNo: {
			nullable: false,
			isPk: false,
			description: "交易系统订单号",
			name: "tradeOrderNo",
			rawName: "TRADE_ORDER_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		extOrderNo: {
			nullable: false,
			isPk: false,
			description: "扩展订单号交易系统供",
			name: "extOrderNo",
			rawName: "EXT_ORDER_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		orderSource: {
			nullable: false,
			isPk: false,
			description: "订单来源（系统编号）",
			name: "orderSource",
			rawName: "ORDER_SOURCE",
			type: {
				name: "number",
				length: 20
			}
		},
		createTime: {
			nullable: false,
			isPk: false,
			description: "订单添加时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		orderTime: {
			nullable: false,
			isPk: false,
			description: "订单日期(交易系统下单日期)",
			name: "orderTime",
			rawName: "ORDER_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		businessType: {
			nullable: false,
			isPk: false,
			description: "业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		totalFace: {
			nullable: false,
			isPk: false,
			description: "总面值",
			name: "totalFace",
			rawName: "TOTAL_FACE",
			type: {
				name: "number",
				length: 18
			}
		},
		downOrderAmount: {
			nullable: false,
			isPk: false,
			description: "下游销售金额",
			name: "downOrderAmount",
			rawName: "DOWN_ORDER_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		upPhoneAmount: {
			nullable: false,
			isPk: false,
			description: "上游手机成本",
			name: "upPhoneAmount",
			rawName: "UP_PHONE_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		upBillAmount: {
			nullable: false,
			isPk: false,
			description: "上游预存话费成本",
			name: "upBillAmount",
			rawName: "UP_BILL_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		downOrderRefund: {
			nullable: false,
			isPk: false,
			description: "下游销售退款",
			name: "downOrderRefund",
			rawName: "DOWN_ORDER_REFUND",
			type: {
				name: "number",
				length: 20
			}
		},
		upPhoneRefund: {
			nullable: false,
			isPk: false,
			description: "上游手机成本退款",
			name: "upPhoneRefund",
			rawName: "UP_PHONE_REFUND",
			type: {
				name: "number",
				length: 20
			}
		},
		upBillRefund: {
			nullable: false,
			isPk: false,
			description: "上游预存话费成本退款",
			name: "upBillRefund",
			rawName: "UP_BILL_REFUND",
			type: {
				name: "number",
				length: 20
			}
		},
		userId: {
			nullable: false,
			isPk: false,
			description: "用户id",
			name: "userId",
			rawName: "USER_ID",
			type: {
				name: "varchar2",
				length: null
			}
		},
		phoneNo: {
			nullable: false,
			isPk: false,
			description: "合约机号码",
			name: "phoneNo",
			rawName: "PHONE_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		userName: {
			nullable: false,
			isPk: false,
			description: "用户姓名",
			name: "userName",
			rawName: "USER_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		idCardNo: {
			nullable: false,
			isPk: false,
			description: "用户身份证号",
			name: "idCardNo",
			rawName: "ID_CARD_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		recAddress: {
			nullable: false,
			isPk: false,
			description: "用户收货地址",
			name: "recAddress",
			rawName: "REC_ADDRESS",
			type: {
				name: "varchar2",
				length: null
			}
		},
		saleUser: {
			nullable: false,
			isPk: false,
			description: "销售客服",
			name: "saleUser",
			rawName: "SALE_USER",
			type: {
				name: "varchar2",
				length: null
			}
		},
		hasInvoice: {
			nullable: false,
			isPk: false,
			description: "是否开票，0.已开，1未开",
			name: "hasInvoice",
			rawName: "HAS_INVOICE",
			type: {
				name: "number",
				length: null
			}
		}
	}
};

