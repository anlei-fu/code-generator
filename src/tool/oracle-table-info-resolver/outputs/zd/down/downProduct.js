exports.downProduct = {
	name: "downProduct",
	rawName: "DOWN_PRODUCT",
	columns: {
		channelNo: {
			nullable: false,
			isPk: false,
			description: "渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		productId: {
			nullable: false,
			isPk: true,
			description: "产品编号",
			name: "productId",
			rawName: "PRODUCT_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		productNo: {
			nullable: true,
			isPk: false,
			description: "产品编码",
			name: "productNo",
			rawName: "PRODUCT_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		productName: {
			nullable: false,
			isPk: false,
			description: "产品名称(运营使用)",
			name: "productName",
			rawName: "PRODUCT_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		productTitle: {
			nullable: true,
			isPk: false,
			description: "产品标题(可HTML)",
			name: "productTitle",
			rawName: "PRODUCT_TITLE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		businessType: {
			nullable: false,
			isPk: false,
			description: "业务类型 ",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		carrierNo: {
			nullable: false,
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
			nullable: false,
			isPk: false,
			description: "省: QG-全国",
			name: "provinceNo",
			rawName: "PROVINCE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		cityNo: {
			nullable: false,
			isPk: false,
			description: "城: *-全省",
			name: "cityNo",
			rawName: "CITY_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		faceFee: {
			nullable: false,
			isPk: false,
			description: "面值",
			name: "faceFee",
			rawName: "FACE_FEE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		normalPrice: {
			nullable: false,
			isPk: false,
			description: "标准价格(话费和面值相当,流量1024=30元)",
			name: "normalPrice",
			rawName: "NORMAL_PRICE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		actualPrice: {
			nullable: false,
			isPk: false,
			description: "支付价格",
			name: "actualPrice",
			rawName: "ACTUAL_PRICE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		needPay: {
			nullable: false,
			isPk: false,
			description: "需要支: 0-需要 1-不需要",
			name: "needPay",
			rawName: "NEED_PAY",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		hasActivity: {
			nullable: false,
			isPk: false,
			description: "是否有活: 0-是 1-否",
			name: "hasActivity",
			rawName: "HAS_ACTIVITY",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		activityId: {
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
		needVcode: {
			nullable: false,
			isPk: false,
			description: "需要验证: 0-需要 1-不需要",
			name: "needVcode",
			rawName: "NEED_VCODE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		needRepeat: {
			nullable: true,
			isPk: false,
			description: "订单不存在是否重复发货",
			name: "needRepeat",
			rawName: "NEED_REPEAT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		priority: {
			nullable: false,
			isPk: false,
			description: "权: 0-不显示(前端显示用, 值越大,优先级越高,显示越靠前)",
			name: "priority",
			rawName: "PRIORITY",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		status: {
			nullable: false,
			isPk: false,
			description: "状: 0-启用 1-禁用",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		remark: {
			nullable: true,
			isPk: false,
			description: "备注",
			name: "remark",
			rawName: "REMARK",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		createUser: {
			nullable: true,
			isPk: false,
			description: "创建人",
			name: "createUser",
			rawName: "CREATE_USER",
			type: {
				name: "VARCHAR2",
				length: ""
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
		},
		updateUser: {
			nullable: true,
			isPk: false,
			description: "更新人",
			name: "updateUser",
			rawName: "UPDATE_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		updateTime: {
			nullable: false,
			isPk: false,
			description: "更新时间",
			name: "updateTime",
			rawName: "UPDATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		productType: {
			nullable: true,
			isPk: false,
			description: "业务分: 1-话费 2-流量 3-视频会员 4-加油卡 5-固话(前端显示用,区分Tab)",
			name: "productType",
			rawName: "PRODUCT_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		productSummary: {
			nullable: true,
			isPk: false,
			description: "产品简要说明(可HTML)",
			name: "productSummary",
			rawName: "PRODUCT_SUMMARY",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		productDetail: {
			nullable: true,
			isPk: false,
			description: "产品详细说明(可HTML)",
			name: "productDetail",
			rawName: "PRODUCT_DETAIL",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		productTip: {
			nullable: true,
			isPk: false,
			description: "产品提示",
			name: "productTip",
			rawName: "PRODUCT_TIP",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		flowType: {
			nullable: true,
			isPk: false,
			description: "流量类: 1-直充 2-个性",
			name: "flowType",
			rawName: "FLOW_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		rechargeMode: {
			nullable: true,
			isPk: false,
			description: "充值模: 0-快充 1-8点慢充 3-普通慢充",
			name: "rechargeMode",
			rawName: "RECHARGE_MODE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		needRecharge: {
			nullable: true,
			isPk: false,
			description: "是否需要充值",
			name: "needRecharge",
			rawName: "NEED_RECHARGE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		isRecommend: {
			nullable: true,
			isPk: false,
			description: "是否推: 0-是 1-否",
			name: "isRecommend",
			rawName: "IS_RECOMMEND",
			type: {
				name: "NUMBER",
				length: ""
			}
		}
	},
	description: "下游产品表"
};

