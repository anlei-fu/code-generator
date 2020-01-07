exports.fdSystemHandleLog = {
	name: "fdSystemHandleLog",
	rawName: "FD_SYSTEM_HANDLE_LOG",
	columns: {
		logId: {
			nullable: false,
			isPk: false,
			description: "主键",
			name: "logId",
			rawName: "LOG_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		handleModule: {
			nullable: false,
			isPk: false,
			description: "操作功能模块",
			name: "handleModule",
			rawName: "HANDLE_MODULE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		handleUser: {
			nullable: false,
			isPk: false,
			description: "操作人",
			name: "handleUser",
			rawName: "HANDLE_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		handleTime: {
			nullable: false,
			isPk: false,
			description: "操作时间",
			name: "handleTime",
			rawName: "HANDLE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		handleParams: {
			nullable: false,
			isPk: false,
			description: "参数",
			name: "handleParams",
			rawName: "HANDLE_PARAMS",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

