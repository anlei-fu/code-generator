let systemRoleInfo = {
	name: "systemRoleInfo",
	description: "system role info",
	columns: {
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
		systemId: {
			name: "systemId",
			description: "related system",
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
		description: {
			name: "description",
			description: "description",
			nullable: true,
			type: {
				name: "varchar",
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
		createTime: {
			name: "createTime",
			description: "",
			nullable: true,
			type: {
				name: "timestamp",
				length: null
			}
		}
	}
};

let columnsArray = [
	"id",
	"systemId",
	"role",
	"description",
	"createUser",
	"createTime"
];

function create() {
  return {};
}

systemRoleInfo.columnsArray=columnsArray;
systemRoleInfo.create=create;
module.exports=systemRoleInfo;