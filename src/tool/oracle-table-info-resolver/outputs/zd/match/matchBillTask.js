exports.matchBillTask = {
	name: "matchBillTask",
	rawName: "MATCH_BILL_TASK",
	columns: {
		APPID: {
			nullable: true,
			isPk: false,
			description: "账户",
			name: "appid",
			rawName: "APPID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		TIMING: {
			nullable: true,
			isPk: false,
			description: "定时",
			name: "timing",
			rawName: "TIMING",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CHANNEL_NO: {
			nullable: true,
			isPk: false,
			description: "渠道",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		RETRY: {
			nullable: true,
			isPk: false,
			description: "重试",
			name: "retry",
			rawName: "RETRY",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		BEGIN_TIME: {
			nullable: true,
			isPk: false,
			description: "起始",
			name: "beginTime",
			rawName: "BEGIN_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		ACCOUNT_TYPE: {
			nullable: true,
			isPk: false,
			description: "账户类型",
			name: "accountType",
			rawName: "ACCOUNT_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		TASK_ID: {
			nullable: true,
			isPk: false,
			description: "id",
			name: "taskId",
			rawName: "TASK_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		CREATE_TIME: {
			nullable: true,
			isPk: false,
			description: "创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		STATUS: {
			nullable: true,
			isPk: false,
			description: "状态",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: ""
			}
		}
	},
	description: ""
};

