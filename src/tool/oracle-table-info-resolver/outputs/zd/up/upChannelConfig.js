exports.upChannelConfig = {
	name: "upChannelConfig",
	rawName: "UP_CHANNEL_CONFIG",
	columns: {
		RECHARGE_URL: {
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
		QUERY_URL: {
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
		NOTIFY_URL: {
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
		RECHARGE_SCRIPT: {
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
		QUERY_SCRIPT: {
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
		API_UID: {
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
		API_KEY: {
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
		PRODUCT_QUERY_URL: {
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
		MOBILE_QUERY_URL: {
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
		ID: {
			nullable: false,
			isPk: true,
			description: "主键编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		NOTIFY_SCRIPT: {
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
		DELIVERY_CODE: {
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
		QUERY_CODE: {
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
		NO_ORDER_RETRY: {
			nullable: true,
			isPk: false,
			description: "订单不存在重: 0-重试 1-不重试",
			name: "noOrderRetry",
			rawName: "NO_ORDER_RETRY",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		CHANNEL_NAME: {
			nullable: true,
			isPk: false,
			description: "",
			name: "channelName",
			rawName: "CHANNEL_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		UPDATE_USER: {
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
		UPDATE_TIME: {
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

