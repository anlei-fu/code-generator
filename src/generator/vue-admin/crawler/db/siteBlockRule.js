let siteBlockRule = {
	name: "siteBlockRule",
	description: "site-url-block-rule",
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
		description: {
			name: "description",
			description: "description of the rul",
			rawName: "description",
			nullable: true,
			type: {
				name: "varchar",
				length: 200
			}
		},
		siteId: {
			name: "siteId",
			description: "site the rule belong to",
			rawName: "site_id",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		httpStatus: {
			name: "httpStatus",
			description: "http status code",
			rawName: "http_status",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		checkType: {
			name: "checkType",
			description: "checkTyp: json array",
			rawName: "check_type",
			nullable: false,
			type: {
				name: "smallint",
				length: 6
			}
		},
		keywords: {
			name: "keywords",
			description: "json array of string to match",
			rawName: "keywords",
			nullable: false,
			type: {
				name: "varchar",
				length: 200
			}
		},
		pageResultType: {
			name: "pageResultType",
			description: "if match the page result returned",
			rawName: "page_result_type",
			nullable: false,
			type: {
				name: "smallint",
				length: 6
			}
		},
		enableStatus: {
			name: "enableStatus",
			description: "enable status",
			defaultValue: "enable status",
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
	rawName: "site_block_rule",
	primaryColumn: "id",
	nameColumn: {
		name: "siteId",
		score: 1.203701901893523,
		content: "site_id",
		weight: 1,
		totalTokenCount: 2
	}
};

let columnsArray = [
	"id",
	"description",
	"siteId",
	"httpStatus",
	"checkType",
	"keywords",
	"pageResultType",
	"enableStatus",
	"createTime"
];

function create() {
  return {};
}

siteBlockRule.columnsArray=columnsArray;
siteBlockRule.create=create;
module.exports.siteBlockRule=siteBlockRule;