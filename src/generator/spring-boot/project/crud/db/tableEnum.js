let tableEnum = {
	name: "tableEnum",
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
			nullable: false,
			type: {
				name: "timestamp"
			}
		}
	},
	rawName: "table_enum",
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

tableEnum.columnsArray=columnsArray;
tableEnum.create=create;
module.exports.tableEnum=tableEnum;