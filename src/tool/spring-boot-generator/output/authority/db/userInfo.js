let userInfo = {
	name: "userInfo",
	description: "user info",
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
		createUser: {
			name: "createUser",
			description: "create user",
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
	"createUser"
];

function create() {
  return {};
}

userInfo.columnsArray=columnsArray;
userInfo.create=create;
module.exports=userInfo;