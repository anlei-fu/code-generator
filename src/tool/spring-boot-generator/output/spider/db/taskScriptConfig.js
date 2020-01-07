let taskScriptConfig = {
	name: "taskScriptConfig",
	description: "任务脚本配置",
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
		taskConfigMainId: {
			name: "taskConfigMainId",
			description: "这配置id",
			nullable: false,
			type: {
				name: "int",
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
		version: {
			name: "version",
			description: "版本",
			nullable: false,
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
				name: "varchar",
				length: null
			}
		}
	}
};

let columnsArray = [
	"id",
	"taskConfigMainId",
	"file",
	"version",
	"createTime"
];

function create() {
  return {};
}

taskScriptConfig.columnsArray=columnsArray;
taskScriptConfig.create=create;
module.exports=taskScriptConfig;