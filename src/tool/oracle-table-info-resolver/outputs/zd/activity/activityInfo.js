exports.activityInfo = {
	name: "activityInfo",
	rawName: "ACTIVITY_INFO",
	columns: {
		ACTIVITY_ID: {
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
		ACTIVITY_NAME: {
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
		VALID_PERIOD: {
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
		MIN_FEE: {
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
		MAX_FEE: {
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
		START_TIME: {
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
		END_TIME: {
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
		PROMOTE_TITLE: {
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
		GET_REMARK: {
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
		USE_REMARK: {
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
		GETED_CNTR: {
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
		USED_CNTR: {
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
		PAY_MIN_FEE: {
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

