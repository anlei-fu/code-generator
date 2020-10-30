let siteUrlBloom = {
	name: "siteUrlBloom",
	description: "site-url bloom  ",
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
		donwSystemSiteId: {
			name: "donwSystemSiteId",
			description: "",
			rawName: "donw_system_site_id",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		bloom: {
			name: "bloom",
			description: "",
			rawName: "bloom",
			nullable: true,
			type: {
				name: "mediumtext"
			}
		},
		bloomLoadingStatus: {
			name: "bloomLoadingStatus",
			description: "",
			rawName: "bloom_loading_status",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		totalCount: {
			name: "totalCount",
			description: "",
			rawName: "total_count",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		lastLoadingTime: {
			name: "lastLoadingTime",
			description: "",
			rawName: "last_loading_time",
			nullable: true,
			type: {
				name: "timestamp"
			}
		},
		lastDumpTime: {
			name: "lastDumpTime",
			description: "",
			rawName: "last_dump_time",
			nullable: true,
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
	rawName: "site_url_bloom",
	primaryColumn: "id",
	nameColumn: {
		name: "bloom",
		score: 1.2143740305520825,
		content: "bloom",
		weight: 1,
		totalTokenCount: 1
	}
};

let columnsArray = [
	"id",
	"donwSystemSiteId",
	"bloom",
	"bloomLoadingStatus",
	"totalCount",
	"lastLoadingTime",
	"lastDumpTime",
	"enableStatus",
	"createTime"
];

function create() {
  return {};
}

siteUrlBloom.columnsArray=columnsArray;
siteUrlBloom.create=create;
module.exports.siteUrlBloom=siteUrlBloom;