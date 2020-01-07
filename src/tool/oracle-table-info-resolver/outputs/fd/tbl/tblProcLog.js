exports.tblProcLog = {
	name: "tblProcLog",
	rawName: "TBL_PROC_LOG",
	columns: {
		errCode: {
			nullable: true,
			isPk: false,
			description: "",
			name: "errCode",
			rawName: "ERR_CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		errTrace: {
			nullable: true,
			isPk: false,
			description: "",
			name: "errTrace",
			rawName: "ERR_TRACE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		status: {
			nullable: true,
			isPk: false,
			description: "",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		startTime: {
			nullable: true,
			isPk: false,
			description: "",
			name: "startTime",
			rawName: "START_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		procName: {
			nullable: true,
			isPk: false,
			description: "",
			name: "procName",
			rawName: "PROC_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		logTime: {
			nullable: true,
			isPk: false,
			description: "",
			name: "logTime",
			rawName: "LOG_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		userMark: {
			nullable: true,
			isPk: false,
			description: "",
			name: "userMark",
			rawName: "USER_MARK",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		errDesc: {
			nullable: true,
			isPk: false,
			description: "",
			name: "errDesc",
			rawName: "ERR_DESC",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

