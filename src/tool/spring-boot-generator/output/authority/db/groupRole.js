let groupRole = {
	name: "groupRole",
	description: "",
	columns: {
		createTime: {
			name: "createTime",
			description: "",
			nullable: false,
			type: {
				name: "timestamp",
				length: null
			}
		},
		createUser: {
			name: "createUser",
			description: "",
			nullable: false,
			type: {
				name: "varchar",
				length: null
			}
		},
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
		role: {
			name: "role",
			description: "",
			nullable: false,
			type: {
				name: "varchar",
				length: null
			}
		},
		systemId: {
			name: "systemId",
			description: "",
			nullable: false,
			type: {
				name: "varchar",
				length: null
			}
		},
		userAccount: {
			name: "userAccount",
			description: "",
			nullable: false,
			type: {
				name: "varchar",
				length: null
			}
		}
	}
};

let columnsArray = [
	"createTime",
	"createUser",
	"id",
	"role",
	"systemId",
	"userAccount"
];

function create() {
  return {};
}

groupRole.columnsArray=columnsArray;
groupRole.create=create;
module.exports=groupRole;