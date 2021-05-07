let dictionary = {
	name: "dictionary",
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
		type: {
			name: "type",
			description: "",
			rawName: "type",
			nullable: false,
			type: {
				name: "varchar",
				length: 45
			}
		},
		value: {
			name: "value",
			description: "",
			rawName: "value",
			nullable: false,
			type: {
				name: "varchar",
				length: 45
			}
		}
	},
	rawName: "dictionary",
	primaryColumn: "id",
	nameColumn: {
		name: "name",
		score: 1.8360850845333925,
		content: "name",
		weight: 1,
		totalTokenCount: 1
	}
};

let columnsArray = [
	"id",
	"name",
	"type",
	"value"
];

function create() {
  return {};
}

dictionary.columnsArray=columnsArray;
dictionary.create=create;
module.exports.dictionary=dictionary;