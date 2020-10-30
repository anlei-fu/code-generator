let siteAccountBlockMap = {
	name: "siteAccountBlockMap",
	description: "site-ip block map",
	columns: {
		accountId: {
			name: "accountId",
			description: "",
			rawName: "account_id",
			nullable: false,
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
			description: "",
			rawName: "site_id",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		}
	},
	rawName: "site_account_block_map",
	primaryColumn: "id",
	nameColumn: {
		name: "siteId",
		score: 0.5193232856436149,
		content: "site_id",
		weight: 1,
		totalTokenCount: 2
	}
};

let columnsArray = [
	"accountId",
	"createTime",
	"id",
	"siteId"
];

function create() {
  return {};
}

siteAccountBlockMap.columnsArray=columnsArray;
siteAccountBlockMap.create=create;
module.exports.siteAccountBlockMap=siteAccountBlockMap;