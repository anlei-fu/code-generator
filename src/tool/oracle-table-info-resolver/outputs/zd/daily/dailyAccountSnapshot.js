exports.dailyAccountSnapshot = {
	name: "dailyAccountSnapshot",
	rawName: "DAILY_ACCOUNT_SNAPSHOT",
	columns: {
		createTime: {
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
		downChannelNo: {
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
		cardType: {
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
		payType: {
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
		businessType: {
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
		productFace: {
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
		allPrice: {
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
		allOrderCntr: {
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
		successMoney: {
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
		successOrderCntr: {
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
		successCoupon: {
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
		serviceFee: {
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
		refundMoney: {
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
		refundOrderCntr: {
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
		lossService: {
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
		deviceType: {
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
		allUserCnt: {
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
		newUserCnt: {
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
		oldUserCnt: {
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
		carrierNo: {
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
		provinceNo: {
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
		rechargeMode: {
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

