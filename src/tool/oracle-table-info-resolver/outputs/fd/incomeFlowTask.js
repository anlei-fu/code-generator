exports.incomeFlowTask = {
	name: "incomeFlowTask",
	rawName: "INCOME_FLOW_TASK",
	columns: {
		id: {
			nullable: false,
			isPk: true,
			description: "任务编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "number",
				length: 20
			}
		},
		flowName: {
			nullable: false,
			isPk: false,
			description: "流程名称",
			name: "flowName",
			rawName: "FLOW_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		flowMq: {
			nullable: false,
			isPk: false,
			description: "流程mq",
			name: "flowMq",
			rawName: "FLOW_MQ",
			type: {
				name: "varchar2",
				length: null
			}
		},
		flowSort: {
			nullable: false,
			isPk: false,
			description: "流程排序",
			name: "flowSort",
			rawName: "FLOW_SORT",
			type: {
				name: "number",
				length: 20
			}
		},
		createTime: {
			nullable: false,
			isPk: false,
			description: "任务创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		status: {
			nullable: false,
			isPk: false,
			description: "任务状态，1未开始，2正在执行，0执行成功，9执行失败",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "number",
				length: 3
			}
		},
		flowLink: {
			nullable: false,
			isPk: false,
			description: "流程环节，1中间环节，0终结环节",
			name: "flowLink",
			rawName: "FLOW_LINK",
			type: {
				name: "number",
				length: 3
			}
		},
		flowBatchId: {
			nullable: false,
			isPk: false,
			description: "流程批次号",
			name: "flowBatchId",
			rawName: "FLOW_BATCH_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		completeTime: {
			nullable: false,
			isPk: false,
			description: "流程完成时间",
			name: "completeTime",
			rawName: "COMPLETE_TIME",
			type: {
				name: "date",
				length: null
			}
		}
	}
};

