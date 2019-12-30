exports.tblProcLog = {
	name: "tblProcLog",
	rawName: "TBL_PROC_LOG",
	columns: {
		ERR_CODE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "errCode",
			rawName: "ERR_CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ERR_TRACE: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "errTrace",
			rawName: "ERR_TRACE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		STATUS: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		START_TIME: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "startTime",
			rawName: "START_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		PROC_NAME: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "procName",
			rawName: "PROC_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		LOG_TIME: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "logTime",
			rawName: "LOG_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		USER_MARK: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "userMark",
			rawName: "USER_MARK",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ERR_DESC: {
			nullable: "Y",
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

