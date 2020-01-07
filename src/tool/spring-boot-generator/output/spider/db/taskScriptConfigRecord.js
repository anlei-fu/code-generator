let taskScriptConfigRecord = {
	name: "taskScriptConfigRecord",
	description: "任务脚本更改配置",
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
		action: {
			name: "action",
			description: "操作类型",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		}
	}
};

let columnsArray = [
	"id",
	"file",
	"version",
	"action"
];

function create() {
  return {};
}

taskScriptConfigRecord.columnsArray=columnsArray;
taskScriptConfigRecord.create=create;
module.exports=taskScriptConfigRecord;