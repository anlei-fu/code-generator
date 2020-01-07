let taskInfo = {
	name: "taskInfo",
	description: "任务信息",
	columns: {
		id: {
			name: "id",
			description: "编号",
			isPk: true,
			autoIncrement: true,
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		userId: {
			name: "userId",
			description: "用户id",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		mainConfigId: {
			name: "mainConfigId",
			description: "主配置id",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		description: {
			name: "description",
			description: "描述",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		level: {
			name: "level",
			description: "任务等级",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		status: {
			name: "status",
			description: "任务状态",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		queueId: {
			name: "queueId",
			description: "queue id",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		topicId: {
			name: "topicId",
			description: "topic id",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		createTime: {
			name: "createTime",
			description: "创建时间",
			nullable: true,
			type: {
				name: "bigint",
				length: null
			}
		},
		endTime: {
			name: "endTime",
			description: "结束时间",
			nullable: true,
			type: {
				name: "bigint",
				length: null
			}
		}
	}
};

let columnsArray = [
	"id",
	"userId",
	"mainConfigId",
	"description",
	"level",
	"status",
	"queueId",
	"topicId",
	"createTime",
	"endTime"
];

function create() {
  return {};
}

taskInfo.columnsArray=columnsArray;
taskInfo.create=create;
module.exports=taskInfo;