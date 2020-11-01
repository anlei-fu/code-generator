let downSystem = {
	name: "downSystem",
	description: "",
	columns: {
		id: {
			name: "id",
			description: "",
			isPk: true,
			rawName: "id",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		name: {
			name: "name",
			description: "",
			rawName: "name",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		},
		priority: {
			name: "priority",
			description: "",
			defaultValue: "",
			rawName: "priority",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		description: {
			name: "description",
			description: "",
			rawName: "description",
			nullable: true,
			type: {
				name: "varchar",
				length: 200
			}
		},
		appKey: {
			name: "appKey",
			description: "",
			rawName: "app_key",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		},
		appSecret: {
			name: "appSecret",
			description: "",
			rawName: "app_secret",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		},
		dataUrl: {
			name: "dataUrl",
			description: "",
			rawName: "data_url",
			nullable: true,
			type: {
				name: "varchar",
				length: 100
			}
		},
		dataQueue: {
			name: "dataQueue",
			description: "",
			rawName: "data_queue",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		},
		taskMaxRunningCount: {
			name: "taskMaxRunningCount",
			description: "",
			defaultValue: "",
			rawName: "task_max_running_count",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		taskCurrentRunningCount: {
			name: "taskCurrentRunningCount",
			description: "",
			rawName: "task_current_running_count",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		urlTotalCount: {
			name: "urlTotalCount",
			description: "",
			rawName: "url_total_count",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		urlFinishedCount: {
			name: "urlFinishedCount",
			description: "",
			rawName: "url_finished_count",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		urlBadCount: {
			name: "urlBadCount",
			description: "",
			rawName: "url_bad_count",
			nullable: true,
			type: {
				name: "int",
				length: 11
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
		createTime: {
			name: "createTime",
			description: "",
			defaultValue: "",
			rawName: "create_time",
			nullable: false,
			type: {
				name: "timestamp"
			}
		}
	},
	rawName: "down_system",
	primaryColumn: "id",
	nameColumn: {
		name: "name",
		score: 3.1609867362078274,
		content: "name",
		weight: 1,
		totalTokenCount: 1
	}
};

let columnsArray = [
	"id",
	"name",
	"priority",
	"description",
	"appKey",
	"appSecret",
	"dataUrl",
	"dataQueue",
	"taskMaxRunningCount",
	"taskCurrentRunningCount",
	"urlTotalCount",
	"urlFinishedCount",
	"urlBadCount",
	"enableStatus",
	"createTime"
];

function create() {
  return {};
}

downSystem.columnsArray=columnsArray;
downSystem.create=create;
module.exports.downSystem=downSystem;