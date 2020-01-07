exports.linkProductInfo = {
	name: "linkProductInfo",
	rawName: "LINK_PRODUCT_INFO",
	columns: {
		linkId: {
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
		name: {
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
		title: {
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
		linkUrl: {
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
		linkType: {
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
		carrierName: {
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
		provinceName: {
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
		cityName: {
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
		status: {
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

