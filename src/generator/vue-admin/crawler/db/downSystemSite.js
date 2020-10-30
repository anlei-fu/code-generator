let downSystemSite = {
	name: "downSystemSite",
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
		scriptId: {
			name: "scriptId",
			description: "",
			rawName: "script_id",
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
			nullable: false,
			type: {
				name: "int",
				length: 11
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
		crawlerPageEncoding: {
			name: "crawlerPageEncoding",
			description: "",
			defaultValue: "",
			rawName: "crawler_page_encoding",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		},
		crawlerPageTimeout: {
			name: "crawlerPageTimeout",
			description: "",
			defaultValue: "",
			rawName: "crawler_page_timeout",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		crawlerCrawlType: {
			name: "crawlerCrawlType",
			description: "",
			defaultValue: "",
			rawName: "crawler_crawl_type",
			nullable: false,
			type: {
				name: "smallint",
				length: 6
			}
		},
		crawlerAutoDownloadPage: {
			name: "crawlerAutoDownloadPage",
			description: "",
			rawName: "crawler_auto_download_page",
			nullable: false,
			type: {
				name: "smallint",
				length: 6
			}
		},
		urlMaxCacheCount: {
			name: "urlMaxCacheCount",
			description: "",
			rawName: "url_max_cache_count",
			nullable: false,
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
		urlEncodes: {
			name: "urlEncodes",
			description: "",
			rawName: "url_encodes",
			nullable: true,
			type: {
				name: "varchar",
				length: 500
			}
		},
		urlMaxCrawlCount: {
			name: "urlMaxCrawlCount",
			description: "",
			rawName: "url_max_crawl_count",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		urlMatchPatterns: {
			name: "urlMatchPatterns",
			description: "",
			rawName: "url_match_patterns",
			nullable: true,
			type: {
				name: "varchar",
				length: 500
			}
		},
		bloomExpectedUrlSize: {
			name: "bloomExpectedUrlSize",
			description: "",
			rawName: "bloom_expected_url_size",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		bloomFpp: {
			name: "bloomFpp",
			description: "",
			rawName: "bloom_fpp",
			nullable: true,
			type: {
				name: "float"
			}
		},
		bloomLastLoadingTime: {
			name: "bloomLastLoadingTime",
			description: "",
			rawName: "bloom_last_loading_time",
			nullable: true,
			type: {
				name: "timestamp"
			}
		},
		taskUrlBatchCount: {
			name: "taskUrlBatchCount",
			description: "",
			rawName: "task_url_batch_count",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		taskMaxWaitToBindCount: {
			name: "taskMaxWaitToBindCount",
			description: "",
			rawName: "task_max_wait_to_bind_count",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		taskCurrentBindCount: {
			name: "taskCurrentBindCount",
			description: "",
			rawName: "task_current_bind_count",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		taskMaxRunningCount: {
			name: "taskMaxRunningCount",
			description: "",
			defaultValue: "",
			rawName: "task_max_running_count",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		taskCurrentRunningCount: {
			name: "taskCurrentRunningCount",
			description: "",
			defaultValue: "",
			rawName: "task_current_running_count",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		taskTimeout: {
			name: "taskTimeout",
			description: "",
			defaultValue: "",
			rawName: "task_timeout",
			nullable: false,
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
		}
	},
	rawName: "down_system_site",
	primaryColumn: "id",
	nameColumn: {
		name: "downSystemId",
		score: 9.364030016799443,
		content: "down_system_id",
		weight: 1,
		totalTokenCount: 3
	}
};

let columnsArray = [
	"id",
	"siteId",
	"scriptId",
	"downSystemId",
	"priority",
	"crawlerPageEncoding",
	"crawlerPageTimeout",
	"crawlerCrawlType",
	"crawlerAutoDownloadPage",
	"urlMaxCacheCount",
	"urlFinishedCount",
	"urlBadCount",
	"urlTotalCount",
	"urlEncodes",
	"urlMaxCrawlCount",
	"urlMatchPatterns",
	"bloomExpectedUrlSize",
	"bloomFpp",
	"bloomLastLoadingTime",
	"taskUrlBatchCount",
	"taskMaxWaitToBindCount",
	"taskCurrentBindCount",
	"taskMaxRunningCount",
	"taskCurrentRunningCount",
	"taskTimeout",
	"enableStatus",
	"createTime"
];

function create() {
  return {};
}

downSystemSite.columnsArray=columnsArray;
downSystemSite.create=create;
module.exports.downSystemSite=downSystemSite;