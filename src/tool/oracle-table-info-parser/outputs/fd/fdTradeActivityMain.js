exports.fdTradeActivityMain = {
	name: "fdTradeActivityMain",
	rawName: "FD_TRADE_ACTIVITY_MAIN",
	columns: {
		id: {
			nullable: false,
			isPk: false,
			description: "主键",
			name: "id",
			rawName: "ID",
			type: {
				name: "number",
				length: 20
			}
		},
		channelNo: {
			nullable: false,
			isPk: false,
			description: "下游渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		channelAccountId: {
			nullable: false,
			isPk: false,
			description: "下游渠道账户编号",
			name: "channelAccountId",
			rawName: "CHANNEL_ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		activityName: {
			nullable: false,
			isPk: false,
			description: "活动名称",
			name: "activityName",
			rawName: "ACTIVITY_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		activityContent: {
			nullable: false,
			isPk: false,
			description: "活动内容",
			name: "activityContent",
			rawName: "ACTIVITY_CONTENT",
			type: {
				name: "varchar2",
				length: null
			}
		},
		activityInputAmount: {
			nullable: false,
			isPk: false,
			description: "活动初始投入金额",
			name: "activityInputAmount",
			rawName: "ACTIVITY_INPUT_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		hasClosed: {
			nullable: false,
			isPk: false,
			description: "活动已近结束，0已经结束，1还未结束",
			name: "hasClosed",
			rawName: "HAS_CLOSED",
			type: {
				name: "number",
				length: 1
			}
		},
		createTime: {
			nullable: false,
			isPk: false,
			description: "活动创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		createUser: {
			nullable: false,
			isPk: false,
			description: "活动创建人",
			name: "createUser",
			rawName: "CREATE_USER",
			type: {
				name: "varchar2",
				length: null
			}
		},
		closeTime: {
			nullable: false,
			isPk: false,
			description: "活动结束时间",
			name: "closeTime",
			rawName: "CLOSE_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		closeUser: {
			nullable: false,
			isPk: false,
			description: "活动结束人",
			name: "closeUser",
			rawName: "CLOSE_USER",
			type: {
				name: "varchar2",
				length: null
			}
		},
		activityType: {
			nullable: false,
			isPk: false,
			description: "活动类型，1.预付活动，2.垫付活动",
			name: "activityType",
			rawName: "ACTIVITY_TYPE",
			type: {
				name: "number",
				length: 1
			}
		},
		activityReturnAmount: {
			nullable: false,
			isPk: false,
			description: "活动回笼资金",
			name: "activityReturnAmount",
			rawName: "ACTIVITY_RETURN_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		}
	}
};

