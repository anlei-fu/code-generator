let taskHttpHeaderConfig = {
	name: "taskHttpHeaderConfig",
	description: "任务 header 配置",
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
			description: "主配置id",
			nullable: false,
			type: {
				name: "varchar",
				length: null
			}
		},
		key: {
			name: "key",
			description: "key",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		value: {
			name: "value",
			description: "value",
			nullable: true,
			type: {
				name: "varchar",
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
		}
	}
};

let columnsArray = [
	"id",
	"taskConfigMainId",
	"key",
	"value",
	"createTime"
];

function create() {
  return {};
}

taskHttpHeaderConfig.columnsArray=columnsArray;
taskHttpHeaderConfig.create=create;
module.exports=taskHttpHeaderConfig;