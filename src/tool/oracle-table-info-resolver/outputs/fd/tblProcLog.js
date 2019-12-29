exports.tblProcLog = {
	name: "tblProcLog",
	rawName: "TBL_PROC_LOG",
	columns: {
		errCode: {
			nullable: false,
			isPk: false,
			description: "",
			name: "errCode",
			rawName: "ERR_CODE",
			type: {
				name: "varchar2",
				length: null
			}
		},
		errTrace: {
			nullable: false,
			isPk: false,
			description: "",
			name: "errTrace",
			rawName: "ERR_TRACE",
			type: {
				name: "varchar2",
				length: null
			}
		},
		status: {
			nullable: false,
			isPk: false,
			description: "",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "varchar2",
				length: null
			}
		},
		startTime: {
			nullable: false,
			isPk: false,
			description: "",
			name: "startTime",
			rawName: "START_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		procName: {
			nullable: false,
			isPk: false,
			description: "",
			name: "procName",
			rawName: "PROC_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		logTime: {
			nullable: false,
			isPk: false,
			description: "",
			name: "logTime",
			rawName: "LOG_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		userMark: {
			nullable: false,
			isPk: false,
			description: "",
			name: "userMark",
			rawName: "USER_MARK",
			type: {
				name: "varchar2",
				length: null
			}
		},
		errDesc: {
			nullable: false,
			isPk: false,
			description: "",
			name: "errDesc",
			rawName: "ERR_DESC",
			type: {
				name: "varchar2",
				length: null
			}
		}
	}
};

