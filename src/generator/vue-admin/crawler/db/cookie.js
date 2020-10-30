let cookie = {
	name: "cookie",
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
		siteAccountId: {
			name: "siteAccountId",
			description: "",
			rawName: "site_account_id",
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
			nullable: false,
			type: {
				name: "text"
			}
		},
		loginIp: {
			name: "loginIp",
			description: "",
			rawName: "login_ip",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		},
		currentBlockCount: {
			name: "currentBlockCount",
			description: "",
			rawName: "current_block_count",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		currentUseCount: {
			name: "currentUseCount",
			description: "",
			defaultValue: "",
			rawName: "current_use_count",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		expireTime: {
			name: "expireTime",
			description: "",
			rawName: "expire_time",
			nullable: true,
			type: {
				name: "timestamp"
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
	rawName: "cookie",
	primaryColumn: "id",
	nameColumn: {
		name: "cookie",
		score: 3.4045831094242183,
		content: "cookie",
		weight: 1,
		totalTokenCount: 1
	}
};

let columnsArray = [
	"id",
	"siteId",
	"siteAccountId",
	"cookie",
	"loginIp",
	"currentBlockCount",
	"currentUseCount",
	"expireTime",
	"createTime"
];

function create() {
  return {};
}

cookie.columnsArray=columnsArray;
cookie.create=create;
module.exports.cookie=cookie;