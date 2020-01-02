exports.linkProductInfo = {
	name: "linkProductInfo",
	rawName: "LINK_PRODUCT_INFO",
	columns: {
		LINK_ID: {
			nullable: true,
			isPk: false,
			description: "链接编号",
			name: "linkId",
			rawName: "LINK_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		NAME: {
			nullable: true,
			isPk: false,
			description: "名称",
			name: "name",
			rawName: "NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		TITLE: {
			nullable: true,
			isPk: false,
			description: "标题",
			name: "title",
			rawName: "TITLE",
			type: {
				name: "VARCHAR2",
				length: ""
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
		LINK_URL: {
			nullable: true,
			isPk: false,
			description: "链接路径",
			name: "linkUrl",
			rawName: "LINK_URL",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		LINK_TYPE: {
			nullable: true,
			isPk: false,
			description: "链接位置 :话费 :流量",
			name: "linkType",
			rawName: "LINK_TYPE",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		CARRIER_NAME: {
			nullable: true,
			isPk: false,
			description: "运营商",
			name: "carrierName",
			rawName: "CARRIER_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PROVINCE_NAME: {
			nullable: true,
			isPk: false,
			description: "省份",
			name: "provinceName",
			rawName: "PROVINCE_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CITY_NAME: {
			nullable: true,
			isPk: false,
			description: "城市",
			name: "cityName",
			rawName: "CITY_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		STATUS: {
			nullable: true,
			isPk: false,
			description: "状态",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		}
	},
	description: "链接产品信息"
};

