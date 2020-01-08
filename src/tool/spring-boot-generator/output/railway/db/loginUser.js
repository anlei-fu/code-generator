let loginUser = {
	name: "loginUser",
	description: "",
	columns: {
		createTime: {
			name: "createTime",
			description: "",
			nullable: true,
			type: {
				name: "datetime"
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
		name: {
			name: "name",
			description: "名字",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		password: {
			name: "password",
			description: "密码3",
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
		type: {
			name: "type",
			description: "",
			nullable: true,
			type: {
				name: "varchar",
				length: null
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
	"createTime",
	"id",
	"name",
	"password",
	"state",
	"type",
	"updateTime"
];

function create() {
  return {};
}

loginUser.columnsArray=columnsArray;
loginUser.create=create;
module.exports=loginUser;