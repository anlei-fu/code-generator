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
				name: "number",
				length: 20
			}
		},
		handleModule: {
			nullable: false,
			isPk: false,
			description: "操作功能模块",
			name: "handleModule",
			rawName: "HANDLE_MODULE",
			type: {
				name: "varchar2",
				length: null
			}
		},
		handleUser: {
			nullable: false,
			isPk: false,
			description: "操作人",
			name: "handleUser",
			rawName: "HANDLE_USER",
			type: {
				name: "varchar2",
				length: null
			}
		},
		handleTime: {
			nullable: false,
			isPk: false,
			description: "操作时间",
			name: "handleTime",
			rawName: "HANDLE_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		handleParams: {
			nullable: false,
			isPk: false,
			description: "参数",
			name: "handleParams",
			rawName: "HANDLE_PARAMS",
			type: {
				name: "varchar2",
				length: null
			}
		}
	}
};

