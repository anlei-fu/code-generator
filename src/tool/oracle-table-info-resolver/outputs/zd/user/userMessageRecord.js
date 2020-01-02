exports.userMessageRecord = {
	name: "userMessageRecord",
	rawName: "USER_MESSAGE_RECORD",
	columns: {
		BUSINESS_TYPE: {
			nullable: false,
			isPk: false,
			description: "业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		RECORD_ID: {
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
		ORDER_NO: {
			nullable: false,
			isPk: false,
			description: "订单号",
			name: "orderNo",
			rawName: "ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		RECEIVER: {
			nullable: false,
			isPk: false,
			description: "接收人",
			name: "receiver",
			rawName: "RECEIVER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		MSG_TITLE: {
			nullable: false,
			isPk: false,
			description: "消息标题",
			name: "msgTitle",
			rawName: "MSG_TITLE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		MSG_LEVEL: {
			nullable: false,
			isPk: false,
			description: "消息级别",
			name: "msgLevel",
			rawName: "MSG_LEVEL",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		CONTENT: {
			nullable: false,
			isPk: false,
			description: "消息内容",
			name: "content",
			rawName: "CONTENT",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		SYNC_STATUS: {
			nullable: false,
			isPk: false,
			description: "同步状: 0-成功 20-等待同步 30-正在同步 90-同步失败",
			name: "syncStatus",
			rawName: "SYNC_STATUS",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		SYNC_TIME: {
			nullable: true,
			isPk: false,
			description: "同步时间",
			name: "syncTime",
			rawName: "SYNC_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		SYNC_MSG: {
			nullable: true,
			isPk: false,
			description: "同步消息",
			name: "syncMsg",
			rawName: "SYNC_MSG",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CREATE_TIME: {
			nullable: false,
			isPk: false,
			description: "创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	},
	description: "用户消息表"
};

