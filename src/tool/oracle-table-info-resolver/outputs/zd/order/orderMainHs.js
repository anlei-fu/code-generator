exports.orderMainHs = {
	name: "orderMainHs",
	rawName: "ORDER_MAIN_HS",
	columns: {
		PARTNER_ORDER_NO: {
			nullable: true,
			isPk: false,
			description: "中大订单号",
			name: "partnerOrderNo",
			rawName: "PARTNER_ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ORDER_NO: {
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
		PAY_TYPE: {
			nullable: false,
			isPk: false,
			description: "支付类型1.支付宝2微信3龙支付",
			name: "payType",
			rawName: "PAY_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		PRODUCT_NAME: {
			nullable: false,
			isPk: false,
			description: "产品名称",
			name: "productName",
			rawName: "PRODUCT_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		MOBILE: {
			nullable: false,
			isPk: false,
			description: "充值账号",
			name: "mobile",
			rawName: "MOBILE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ACCOUNT: {
			nullable: false,
			isPk: false,
			description: "中大用户名/建行用户编号+手机类型(1 iphone,2 安卓)",
			name: "account",
			rawName: "ACCOUNT",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PRODUCT_ID: {
			nullable: false,
			isPk: false,
			description: "产品编号",
			name: "productId",
			rawName: "PRODUCT_ID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		FACE: {
			nullable: false,
			isPk: false,
			description: "充值面值",
			name: "face",
			rawName: "FACE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		PRICE: {
			nullable: false,
			isPk: false,
			description: "产品金额(总卖价)",
			name: "price",
			rawName: "PRICE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ZD_ORDER_TIME: {
			nullable: false,
			isPk: false,
			description: "中大订单时间",
			name: "zdOrderTime",
			rawName: "ZD_ORDER_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		CARD_TYPE: {
			nullable: false,
			isPk: false,
			description: "充值类型1-话费2-流量3-宽带续费",
			name: "cardType",
			rawName: "CARD_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		FLOW_TYPE: {
			nullable: true,
			isPk: false,
			description: "流量类型",
			name: "flowType",
			rawName: "FLOW_TYPE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PAY_STATUS: {
			nullable: false,
			isPk: false,
			description: "支付状: 30-正在支付90-失败0-成功",
			name: "payStatus",
			rawName: "PAY_STATUS",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		ORDER_STATUS: {
			nullable: false,
			isPk: false,
			description: "订单状:10-无需 20-等待充值30-正在充值90-失败0-成功",
			name: "orderStatus",
			rawName: "ORDER_STATUS",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		REFUND_STATE: {
			nullable: false,
			isPk: false,
			description: "退款状态10-无需20-等待退款30-正在退款90-失败0-成功",
			name: "refundState",
			rawName: "REFUND_STATE",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		CREATE_TIME: {
			nullable: false,
			isPk: false,
			description: "创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		REFUND_TIME: {
			nullable: true,
			isPk: false,
			description: "退款时间",
			name: "refundTime",
			rawName: "REFUND_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		PAY_TIME: {
			nullable: true,
			isPk: false,
			description: "支付完成时间",
			name: "payTime",
			rawName: "PAY_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		FINISH_TIME: {
			nullable: true,
			isPk: false,
			description: "订单完成时间",
			name: "finishTime",
			rawName: "FINISH_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		SUC_FACE: {
			nullable: true,
			isPk: false,
			description: "成功面值",
			name: "sucFace",
			rawName: "SUC_FACE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		BUSINESS_TYPE: {
			nullable: false,
			isPk: false,
			description: "业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		COUPONPRICE: {
			nullable: true,
			isPk: false,
			description: "优惠券金额",
			name: "couponprice",
			rawName: "COUPONPRICE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		COUPONID: {
			nullable: true,
			isPk: false,
			description: "优惠券ID",
			name: "couponid",
			rawName: "COUPONID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		COUPONCH: {
			nullable: true,
			isPk: false,
			description: "优惠券渠道",
			name: "couponch",
			rawName: "COUPONCH",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		SERVICE_FEE: {
			nullable: true,
			isPk: false,
			description: "支付手续费",
			name: "serviceFee",
			rawName: "SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		USER_PAYED: {
			nullable: true,
			isPk: false,
			description: "用户支付金额",
			name: "userPayed",
			rawName: "USER_PAYED",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		PAY_NOTIFY_STATE: {
			nullable: true,
			isPk: false,
			description: "支付结果回调状态 10-无需20-等待30-正在90-失败0-成功",
			name: "payNotifyState",
			rawName: "PAY_NOTIFY_STATE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		ORDER_NOTIFY_STATE: {
			nullable: true,
			isPk: false,
			description: "订单状态回调状态 10-无需20-等待30-正在90-失败0-成功",
			name: "orderNotifyState",
			rawName: "ORDER_NOTIFY_STATE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		PAY_NOTIFY_TIME: {
			nullable: true,
			isPk: false,
			description: "支付结果回调时间",
			name: "payNotifyTime",
			rawName: "PAY_NOTIFY_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		ORDER_NOTIFY_TIME: {
			nullable: true,
			isPk: false,
			description: "订单结果回调时间",
			name: "orderNotifyTime",
			rawName: "ORDER_NOTIFY_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		RECEIPT_ACCOUNT_ID: {
			nullable: true,
			isPk: false,
			description: "收款账户编号",
			name: "receiptAccountId",
			rawName: "RECEIPT_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		ERROR_MSG: {
			nullable: true,
			isPk: false,
			description: "错误消息",
			name: "errorMsg",
			rawName: "ERROR_MSG",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		USER_IP: {
			nullable: false,
			isPk: false,
			description: "真实ip",
			name: "userIp",
			rawName: "USER_IP",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PAY_FLOW_ORDER: {
			nullable: true,
			isPk: false,
			description: "支付方流水号",
			name: "payFlowOrder",
			rawName: "PAY_FLOW_ORDER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PAY_USER_ID: {
			nullable: true,
			isPk: false,
			description: "支付用户编号",
			name: "payUserId",
			rawName: "PAY_USER_ID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		COST_PRICE: {
			nullable: true,
			isPk: false,
			description: "实际充值成本",
			name: "costPrice",
			rawName: "COST_PRICE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		NEED_RECHARGE: {
			nullable: true,
			isPk: false,
			description: "是否需要充值话费流量",
			name: "needRecharge",
			rawName: "NEED_RECHARGE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		MANUAL_STATUS: {
			nullable: false,
			isPk: false,
			description: "人工状:10-无需20-等待人工0-成功",
			name: "manualStatus",
			rawName: "MANUAL_STATUS",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		ESALES_COST_PRICE: {
			nullable: false,
			isPk: false,
			description: "18系统成本金额",
			name: "esalesCostPrice",
			rawName: "ESALES_COST_PRICE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		DOWN_CHANNEL_NO: {
			nullable: true,
			isPk: false,
			description: "下游渠道编号",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		RECHARGE_MODE: {
			nullable: true,
			isPk: false,
			description: "充值类型 :快充 :普通慢充",
			name: "rechargeMode",
			rawName: "RECHARGE_MODE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		DEVICE_TYPE: {
			nullable: true,
			isPk: false,
			description: "终端 :直充APP :直充H5 :慢充APP :慢充H5",
			name: "deviceType",
			rawName: "DEVICE_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		IS_NEW_USER: {
			nullable: true,
			isPk: false,
			description: "是否新用户 :是 :否",
			name: "isNewUser",
			rawName: "IS_NEW_USER",
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
		CITY_NO: {
			nullable: true,
			isPk: false,
			description: "城市",
			name: "cityNo",
			rawName: "CITY_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ACTIVITY_ID: {
			nullable: true,
			isPk: false,
			description: "活动ID",
			name: "activityId",
			rawName: "ACTIVITY_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		SERVER_IP: {
			nullable: true,
			isPk: false,
			description: "收单IP",
			name: "serverIp",
			rawName: "SERVER_IP",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CONTACT_PHONE: {
			nullable: true,
			isPk: false,
			description: "联系电话",
			name: "contactPhone",
			rawName: "CONTACT_PHONE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		REAL_NAME: {
			nullable: true,
			isPk: false,
			description: "姓名",
			name: "realName",
			rawName: "REAL_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		SFZ_NO: {
			nullable: true,
			isPk: false,
			description: "身份证编号",
			name: "sfzNo",
			rawName: "SFZ_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	},
	description: "订单主表"
};

