let dynamicUrlJob = {
	name: "dynamicUrlJob",
	description: "",
	columns: {
		id: {
			name: "id",
			description: "",
			isPk: true,
			autoIncrement: true,
			rawName: "id",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		downSystemId: {
			name: "downSystemId",
			description: "",
			rawName: "down_system_id",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		scriptId: {
			name: "scriptId",
			description: "",
			rawName: "script_id",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		dynamicType: {
			name: "dynamicType",
			description: "",
			rawName: "dynamic_type",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		createTime: {
			name: "createTime",
			description: "",
			defaultValue: "",
			rawName: "create_time",
			nullable: false,
			type: {
				name: "timestamp"
			}
		},
		enableStatus: {
			name: "enableStatus",
			description: "",
			defaultValue: "",
			rawName: "enable_status",
			nullable: false,
			type: {
				name: "smallint",
				length: 6
			}
		},
		delayTimeout: {
			name: "delayTimeout",
			description: "",
			defaultValue: "",
			rawName: "delay_timeout",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		lastRunTime: {
			name: "lastRunTime",
			description: "",
			rawName: "last_run_time",
			nullable: true,
			type: {
				name: "timestamp"
			}
		},
		concurrency: {
			name: "concurrency",
			description: "",
			defaultValue: "",
			rawName: "concurrency",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		maxWaintToBindTaskCount: {
			name: "maxWaintToBindTaskCount",
			description: "",
			defaultValue: "",
			rawName: "max_waint_to_bind_task_count",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		}
	},
	rawName: "dynamic_url_job",
	primaryColumn: "id",
	nameColumn: {
		name: "dynamicType",
		score: 1.293238595129771,
		content: "dynamic_type",
		weight: 1,
		totalTokenCount: 2
	}
};

let columnsArray = [
	"id",
	"downSystemId",
	"scriptId",
	"dynamicType",
	"createTime",
	"enableStatus",
	"delayTimeout",
	"lastRunTime",
	"concurrency",
	"maxWaintToBindTaskCount"
];

function create() {
  return {};
}

dynamicUrlJob.columnsArray=columnsArray;
dynamicUrlJob.create=create;
module.exports.dynamicUrlJob=dynamicUrlJob;