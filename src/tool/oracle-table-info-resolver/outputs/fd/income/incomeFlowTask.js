exports.incomeFlowTask = {
	name: "incomeFlowTask",
	rawName: "INCOME_FLOW_TASK",
	columns: {
		ID: {
			nullable: "N",
			isPk: true,
			description: "任务编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		FLOW_NAME: {
			nullable: "N",
			isPk: false,
			description: "流程名称",
			name: "flowName",
			rawName: "FLOW_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		FLOW_MQ: {
			nullable: "N",
			isPk: false,
			description: "流程mq",
			name: "flowMq",
			rawName: "FLOW_MQ",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		FLOW_SORT: {
			nullable: "N",
			isPk: false,
			description: "流程排序",
			name: "flowSort",
			rawName: "FLOW_SORT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CREATE_TIME: {
			nullable: "N",
			isPk: false,
			description: "任务创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		STATUS: {
			nullable: "N",
			isPk: false,
			description: "任务状态，1未开始，2正在执行，0执行成功，9执行失败",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		FLOW_LINK: {
			nullable: "N",
			isPk: false,
			description: "流程环节，1中间环节，0终结环节",
			name: "flowLink",
			rawName: "FLOW_LINK",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		FLOW_BATCH_ID: {
			nullable: "N",
			isPk: false,
			description: "流程批次号",
			name: "flowBatchId",
			rawName: "FLOW_BATCH_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		COMPLETE_TIME: {
			nullable: "Y",
			isPk: false,
			description: "流程完成时间",
			name: "completeTime",
			rawName: "COMPLETE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	}
};

