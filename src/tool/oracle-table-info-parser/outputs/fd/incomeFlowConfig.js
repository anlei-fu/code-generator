exports.incomeFlowConfig = {
	name: "incomeFlowConfig",
	rawName: "INCOME_FLOW_CONFIG",
	columns: {
		id: {
			nullable: false,
			isPk: true,
			description: "配置编号",
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
		status: {
			nullable: false,
			isPk: false,
			description: "状态，0启用，1禁用",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "number",
				length: 3
			}
		},
		flowParams: {
			nullable: false,
			isPk: false,
			description: "流程固定参数，a=1",
			name: "flowParams",
			rawName: "FLOW_PARAMS",
			type: {
				name: "varchar2",
				length: null
			}
		}
	}
};

