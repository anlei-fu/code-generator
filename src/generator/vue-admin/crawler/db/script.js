let script = {
	name: "script",
	description: "script info",
	columns: {
		id: {
			name: "id",
			description: "i: identifier key",
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
			description: "script usage",
			rawName: "description",
			nullable: true,
			type: {
				name: "varchar",
				length: 200
			}
		},
		path: {
			name: "path",
			description: "script path",
			rawName: "path",
			nullable: false,
			type: {
				name: "varchar",
				length: 200
			}
		},
		scriptType: {
			name: "scriptType",
			description: "type of script",
			rawName: "script_type",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		downSiteId: {
			name: "downSiteId",
			description: "site the script belong to",
			rawName: "down_site_id",
			nullable: false,
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
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		createTime: {
			name: "createTime",
			description: "create time",
			defaultValue: "create time",
			rawName: "create_time",
			nullable: true,
			type: {
				name: "timestamp"
			}
		}
	},
	rawName: "script",
	primaryColumn: "id",
	nameColumn: {
		name: "scriptType",
		score: 2.013274702427971,
		content: "script_type",
		weight: 1,
		totalTokenCount: 2
	}
};

let columnsArray = [
	"id",
	"description",
	"path",
	"scriptType",
	"downSiteId",
	"enableStatus",
	"createTime"
];

function create() {
  return {};
}

script.columnsArray=columnsArray;
script.create=create;
module.exports.script=script;