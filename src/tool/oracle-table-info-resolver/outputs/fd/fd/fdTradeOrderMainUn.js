exports.fdTradeOrderMainUn = {
	name: "fdTradeOrderMainUn",
	rawName: "FD_TRADE_ORDER_MAIN_UN",
	columns: {
		FD_ORDER_ID: {
			nullable: "N",
			isPk: false,
			description: "主键",
			name: "fdOrderId",
			rawName: "FD_ORDER_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DOWN_CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "下游渠道编号",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		DOWN_ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "下游扣款账号",
			name: "downAccountId",
			rawName: "DOWN_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DOWN_COMPANY_ID: {
			nullable: "N",
			isPk: false,
			description: "下游公司编号",
			name: "downCompanyId",
			rawName: "DOWN_COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TRADE_ORDER_NO: {
			nullable: "N",
			isPk: false,
			description: "交易系统订单号",
			name: "tradeOrderNo",
			rawName: "TRADE_ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		EXT_ORDER_NO: {
			nullable: "N",
			isPk: false,
			description: "扩展订单号交易系统供",
			name: "extOrderNo",
			rawName: "EXT_ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ORDER_SOURCE: {
			nullable: "N",
			isPk: false,
			description: "订单来源（系统编号）",
			name: "orderSource",
			rawName: "ORDER_SOURCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CREATE_TIME: {
			nullable: "N",
			isPk: false,
			description: "订单添加时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		ORDER_TIME: {
			nullable: "N",
			isPk: false,
			description: "订单日期(交易系统下单日期)",
			name: "orderTime",
			rawName: "ORDER_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		BUSINESS_TYPE: {
			nullable: "N",
			isPk: false,
			description: "业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		TOTAL_FACE: {
			nullable: "N",
			isPk: false,
			description: "总面值",
			name: "totalFace",
			rawName: "TOTAL_FACE",
			type: {
				name: "NUMBER",
				length: "18"
			}
		},
		DOWN_ORDER_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "下游销售金额",
			name: "downOrderAmount",
			rawName: "DOWN_ORDER_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_PHONE_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "上游手机成本",
			name: "upPhoneAmount",
			rawName: "UP_PHONE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_BILL_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "上游预存话费成本",
			name: "upBillAmount",
			rawName: "UP_BILL_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DOWN_ORDER_REFUND: {
			nullable: "N",
			isPk: false,
			description: "下游销售退款",
			name: "downOrderRefund",
			rawName: "DOWN_ORDER_REFUND",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_PHONE_REFUND: {
			nullable: "N",
			isPk: false,
			description: "上游手机成本退款",
			name: "upPhoneRefund",
			rawName: "UP_PHONE_REFUND",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_BILL_REFUND: {
			nullable: "N",
			isPk: false,
			description: "上游预存话费成本退款",
			name: "upBillRefund",
			rawName: "UP_BILL_REFUND",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		USER_ID: {
			nullable: "N",
			isPk: false,
			description: "用户id",
			name: "userId",
			rawName: "USER_ID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PHONE_NO: {
			nullable: "N",
			isPk: false,
			description: "合约机号码",
			name: "phoneNo",
			rawName: "PHONE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		USER_NAME: {
			nullable: "N",
			isPk: false,
			description: "用户姓名",
			name: "userName",
			rawName: "USER_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ID_CARD_NO: {
			nullable: "N",
			isPk: false,
			description: "用户身份证号",
			name: "idCardNo",
			rawName: "ID_CARD_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		REC_ADDRESS: {
			nullable: "N",
			isPk: false,
			description: "用户收货地址",
			name: "recAddress",
			rawName: "REC_ADDRESS",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		SALE_USER: {
			nullable: "N",
			isPk: false,
			description: "销售客服",
			name: "saleUser",
			rawName: "SALE_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		HAS_INVOICE: {
			nullable: "N",
			isPk: false,
			description: "是否开票，0.已开，1未开",
			name: "hasInvoice",
			rawName: "HAS_INVOICE",
			type: {
				name: "NUMBER",
				length: ""
			}
		}
	}
};

