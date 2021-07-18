let backendConfig = {
	name: "backendConfig",
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
				name: "int"
			}
		},
		projectId: {
			name: "projectId",
			description: "",
			rawName: "project_id",
			nullable: false,
			type: {
				name: "int"
			}
		},
		content: {
			name: "content",
			description: "",
			rawName: "content",
			nullable: true,
			type: {
				name: "longtext"
			}
		},
		updateTime: {
			name: "updateTime",
			description: "",
			defaultValue: "",
			rawName: "update_time",
			nullable: true,
			type: {
				name: "timestamp"
			}
		}
	},
	rawName: "backend_config",
	primaryColumn: "id",
	nameColumn: {
		name: "id",
		description: "",
		isPk: true,
		autoIncrement: true,
		rawName: "id",
		nullable: false,
		type: {
			name: "int"
		}
	}
};

let columnsArray = [
	"id",
	"projectId",
	"content",
	"updateTime"
];

function create() {
  return {};
}

backendConfig.columnsArray=columnsArray;
backendConfig.create=create;
module.exports.backendConfig=backendConfig;