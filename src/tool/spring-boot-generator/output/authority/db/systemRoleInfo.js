let systemRoleInfo = {
	name: "systemRoleInfo",
	description: "system role info",
	columns: {
		createTime: {
			name: "createTime",
			description: "",
			nullable: true,
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
		description: {
			name: "description",
			description: "description",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		id: {
			name: "id",
			description: "id",
			isPk: true,
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

systemRoleInfo.columnsArray=columnsArray;
systemRoleInfo.create=create;
module.exports=systemRoleInfo;