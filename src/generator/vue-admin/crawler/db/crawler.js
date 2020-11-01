let crawler = {
	name: "crawler",
	description: "crawler info",
	columns: {
		id: {
			name: "id",
			description: "the identifier of crawler",
			isPk: true,
			autoIncrement: true,
			rawName: "id",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		clientVersion: {
			name: "clientVersion",
			description: "",
			rawName: "client_version",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		name: {
			name: "name",
			description: "the name of crawler",
			rawName: "name",
			nullable: false,
			type: {
				name: "varchar",
				length: 45
			}
		},
		ip: {
			name: "ip",
			description: "the ip of crawler",
			rawName: "ip",
			nullable: false,
			type: {
				name: "varchar",
				length: 45
			}
		},
		description: {
			name: "description",
			description: "the description of crawler",
			rawName: "description",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		},
		crawlerType: {
			name: "crawlerType",
			description: "",
			rawName: "crawler_type",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		key: {
			name: "key",
			description: "the secrete key of crawler",
			rawName: "key",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		},
		uniqueId: {
			name: "uniqueId",
			description: "the unique id of crawler",
			rawName: "unique_id",
			nullable: false,
			type: {
				name: "varchar",
				length: 45
			}
		},
		port: {
			name: "port",
			description: "the port of crawler",
			rawName: "port",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		maxConcurrency: {
			name: "maxConcurrency",
			description: "the max concurrency the crawler allowed",
			defaultValue: "the max concurrency the crawler allowed",
			rawName: "max_concurrency",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		currentConcurrency: {
			name: "currentConcurrency",
			description: "the current concurrency",
			rawName: "current_concurrency",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		heartbeatStatus: {
			name: "heartbeatStatus",
			description: "",
			defaultValue: "",
			rawName: "heartbeat_status",
			nullable: false,
			type: {
				name: "smallint",
				length: 6
			}
		},
		heartbeatLastTime: {
			name: "heartbeatLastTime",
			description: "last heartbeat time",
			rawName: "heartbeat_last_time",
			nullable: true,
			type: {
				name: "timestamp"
			}
		},
		heartbeatLostCount: {
			name: "heartbeatLostCount",
			description: "",
			defaultValue: "",
			rawName: "heartbeat_lost_count",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		enableStatus: {
			name: "enableStatus",
			description: "enable status",
			defaultValue: "enable status",
			rawName: "enable_status",
			nullable: false,
			type: {
				name: "smallint",
				length: 6
			}
		},
		createTime: {
			name: "createTime",
			description: "create time",
			defaultValue: "create time",
			rawName: "create_time",
			nullable: false,
			type: {
				name: "timestamp"
			}
		}
	},
	rawName: "crawler",
	primaryColumn: "id",
	nameColumn: {
		name: "name",
		score: 4.930007755567094,
		content: "name",
		weight: 1,
		totalTokenCount: 1
	}
};

let columnsArray = [
	"id",
	"clientVersion",
	"name",
	"ip",
	"description",
	"crawlerType",
	"key",
	"uniqueId",
	"port",
	"maxConcurrency",
	"currentConcurrency",
	"heartbeatStatus",
	"heartbeatLastTime",
	"heartbeatLostCount",
	"enableStatus",
	"createTime"
];

function create() {
  return {};
}

crawler.columnsArray=columnsArray;
crawler.create=create;
module.exports.crawler=crawler;