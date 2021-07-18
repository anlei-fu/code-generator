let enumInfo = {
	name: "enumInfo",
	description: "",
	columns: {
		id: {
			name: "id",
			description: "",
			isPk: true,
			rawName: "id",
			nullable: false,
			type: {
				name: "varchar",
				length: 45
			}
		},
		projectId: {
			name: "projectId",
			description: "",
			rawName: "project_id",
			nullable: true,
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
		}
	},
	rawName: "enum_info",
	primaryColumn: "id",
	nameColumn: {
		name: "id",
		description: "",
		isPk: true,
		rawName: "id",
		nullable: false,
		type: {
			name: "varchar",
			length: 45
		}
	}
};

let columnsArray = [
	"id",
	"projectId",
	"content"
];

function create() {
  return {};
}

enumInfo.columnsArray=columnsArray;
enumInfo.create=create;
module.exports.enumInfo=enumInfo;