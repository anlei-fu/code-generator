exports.fdB2eBankTask = {
	name: "fdB2eBankTask",
	rawName: "FD_B2E_BANK_TASK",
	columns: {
		TASK_ID: {
			nullable: "N",
			isPk: false,
			description: "任务编号",
			name: "taskId",
			rawName: "TASK_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TASK_TYPE: {
			nullable: "N",
			isPk: false,
			description: "任务类型",
			name: "taskType",
			rawName: "TASK_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		RECORD_ID: {
			nullable: "N",
			isPk: false,
			description: "记录编号（上游加款、上游加款查询）",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		MQ_NAME: {
			nullable: "N",
			isPk: false,
			description: "任务mq标识",
			name: "mqName",
			rawName: "MQ_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		TASK_STATUS: {
			nullable: "N",
			isPk: false,
			description: "任务状态",
			name: "taskStatus",
			rawName: "TASK_STATUS",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		CREATE_TIME: {
			nullable: "N",
			isPk: false,
			description: "创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		CONTENT: {
			nullable: "N",
			isPk: false,
			description: "任务参数",
			name: "content",
			rawName: "CONTENT",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		BATCH_ID: {
			nullable: "N",
			isPk: false,
			description: "批次号",
			name: "batchId",
			rawName: "BATCH_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TIMEOUT_TIME: {
			nullable: "N",
			isPk: false,
			description: "超时时间",
			name: "timeoutTime",
			rawName: "TIMEOUT_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	}
};

