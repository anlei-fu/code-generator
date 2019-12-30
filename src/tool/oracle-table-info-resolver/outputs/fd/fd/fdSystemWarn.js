exports.fdSystemWarn = {
	name: "fdSystemWarn",
	rawName: "FD_SYSTEM_WARN",
	columns: {
		WARN_ID: {
			nullable: "N",
			isPk: true,
			description: "报警编号",
			name: "warnId",
			rawName: "WARN_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UNIQ_ID: {
			nullable: "N",
			isPk: false,
			description: "唯一标识",
			name: "uniqId",
			rawName: "UNIQ_ID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		WARN_LEVEL: {
			nullable: "N",
			isPk: false,
			description: "等级",
			name: "warnLevel",
			rawName: "WARN_LEVEL",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		WARN_TYPE: {
			nullable: "N",
			isPk: false,
			description: "类型",
			name: "warnType",
			rawName: "WARN_TYPE",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		TITLE: {
			nullable: "N",
			isPk: false,
			description: "标题",
			name: "title",
			rawName: "TITLE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		WARN_DATE: {
			nullable: "N",
			isPk: false,
			description: "报警时间",
			name: "warnDate",
			rawName: "WARN_DATE",
			type: {
				name: "DATE",
				length: ""
			}
		},
		CONTENT: {
			nullable: "N",
			isPk: false,
			description: "报警内容",
			name: "content",
			rawName: "CONTENT",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		SYNC_STATUS: {
			nullable: "N",
			isPk: false,
			description: "同步状态 0同步完成  1未同步 2正在同步",
			name: "syncStatus",
			rawName: "SYNC_STATUS",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		KEY_WORD: {
			nullable: "N",
			isPk: false,
			description: "关键字",
			name: "keyWord",
			rawName: "KEY_WORD",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		SYNC_BATCH_ID: {
			nullable: "Y",
			isPk: false,
			description: "批次号",
			name: "syncBatchId",
			rawName: "SYNC_BATCH_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SYSTEM_NO: {
			nullable: "Y",
			isPk: false,
			description: "",
			name: "systemNo",
			rawName: "SYSTEM_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

