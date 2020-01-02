exports.terminalInfo = {
	name: "terminalInfo",
	rawName: "TERMINAL_INFO",
	columns: {
		TERM_NAME: {
			nullable: false,
			isPk: false,
			description: "终端名称",
			name: "termName",
			rawName: "TERM_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		TERM_ID: {
			nullable: false,
			isPk: false,
			description: "终端编号",
			name: "termId",
			rawName: "TERM_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		STATUS: {
			nullable: true,
			isPk: false,
			description: "状: 0-启用 1-禁用",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		REMARK: {
			nullable: true,
			isPk: false,
			description: "终端说明",
			name: "remark",
			rawName: "REMARK",
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
		},
		CREATE_USER: {
			nullable: true,
			isPk: false,
			description: "创建人",
			name: "createUser",
			rawName: "CREATE_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		UPDATE_TIME: {
			nullable: false,
			isPk: false,
			description: "更新时间",
			name: "updateTime",
			rawName: "UPDATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		UPDATE_USER: {
			nullable: true,
			isPk: false,
			description: "更新人",
			name: "updateUser",
			rawName: "UPDATE_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	},
	description: "终端信息表"
};

