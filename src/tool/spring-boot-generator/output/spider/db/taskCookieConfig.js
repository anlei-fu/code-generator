let taskCookieConfig = {
	name: "taskCookieConfig",
	description: "任务cookie配置",
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
				name: "int",
				length: null
			}
		},
		domainId: {
			name: "domainId",
			description: "网站id",
			nullable: false,
			type: {
				name: "int",
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
		expiration: {
			name: "expiration",
			description: "失效时间",
			nullable: true,
			type: {
				name: "bigint",
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
	"domainId",
	"key",
	"value",
	"expiration",
	"createTime"
];

function create() {
  return {};
}

taskCookieConfig.columnsArray=columnsArray;
taskCookieConfig.create=create;
module.exports=taskCookieConfig;