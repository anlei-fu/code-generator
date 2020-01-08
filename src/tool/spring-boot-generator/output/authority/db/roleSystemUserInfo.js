let roleSystemUserInfo = {
	name: "roleSystemUserInfo",
	description: "role system user",
	columns: {
		account: {
			name: "account",
			description: "account",
			isPk: true,
			nullable: false,
			type: {
				name: "varchar",
				length: null
			}
		},
		password: {
			name: "password",
			description: "password",
			nullable: false,
			type: {
				name: "varchar",
				length: null
			}
		},
		createTime: {
			name: "createTime",
			description: "create time",
			nullable: false,
			type: {
				name: "timestamp",
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
		}
	}
};

let columnsArray = [
	"account",
	"password",
	"createTime",
	"role"
];

function create() {
  return {};
}

roleSystemUserInfo.columnsArray=columnsArray;
roleSystemUserInfo.create=create;
module.exports=roleSystemUserInfo;