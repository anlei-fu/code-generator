exports.dailyAccountSnapshot = {
	name: "dailyAccountSnapshot",
	rawName: "DAILY_ACCOUNT_SNAPSHOT",
	columns: {
		CREATE_TIME: {
			nullable: false,
			isPk: false,
			description: "快照时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		DOWN_CHANNEL_NO: {
			nullable: false,
			isPk: false,
			description: "下游渠道编号",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		CARD_TYPE: {
			nullable: false,
			isPk: false,
			description: "业务类型",
			name: "cardType",
			rawName: "CARD_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		PAY_TYPE: {
			nullable: false,
			isPk: false,
			description: "支付方式",
			name: "payType",
			rawName: "PAY_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		BUSINESS_TYPE: {
			nullable: true,
			isPk: false,
			description: "业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		PRODUCT_FACE: {
			nullable: true,
			isPk: false,
			description: "订单面值",
			name: "productFace",
			rawName: "PRODUCT_FACE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		ALL_PRICE: {
			nullable: false,
			isPk: false,
			description: "订单总金额",
			name: "allPrice",
			rawName: "ALL_PRICE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		ALL_ORDER_CNTR: {
			nullable: false,
			isPk: false,
			description: "订单总笔数",
			name: "allOrderCntr",
			rawName: "ALL_ORDER_CNTR",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		SUCCESS_MONEY: {
			nullable: false,
			isPk: false,
			description: "成功支付金额",
			name: "successMoney",
			rawName: "SUCCESS_MONEY",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		SUCCESS_ORDER_CNTR: {
			nullable: false,
			isPk: false,
			description: "成功支付笔数",
			name: "successOrderCntr",
			rawName: "SUCCESS_ORDER_CNTR",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		SUCCESS_COUPON: {
			nullable: true,
			isPk: false,
			description: "成功优惠券金额",
			name: "successCoupon",
			rawName: "SUCCESS_COUPON",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		SERVICE_FEE: {
			nullable: false,
			isPk: false,
			description: "服务费",
			name: "serviceFee",
			rawName: "SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		REFUND_MONEY: {
			nullable: false,
			isPk: false,
			description: "退款金额",
			name: "refundMoney",
			rawName: "REFUND_MONEY",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		REFUND_ORDER_CNTR: {
			nullable: false,
			isPk: false,
			description: "退款笔数",
			name: "refundOrderCntr",
			rawName: "REFUND_ORDER_CNTR",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		LOSS_SERVICE: {
			nullable: false,
			isPk: false,
			description: "退款亏损服务费",
			name: "lossService",
			rawName: "LOSS_SERVICE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		DEVICE_TYPE: {
			nullable: true,
			isPk: false,
			description: "终端类型",
			name: "deviceType",
			rawName: "DEVICE_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		ALL_USER_CNT: {
			nullable: true,
			isPk: false,
			description: "总用户数",
			name: "allUserCnt",
			rawName: "ALL_USER_CNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		NEW_USER_CNT: {
			nullable: true,
			isPk: false,
			description: "新用户数",
			name: "newUserCnt",
			rawName: "NEW_USER_CNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		OLD_USER_CNT: {
			nullable: true,
			isPk: false,
			description: "老用户数",
			name: "oldUserCnt",
			rawName: "OLD_USER_CNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		CARRIER_NO: {
			nullable: true,
			isPk: false,
			description: "运营商",
			name: "carrierNo",
			rawName: "CARRIER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PROVINCE_NO: {
			nullable: true,
			isPk: false,
			description: "省份",
			name: "provinceNo",
			rawName: "PROVINCE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		RECHARGE_MODE: {
			nullable: true,
			isPk: false,
			description: "",
			name: "rechargeMode",
			rawName: "RECHARGE_MODE",
			type: {
				name: "NUMBER",
				length: ""
			}
		}
	},
	description: ""
};

