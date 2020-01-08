let loginUser = {
	name: "loginUser",
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
			description: "用户名",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		password: {
			name: "password",
			description: "密码",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		type: {
			name: "type",
			description: "",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		state: {
			name: "state",
			description: "",
			nullable: true,
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
				name: "datetime"
			}
		},
		updateTime: {
			name: "updateTime",
			description: "",
			nullable: true,
			type: {
				name: "datetime"
			}
		}
	}
};

let columnsArray = [
	"id",
	"name",
	"password",
	"type",
	"state",
	"createTime",
	"updateTime"
];

function create() {
  return {};
}

loginUser.columnsArray=columnsArray;
loginUser.create=create;
module.exports=loginUser;