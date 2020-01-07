exports.couponRecord = {
	name: "couponRecord",
	rawName: "COUPON_RECORD",
	columns: {
		couponId: {
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
		activityId: {
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
		couponFee: {
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
		effectiveTime: {
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
		expireTime: {
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
		usedTime: {
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
		usedOrderNo: {
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
		orderFee: {
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
		couponState: {
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
		getedTime: {
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
		userName: {
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
		couponType: {
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
		getType: {
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
		downChannelNo: {
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
		getOrderNo: {
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

