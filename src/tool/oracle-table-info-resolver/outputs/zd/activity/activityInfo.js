exports.activityInfo = {
	name: "activityInfo",
	rawName: "ACTIVITY_INFO",
	columns: {
		activityId: {
			nullable: false,
			isPk: true,
			description: "活动编号",
			name: "activityId",
			rawName: "ACTIVITY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		activityName: {
			nullable: false,
			isPk: false,
			description: "活动名称",
			name: "activityName",
			rawName: "ACTIVITY_NAME",
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
		validPeriod: {
			nullable: false,
			isPk: false,
			description: "有效天数",
			name: "validPeriod",
			rawName: "VALID_PERIOD",
			type: {
				name: "NUMBER",
				length: "5"
			}
		},
		minFee: {
			nullable: false,
			isPk: false,
			description: "最小金额",
			name: "minFee",
			rawName: "MIN_FEE",
			type: {
				name: "NUMBER",
				length: "5"
			}
		},
		maxFee: {
			nullable: false,
			isPk: false,
			description: "最大金额",
			name: "maxFee",
			rawName: "MAX_FEE",
			type: {
				name: "NUMBER",
				length: "5"
			}
		},
		startTime: {
			nullable: false,
			isPk: false,
			description: "开始时间",
			name: "startTime",
			rawName: "START_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		endTime: {
			nullable: false,
			isPk: false,
			description: "结束时间",
			name: "endTime",
			rawName: "END_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		promoteTitle: {
			nullable: false,
			isPk: false,
			description: "推荐标题",
			name: "promoteTitle",
			rawName: "PROMOTE_TITLE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		getRemark: {
			nullable: true,
			isPk: false,
			description: "领取说明",
			name: "getRemark",
			rawName: "GET_REMARK",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		useRemark: {
			nullable: true,
			isPk: false,
			description: "使用说明",
			name: "useRemark",
			rawName: "USE_REMARK",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		getedCntr: {
			nullable: false,
			isPk: false,
			description: "已领取数量",
			name: "getedCntr",
			rawName: "GETED_CNTR",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		usedCntr: {
			nullable: false,
			isPk: false,
			description: "已使用数量",
			name: "usedCntr",
			rawName: "USED_CNTR",
			type: {
				name: "NUMBER",
				length: "20"
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
		payMinFee: {
			nullable: false,
			isPk: false,
			description: "最小支付金额(基本限定)",
			name: "payMinFee",
			rawName: "PAY_MIN_FEE",
			type: {
				name: "NUMBER",
				length: ""
			}
		}
	},
	description: "活动信息表"
};

