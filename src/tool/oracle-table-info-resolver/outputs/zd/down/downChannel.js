exports.downChannel = {
	name: "downChannel",
	rawName: "DOWN_CHANNEL",
	columns: {
		DOWN_CHANNEL_NO: {
			nullable: false,
			isPk: false,
			description: "下游渠道编号",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANNEL_NAME: {
			nullable: false,
			isPk: false,
			description: "渠道名称",
			name: "channelName",
			rawName: "CHANNEL_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		STATUS: {
			nullable: false,
			isPk: false,
			description: "状态 0-启用 1-禁用",
			name: "status",
			rawName: "STATUS",
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
		NOTIFY_URL: {
			nullable: true,
			isPk: false,
			description: "通知地址",
			name: "notifyUrl",
			rawName: "NOTIFY_URL",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CP_NAME: {
			nullable: true,
			isPk: false,
			description: "cp名称",
			name: "cpName",
			rawName: "CP_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PRODUCT_LINE: {
			nullable: true,
			isPk: false,
			description: "产品线",
			name: "productLine",
			rawName: "PRODUCT_LINE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		DEAIL_URL: {
			nullable: true,
			isPk: false,
			description: "订单详情页面",
			name: "deailUrl",
			rawName: "DEAIL_URL",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		NEED_RECHARGE_TEL: {
			nullable: true,
			isPk: false,
			description: "是否需要充值话费  0-需要 1-不需要(其他业务类型)",
			name: "needRechargeTel",
			rawName: "NEED_RECHARGE_TEL",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		NEED_RECHAGRE_FLOW: {
			nullable: true,
			isPk: false,
			description: "是否需要充值流量  0-需要 1-不需要",
			name: "needRechagreFlow",
			rawName: "NEED_RECHAGRE_FLOW",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		NEED_NOTITY: {
			nullable: true,
			isPk: false,
			description: "是否需要通知  0-需要 1-不需要",
			name: "needNotity",
			rawName: "NEED_NOTITY",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		NEED_DETAIL_FILE: {
			nullable: true,
			isPk: false,
			description: "生成对账文件  0-需要 1-不需要",
			name: "needDetailFile",
			rawName: "NEED_DETAIL_FILE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		SUPPORT_COUPON: {
			nullable: true,
			isPk: false,
			description: "支持优惠: 0-是 1-否",
			name: "supportCoupon",
			rawName: "SUPPORT_COUPON",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		SUPPORT_ACTIVITY: {
			nullable: true,
			isPk: false,
			description: "支持活: 0-是 1-否",
			name: "supportActivity",
			rawName: "SUPPORT_ACTIVITY",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		CLOSE_EXPIRE: {
			nullable: true,
			isPk: false,
			description: "关闭超时(分钟)",
			name: "closeExpire",
			rawName: "CLOSE_EXPIRE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		CREATE_USER: {
			nullable: true,
			isPk: false,
			description: "",
			name: "createUser",
			rawName: "CREATE_USER",
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
		CREATE_TIME: {
			nullable: false,
			isPk: false,
			description: "",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	},
	description: ""
};

