let validator = {
	name: "validator",
	description: "",
	columns: {
		fieldId: {
			name: "fieldId",
			description: "",
			rawName: "field_id",
			nullable: false,
			type: {
				name: "int",
				length: 11
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
		msg: {
			name: "msg",
			description: "",
			rawName: "msg",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		},
		pattern: {
			name: "pattern",
			description: "",
			rawName: "pattern",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		}
	},
	rawName: "validator",
	primaryColumn: "id",
	nameColumn: {
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
	}
};

let columnsArray = [
	"fieldId",
	"id",
	"msg",
	"pattern"
];

function create() {
  return {};
}

validator.columnsArray=columnsArray;
validator.create=create;
module.exports.validator=validator;