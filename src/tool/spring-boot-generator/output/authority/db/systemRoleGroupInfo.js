let systemRoleGroupInfo = {
	name: "systemRoleGroupInfo",
	description: "system group role info",
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
		description: {
			name: "description",
			description: "desccription",
			nullable: true,
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
			description: "role",
			nullable: false,
			type: {
				name: "varchar",
				length: null
			}
		},
		systemId: {
			name: "systemId",
			description: "related system",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		}
	}
};

let columnsArray = [
	"createTime",
	"createUser",
	"description",
	"id",
	"role",
	"systemId"
];

function create() {
  return {};
}

systemRoleGroupInfo.columnsArray=columnsArray;
systemRoleGroupInfo.create=create;
module.exports=systemRoleGroupInfo;