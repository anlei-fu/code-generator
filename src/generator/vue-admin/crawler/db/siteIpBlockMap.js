let siteIpBlockMap = {
	name: "siteIpBlockMap",
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
		ip: {
			name: "ip",
			description: "",
			rawName: "ip",
			nullable: false,
			type: {
				name: "varchar",
				length: 45
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
		blockTimeout: {
			name: "blockTimeout",
			description: "",
			rawName: "block_timeout",
			nullable: false,
			type: {
				name: "timestamp"
			}
		}
	},
	rawName: "site_ip_block_map",
	primaryColumn: "id",
	nameColumn: {
		name: "ip",
		score: 0.8808347076297602,
		content: "ip",
		weight: 1,
		totalTokenCount: 1
	}
};

let columnsArray = [
	"id",
	"siteId",
	"ip",
	"createTime",
	"blockTimeout"
];

function create() {
  return {};
}

siteIpBlockMap.columnsArray=columnsArray;
siteIpBlockMap.create=create;
module.exports.siteIpBlockMap=siteIpBlockMap;