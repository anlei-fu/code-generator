exports.receiptAccountInfo = {
	name: "receiptAccountInfo",
	rawName: "RECEIPT_ACCOUNT_INFO",
	columns: {
		accountId: {
			nullable: false,
			isPk: true,
			description: "账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		accountType: {
			nullable: true,
			isPk: false,
			description: "账户类型 :支付宝 :微信 :优惠券 :微信扫码 :优途 1:微信公众号 1:京东支付 1:中行支付",
			name: "accountType",
			rawName: "ACCOUNT_TYPE",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		appid: {
			nullable: true,
			isPk: false,
			description: "收款账号ID",
			name: "appid",
			rawName: "APPID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		mchId: {
			nullable: true,
			isPk: false,
			description: "商户号",
			name: "mchId",
			rawName: "MCH_ID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		pubKey: {
			nullable: true,
			isPk: false,
			description: "支付宝公钥,微信秘钥",
			name: "pubKey",
			rawName: "PUB_KEY",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		priKey: {
			nullable: true,
			isPk: false,
			description: "私钥",
			name: "priKey",
			rawName: "PRI_KEY",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		certificatePath: {
			nullable: true,
			isPk: false,
			description: "证书路径",
			name: "certificatePath",
			rawName: "CERTIFICATE_PATH",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		balance: {
			nullable: false,
			isPk: false,
			description: "余额",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		serviceRadio: {
			nullable: true,
			isPk: false,
			description: "手续费率",
			name: "serviceRadio",
			rawName: "SERVICE_RADIO",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		ext1: {
			nullable: true,
			isPk: false,
			description: "扩展1",
			name: "ext1",
			rawName: "EXT_1",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ext2: {
			nullable: true,
			isPk: false,
			description: "扩展2(公众号支付:为appsecret)",
			name: "ext2",
			rawName: "EXT_2",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ext3: {
			nullable: true,
			isPk: false,
			description: "扩展3",
			name: "ext3",
			rawName: "EXT_3",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ext4: {
			nullable: true,
			isPk: false,
			description: "扩展4",
			name: "ext4",
			rawName: "EXT_4",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ext5: {
			nullable: true,
			isPk: false,
			description: "扩展5",
			name: "ext5",
			rawName: "EXT_5",
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
		status: {
			nullable: true,
			isPk: false,
			description: "状态 0有效 1无效",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		syncNotifyUrl: {
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
		nonsyncNotifyUrl: {
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
		refundScriptPath: {
			nullable: true,
			isPk: false,
			description: "退款lua脚本名称",
			name: "refundScriptPath",
			rawName: "REFUND_SCRIPT_PATH",
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
		serviceLoss: {
			nullable: true,
			isPk: false,
			description: "退款亏损",
			name: "serviceLoss",
			rawName: "SERVICE_LOSS",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		serviceFeeMode: {
			nullable: false,
			isPk: false,
			description: "手续费模: 0-无 1-支付前 2-支付后",
			name: "serviceFeeMode",
			rawName: "SERVICE_FEE_MODE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		serviceFeeRefund: {
			nullable: true,
			isPk: false,
			description: "退款是否退手续: 0-是 1-否",
			name: "serviceFeeRefund",
			rawName: "SERVICE_FEE_REFUND",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		version: {
			nullable: true,
			isPk: false,
			description: "版: 1-开发 2-测试 3-预生产 4-生产",
			name: "version",
			rawName: "VERSION",
			type: {
				name: "NUMBER",
				length: ""
			}
		}
	},
	description: "收款账户信息表"
};

