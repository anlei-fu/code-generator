exports.fdSystemHandleLog = {
	name: "fdSystemHandleLog",
	rawName: "FD_SYSTEM_HANDLE_LOG",
	columns: {
		LOG_ID: {
			nullable: "N",
			isPk: false,
			description: "主键",
			name: "logId",
			rawName: "LOG_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		HANDLE_MODULE: {
			nullable: "N",
			isPk: false,
			description: "操作功能模块",
			name: "handleModule",
			rawName: "HANDLE_MODULE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		HANDLE_USER: {
			nullable: "N",
			isPk: false,
			description: "操作人",
			name: "handleUser",
			rawName: "HANDLE_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		HANDLE_TIME: {
			nullable: "N",
			isPk: false,
			description: "操作时间",
			name: "handleTime",
			rawName: "HANDLE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		HANDLE_PARAMS: {
			nullable: "N",
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

