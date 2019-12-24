let workTaskRecord = {
	name: "workTaskRecord",
	description: "worker 运行记录",
	columns: {
		downloadSucess: {
			name: "downloadSucess",
			description: "",
			nullable: false,
			type: {
				name: "int",
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
		exitCode: {
			name: "exitCode",
			description: "错误码",
			nullable: false,
			type: {
				name: "int",
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
		pageDownloaded: {
			name: "pageDownloaded",
			description: "页面笑在数量",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		startTime: {
			name: "startTime",
			description: "开始时间",
			nullable: true,
			type: {
				name: "bigint",
				length: null
			}
		},
		success: {
			name: "success",
			description: "成功提取数量",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		taskId: {
			name: "taskId",
			description: "任务id",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		taskMainConfigId: {
			name: "taskMainConfigId",
			description: "主配置id",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		workerId: {
			name: "workerId",
			description: "wroker id",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		}
	}
};

let columnsArray = [
	"downloadSucess",
	"endTime",
	"exitCode",
	"id",
	"pageDownloaded",
	"startTime",
	"success",
	"taskId",
	"taskMainConfigId",
	"workerId"
];

function create() {
  return {
	downloadSucess: 834,
	endTime: 996,
	exitCode: 802,
	id: 69,
	pageDownloaded: 556,
	startTime: 854,
	success: 831,
	taskId: 796,
	taskMainConfigId: 223,
	workerId: 713
};
}

workTaskRecord.columnsArray=columnsArray;
workTaskRecord.create=create;
module.exports=workTaskRecord;