let siteAnalyze = {
	name: "siteAnalyze",
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
		successCount: {
			name: "successCount",
			description: "",
			rawName: "success_count",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		successAverageSpeed: {
			name: "successAverageSpeed",
			description: "",
			rawName: "success_average_speed",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		averageSpeed: {
			name: "averageSpeed",
			description: "",
			rawName: "average_speed",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		blockIpCount: {
			name: "blockIpCount",
			description: "",
			rawName: "block_ip_count",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		blockAccountCount: {
			name: "blockAccountCount",
			description: "",
			rawName: "block_account_count",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		successMean: {
			name: "successMean",
			description: "",
			rawName: "success_mean",
			nullable: true,
			type: {
				name: "int",
				length: 11
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
	rawName: "site_analyze",
	primaryColumn: "id",
	nameColumn: {
		name: "siteId",
		score: 1.7243181268396945,
		content: "site_id",
		weight: 1,
		totalTokenCount: 2
	}
};

let columnsArray = [
	"id",
	"siteId",
	"totalCount",
	"successCount",
	"successAverageSpeed",
	"averageSpeed",
	"blockIpCount",
	"blockAccountCount",
	"successMean",
	"createTime"
];

function create() {
  return {};
}

siteAnalyze.columnsArray=columnsArray;
siteAnalyze.create=create;
module.exports.siteAnalyze=siteAnalyze;