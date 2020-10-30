let dictionary = {
	name: "dictionary",
	description: "enum value- name map",
	columns: {
		id: {
			name: "id",
			description: "identifier pk ",
			isPk: true,
			autoIncrement: true,
			rawName: "id",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		type: {
			name: "type",
			description: "type of enum,not null",
			rawName: "type",
			nullable: false,
			type: {
				name: "varchar",
				length: 45
			}
		},
		value: {
			name: "value",
			description: "value of enum ,not null",
			rawName: "value",
			nullable: false,
			type: {
				name: "smallint",
				length: 8
			}
		},
		label: {
			name: "label",
			description: "label of enum",
			rawName: "label",
			nullable: false,
			type: {
				name: "varchar",
				length: 45
			}
		},
		createTime: {
			name: "createTime",
			description: "",
			defaultValue: "",
			rawName: "create_time",
			nullable: true,
			type: {
				name: "timestamp"
			}
		},
	},
	rawName: "dictionary",
	primaryColumn: "id",
	nameColumn: {
		name: "id",
		description: "identifier pk ",
		isPk: true,
		autoIncrement: true,
		rawName: "id",
		nullable: false,
		type: {
			name: "int",
			length: 11
		}
	}
};

let columnsArray = [
	"id",
	"type",
	"value",
	"label",
	"createTime",
];

function create() {
  return {};
}

dictionary.columnsArray=columnsArray;
dictionary.create=create;
module.exports.dictionary=dictionary;