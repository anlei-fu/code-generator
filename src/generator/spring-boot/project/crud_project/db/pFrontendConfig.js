let pFrontendConfig = {
	name: "pFrontendConfig",
	description: "",
	columns: {
		content: {
			name: "content",
			description: "",
			rawName: "content",
			nullable: false,
			type: {
				name: "longtext"
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
				name: "int"
			}
		},
		lastBackupTime: {
			name: "lastBackupTime",
			description: "",
			defaultValue: "",
			rawName: "last_backup_time",
			nullable: false,
			type: {
				name: "timestamp"
			}
		},
		projectId: {
			name: "projectId",
			description: "",
			defaultValue: "",
			rawName: "project_id",
			nullable: false,
			type: {
				name: "int"
			}
		},
		updateTime: {
			name: "updateTime",
			description: "",
			defaultValue: "",
			rawName: "update_time",
			nullable: false,
			type: {
				name: "timestamp"
			}
		}
	},
	rawName: "p_frontend_config",
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
	"content",
	"createTime",
	"id",
	"lastBackupTime",
	"projectId",
	"updateTime"
];

function create() {
  return {};
}

pFrontendConfig.columnsArray=columnsArray;
pFrontendConfig.create=create;
module.exports.pFrontendConfig=pFrontendConfig;