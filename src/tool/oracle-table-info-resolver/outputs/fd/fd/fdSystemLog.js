exports.fdSystemLog = {
	name: "fdSystemLog",
	rawName: "FD_SYSTEM_LOG",
	columns: {
		logId: {
			nullable: false,
			isPk: true,
			description: "日志流水号",
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
		errorCode: {
			nullable: false,
			isPk: false,
			description: "错误码",
			name: "errorCode",
			rawName: "ERROR_CODE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		errorDesc: {
			nullable: false,
			isPk: false,
			description: "错误信息",
			name: "errorDesc",
			rawName: "ERROR_DESC",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		manualDesc: {
			nullable: true,
			isPk: false,
			description: "人工描述",
			name: "manualDesc",
			rawName: "MANUAL_DESC",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		createdTime: {
			nullable: false,
			isPk: false,
			description: "发生时间",
			name: "createdTime",
			rawName: "CREATED_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		trace: {
			nullable: true,
			isPk: false,
			description: "异常跟踪",
			name: "trace",
			rawName: "TRACE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		errorLevel: {
			nullable: false,
			isPk: false,
			description: "错误级别",
			name: "errorLevel",
			rawName: "ERROR_LEVEL",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

