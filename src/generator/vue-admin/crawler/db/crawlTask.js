let crawlTask = {
	name: "crawlTask",
	description: "task info",
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
		siteId: {
			name: "siteId",
			description: "",
			rawName: "site_id",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		downSystemSiteId: {
			name: "downSystemSiteId",
			description: "the site task belong to",
			rawName: "down_system_site_id",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		taskTimeoutTime: {
			name: "taskTimeoutTime",
			description: "",
			rawName: "task_timeout_time",
			nullable: true,
			type: {
				name: "timestamp"
			}
		},
		taskStatus: {
			name: "taskStatus",
			description: "",
			rawName: "task_status",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		taskExecuteResultType: {
			name: "taskExecuteResultType",
			description: "task execute result",
			rawName: "task_execute_result_type",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		crawlerId: {
			name: "crawlerId",
			description: "the crawler which run the task",
			defaultValue: "the crawler which run the task",
			rawName: "crawler_id",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		bindLastStatus: {
			name: "bindLastStatus",
			description: "",
			defaultValue: "",
			rawName: "bind_last_status",
			nullable: false,
			type: {
				name: "smallint",
				length: 6
			}
		},
		bindLastMsg: {
			name: "bindLastMsg",
			description: "",
			rawName: "bind_last_msg",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		},
		bindLastTime: {
			name: "bindLastTime",
			description: "",
			rawName: "bind_last_time",
			nullable: true,
			type: {
				name: "timestamp"
			}
		},
		bindCount: {
			name: "bindCount",
			description: "",
			defaultValue: "",
			rawName: "bind_count",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		dispatchStatus: {
			name: "dispatchStatus",
			description: "task status",
			rawName: "dispatch_status",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		dispatchTime: {
			name: "dispatchTime",
			description: "",
			rawName: "dispatch_time",
			nullable: true,
			type: {
				name: "timestamp"
			}
		},
		dispatchMsg: {
			name: "dispatchMsg",
			description: "",
			rawName: "dispatch_msg",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		},
		cookieId: {
			name: "cookieId",
			description: "",
			defaultValue: "",
			rawName: "cookie_id",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		cookie: {
			name: "cookie",
			description: "",
			rawName: "cookie",
			nullable: true,
			type: {
				name: "varchar",
				length: 1000
			}
		},
		proxyId: {
			name: "proxyId",
			description: "the proxy the task used",
			rawName: "proxy_id",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		taskStartTime: {
			name: "taskStartTime",
			description: "the time task start to excute",
			rawName: "task_start_time",
			nullable: true,
			type: {
				name: "timestamp"
			}
		},
		taskFinishTime: {
			name: "taskFinishTime",
			description: "the time that task finished",
			rawName: "task_finish_time",
			nullable: true,
			type: {
				name: "timestamp"
			}
		},
		successUrlCount: {
			name: "successUrlCount",
			description: "the url count that crawl successfully",
			rawName: "success_url_count",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		urlFailedCount: {
			name: "urlFailedCount",
			description: "the url count that crawl failed",
			rawName: "url_failed_count",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		urlNewCount: {
			name: "urlNewCount",
			description: "the url count that newly detected",
			rawName: "url_new_count",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		urlBadCount: {
			name: "urlBadCount",
			description: "the bad url count",
			rawName: "url_bad_count",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		averageSpeedOfAll: {
			name: "averageSpeedOfAll",
			description: "the average speed of all url",
			rawName: "average_speed_of_all",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		averageSpeedOfSuccess: {
			name: "averageSpeedOfSuccess",
			description: "the average speed ofsuccess url",
			rawName: "average_speed_of_success",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		meanSpeedOfSuccess: {
			name: "meanSpeedOfSuccess",
			description: "the mean speed of all url",
			rawName: "mean_speed_of_success",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		maxSpeedOfSuccess: {
			name: "maxSpeedOfSuccess",
			description: "the max speed of all success url",
			rawName: "max_speed_of_success",
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
			description: "the time that task created",
			defaultValue: "the time that task created",
			rawName: "create_time",
			nullable: false,
			type: {
				name: "timestamp"
			}
		}
	},
	rawName: "crawl_task",
	primaryColumn: "id",
	nameColumn: {
		name: "taskStatus",
		score: 1.604935869191364,
		content: "task_status",
		weight: 1,
		totalTokenCount: 2
	}
};

let columnsArray = [
	"id",
	"siteId",
	"downSystemSiteId",
	"taskTimeoutTime",
	"taskStatus",
	"taskExecuteResultType",
	"crawlerId",
	"bindLastStatus",
	"bindLastMsg",
	"bindLastTime",
	"bindCount",
	"dispatchStatus",
	"dispatchTime",
	"dispatchMsg",
	"cookieId",
	"cookie",
	"proxyId",
	"taskStartTime",
	"taskFinishTime",
	"successUrlCount",
	"urlFailedCount",
	"urlNewCount",
	"urlBadCount",
	"averageSpeedOfAll",
	"averageSpeedOfSuccess",
	"meanSpeedOfSuccess",
	"maxSpeedOfSuccess",
	"enableStatus",
	"createTime"
];

function create() {
  return {};
}

crawlTask.columnsArray=columnsArray;
crawlTask.create=create;
module.exports.crawlTask=crawlTask;