exports.receiptAccountConfig = {
	name: "receiptAccountConfig",
	rawName: "RECEIPT_ACCOUNT_CONFIG",
	columns: {
		ACCOUNT_ID: {
			nullable: false,
			isPk: false,
			description: "账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		VERSION: {
			nullable: false,
			isPk: false,
			description: "版本 :开发 :测试 :预生产 :生产",
			name: "version",
			rawName: "VERSION",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		SYNC_NOTIFY_URL: {
			nullable: true,
			isPk: false,
			description: "同步通知地址",
			name: "syncNotifyUrl",
			rawName: "SYNC_NOTIFY_URL",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		NONSYNC_NOTIFY_URL: {
			nullable: true,
			isPk: false,
			description: "异步通知地址",
			name: "nonsyncNotifyUrl",
			rawName: "NONSYNC_NOTIFY_URL",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		STATUS: {
			nullable: true,
			isPk: false,
			description: "状态 0有效 1无效",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		UPDATED_USER: {
			nullable: true,
			isPk: false,
			description: "更新用户",
			name: "updatedUser",
			rawName: "UPDATED_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		UPDATED_TIME: {
			nullable: true,
			isPk: false,
			description: "更新时间",
			name: "updatedTime",
			rawName: "UPDATED_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		CONFIG_ID: {
			nullable: false,
			isPk: true,
			description: "配置ID",
			name: "configId",
			rawName: "CONFIG_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DEVICE_TYPE: {
			nullable: false,
			isPk: false,
			description: "终端 :直充APP :直充H5 :慢充APP :慢充H5",
			name: "deviceType",
			rawName: "DEVICE_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		}
	},
	description: "收款账户额外配置"
};

