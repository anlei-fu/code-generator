let workTaskRecord = {
	name: "workTaskRecord",
	description: "worker 运行记录",
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
		taskId: {
			name: "taskId",
			description: "任务id",
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
		pageDownloaded: {
			name: "pageDownloaded",
			description: "页面笑在数量",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		downloadSucess: {
			name: "downloadSucess",
			description: "",
			nullable: false,
			type: {
				name: "int",
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
		exitCode: {
			name: "exitCode",
			description: "错误码",
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
	"taskId",
	"workerId",
	"taskMainConfigId",
	"pageDownloaded",
	"downloadSucess",
	"success",
	"exitCode",
	"startTime",
	"endTime"
];

function create() {
  return {};
}

workTaskRecord.columnsArray=columnsArray;
workTaskRecord.create=create;
module.exports=workTaskRecord;