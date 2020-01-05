let userRole = {
	name: "userRole",
	description: "role",
	columns: {
		createTime: {
			name: "createTime",
			description: "create time",
			nullable: false,
			type: {
				name: "timestamp",
				length: null
			}
		},
		createUser: {
			name: "createUser",
			description: "create user",
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
		systemId: {
			name: "systemId",
			description: "system id",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		userAccount: {
			name: "userAccount",
			description: "related user ",
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
	"systemId",
	"userAccount"
];

function create() {
  return {};
}

userRole.columnsArray=columnsArray;
userRole.create=create;
module.exports=userRole;