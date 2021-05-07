let aditionalOption = {
	name: "aditionalOption",
	description: "",
	columns: {
		check: {
			name: "check",
			description: "",
			rawName: "check",
			nullable: true,
			type: {
				name: "varchar",
				length: 100
			}
		},
		description: {
			name: "description",
			description: "",
			rawName: "description",
			nullable: true,
			type: {
				name: "varchar",
				length: 256
			}
		},
		enable: {
			name: "enable",
			description: "",
			defaultValue: "",
			rawName: "enable",
			nullable: true,
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
				name: "int",
				length: 11
			}
		},
		name: {
			name: "name",
			description: "",
			rawName: "name",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		},
		noticeText: {
			name: "noticeText",
			description: "",
			rawName: "notice_text",
			nullable: true,
			type: {
				name: "varchar",
				length: 256
			}
		},
		tableId: {
			name: "tableId",
			description: "",
			rawName: "table_id",
			nullable: false,
			type: {
				name: "varchar",
				length: 45
			}
		},
		title: {
			name: "title",
			description: "",
			rawName: "title",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		}
	},
	rawName: "aditional_option",
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
	"check",
	"description",
	"enable",
	"id",
	"name",
	"noticeText",
	"tableId",
	"title"
];

function create() {
  return {};
}

aditionalOption.columnsArray=columnsArray;
aditionalOption.create=create;
module.exports.aditionalOption=aditionalOption;