let pProjectConfig = {
	name: "pProjectConfig",
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
	rawName: "p_project_config",
	primaryColumn: "id",
	nameColumn: {
		name: "projectId",
		score: 0.8971312974308051,
		content: "project_id",
		weight: 1,
		totalTokenCount: 2
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

pProjectConfig.columnsArray=columnsArray;
pProjectConfig.create=create;
module.exports.pProjectConfig=pProjectConfig;