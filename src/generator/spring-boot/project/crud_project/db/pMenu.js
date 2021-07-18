let pMenu = {
	name: "pMenu",
	description: "",
	columns: {
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
		description: {
			name: "description",
			description: "",
			rawName: "description",
			nullable: false,
			type: {
				name: "varchar",
				length: 45
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
		menuLevel: {
			name: "menuLevel",
			description: "",
			defaultValue: "",
			rawName: "menu_level",
			nullable: false,
			type: {
				name: "int"
			}
		},
		name: {
			name: "name",
			description: "",
			rawName: "name",
			nullable: false,
			type: {
				name: "varchar",
				length: 45
			}
		},
		parentId: {
			name: "parentId",
			description: "",
			defaultValue: "",
			rawName: "parent_id",
			nullable: false,
			type: {
				name: "int"
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
		}
	},
	rawName: "p_menu",
	primaryColumn: "id",
	nameColumn: {
		name: "name",
		score: 2.090134536348614,
		content: "name",
		weight: 1,
		totalTokenCount: 1
	}
};

let columnsArray = [
	"createTime",
	"description",
	"id",
	"lastBackupTime",
	"menuLevel",
	"name",
	"parentId",
	"projectId"
];

function create() {
  return {};
}

pMenu.columnsArray=columnsArray;
pMenu.create=create;
module.exports.pMenu=pMenu;