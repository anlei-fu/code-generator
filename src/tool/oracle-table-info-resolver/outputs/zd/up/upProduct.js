exports.upProduct = {
	name: "upProduct",
	rawName: "UP_PRODUCT",
	columns: {
		PRODUCT_ID: {
			nullable: false,
			isPk: false,
			description: "产品编号",
			name: "productId",
			rawName: "PRODUCT_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		UP_CHANNEL_ID: {
			nullable: false,
			isPk: false,
			description: "渠道ID",
			name: "upChannelId",
			rawName: "UP_CHANNEL_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		PRODUCT_NO: {
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
		BUSINESS_TYPE: {
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
		CARRIER_NO: {
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
		PROVINCE_NO: {
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
		CITY_NO: {
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
		FACE_FEE: {
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
		DEDUCT_PRICE: {
			nullable: false,
			isPk: false,
			description: "扣款价格",
			name: "deductPrice",
			rawName: "DEDUCT_PRICE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		STATUS: {
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
		REMARK: {
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
		CREATE_USER: {
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
		UPDATE_USER: {
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
		UPDATE_TIME: {
			nullable: true,
			isPk: false,
			description: "更新时间",
			name: "updateTime",
			rawName: "UPDATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		REAL_PRICE: {
			nullable: true,
			isPk: false,
			description: "实际价格",
			name: "realPrice",
			rawName: "REAL_PRICE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		NORMAL_PRICE: {
			nullable: false,
			isPk: false,
			description: "标准价格",
			name: "normalPrice",
			rawName: "NORMAL_PRICE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	},
	description: "上游产品表"
};

