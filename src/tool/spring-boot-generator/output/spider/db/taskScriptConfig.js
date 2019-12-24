let taskScriptConfig = {
	name: "taskScriptConfig",
	description: "任务脚本配置",
	columns: {
		createTime: {
			name: "createTime",
			description: "创建时间",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		file: {
			name: "file",
			description: "文件",
			nullable: true,
			type: {
				name: "varchar",
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
		taskConfigMainId: {
			name: "taskConfigMainId",
			description: "这配置id",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		version: {
			name: "version",
			description: "版本",
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
	"file",
	"id",
	"taskConfigMainId",
	"version"
];

function create() {
  return {
	createTime: "创建时间694",
	file: "文件600",
	id: 140,
	taskConfigMainId: 936,
	version: 490
};
}

taskScriptConfig.columnsArray=columnsArray;
taskScriptConfig.create=create;
module.exports=taskScriptConfig;