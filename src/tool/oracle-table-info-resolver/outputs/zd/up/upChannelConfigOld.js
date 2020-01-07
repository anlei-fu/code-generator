exports.upChannelConfigOld = {
	name: "upChannelConfigOld",
	rawName: "UP_CHANNEL_CONFIG_OLD",
	columns: {
		rechargeUrl: {
			nullable: false,
			isPk: false,
			description: "充值地址",
			name: "rechargeUrl",
			rawName: "RECHARGE_URL",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		queryUrl: {
			nullable: false,
			isPk: false,
			description: "查询地址",
			name: "queryUrl",
			rawName: "QUERY_URL",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		notifyUrl: {
			nullable: false,
			isPk: false,
			description: "通知地址",
			name: "notifyUrl",
			rawName: "NOTIFY_URL",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		rechargeScript: {
			nullable: false,
			isPk: false,
			description: "充值脚本",
			name: "rechargeScript",
			rawName: "RECHARGE_SCRIPT",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		queryScript: {
			nullable: false,
			isPk: false,
			description: "查询脚本",
			name: "queryScript",
			rawName: "QUERY_SCRIPT",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		apiUid: {
			nullable: false,
			isPk: false,
			description: "接口id",
			name: "apiUid",
			rawName: "API_UID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		apiKey: {
			nullable: false,
			isPk: false,
			description: "接口Key",
			name: "apiKey",
			rawName: "API_KEY",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		productQueryUrl: {
			nullable: true,
			isPk: false,
			description: "产品查询地址",
			name: "productQueryUrl",
			rawName: "PRODUCT_QUERY_URL",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		mobileQueryUrl: {
			nullable: true,
			isPk: false,
			description: "号段查询地址",
			name: "mobileQueryUrl",
			rawName: "MOBILE_QUERY_URL",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		downChannelNo: {
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
		id: {
			nullable: false,
			isPk: false,
			description: "主键编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		notifyScript: {
			nullable: true,
			isPk: false,
			description: "通知脚本",
			name: "notifyScript",
			rawName: "NOTIFY_SCRIPT",
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
		deliveryCode: {
			nullable: true,
			isPk: false,
			description: "发货机器人标识",
			name: "deliveryCode",
			rawName: "DELIVERY_CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		queryCode: {
			nullable: true,
			isPk: false,
			description: "查询机器人标识",
			name: "queryCode",
			rawName: "QUERY_CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		updateUser: {
			nullable: true,
			isPk: false,
			description: "",
			name: "updateUser",
			rawName: "UPDATE_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		updateTime: {
			nullable: true,
			isPk: false,
			description: "",
			name: "updateTime",
			rawName: "UPDATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	},
	description: "上游配置表"
};

