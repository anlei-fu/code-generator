exports.couponRecord = {
	name: "couponRecord",
	rawName: "COUPON_RECORD",
	columns: {
		COUPON_ID: {
			nullable: false,
			isPk: true,
			description: "券编号",
			name: "couponId",
			rawName: "COUPON_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ACTIVITY_ID: {
			nullable: false,
			isPk: false,
			description: "活动编号",
			name: "activityId",
			rawName: "ACTIVITY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		COUPON_FEE: {
			nullable: false,
			isPk: false,
			description: "券金额",
			name: "couponFee",
			rawName: "COUPON_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		EFFECTIVE_TIME: {
			nullable: false,
			isPk: false,
			description: "生效时间",
			name: "effectiveTime",
			rawName: "EFFECTIVE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		EXPIRE_TIME: {
			nullable: false,
			isPk: false,
			description: "过期时间",
			name: "expireTime",
			rawName: "EXPIRE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		USED_TIME: {
			nullable: true,
			isPk: false,
			description: "使用时间",
			name: "usedTime",
			rawName: "USED_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		USED_ORDER_NO: {
			nullable: true,
			isPk: false,
			description: "使用订单号",
			name: "usedOrderNo",
			rawName: "USED_ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ORDER_FEE: {
			nullable: true,
			isPk: false,
			description: "订单金额",
			name: "orderFee",
			rawName: "ORDER_FEE",
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
		COUPON_STATE: {
			nullable: false,
			isPk: false,
			description: "状态:未使用:已使用 :已过期",
			name: "couponState",
			rawName: "COUPON_STATE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		GETED_TIME: {
			nullable: false,
			isPk: false,
			description: "领取时间",
			name: "getedTime",
			rawName: "GETED_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		USER_NAME: {
			nullable: true,
			isPk: false,
			description: "用户名",
			name: "userName",
			rawName: "USER_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		COUPON_TYPE: {
			nullable: false,
			isPk: false,
			description: "券类型:流量券:话费券",
			name: "couponType",
			rawName: "COUPON_TYPE",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		GET_TYPE: {
			nullable: false,
			isPk: false,
			description: "领取方式:领券:充送",
			name: "getType",
			rawName: "GET_TYPE",
			type: {
				name: "NUMBER",
				length: "2"
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
				length: ""
			}
		},
		GET_ORDER_NO: {
			nullable: true,
			isPk: false,
			description: "获取订单号(领取方式的为空)",
			name: "getOrderNo",
			rawName: "GET_ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	},
	description: "优惠券记录表"
};

