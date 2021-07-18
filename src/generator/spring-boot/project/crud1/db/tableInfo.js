let tableInfo = {
	name: "tableInfo",
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
	rawName: "table_info",
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

tableInfo.columnsArray=columnsArray;
tableInfo.create=create;
module.exports.tableInfo=tableInfo;