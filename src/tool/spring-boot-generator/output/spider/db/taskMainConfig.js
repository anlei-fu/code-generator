let taskMainConfig = {
	name: "taskMainConfig",
	description: "任务主配置",
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
		pattern: {
			name: "pattern",
			description: "pattern",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		encoding: {
			name: "encoding",
			description: "编码",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		agent: {
			name: "agent",
			description: "浏览器代理",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		timeout: {
			name: "timeout",
			description: "超时",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		scriptVersion: {
			name: "scriptVersion",
			description: "脚本版本",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		}
	}
};

let columnsArray = [
	"id",
	"taskId",
	"pattern",
	"encoding",
	"agent",
	"timeout",
	"scriptVersion"
];

function create() {
  return {};
}

taskMainConfig.columnsArray=columnsArray;
taskMainConfig.create=create;
module.exports=taskMainConfig;