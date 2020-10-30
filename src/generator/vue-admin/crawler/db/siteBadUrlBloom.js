let siteBadUrlBloom = {
	name: "siteBadUrlBloom",
	description: "bad url bloom",
	columns: {
		bloom: {
			name: "bloom",
			description: "",
			rawName: "bloom",
			nullable: true,
			type: {
				name: "text"
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
			description: "site",
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
		}
	},
	rawName: "site_bad_url_bloom",
	primaryColumn: "id",
	nameColumn: {
		name: "bloom",
		score: 0.8808347076297602,
		content: "bloom",
		weight: 1,
		totalTokenCount: 1
	}
};

let columnsArray = [
	"bloom",
	"createTime",
	"id",
	"siteId",
	"totalCount"
];

function create() {
  return {};
}

siteBadUrlBloom.columnsArray=columnsArray;
siteBadUrlBloom.create=create;
module.exports.siteBadUrlBloom=siteBadUrlBloom;