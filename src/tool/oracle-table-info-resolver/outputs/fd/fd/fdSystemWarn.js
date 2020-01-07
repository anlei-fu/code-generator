exports.fdSystemWarn = {
	name: "fdSystemWarn",
	rawName: "FD_SYSTEM_WARN",
	columns: {
		warnId: {
			nullable: false,
			isPk: true,
			description: "报警编号",
			name: "warnId",
			rawName: "WARN_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		uniqId: {
			nullable: false,
			isPk: false,
			description: "唯一标识",
			name: "uniqId",
			rawName: "UNIQ_ID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		warnLevel: {
			nullable: false,
			isPk: false,
			description: "等级",
			name: "warnLevel",
			rawName: "WARN_LEVEL",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		warnType: {
			nullable: false,
			isPk: false,
			description: "类型",
			name: "warnType",
			rawName: "WARN_TYPE",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		title: {
			nullable: false,
			isPk: false,
			description: "标题",
			name: "title",
			rawName: "TITLE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		warnDate: {
			nullable: false,
			isPk: false,
			description: "报警时间",
			name: "warnDate",
			rawName: "WARN_DATE",
			type: {
				name: "DATE",
				length: ""
			}
		},
		content: {
			nullable: false,
			isPk: false,
			description: "报警内容",
			name: "content",
			rawName: "CONTENT",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		syncStatus: {
			nullable: false,
			isPk: false,
			description: "同步状态 0同步完成  1未同步 2正在同步",
			name: "syncStatus",
			rawName: "SYNC_STATUS",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		keyWord: {
			nullable: false,
			isPk: false,
			description: "关键字",
			name: "keyWord",
			rawName: "KEY_WORD",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		syncBatchId: {
			nullable: true,
			isPk: false,
			description: "批次号",
			name: "syncBatchId",
			rawName: "SYNC_BATCH_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		systemNo: {
			nullable: true,
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

