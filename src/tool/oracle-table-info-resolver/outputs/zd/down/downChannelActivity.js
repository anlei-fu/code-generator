exports.downChannelActivity = {
	name: "downChannelActivity",
	rawName: "DOWN_CHANNEL_ACTIVITY",
	columns: {
		recordId: {
			nullable: false,
			isPk: true,
			description: "记录编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		channelNo: {
			nullable: false,
			isPk: false,
			description: "渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		activityTotal: {
			nullable: false,
			isPk: false,
			description: "活动总数量",
			name: "activityTotal",
			rawName: "ACTIVITY_TOTAL",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		activityRest: {
			nullable: false,
			isPk: false,
			description: "活动剩余数量",
			name: "activityRest",
			rawName: "ACTIVITY_REST",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		activityStart: {
			nullable: false,
			isPk: false,
			description: "活动开始时间",
			name: "activityStart",
			rawName: "ACTIVITY_START",
			type: {
				name: "DATE",
				length: ""
			}
		},
		activityEnd: {
			nullable: false,
			isPk: false,
			description: "活动结束时间",
			name: "activityEnd",
			rawName: "ACTIVITY_END",
			type: {
				name: "DATE",
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
		dayStart: {
			nullable: false,
			isPk: false,
			description: "每日开始时间",
			name: "dayStart",
			rawName: "DAY_START",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		dayEnd: {
			nullable: false,
			isPk: false,
			description: "每日结束时间",
			name: "dayEnd",
			rawName: "DAY_END",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		updateTime: {
			nullable: true,
			isPk: false,
			description: "更新时间",
			name: "updateTime",
			rawName: "UPDATE_TIME",
			type: {
				name: "DATE",
				length: ""
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
		}
	},
	description: "下游渠道活动配置"
};

