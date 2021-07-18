let pPage = {
	name: "pPage",
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
		menuId: {
			name: "menuId",
			description: "",
			defaultValue: "",
			rawName: "menu_id",
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
		pageType: {
			name: "pageType",
			description: "",
			defaultValue: "",
			rawName: "page_type",
			nullable: false,
			type: {
				name: "int"
			}
		}
	},
	rawName: "p_page",
	primaryColumn: "id",
	nameColumn: {
		name: "name",
		score: 1.8981335926375291,
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
	"menuId",
	"name",
	"pageType"
];

function create() {
  return {};
}

pPage.columnsArray=columnsArray;
pPage.create=create;
module.exports.pPage=pPage;