exports.couponUseRule = {
	name: "couponUseRule",
	rawName: "COUPON_USE_RULE",
	columns: {
		ruleId: {
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
		businessType: {
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
		carrierNo: {
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
		provinceNo: {
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
		minFee: {
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
		status: {
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
		createdUser: {
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
		createdTime: {
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
		updatedUser: {
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
		updatedTime: {
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
		rechargeMode: {
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

