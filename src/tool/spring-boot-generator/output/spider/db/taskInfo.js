let taskInfo = {
	name: "taskInfo",
	description: "任务信息",
	columns: {
		createTime: {
			name: "createTime",
			description: "创建时间",
			nullable: true,
			type: {
				name: "bigint",
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
		endTime: {
			name: "endTime",
			description: "结束时间",
			nullable: true,
			type: {
				name: "bigint",
				length: null
			}
		},
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
		level: {
			name: "level",
			description: "任务等级",
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
		queueId: {
			name: "queueId",
			description: "queue id",
			nullable: true,
			type: {
				name: "varchar",
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
		topicId: {
			name: "topicId",
			description: "topic id",
			nullable: true,
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
		}
	}
};

let columnsArray = [
	"createTime",
	"description",
	"endTime",
	"id",
	"level",
	"mainConfigId",
	"queueId",
	"status",
	"topicId",
	"userId"
];

function create() {
  return {
	createTime: 325,
	description: "描述523",
	endTime: 167,
	id: 350,
	level: 54,
	mainConfigId: 932,
	queueId: "queue id473",
	status: 868,
	topicId: 964,
	userId: 819
};
}

taskInfo.columnsArray=columnsArray;
taskInfo.create=create;
module.exports=taskInfo;