let url = {
	name: "url",
	description: "url info",
	columns: {
		url: {
			name: "url",
			description: "",
			rawName: "url",
			nullable: false,
			type: {
				name: "varchar",
				length: 200
			}
		},
		depth: {
			name: "depth",
			description: "",
			rawName: "depth",
			nullable: false,
			type: {
				name: "smallint",
				length: 6
			}
		},
		downSystemSiteId: {
			name: "downSystemSiteId",
			description: "the site that the url belong",
			rawName: "down_system_site_id",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		urlType: {
			name: "urlType",
			description: "",
			rawName: "url_type",
			nullable: false,
			type: {
				name: "smallint",
				length: 6
			}
		},
		referUrl: {
			name: "referUrl",
			description: "the related url",
			rawName: "refer_url",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		},
		crawlCount: {
			name: "crawlCount",
			description: "current retry count of url",
			rawName: "crawl_count",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		urlStatus: {
			name: "urlStatus",
			description: "crawl status",
			rawName: "url_status",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		lastCrawlTime: {
			name: "lastCrawlTime",
			description: "last crawl  time",
			rawName: "last_crawl_time",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		},
		queryString: {
			name: "queryString",
			description: "",
			rawName: "query_string",
			nullable: true,
			type: {
				name: "varchar",
				length: 300
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
	rawName: "url",
	primaryColumn: "url",
	nameColumn: {
		name: "url",
		score: 1.5992898649205665,
		content: "url",
		weight: 1,
		totalTokenCount: 1
	}
};

let columnsArray = [
	"url",
	"depth",
	"downSystemSiteId",
	"urlType",
	"referUrl",
	"crawlCount",
	"urlStatus",
	"lastCrawlTime",
	"queryString",
	"createTime"
];

function create() {
  return {};
}

url.columnsArray=columnsArray;
url.create=create;
module.exports.url=url;