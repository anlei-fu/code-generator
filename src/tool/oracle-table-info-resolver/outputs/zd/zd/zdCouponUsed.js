exports.zdCouponUsed = {
	name: "zdCouponUsed",
	rawName: "ZD_COUPON_USED",
	columns: {
		couponId: {
			nullable: true,
			isPk: false,
			description: "优惠券id",
			name: "couponId",
			rawName: "COUPON_ID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		couponChannel: {
			nullable: true,
			isPk: false,
			description: "优惠渠道",
			name: "couponChannel",
			rawName: "COUPON_CHANNEL",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		couponPrice: {
			nullable: true,
			isPk: false,
			description: "优惠金额",
			name: "couponPrice",
			rawName: "COUPON_PRICE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		orderNo: {
			nullable: true,
			isPk: false,
			description: "使用订单编号",
			name: "orderNo",
			rawName: "ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		useTime: {
			nullable: true,
			isPk: false,
			description: "使用时间",
			name: "useTime",
			rawName: "USE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		downOrderNo: {
			nullable: true,
			isPk: false,
			description: "下游订单号",
			name: "downOrderNo",
			rawName: "DOWN_ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	},
	description: "使用过的中大优惠券"
};

