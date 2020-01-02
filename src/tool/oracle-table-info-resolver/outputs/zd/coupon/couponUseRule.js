exports.couponUseRule = {
	name: "couponUseRule",
	rawName: "COUPON_USE_RULE",
	columns: {
		RULE_ID: {
			nullable: false,
			isPk: true,
			description: "规则编号",
			name: "ruleId",
			rawName: "RULE_ID",
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
		BUSINESS_TYPE: {
			nullable: false,
			isPk: false,
			description: "业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: "5"
			}
		},
		CARRIER_NO: {
			nullable: true,
			isPk: false,
			description: "运营商",
			name: "carrierNo",
			rawName: "CARRIER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PROVINCE_NO: {
			nullable: true,
			isPk: false,
			description: "省份",
			name: "provinceNo",
			rawName: "PROVINCE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		MIN_FEE: {
			nullable: false,
			isPk: false,
			description: "订单最低金额(无用)",
			name: "minFee",
			rawName: "MIN_FEE",
			type: {
				name: "NUMBER",
				length: "5"
			}
		},
		STATUS: {
			nullable: false,
			isPk: false,
			description: "状态",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		CREATED_USER: {
			nullable: true,
			isPk: false,
			description: "创建人",
			name: "createdUser",
			rawName: "CREATED_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CREATED_TIME: {
			nullable: false,
			isPk: false,
			description: "创建时间",
			name: "createdTime",
			rawName: "CREATED_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		UPDATED_USER: {
			nullable: true,
			isPk: false,
			description: "更新人",
			name: "updatedUser",
			rawName: "UPDATED_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		UPDATED_TIME: {
			nullable: false,
			isPk: false,
			description: "更新时间",
			name: "updatedTime",
			rawName: "UPDATED_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		RECHARGE_MODE: {
			nullable: true,
			isPk: false,
			description: "充值类型 快慢充",
			name: "rechargeMode",
			rawName: "RECHARGE_MODE",
			type: {
				name: "NUMBER",
				length: ""
			}
		}
	},
	description: "优惠券使用规则"
};

