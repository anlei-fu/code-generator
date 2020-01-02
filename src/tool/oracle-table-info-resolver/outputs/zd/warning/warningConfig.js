exports.warningConfig = {
	name: "warningConfig",
	rawName: "WARNING_CONFIG",
	columns: {
		PRC_NAME: {
			nullable: false,
			isPk: false,
			description: "执行存储过程名称",
			name: "prcName",
			rawName: "PRC_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		TITLE: {
			nullable: true,
			isPk: false,
			description: "标题",
			name: "title",
			rawName: "TITLE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		INTERVAL_SECOND: {
			nullable: true,
			isPk: false,
			description: "执行间隔时间(秒)",
			name: "intervalSecond",
			rawName: "INTERVAL_SECOND",
			type: {
				name: "NUMBER",
				length: "10"
			}
		},
		LAST_EXEC_TIME: {
			nullable: true,
			isPk: false,
			description: "上次执行时间",
			name: "lastExecTime",
			rawName: "LAST_EXEC_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		NEXT_EXEC_TIME: {
			nullable: true,
			isPk: false,
			description: "下次执行时间",
			name: "nextExecTime",
			rawName: "NEXT_EXEC_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		EXEC_TIME_LONG: {
			nullable: true,
			isPk: false,
			description: "总执行时间(秒)",
			name: "execTimeLong",
			rawName: "EXEC_TIME_LONG",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		EXEC_TIME_COUNT: {
			nullable: true,
			isPk: false,
			description: "执行总次数",
			name: "execTimeCount",
			rawName: "EXEC_TIME_COUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		EXEC_LAST_EXPEND_TIME: {
			nullable: true,
			isPk: false,
			description: "上次执行消耗时间(秒)",
			name: "execLastExpendTime",
			rawName: "EXEC_LAST_EXPEND_TIME",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		EXEC_ERROR_COUNT: {
			nullable: true,
			isPk: false,
			description: "执行错误次数",
			name: "execErrorCount",
			rawName: "EXEC_ERROR_COUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		LAST_WARN_TIME: {
			nullable: true,
			isPk: false,
			description: "上一次发生报警时间(如果上一次出现报警,下次执行时,就不再统计已经报警的数据)",
			name: "lastWarnTime",
			rawName: "LAST_WARN_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		KEY_WORDS: {
			nullable: false,
			isPk: false,
			description: "关键字",
			name: "keyWords",
			rawName: "KEY_WORDS",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		WARNING_LEVEL: {
			nullable: false,
			isPk: false,
			description: "告警级别",
			name: "warningLevel",
			rawName: "WARNING_LEVEL",
			type: {
				name: "NUMBER",
				length: "5"
			}
		},
		STATUS: {
			nullable: true,
			isPk: false,
			description: "是否可:0-可用,1不可用",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		PAUSE_TIME: {
			nullable: true,
			isPk: false,
			description: "暂停时间",
			name: "pauseTime",
			rawName: "PAUSE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	},
	description: "告警配置"
};

