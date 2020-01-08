let user = {
	name: "user",
	description: "",
	columns: {
		id: {
			name: "id",
			description: "",
			isPk: true,
			autoIncrement: true,
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		name: {
			name: "name",
			description: "",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		salary: {
			name: "salary",
			description: "",
			nullable: true,
			type: {
				name: "bigint",
				length: null
			}
		}
	}
};

let columnsArray = [
	"id",
	"name",
	"salary"
];

function create() {
  return {};
}

user.columnsArray=columnsArray;
user.create=create;
module.exports=user;