exports.orderMainIi = {
	name: "orderMainIi",
	rawName: "ORDER_MAIN_II",
	columns: {
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
		CHANNEL_NO: {
			nullable: true,
			isPk: false,
			description: "下游渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PRODUCT_ID: {
			nullable: true,
			isPk: false,
			description: "下游产品编号",
			name: "productId",
			rawName: "PRODUCT_ID",
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
			description: "地市",
			name: "cityNo",
			rawName: "CITY_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PHONE_NO: {
			nullable: true,
			isPk: false,
			description: "手机号码",
			name: "phoneNo",
			rawName: "PHONE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		FACE_FEE: {
			nullable: true,
			isPk: false,
			description: "面值",
			name: "faceFee",
			rawName: "FACE_FEE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		NORMAL_PRICE: {
			nullable: true,
			isPk: false,
			description: "标准价格",
			name: "normalPrice",
			rawName: "NORMAL_PRICE",
			type: {
				name: "NUMBER",
				length: "16"
			}
		},
		DISCOUNT_PRICE: {
			nullable: true,
			isPk: false,
			description: "折扣价格",
			name: "discountPrice",
			rawName: "DISCOUNT_PRICE",
			type: {
				name: "NUMBER",
				length: "16"
			}
		},
		PRODUCT_NAME: {
			nullable: true,
			isPk: false,
			description: "产品名称",
			name: "productName",
			rawName: "PRODUCT_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PARTNER_ORDER_NO: {
			nullable: true,
			isPk: false,
			description: "下游订单号",
			name: "partnerOrderNo",
			rawName: "PARTNER_ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ORDER_STATUS: {
			nullable: true,
			isPk: false,
			description: "订单状态",
			name: "orderStatus",
			rawName: "ORDER_STATUS",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		SUCC_FACE: {
			nullable: true,
			isPk: false,
			description: "成功面值",
			name: "succFace",
			rawName: "SUCC_FACE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		CREATE_TIME: {
			nullable: true,
			isPk: false,
			description: "创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
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
		NEED_PAY: {
			nullable: false,
			isPk: false,
			description: "是否需要支付(订单支付表)",
			name: "needPay",
			rawName: "NEED_PAY",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		STATUS_STEP: {
			nullable: false,
			isPk: false,
			description: "状态步: 0-完成 1-等待支付 2-等待支付回调 3-等待发货 4-等待发货结果 5-等待通知下游 ",
			name: "statusStep",
			rawName: "STATUS_STEP",
			type: {
				name: "NUMBER",
				length: ""
			}
		}
	},
	description: "订单主表(新)"
};

