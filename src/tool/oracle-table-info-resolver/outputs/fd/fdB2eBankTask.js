exports.fdB2eBankTask = {
	name: "fdB2eBankTask",
	rawName: "FD_B2E_BANK_TASK",
	columns: {
		taskId: {
			nullable: false,
			isPk: false,
			description: "任务编号",
			name: "taskId",
			rawName: "TASK_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		taskType: {
			nullable: false,
			isPk: false,
			description: "任务类型",
			name: "taskType",
			rawName: "TASK_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		recordId: {
			nullable: false,
			isPk: false,
			description: "记录编号（上游加款、上游加款查询）",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		mqName: {
			nullable: false,
			isPk: false,
			description: "任务mq标识",
			name: "mqName",
			rawName: "MQ_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		taskStatus: {
			nullable: false,
			isPk: false,
			description: "任务状态",
			name: "taskStatus",
			rawName: "TASK_STATUS",
			type: {
				name: "number",
				length: 3
			}
		},
		createTime: {
			nullable: false,
			isPk: false,
			description: "创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		content: {
			nullable: false,
			isPk: false,
			description: "任务参数",
			name: "content",
			rawName: "CONTENT",
			type: {
				name: "varchar2",
				length: null
			}
		},
		batchId: {
			nullable: false,
			isPk: false,
			description: "批次号",
			name: "batchId",
			rawName: "BATCH_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		timeoutTime: {
			nullable: false,
			isPk: false,
			description: "超时时间",
			name: "timeoutTime",
			rawName: "TIMEOUT_TIME",
			type: {
				name: "date",
				length: null
			}
		}
	}
};

