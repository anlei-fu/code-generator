exports.fdTradeActivityMain = {
	name: "fdTradeActivityMain",
	rawName: "FD_TRADE_ACTIVITY_MAIN",
	columns: {
		ID: {
			nullable: "N",
			isPk: false,
			description: "主键",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "下游渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CHANNEL_ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "下游渠道账户编号",
			name: "channelAccountId",
			rawName: "CHANNEL_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ACTIVITY_NAME: {
			nullable: "N",
			isPk: false,
			description: "活动名称",
			name: "activityName",
			rawName: "ACTIVITY_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ACTIVITY_CONTENT: {
			nullable: "N",
			isPk: false,
			description: "活动内容",
			name: "activityContent",
			rawName: "ACTIVITY_CONTENT",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ACTIVITY_INPUT_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "活动初始投入金额",
			name: "activityInputAmount",
			rawName: "ACTIVITY_INPUT_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		HAS_CLOSED: {
			nullable: "N",
			isPk: false,
			description: "活动已近结束，0已经结束，1还未结束",
			name: "hasClosed",
			rawName: "HAS_CLOSED",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		CREATE_TIME: {
			nullable: "N",
			isPk: false,
			description: "活动创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		CREATE_USER: {
			nullable: "N",
			isPk: false,
			description: "活动创建人",
			name: "createUser",
			rawName: "CREATE_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CLOSE_TIME: {
			nullable: "Y",
			isPk: false,
			description: "活动结束时间",
			name: "closeTime",
			rawName: "CLOSE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		CLOSE_USER: {
			nullable: "Y",
			isPk: false,
			description: "活动结束人",
			name: "closeUser",
			rawName: "CLOSE_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ACTIVITY_TYPE: {
			nullable: "N",
			isPk: false,
			description: "活动类型，1.预付活动，2.垫付活动",
			name: "activityType",
			rawName: "ACTIVITY_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		ACTIVITY_RETURN_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "活动回笼资金",
			name: "activityReturnAmount",
			rawName: "ACTIVITY_RETURN_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

