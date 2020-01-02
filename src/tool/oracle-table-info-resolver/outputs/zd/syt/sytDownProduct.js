exports.sytDownProduct = {
	name: "sytDownProduct",
	rawName: "SYT_DOWN_PRODUCT",
	columns: {
		CHANNEL_NO: {
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
		PID: {
			nullable: false,
			isPk: false,
			description: "产品ID",
			name: "pid",
			rawName: "PID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PRODUCT_NO: {
			nullable: false,
			isPk: false,
			description: "产品编码",
			name: "productNo",
			rawName: "PRODUCT_NO",
			type: {
				name: "VARCHAR2",
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
			description: "省份;Q:全国",
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
			description: "城市;:全市",
			name: "cityNo",
			rawName: "CITY_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PRODUCT_FACE: {
			nullable: true,
			isPk: false,
			description: "产品原价",
			name: "productFace",
			rawName: "PRODUCT_FACE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		SALE_PRICE: {
			nullable: true,
			isPk: false,
			description: "显示售价",
			name: "salePrice",
			rawName: "SALE_PRICE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		REAL_PRICE: {
			nullable: true,
			isPk: false,
			description: "实际售价",
			name: "realPrice",
			rawName: "REAL_PRICE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		STATUS: {
			nullable: false,
			isPk: false,
			description: "状态;:启用;:禁用",
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
		CREATED_USER: {
			nullable: true,
			isPk: false,
			description: "创建者",
			name: "createdUser",
			rawName: "CREATED_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CREATED_TIME: {
			nullable: false,
			isPk: false,
			description: "创建时间",
			name: "createdTime",
			rawName: "CREATED_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		EDIT_USER: {
			nullable: true,
			isPk: false,
			description: "更新人",
			name: "editUser",
			rawName: "EDIT_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		EDIT_TIME: {
			nullable: true,
			isPk: false,
			description: "更新时间",
			name: "editTime",
			rawName: "EDIT_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	},
	description: "下游渠道产品表"
};

