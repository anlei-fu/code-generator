exports.orderVcode = {
	name: "orderVcode",
	rawName: "ORDER_VCODE",
	columns: {
		orderNo: {
			nullable: false,
			isPk: true,
			description: "订单号",
			name: "orderNo",
			rawName: "ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		downChannelNo: {
			nullable: false,
			isPk: false,
			description: "下游渠道编号",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		downProductId: {
			nullable: false,
			isPk: false,
			description: "下游产品编号",
			name: "downProductId",
			rawName: "DOWN_PRODUCT_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		businessType: {
			nullable: false,
			isPk: false,
			description: "业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		carrierNo: {
			nullable: false,
			isPk: false,
			description: "运营商编码",
			name: "carrierNo",
			rawName: "CARRIER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		phoneNo: {
			nullable: false,
			isPk: false,
			description: "手机号",
			name: "phoneNo",
			rawName: "PHONE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		provinceNo: {
			nullable: false,
			isPk: false,
			description: "省份编码",
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
			description: "地市编码",
			name: "cityNo",
			rawName: "CITY_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		sendCount: {
			nullable: false,
			isPk: false,
			description: "发送次数",
			name: "sendCount",
			rawName: "SEND_COUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		sendStatus: {
			nullable: false,
			isPk: false,
			description: "短信状: 0-发送成功 20-等待发送 30-发送中 90-发送失败  99-发送未知",
			name: "sendStatus",
			rawName: "SEND_STATUS",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		nextSendTime: {
			nullable: false,
			isPk: false,
			description: "下次发送时间",
			name: "nextSendTime",
			rawName: "NEXT_SEND_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		resultMsg: {
			nullable: true,
			isPk: false,
			description: "发送结果消息",
			name: "resultMsg",
			rawName: "RESULT_MSG",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		userIp: {
			nullable: false,
			isPk: false,
			description: "用户IP",
			name: "userIp",
			rawName: "USER_IP",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		vcode: {
			nullable: true,
			isPk: false,
			description: "用户验证码",
			name: "vcode",
			rawName: "VCODE",
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
		finishTime: {
			nullable: true,
			isPk: false,
			description: "完成时间",
			name: "finishTime",
			rawName: "FINISH_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		upChannelId: {
			nullable: true,
			isPk: false,
			description: "上游渠道ID",
			name: "upChannelId",
			rawName: "UP_CHANNEL_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		upProductId: {
			nullable: true,
			isPk: false,
			description: "上游产品ID",
			name: "upProductId",
			rawName: "UP_PRODUCT_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		shareUid: {
			nullable: true,
			isPk: false,
			description: "推荐人UID",
			name: "shareUid",
			rawName: "SHARE_UID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	},
	description: "验证码请求记录"
};

