exports.systemLog = {
	name: "systemLog",
	rawName: "SYSTEM_LOG",
	columns: {
		logId: {
			nullable: false,
			isPk: true,
			description: "编号",
			name: "logId",
			rawName: "LOG_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		objectName: {
			nullable: false,
			isPk: false,
			description: "对象名称",
			name: "objectName",
			rawName: "OBJECT_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		content: {
			nullable: false,
			isPk: false,
			description: "内容",
			name: "content",
			rawName: "CONTENT",
			type: {
				name: "VARCHAR2",
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
		traceInfo: {
			nullable: true,
			isPk: false,
			description: "堆栈信息",
			name: "traceInfo",
			rawName: "TRACE_INFO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	},
	description: "错误日志"
};

